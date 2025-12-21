
import Slider from "@/components/Slider";
import BannerMobile from "@/components/BannerMobile";
import SectionQuienesSomos from "@/components/SectionQuienesSomos";
import SectionModelos3D from "@/components/Model3DViewer";

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

