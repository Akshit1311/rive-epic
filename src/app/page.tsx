"use client";

import Image from "next/image";
import RiveComp from "./_components/RiveComp";
import Rive from "@rive-app/react-canvas";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <RiveComp />

      {/* <Rive src="/load.riv" /> */}
    </main>
  );
}
