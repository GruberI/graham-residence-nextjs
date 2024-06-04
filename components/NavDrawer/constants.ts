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
    title: "Gallery",
    path: "/gallery",
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
      {
        title: "Artists",
        path: "/art",
        children: [
          { title: "David Matthew King", path: "/art/david-matthew-king" },
          { title: "Marcel Rozek", path: "/art/marcel-rozek" },
          { title: "Kyle Steed", path: "/art/kyle-steed" },
          { title: "Thai Mainhard", path: "/art/thai-mainhard" },
          { title: "Nicole Taylor Dewitt", path: "/art/nicole-taylor-dewitt" },
          { title: "Yoni Goldberg", path: "/art/yoni-goldberg" },
          { title: "View All", path: "/gallery/artists" },
        ],
      },
      {
        title: "Contact",
        path: "/gallery#visit-us",
        children: [
          { title: "Visit Us", path: "/gallery#visit-us" },
          { title: "Artist Submission", path: "/gallery/#consulting-services" },
          { title: "Advisory Services", path: "/about#art-advisory" },
          { title: "Subscribe", path: "/gallery#subscribe" },
        ],
      },
      {
        title: "Shop",
        path: "/art",
      },
    ],
  },
  {
    title: "Shop",
    path: "/shop",
    children: [
      {
        title: "Categories",
        path: "/art/new-arrivals",
        children: [
          { title: "New Arrivals", path: "/art/new-arrivals" },
          { title: "Ethereal Prints", path: "/art/ethereal-prints" },
          { title: "Shop All", path: "/shop/all-product" },
        ],
      },
      {
        title: "Art",
        path: "/art",
        children: [
          { title: "Paintings", path: "/art/paintings" },
          { title: "Photography", path: "/art/photography" },
          { title: "Shop All", path: "/art" },
          { title: "By Artist", path: "/gallery/artists" },
        ],
      },
      {
        title: "Home",
        path: "/home",
        children: [
          { title: "Atelier Saucier", path: "/home/atelier-saucier" },
          { title: "Sophie Lou Jacobsen", path: "/home/sophie-lou-jacobsen" },
          { title: "Loll Designs", path: "/home/loll-designs" },
          { title: "West Bourne", path: "/home/west-bourne" },
          { title: "Shop All", path: "/home" },
        ],
      },
    ],
  },
];
