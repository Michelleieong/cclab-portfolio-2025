"use client";

import P5Canvas from "../P5Canvas";
import { createProject3Sketch } from "../../lib/p5-sketches";

export default function Project3Canvas() {
  return <P5Canvas sketch={createProject3Sketch()} width={600} height={600} />;
}
