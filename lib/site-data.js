export const footerLinks = [
  {
    href: "https://www.instagram.com/woolyspace",
    label: "Instagram",
    external: true,
  },
  {
    href: "mailto:Michellesemail1025@gmail.com",
    label: "write me an angel letter",
    external: true,
  },
];

export const cclabCards = [
  {
    href: "/work/cclab-works/project1",
    tag: "01",
    title: "Lost and Found",
    description: "A serene scene captured in code",
  },
  {
    href: "/work/cclab-works/project2",
    tag: "02",
    title: "Face Generator",
    description: "Inspired by Comme des Garcons Play",
  },
  {
    href: "/work/cclab-works/project3",
    tag: "03",
    title: "Experimental Clock",
    description: "Time across three cities",
  },
  {
    href: "/work/cclab-works/project4",
    tag: "04",
    title: "Exquisite Corpse",
    description: "Collaborative character creation",
  },
  {
    href: "/work/cclab-works/project5",
    tag: "05",
    title: "Optical Illusion",
    description: "p5.js Visual Experiment",
  },
  {
    href: "/work/cclab-works/project6",
    tag: "06",
    title: "Data Portrait",
    description: "Interactive Data Visualization",
  },
  {
    href: "/work/cclab-works/project7",
    tag: "07",
    title: "Autobiographical Game",
    description: "Autobiographical Playable Game",
  },
];

export const extraItems = [
  // 1. Arduino
  {
    href: "/work/hs-arduino1",
    image: "/assets/work2.png",
    imageAlt: "High school Arduino project 1",
    title: "Arduino 1",
    description: "High school Arduino portfolio work",
  },
  {
    href: "/work/hs-arduino2",
    image: "/assets/work3.png",
    imageAlt: "High school Arduino project 2",
    title: "Arduino 2",
    description: "Another Arduino project from high school",
  },
  {
    href: "/work/arduino1",
    image: "/assets/work1.png",
    imageAlt: "Arduino project 1",
    title: "Arduino 3",
    description: "Interactive Arduino installation",
  },
  // 2. CC Lab
  {
    href: "/work/cclab-works",
    image: "/assets/cclab-cover.png",
    imageAlt: "Creative Computation Works",
    title: "Creative Computation Works",
    description: "From Creative Computation Lab",
  },
  // 3. Zine
  {
    href: "/work/zine1",
    image: "/zinecover.png",
    imageAlt: "EXBTONs",
    title: "EXBTONs",
    description: "A Visual Remix & Media Narrative",
  },
  {
    href: "/work/zine2",
    image: "/zine2Cover.png",
    imageAlt: "See Me",
    title: "See Me",
    description: "Visual Narrative Experiment & Independent Publication",
  },
  // 4. Short film
  {
    href: "/work/shortfilm",
    image: "/assets/shortfilm-cover.png",
    imageAlt: "Wildflower",
    title: "Wildflower",
    description: "A visual inquiry into belonging and radical softness",
  },
  // 5. Artworks (rest)
  {
    href: "/work/arduino2",
    image: "/assets/work2.png",
    imageAlt: "Artwork 1",
    title: "Artwork 1",
    description: "An experimental interactive piece",
  },
  {
    href: "/work/orange-peel",
    image: "/assets/work3.png",
    imageAlt: "Artwork 2",
    title: "Artwork 2",
    description: "An experimental work with orange peels",
  },
  {
    href: "/work/drawings",
    image: "/assets/work1.png",
    imageAlt: "Artwork 3",
    title: "Artwork 3",
    description: "A collection of three drawing pages",
  },
];

export const simplePages = {
  shortfilm: { title: "5分钟短片", subtitle: "Coming soon" },
  "hs-arduino1": { title: "高中Arduino作品1", subtitle: "Coming soon" },
  "hs-arduino2": { title: "高中Arduino作品2", subtitle: "Coming soon" },
  arduino1: { title: "Arduino作品1", subtitle: "Coming soon" },
  arduino2: { title: "Arduino作品2", subtitle: "Coming soon" },
  "orange-peel": { title: "橘子皮作品", subtitle: "Coming soon" },
  drawings: { title: "绘画作品", subtitle: "3页作品" },
};

export const zineOneImages = [
  { src: "/zinecover.png", alt: "Zine cover" },
  { src: "/zine1.png", alt: "Zine page 1" },
  { src: "/zine2.png", alt: "Zine page 2" },
  { src: "/zine3.png", alt: "Zine page 3" },
  { src: "/zine4.png", alt: "Zine page 4" },
];

export const zinePages = [
  { src: "/zine1.png", alt: "Zine page 1" },
  { src: "/zine2.png", alt: "Zine page 2" },
  { src: "/zine3.png", alt: "Zine page 3" },
  { src: "/zine4.png", alt: "Zine page 4" },
];

export const zineBookPages = [
  { left: "/zine2-1.png", right: "/zine2-2.png" },
  { left: "/zine2-3.png", right: "/zine2-4.png" },
  { left: "/zine2-5.png", right: "/zine2-6.png" },
];

export const projectPages = {
  project1: {
    title: "Lost and Found",
    subtitle: "p5js/2025",
    description:
      "This is a serene scene that my friend Helen described for me and I drew it in p5js.",
    prevHref: null,
    nextHref: "/work/cclab-works/project2",
  },
  project2: {
    title: "Face Generator",
    subtitle: "p5js/2025",
    description:
      "Face Generator, this is a face inspired by Comme des Garcon Play Collection typical sign.",
    prevHref: "/work/cclab-works/project1",
    nextHref: "/work/cclab-works/project3",
    embed: {
      src: "https://editor.p5js.org/yangm122/full/sss6gjOd1",
      width: 600,
      height: 600,
    },
  },
  project3: {
    title: "Experimental Clock",
    subtitle: "p5js/2025",
    description:
      "This project shows time in three cities using overlapping colored arcs instead of clock hands. I explored how time can feel shared and layered when different places exist in the same visual space.",
    prevHref: null,
    nextHref: "/work/cclab-works/project4",
  },
  project4: {
    title: "Exquisite Corpse",
    subtitle: "p5js/2025",
    description:
      "This project is a collaborative drawing where each group member designed one body part, and I used code to combine selected parts into a single character.",
    prevHref: "/work/cclab-works/project3",
    nextHref: "/work/cclab-works/project5",
  },
  project5: {
    title: "Optical Illusion",
    subtitle: "p5js/2025",
    description:
      "This project uses a raster-like optical illusion where vertical stripes and mouse movement create the feeling that a hidden image is moving. As the mouse moves, colors shift and randomly generated dots change size and color, exploring how motion, layering, and interaction can create the illusion of animation.",
    prevHref: "/work/cclab-works/project4",
    nextHref: "/work/cclab-works/project6",
  },
  project6: {
    title: "Snack Tree",
    subtitle: "p5js/2025",
    description:
      "This project turns my daily snack data into a tree, where each day becomes a leaf if I ate no snacks, or a flower whose color and size show how many snacks I ate.",
    prevHref: "/work/cclab-works/project5",
    nextHref: "/work/cclab-works/project7",
  },
  project7: {
    title: "The Light Within",
    subtitle: "p5js/2025",
    description:
      "This is an autobiographical game where players guide a glowing cat-like creature with the mouse to light up all dark clouds, use sound and visual cues to track progress, and experience two different endings (sun or moon) that reflect personal growth and patience.",
    prevHref: "/work/cclab-works/project6",
    nextHref: null,
    homeHref: "/work/cclab-works",
  },
};
