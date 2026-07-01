import dayjs from "dayjs";
import { navIcons, navLinks, locations } from "@constants/index";
import useWindowStore from "@store/window";
import useLocationStore from "@store/location";
import type { Location } from "@constants/types";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const handleNavClick = (type: string) => {
    if (type === "about") {
      setActiveLocation(locations.about as Location);
      openWindow("finder");
    } else {
      openWindow(type);
    }
  };

  return (
    <nav>
      <div>
        <img width="17" height="17" src="/images/logo.png" alt="logo" />
        <p className="font-bold">Keshav's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li key={id} onClick={() => handleNavClick(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img width="17" height="17" src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
