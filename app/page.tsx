import Image from "next/image";
import Header from "./header";
import About from "./about";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Contact/>
    </div>
  );
}


