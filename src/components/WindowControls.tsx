import useWindowStore from "@store/window";

interface WindowControlsProps {
  target: string;
}

const WindowControls = ({ target }: WindowControlsProps) => {
  const { closeWindow, toggleMaximizeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" onClick={() => toggleMaximizeWindow(target)} />
    </div>
  );
};

export default WindowControls;
