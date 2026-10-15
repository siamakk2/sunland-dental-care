"use client";
import { useEffect, useRef } from "react";

/* ──────────────────────────────────────────────────────────────
   Sunland 3D Dental Element — a ray-marched molar + titanium
   implant, rendered live in WebGL with a sweeping CBCT-style
   scan plane. Ties the visual system to Dr. Emami's actual
   differentiator: every case planned in 3D before surgery.

   No Three.js. One fragment shader, ~4KB, 60fps, transparent
   background so it sits on the page. Degrades to the poster
   image when WebGL is unavailable or motion is reduced.
   ────────────────────────────────────────────────────────────── */

const FRAG = `
precision highp float;
uniform vec2  u_res;
uniform float u_time;
uniform float u_scan;      // 0 = scan plane off, 1 = on
uniform vec3  u_brand;     // brand red
uniform vec3  u_accent;    // scan cyan

float smin(float a, float b, float k){
  float h = clamp(0.5 + 0.5*(b-a)/k, 0.0, 1.0);
  return mix(b, a, h) - k*h*(1.0-h);
}
float sdSphere(vec3 p, float r){ return length(p) - r; }
float sdCapsule(vec3 p, vec3 a, vec3 b, float r){
  vec3 pa = p-a, ba = b-a;
  float h = clamp(dot(pa,ba)/dot(ba,ba), 0.0, 1.0);
  return length(pa - ba*h) - r;
}
float sdRoundBox(vec3 p, vec3 b, float r){
  vec3 q = abs(p) - b;
  return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)), 0.0) - r;
}
float sdCylinder(vec3 p, float h, float r){
  vec2 d = abs(vec2(length(p.xz), p.y)) - vec2(r, h);
  return min(max(d.x,d.y),0.0) + length(max(d,0.0));
}

// ── the molar ──
float tooth(vec3 p){
  vec3 cp = p - vec3(0.0, 0.34, 0.0);
  float crown = sdRoundBox(cp*vec3(1.0,1.18,1.06), vec3(0.40,0.27,0.36), 0.13);
  // four cusps, unrolled (GLSL ES loops want constant bounds)
  crown = smin(crown, sdSphere(cp - vec3( 0.22, 0.26,  0.20), 0.155), 0.13);
  crown = smin(crown, sdSphere(cp - vec3(-0.22, 0.26,  0.20), 0.155), 0.13);
  crown = smin(crown, sdSphere(cp - vec3( 0.22, 0.24, -0.20), 0.145), 0.13);
  crown = smin(crown, sdSphere(cp - vec3(-0.22, 0.24, -0.20), 0.145), 0.13);
  // two roots, splayed
  float r1 = sdCapsule(p, vec3(-0.15, 0.08, 0.0), vec3(-0.27,-0.74, 0.03), 0.125);
  float r2 = sdCapsule(p, vec3( 0.15, 0.08, 0.0), vec3( 0.27,-0.74,-0.03), 0.125);
  return smin(crown, smin(r1, r2, 0.17), 0.15);
}

// ── the implant: post + abutment + threads ──
float implant(vec3 p){
  float post = sdCylinder(p - vec3(0.0,-0.30,0.0), 0.42, 0.125);
  // thread ridges
  float th = sin(p.y*42.0)*0.5 + 0.5;
  post -= th*0.016;
  float abut = sdCylinder(p - vec3(0.0, 0.20, 0.0), 0.10, 0.085);
  float crown = sdRoundBox(p - vec3(0.0, 0.44, 0.0), vec3(0.26,0.16,0.24), 0.10);
  return smin(smin(post, abut, 0.05), crown, 0.07);
}

float map(vec3 p, out float id){
  vec3 a = p - vec3(-0.62, 0.0, 0.0);
  vec3 b = p - vec3( 0.68, 0.0, 0.0);
  float dt = tooth(a);
  float di = implant(b);
  id = dt < di ? 0.0 : 1.0;
  return min(dt, di);
}

vec3 calcNormal(vec3 p){
  float id;
  vec2 e = vec2(1.0, -1.0) * 0.0012;
  return normalize(
    e.xyy*map(p + e.xyy, id) + e.yyx*map(p + e.yyx, id) +
    e.yxy*map(p + e.yxy, id) + e.xxx*map(p + e.xxx, id));
}

void main(){
  vec2 uv = (gl_FragCoord.xy*2.0 - u_res) / min(u_res.x, u_res.y);

  // slow turntable
  float t = u_time*0.26;
  float ca = cos(t), sa = sin(t);

  vec3 ro = vec3(0.0, 0.12, 3.05);
  vec3 rd = normalize(vec3(uv, -2.1));

  // rotate the world instead of the camera
  mat3 rot = mat3(ca,0.0,-sa, 0.0,1.0,0.0, sa,0.0,ca);

  float d = 0.0, id = 0.0, hitId = 0.0;
  bool hit = false;
  vec3 p = ro;
  for(int i=0; i<86; i++){
    p = ro + rd*d;
    vec3 wp = rot * p;
    float ds = map(wp, id);
    if(ds < 0.0016){ hit = true; hitId = id; break; }
    d += ds*0.92;
    if(d > 7.0) break;
  }

  if(!hit){ gl_FragColor = vec4(0.0); return; }

  vec3 wp = rot * p;
  vec3 n  = calcNormal(wp);
  vec3 v  = normalize(rot * (ro - p));

  // ── materials ──
  vec3 enamel   = vec3(0.985, 0.975, 0.955);
  vec3 titanium = vec3(0.80, 0.815, 0.845);
  vec3 base = mix(enamel, titanium, hitId);

  // key light
  vec3 L1 = normalize(vec3(0.55, 0.85, 0.65));
  float diff = max(dot(n, L1), 0.0);
  // fill from below — cool, suggests the imaging light table
  vec3 L2 = normalize(vec3(-0.4, -0.7, 0.35));
  float fill = max(dot(n, L2), 0.0);
  // specular
  vec3 h = normalize(L1 + v);
  float spec = pow(max(dot(n, h), 0.0), hitId > 0.5 ? 88.0 : 46.0);
  // fresnel rim in brand red
  float fres = pow(1.0 - max(dot(n, v), 0.0), 2.6);

  vec3 col = base * (0.30 + 0.72*diff);
  col += u_accent * fill * 0.16;
  col += vec3(1.0) * spec * (hitId > 0.5 ? 0.85 : 0.55);
  col += u_brand * fres * 0.62;

  // subsurface warmth through thin enamel
  if(hitId < 0.5) col += vec3(0.16,0.055,0.03) * pow(max(dot(n,-L1),0.0), 1.6) * 0.5;

  // ── CBCT scan plane sweeping up the model ──
  float scanY = fract(u_time*0.14)*2.3 - 1.05;
  float band  = smoothstep(0.045, 0.0, abs(wp.y - scanY));
  col = mix(col, u_accent, band * 0.55 * u_scan);
  col += u_accent * band * 0.30 * u_scan;

  // gentle contact shadow toward the base
  col *= mix(0.62, 1.0, smoothstep(-0.85, -0.1, wp.y));

  col = pow(clamp(col, 0.0, 1.0), vec3(0.4545));
  gl_FragColor = vec4(col, 1.0);
}`;

const VERT = `attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }`;

export default function ToothCanvas({ className = "", poster = "/images/ph-consult.jpg" }) {
  const ref = useRef(null);
  const wrapRef = useRef(null);
  const posterRef = useRef(null);

  const fail = () => { if (posterRef.current) posterRef.current.style.opacity = "1"; };

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let gl;
    try {
      gl = canvas.getContext("webgl", { alpha: true, antialias: true, premultipliedAlpha: false });
    } catch { gl = null; }
    if (!gl) { fail(); return; }

    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.warn(gl.getShaderInfoLog(s)); return null; }
      return s;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) { fail(); return; }

    const prog = gl.createProgram();
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { fail(); return; }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uScan = gl.getUniformLocation(prog, "u_scan");
    gl.uniform3f(gl.getUniformLocation(prog, "u_brand"), 0.89, 0.09, 0.21);
    gl.uniform3f(gl.getUniformLocation(prog, "u_accent"), 0.05, 0.80, 0.90);
    gl.uniform1f(uScan, reduced ? 0.0 : 1.0);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.round(r.width * dpr));
      const h = Math.max(1, Math.round(r.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w; canvas.height = h;
        gl.viewport(0, 0, w, h);
        gl.uniform2f(uRes, w, h);
      }
    };

    let raf = 0, running = false, start = performance.now();
    const frame = (now) => {
      resize();
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (running) raf = requestAnimationFrame(frame);
    };

    // one static frame for reduced-motion; otherwise animate only while visible
    if (reduced) { resize(); gl.uniform1f(uTime, 2.4); gl.drawArrays(gl.TRIANGLES, 0, 3); return; }

    const io = new IntersectionObserver((es) => {
      const vis = es[0].isIntersecting;
      if (vis && !running) { running = true; raf = requestAnimationFrame(frame); }
      else if (!vis && running) { running = false; cancelAnimationFrame(raf); }
    }, { threshold: 0.01 });
    if (wrapRef.current) io.observe(wrapRef.current);

    const onVis = () => {
      if (document.hidden && running) { running = false; cancelAnimationFrame(raf); }
      else if (!document.hidden && !running) { running = true; raf = requestAnimationFrame(frame); }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false; cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, []);

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      {/* poster sits underneath; the canvas paints over it once WebGL is live */}
      <img ref={posterRef} src={poster} alt="" aria-hidden="true"
           className="absolute inset-0 h-full w-full rounded-[2rem] object-cover opacity-0 transition-opacity" />
      <canvas ref={ref} aria-hidden="true" className="relative h-full w-full" />
      <span className="sr-only">
        An animated three-dimensional model of a molar and a titanium dental implant, with a scanning
        plane passing through them — the same 3D planning used before implant surgery at this practice.
      </span>
    </div>
  );
}
