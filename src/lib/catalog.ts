// Only supplied names are published. Add verified commerce data here when available.
export type Product = {
  slug: string;
  name: string;
  mark: string;
  artwork?: string;
  image?: string;
  alt?: string;
  description?: string;
  category?: string;
};
export const starDesigns: Product[] = [
  {
    slug: "heaven-exe",
    name: "Heaven.exe",
    mark: "05",
    image: "/designs/heaven-exe.png",
    category: "shirts",
    alt: "Heaven.exe design board: grey shirt front and back with blue stars, clouds, a stairway and a paradise connection error window.",
    description:
      "Some connections still matter. Celestial blue graphics, orbital stars and a digital window into the clouds.",
  },
  {
    slug: "human-jpg",
    name: "Human.jpg",
    mark: "06",
    image: "/designs/human-jpg.png",
    category: "shirts",
    alt: "Human.jpg design board: grey shirt front and back with a file icon, fragmented portrait and Lossy Compression artwork.",
    description:
      "Same people. Different formats. A fragmented portrait and file-window graphics explore what remains through the distortion.",
  },
  {
    slug: "after-image",
    name: "After Image",
    mark: "07",
    image: "/designs/after-image.png",
    category: "shirts",
    alt: "After Image design board: grey shirt front and back with distorted human silhouettes, blue orbits and the words You left. The image stayed.",
    description:
      "You left. The image stayed. Glitched silhouettes and residual signals trace the people and memories that remain.",
  },
  {
    slug: "soft-error",
    name: "Soft Error",
    mark: "08",
    image: "/designs/soft-error.png",
    category: "shirts",
    alt: "Soft Error design board: pink shirt front and back with a chrome heart breaking into pixels and the words Feeling too much is not a system failure.",
    description:
      "Feel deeply. Still here. A chrome heart dissolves into pink pixels, with a reminder that feeling too much is not a system failure.",
  },
  {
    slug: "good-girl-club",
    name: "Good Girl Club",
    mark: "09",
    image: "/designs/good-girl-club.png",
    category: "shirts",
    alt: "Good Girl Club design board: pink sleeveless top with chrome lettering on the front and a star, chain, hearts and bunny graphic on the back.",
    description:
      "For the soft rebels. Pink chrome lettering, hearts and stars meet a rebellious bunny graphic in a design about kindness and duality.",
  },
  {
    slug: "locate",
    name: "Locate",
    mark: "10",
    image: "/designs/locate.png",
    category: "shirts",
    alt: "Locate design board: washed black shirt front and back with blue chrome lettering, map coordinates, orbital stars and a globe detail at the hem.",
    description:
      "Find what still exists. Blue map graphics, coordinates and orbital stars trace a search for places, people and memories.",
  },
  {
    slug: "believe-in-the-stars",
    name: "Believe in the Stars",
    mark: "11",
    image: "/designs/believe-in-the-stars.png",
    category: "shirts",
    alt: "Believe in the Stars design board: navy and lavender sports jersey with 00 on the front, an outlined star on the back, and a light alternate colorway.",
    description:
      "Same sky. Different dreams. A celestial jersey design with bold 00 lettering, orbital stars and a layered star graphic on the back.",
  },
  {
    slug: "magazine",
    name: "mAGAZINE",
    mark: "12",
    image: "/designs/magazine.png",
    category: "shirts",
    alt: "mAGAZINE design board: light grey shirt front and back with editorial lettering and a blue collage of portraits, clouds, city windows and butterflies.",
    description:
      "Archive the feeling. An editorial collage of portraits, digital windows and butterflies reflects on memory, media and the spaces that connect us.",
  },
];
export const products: Product[] = [
  ...starDesigns,
  {
    slug: "fallen-seraph",
    name: "Fallen Seraph",
    mark: "01",
    artwork: "seraph",
  },
  { slug: "control", name: "Control", mark: "02", artwork: "control" },
  { slug: "slash", name: "Slash", mark: "03", artwork: "slash" },
  { slug: "feng-shui", name: "Feng Shui", mark: "04", artwork: "feng" },
] as const;
export const collections = [
  "Shirts",
  "Hoodies",
  "Sweaters",
  "Pants",
  "Accessories",
  "Badges",
  "Stickers",
] as const;
export const siteUrl = "https://nxreofficial.com";
