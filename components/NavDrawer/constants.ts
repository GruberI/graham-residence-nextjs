export type NavItem = {
  title: string;
  path: string;
  children?: NavItem[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Residence",
    path: "/residence",
    children: [],
  },
  {
    title: "Collection",
    path: "/exhibitions",
    children: [
      {
        title: "Exhibitions",
        path: "/exhibitions",
        children: [
          { title: "On View", path: "/exhibitions" },
          { title: "Upcoming", path: "/exhibitions#upcoming-exhibitions" },
          { title: "Past", path: "/exhibitions#past-exhibitions" },
          { title: "View All", path: "/exhibitions" },
        ],
      },
    ],
  },
  {
    title: "Art",
    path: "/art",
    children: [
      { title: "Paintings", path: "/art/paintings" },
      { title: "Photography", path: "/art/photography" },
      { title: "Sculpture", path: "/art/sculpture" },
      { title: "Shop All", path: "/art" },
     // { title: "By Artist", path: "/gallery/artists" },
    ],
  },
  {
    title: "Home",
    path: "/home",
    children: [],
  //    { title: "Atelier Saucier", path: "/home/atelier-saucier" },
  //    { title: "Sophie Lou Jacobsen", path: "/home/sophie-lou-jacobsen" },
  //    { title: "Loll Designs", path: "/home/loll-designs" },
  //    { title: "West Bourne", path: "/home/west-bourne" },
  //    { title: "Shop All", path: "/home" },
     
  },
  { title: "About", path: "/about" }, // Moved this inside the array and removed the trailing semicolon
];
