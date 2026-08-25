import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 *
 * Order here = display order. Blog/writing platforms (daily.dev, Medium) last.
 */
export const SOCIAL = {
  github: {
    title: "GitHub",
    handle: "Zuhadzahid",
    href: "https://github.com/Zuhadzahid",
    sameAs: true,
  },
  x: {
    title: "X",
    handle: "@zuhadzahid1",
    href: "https://x.com/zuhadzahid1",
    sameAs: true,
  },
  threads: {
    title: "Threads",
    handle: "@zuhadzahid1",
    href: "https://www.threads.com/@zuhadzahid1",
    sameAs: true,
  },
  bluesky: {
    title: "Bluesky",
    handle: "@zuhadzahid1.bsky.social",
    href: "https://bsky.app/profile/zuhadzahid1.bsky.social",
    sameAs: true,
  },
  youtube: {
    title: "YouTube",
    handle: "@zuhadzahid",
    href: "https://www.youtube.com/@zuhadzahid",
    sameAs: true,
  },
  discord: {
    title: "Discord",
    handle: "zuhadzahid1",
    href: "https://discord.com/channels/zuhadzahid1",
  },
  linkedin: {
    title: "LinkedIn",
    handle: "zuhadzahid1",
    href: "https://www.linkedin.com/in/zuhadzahid1/",
    sameAs: true,
  },
  dailydotdev: {
    title: "daily.dev",
    handle: "@zuhadzahid",
    href: "https://daily.dev/zuhadzahid",
    sameAs: true,
  },
  medium: {
    title: "Medium",
    handle: "@zuhadzahid1",
    href: "https://medium.com/@zuhadzahid1",
    sameAs: true,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
