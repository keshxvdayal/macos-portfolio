import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock, Home } from "@components/index";
import BootScreen from "@components/BootScreen";
import {
  Finder,
  Resume,
  Safari,
  Terminal,
  Text,
  Image,
  Contact,
  Photos,
  Calendar,
} from "@windows/index";
import useBootStore from "@store/boot";

gsap.registerPlugin(Draggable);

const App = () => {
  const { isBooting, completeBoot } = useBootStore();

  if (isBooting) {
    return <BootScreen onBootComplete={completeBoot} />;
  }

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      
      <Photos />
      <Calendar />

      <Home />

      
    </main>
  );
};

export default App;
