"use client";

import P5Canvas from "../P5Canvas";
import { createProject6Sketch } from "../../lib/p5-sketches";

export default function Project6Canvas() {
  return <P5Canvas sketch={createProject6Sketch()} width={400} height={550} />;
}
