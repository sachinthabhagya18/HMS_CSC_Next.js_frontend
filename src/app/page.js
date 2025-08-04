import Image from "next/image";
import styles from "./page.module.css";
import HomeBanners from "@/component/HomeBanners";
import HomeServices from "@/component/HomeServices";
import HomeGallery from "@/component/HomeGallery";
import HomeRewiew from "@/component/HomeRewiew";


export default function Home() {
  return (
    <main>
      <HomeBanners />
      <HomeServices />
      <HomeGallery />
      <HomeRewiew />
    </main>
  );
}
