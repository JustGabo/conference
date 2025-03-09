import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainPage from "./components/main";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <div>
      <MainPage />
    </div>
  );
}
