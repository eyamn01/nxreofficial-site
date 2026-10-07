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
