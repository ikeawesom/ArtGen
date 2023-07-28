export const APP_NAME = "ArtGen";
export const DEFAULT_URL = "http://localhost:3000";

export const FOOTER_HEADERS = ["Overview", "Company", "Resources"];
export const APP_LINKS = [
  // Overview Links
  {
    title: "Features",
    link: "/features",
    type: "Overview",
    showNav: true,
  },

  {
    title: "Releases",
    link: "https://github.com/ikeawesom/ArtGen/releases",
    type: "Overview",
    showNav: false,
  },

  // Company Links
  {
    title: "About",
    link: "/about",
    type: "Company",
    showNav: false,
  },
  {
    title: "Blog",
    link: "https://github.com/ikeawesom/ArtGen/discussions/categories/blog",
    type: "Company",
    showNav: false,
  },
  {
    title: "Contact",
    link: "/contact",
    type: "Company",
    showNav: false,
  },

  // Resources Links
  // {
  //   title: "Community",
  //   link: "/community",
  //   type: "Resources",
  //   showNav: true,
  // },
  {
    title: "Docs",
    link: "/docs",
    type: "Resources",
    showNav: true,
  },
  {
    title: "Tutorials",
    link: "/docs/tutorials",
    type: "Resources",
    showNav: false,
  },
  {
    title: "Help Centre",
    link: "/help",
    type: "Resources",
    showNav: false,
  },
  {
    title: "Pricing",
    link: "/pricing",
    type: "Overview",
    showNav: true,
  },
];

export const FRAMEWORK_LIST = ["React", "Svelte", "Angular", "Vue", "Vanilla"];

// ------------------- CONTACTS LINKS -------------------------- //
export const CONTACT_LINKS = [
  {
    name: "Community",
    link: "https://github.com/ikeawesom/ArtGen/discussions/categories/general",
    image: "community.svg",
    image_bright: "community_bright.svg",
    display: ["banner"],
  },
  {
    name: "Email",
    link: "/contact",
    image: "email.svg",
    display: ["banner"],
  },
  {
    name: "Discord",
    link: "/",
    image: "discord.svg",
    image_bright: "discord_bright.svg",
    display: ["banner", "footer"],
  },
  // {
  //   name: "Instagram",
  //   link: "/",
  //   image: "instagram.svg",
  //   image_bright: "instagram_bright.svg",
  //   display: ["banner", "footer"],
  // },
  {
    name: "Github",
    link: "https://github.com/ikeawesom/ArtGen",
    image: "github.svg",
    image_bright: "github_bright.svg",
    display: ["banner", "footer"],
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/ln/ike-lim",
    image: "linkedin.svg",
    image_bright: "linkedin_bright.svg",
    display: ["footer"],
  },
];

export const SIDEBAR_LINKS = [
  { a: "dashboard", img: "icon_dashboard.svg", display: "Dashboard" },
  { a: "features", img: "icon_suitcase.svg", display: "Features" },
  { a: "posts", img: "icon_camera.svg", display: "Posts" },
  {
    a: "https://github.com/ikeawesom/ArtGen/discussions",
    img: "icon_social.svg",
    display: "Community",
  },
  { a: "settings", img: "icon_settings.svg", display: "Settings" },
];
