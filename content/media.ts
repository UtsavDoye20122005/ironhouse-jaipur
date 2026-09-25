import type { SiteImage } from "./types";

function u(id: string, w = 1600) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
}

export const media = {
  floor: {
    src: u("photo-1681474188070-09dae89b0b0a", 1800),
    alt: "A loaded barbell resting on dark rubber flooring",
    width: 1800,
    height: 1200,
  } satisfies SiteImage,
  conditioning: {
    src: u("photo-1603665409265-bdc00027c217", 1400),
    alt: "A slam ball on the gym floor between a lifter's feet",
    width: 1400,
    height: 1400,
  } satisfies SiteImage,
};
