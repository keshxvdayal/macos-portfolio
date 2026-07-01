import { locations } from "@constants/index";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import useWindowStore from "@store/window";
import useLocationStore from "@store/location";
import type { FileItem, Location } from "@constants/types";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handleOpenProjectFinder = (project: FileItem) => {
    setActiveLocation(project as Location);
    openWindow("finder");
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section id="home" className="h-full relative p-8 w-[400px]">
  <ul
    className="grid grid-flow-col justify-start content-start gap-x-10 gap-y-8"
    style={{
      gridTemplateRows: "repeat(6, 80px)",
      gridAutoColumns: "100px",
    }}
  >
    {projects.map((project) => (
      <li
        key={project.id}
        className="group folder flex flex-col items-center justify-start gap-2 w-[150px] h-[90px]"
        onClick={() => handleOpenProjectFinder(project)}
      >
        <img
          src="/images/folder.png"
          alt={project.name}
          className="w-16 h-16 pointer-events-none"
        />
        <p className="text-base text-white text-center leading-tight line-clamp-2">
          {project.name}
        </p>
      </li>
    ))}
  </ul>
</section>
  );
};

export default Home;
