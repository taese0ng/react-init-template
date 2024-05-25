interface Sizes {
  desktop: string;
}

interface Media {
  mobile: string;
  desktop: string;
}

const sizes: Sizes = {
  desktop: "1024px",
};

export const media: Media = {
  mobile: `@media (max-width: ${sizes.desktop})`,
  desktop: `@media (min-width: ${sizes.desktop})`,
} as const;
