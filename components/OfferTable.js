import { OFFER } from "../lib/practice";

const LABEL = {
  in:  { en: "Included",            es: "Incluido",              cls: "bg-brand text-white" },
  sep: { en: "Quoted separately",   es: "Se cotiza por separado", cls: "bg-ink text-cream" },
  ask: { en: "Confirmed per case",  es: "Se confirma según el caso", cls: "border-2 border-ink text-ink" },
};

export default function OfferTable({ es = false }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <span className="accent-bar" aria-hidden="true"></span>
      <h2 className="text-2xl font-bold md:text-3xl">
        {es ? `Qué incluye el precio de $${OFFER.price.toLocaleString()}` : `What the $${OFFER.price.toLocaleString()} covers`}
      </h2>
      <p className="mt-2 text-ink-soft">
        {es
          ? "Precio del tratamiento estándar de un implante único. Todo lo que aparece abajo se confirma por escrito antes de comenzar."
          : "This is the standard single-implant treatment. Everything below is confirmed in writing before treatment starts."}
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-line">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">
            {es ? "Qué está incluido en el precio del implante" : "What is and is not included in the implant price"}
          </caption>
          <thead>
            <tr className="bg-parchment">
              <th scope="col" className="px-4 py-3 font-bold text-ink">{es ? "Concepto" : "Item"}</th>
              <th scope="col" className="px-4 py-3 font-bold text-ink">{es ? "Estado" : "Status"}</th>
            </tr>
          </thead>
          <tbody>
            {OFFER.breakdown.map((r) => {
              const l = LABEL[r.status];
              return (
                <tr key={r.item} className="border-t border-line bg-white align-top">
                  <th scope="row" className="px-4 py-3 font-medium text-ink">
                    {es ? r.itemEs : r.item}
                    {(es ? r.noteEs : r.note) && (
                      <span className="mt-1 block text-xs font-normal text-ink-soft">{es ? r.noteEs : r.note}</span>
                    )}
                  </th>
                  <td className="px-4 py-3">
                    <span className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold ${l.cls}`}>
                      {es ? l.es : l.en}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-ink-soft">
        {es
          ? "Esta oferta es para un implante único. El tratamiento de arcada completa (All-on-4) se cotiza aparte después de las imágenes 3D. Si su caso requiere pasos adicionales, usted recibe el número completo por escrito — y decide — antes de que comience cualquier tratamiento."
          : "This offer is for a single implant. Full-arch (All-on-4) treatment is quoted separately after 3D imaging. If your case needs additional steps, you receive the complete written number — and decide — before any treatment begins."}
      </p>
    </section>
  );
}
