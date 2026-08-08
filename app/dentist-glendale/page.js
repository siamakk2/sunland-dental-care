import CityPage from "../../components/CityPage";
import { CITIES } from "../../lib/cities";
const data = CITIES[3];
export const metadata = {
  title: data.title,
  description: `${data.lead} Dr. Mahvash Emami, DDS — 7902 Foothill Blvd, Sunland, CA. Call (818) 353-5520.`,
  alternates: { canonical: `/${data.slug}` },
};
export default function Page() { return <CityPage data={data} image="/images/ph-op-1.jpg" pos="center 30%" />; }
