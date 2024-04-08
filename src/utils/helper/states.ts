// import { makeId, slugify } from "./helper";

export const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};
export const devices = {
    mobileS: `(min-width: ${sizes.mobileS}px)`,
    mobileM: `(min-width: ${sizes.mobileM}px)`,
    mobileL: `(min-width: ${sizes.mobileL}px)`,
    tablet: `(min-width: ${sizes.tablet}px)`,
    laptop: `(min-width: ${sizes.laptop}px)`,
    laptopL: `(min-width: ${sizes.laptopL}px)`,
    desktop: `(min-width: ${sizes.desktop}px)`,
  },
  siteInfo = {
    tel: "08165901502",
    email: "ewuchv@gmail.com",
  },
  socialInfo = [],
  THEME_KEY = "_spotta-theme";

export const REDIRECT_URI = "_spotta-redirect";
function generateImagePath(): string {
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  return `/images/as-${randomNumber}.jpg`;
}
export const locations = [
  {
    id: "1",
    name: "Bonny and Clyde Street, Ajao Estate, Lagos",
    tags: "schools, hospitals, bus station, shopping mall, airport, train station, public wifi",
    slug: "bonny-and-clyde-street-ajao-estate-lagos",
    image: generateImagePath(),
  },
  {
    id: "2",
    name: "Victoria Island, Lagos",
    tags: "schools, hospitals, bus station, shopping mall, airport, train station, public wifi",
    slug: "victoria-island-lagos",
    image: generateImagePath(),
  },
  {
    id: "3",
    name: "Wuse, Abuja",
    tags: "schools, hospitals, bus station, shopping mall, airport, train station, public wifi",
    slug: "wuse-abuja",
    image: generateImagePath(),
  },
  {
    id: "4",
    name: "G.R.A, Port Harcourt",
    tags: "schools, hospitals, bus station, shopping mall, airport, train station, public wifi",
    slug: "gra-port-harcourt",
    image: generateImagePath(),
  },
  {
    id: "5",
    name: "Ikeja, Lagos",
    tags: "schools, hospitals, bus station, shopping mall, airport, train station, public wifi",
    slug: "ikeja-lagos",
    image: generateImagePath(),
  },
  {
    id: "6",
    name: "Maitama, Abuja",
    tags: "schools, hospitals, bus station, shopping mall, airport, train station, public wifi",
    slug: "maitama-abuja",
    image: generateImagePath(),
  },
  {
    id: "7",
    name: "Lekki, Lagos",
    tags: "schools, hospitals, bus station, shopping mall, airport, train station, public wifi",
    slug: "lekki-lagos",
    image: generateImagePath(),
  },
  {
    id: "8",
    name: "Asokoro, Abuja",
    tags: "schools, hospitals, bus station, shopping mall, airport, train station, public wifi",
    slug: "asokoro-abuja",
    image: generateImagePath(),
  },
  {
    id: "9",
    name: "Ibadan, Oyo",
    tags: "schools, hospitals, bus station, shopping mall, airport, train station, public wifi",
    slug: "ibadan-oyo",
    image: generateImagePath(),
  },
  {
    id: "10",
    name: "Enugu, Enugu",
    tags: "schools, hospitals, bus station, shopping mall, airport, train station, public wifi",
    slug: "enugu-enugu",
    image: generateImagePath(),
  },
];
