
import Slider from "@/components/Slider";
import BannerMobile from "@/components/BannerMobile";
import SectionQuienesSomos from "@/components/SectionQuienesSomos";
import SectionModelos3D from "@/components/Model3DViewer";

export async function generateMetadata() {
  const seo = await getPageSEO("/");

  if (!seo) {
    return {
      title: "Embragues La 34",
      description: "Especialistas en venta y reparación de clutch",
    };
  }

  return {
    title: seo.title ?? "Embragues La 34",
    description: seo.metaDesc ?? "",
  };
}



export default function Page() {
  return (
    <>
      <div className="solo-desktop">
        <Slider />
      </div>

      <div className="solo-mobile">
        <BannerMobile />
      </div>
      <div>
        <SectionQuienesSomos />
      </div>
      <div>
        <SectionModelos3D />
      </div>
    </>
  );
}

