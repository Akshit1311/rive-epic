import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

const RiveComp = () => {
  const { rive, RiveComponent } = useRive({
    src: "http://localhost:3000/onboard.riv",
    // src: "http://localhost:3000/onboarding_test.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    // shouldDisableRiveListeners: true,
    artboard: "image",
  });

  return (
    <div className="h-screen w-[696px]">
      <RiveComponent />
    </div>
  );
};

export default RiveComp;
