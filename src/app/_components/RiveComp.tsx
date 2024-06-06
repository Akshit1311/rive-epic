import { useRive } from "@rive-app/react-canvas";

const RiveComp = () => {
  const { rive, RiveComponent } = useRive({
    src: "/glow.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    animations: "Timeline 1",
    // src: "http://localhost:3000/onboarding_test.riv",
    // shouldDisableRiveListeners: true,
    // artboard: "image",
  });

  return (
    <div className="h-screen w-[696px] bg-red-500">
      <RiveComponent />
    </div>
  );
};

export default RiveComp;
