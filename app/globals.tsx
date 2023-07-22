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
    link: "/company",
    type: "Company",
    showNav: false,
  },
  {
    title: "Careers",
    link: "/company/careers",
    type: "Company",
    showNav: false,
  },
  {
    title: "Contact",
    link: "/company/contact",
    type: "Company",
    showNav: false,
  },

  // Resources Links
  {
    title: "Community",
    link: "/community",
    type: "Resources",
    showNav: true,
  },
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
    link: "/community",
    image: "community.svg",
    image_bright: "community_bright.svg",
    display: ["banner"],
  },
  {
    name: "Discord",
    link: "/",
    image: "discord.svg",
    image_bright: "discord_bright.svg",
    display: ["banner", "footer"],
  },
  {
    name: "Instagram",
    link: "/",
    image: "instagram.svg",
    image_bright: "instagram_bright.svg",
    display: ["banner", "footer"],
  },
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
