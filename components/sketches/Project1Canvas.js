"use client";

import P5Canvas from "../P5Canvas";
import { createProject1Sketch } from "../../lib/p5-sketches";

export default function Project1Canvas() {
  return <P5Canvas sketch={createProject1Sketch()} width={400} height={400} />;
}
