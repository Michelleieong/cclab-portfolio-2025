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

export const homeNavItems = [
  { href: "/", label: "Home" },
  { href: "/main", label: "Main" },
  { href: "/extra", label: "Extra" },
];

export const aboutNavItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/extra", label: "Extra" },
];

export const worksNavItems = [
  { href: "/", label: "Home" },
  { href: "/cclab-works", label: "CC Lab" },
  { href: "/advanced-cclab", label: "Advanced CC Lab" },
  { href: "/about", label: "About" },
  { href: "/extra", label: "Extra" },
];

export const mainCards = [
  {
    href: "/cclab-works",
    tag: "CC Lab",
    title: "Fall Semester Works",
    description: "Projects from Creative Coding Lab",
  },
  {
    href: "/advanced-cclab",
    tag: "Advanced CC Lab",
    title: "Spring Semester Works",
    description: "New projects from Advanced Creative Coding Lab",
  },
];

export const cclabCards = [
  {
    href: "/project1",
    tag: "01",
    title: "Lost and Found",
    description: "A serene scene captured in code",
  },
  {
    href: "/project2",
    tag: "02",
    title: "Face Generator",
    description: "Inspired by Comme des Garcons Play",
  },
  {
    href: "/project3",
    tag: "03",
    title: "Experimental Clock",
    description: "Time across three cities",
  },
  {
    href: "/project4",
    tag: "04",
    title: "Exquisite Corpse",
    description: "Collaborative character creation",
  },
  {
    href: "/project5",
    tag: "05",
    title: "Optical Illusion",
    description: "p5.js Visual Experiment",
  },
  {
    href: "/project6",
    tag: "06",
    title: "Data Portrait",
    description: "Interactive Data Visualization",
  },
  {
    href: "/project7",
    tag: "07",
    title: "Autobiographical Game",
    description: "Autobiographical Playable Game",
  },
];

export const advancedCards = [
  {
    href: "#",
    tag: "Coming Soon",
    title: "Project 1",
    description: "New work in progress",
  },
  {
    href: "#",
    tag: "Coming Soon",
    title: "Project 2",
    description: "New work in progress",
  },
  {
    href: "#",
    tag: "Coming Soon",
    title: "Project 3",
    description: "New work in progress",
  },
];

export const extraItems = [
  {
    href: "/zine1",
    image: "/zinecover.png",
    imageAlt: "Zine 1",
    title: "Zine 1",
    description: "A personal zine exploring visual narratives",
  },
  {
    href: "/zine2",
    image: "/zinecover.png",
    imageAlt: "Zine 2",
    title: "Zine 2",
    description: "Another visual storytelling project",
  },
  {
    href: "/shortfilm",
    image: "/assets/work1.png",
    imageAlt: "Short Film",
    title: "Short Film",
    description: "A short film exploring personal narratives",
  },
  {
    href: "/hs-arduino1",
    image: "/assets/work2.png",
    imageAlt: "High school Arduino project 1",
    title: "Arduino 1",
    description: "High school Arduino portfolio work",
  },
  {
    href: "/hs-arduino2",
    image: "/assets/work3.png",
    imageAlt: "High school Arduino project 2",
    title: "Arduino 2",
    description: "Another Arduino project from high school",
  },
  {
    href: "/arduino1",
    image: "/assets/work1.png",
    imageAlt: "Arduino project 1",
    title: "Arduino 3",
    description: "Interactive Arduino installation",
  },
  {
    href: "/arduino2",
    image: "/assets/work2.png",
    imageAlt: "Artwork 1",
    title: "Artwork 1",
    description: "An experimental interactive piece",
  },
  {
    href: "/orange-peel",
    image: "/assets/work3.png",
    imageAlt: "Artwork 2",
    title: "Artwork 2",
    description: "An experimental work with orange peels",
  },
  {
    href: "/drawings",
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
    subtitle: "A serene scene",
    description:
      "This is a serene scene that my friend Helen described for me and I drew it in p5js.",
    prevHref: null,
    nextHref: "/project2",
  },
  project2: {
    title: "Face Generator",
    subtitle: "Inspired by Comme des Garcons Play",
    description:
      "Face Generator, this is a face inspired by Comme des Garcon Play Collection typical sign.",
    prevHref: "/project1",
    nextHref: "/project3",
    embed: {
      src: "https://editor.p5js.org/yangm122/full/sss6gjOd1",
      width: 600,
      height: 600,
    },
  },
  project3: {
    title: "Experimental Clock",
    subtitle: "Time across three cities",
    description:
      "This project shows time in three cities using overlapping colored arcs instead of clock hands. I explored how time can feel shared and layered when different places exist in the same visual space.",
    prevHref: null,
    nextHref: "/project4",
  },
  project4: {
    title: "Exquisite Corpse",
    subtitle: "Collaborative character creation",
    description:
      "This project is a collaborative drawing where each group member designed one body part, and I used code to combine selected parts into a single character.",
    prevHref: "/project3",
    nextHref: "/project5",
  },
  project5: {
    title: "Optical Illusion",
    subtitle: "Moire patterns and motion",
    description:
      "This project uses a raster-like optical illusion where vertical stripes and mouse movement create the feeling that a hidden image is moving. As the mouse moves, colors shift and randomly generated dots change size and color, exploring how motion, layering, and interaction can create the illusion of animation.",
    prevHref: "/project4",
    nextHref: "/project6",
  },
  project6: {
    title: "Snack Tree",
    subtitle: "Data visualization as nature",
    description:
      "This project turns my daily snack data into a tree, where each day becomes a leaf if I ate no snacks, or a flower whose color and size show how many snacks I ate.",
    prevHref: "/project5",
    nextHref: "/project7",
  },
  project7: {
    title: "The Light Within",
    subtitle: "An autobiographical journey",
    description:
      "This is an autobiographical game where players guide a glowing cat-like creature with the mouse to light up all dark clouds, use sound and visual cues to track progress, and experience two different endings (sun or moon) that reflect personal growth and patience.",
    prevHref: "/project6",
    nextHref: null,
    homeHref: "/",
  },
};
