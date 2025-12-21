
import Slider from "@/components/Slider";
import BannerMobile from "@/components/BannerMobile";
import SectionQuienesSomos from "@/components/SectionQuienesSomos";
import SectionModelos3D from "@/components/Model3DViewer";

export async function generateMetadata() {
  const seo = await getPageSEO("/");

  return {
    title: seo?.title,
    description: seo?.metaDesc,
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

