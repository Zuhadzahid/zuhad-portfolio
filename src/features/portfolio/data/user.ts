import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Zuhad",
  lastName: "Zahid",
  displayName: "Zuhad Zahid",
  username: "ncdai",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Building software for an AI-first world.",
    "Full-stack and DevOps Engineer.",
    "From product to production.",
    "From launch to distribution.",
  ],
  address: "Karachi City, Sindh, Pakistan",
  phoneNumberB64: "KzkyMzEzMzA4NzgxNw==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  emailB64: "enVoYWRAemFoaWQuY29t", // base64 encoded
  website: "https://zuhad.zahid",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Engineer",
      company: "",
      website: "",
    },
    {
      title: "Founder | Builder",
      company: "",
      website: "",
    },
  ],
  about: `- I’m Chánh Đại (call me Dai) — a Design Engineer with 5+ years of experience, known for pixel-perfect execution and an obsessive attention to detail.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted projects.
- Creator of [chanhdai.com](https://github.com/ncdai/chanhdai.com) (2k stars), [React Wheel Picker](https://react-wheel-picker.chanhdai.com) (50k+ weekly downloads, ▲Vercel OSS Program), and [ZaDark](https://zadark.com) (80k+ downloads, 30k+ users) — peak metrics.
`,
  avatar: "/images/zz-avatar.webp",
  avatarVariants: {
    lightOff: "/images/zz-avatar-light-off.webp",
    lightOn: "/images/zz-avatar-light-on.webp",
    darkOff: "/images/zz-avatar-dark-off.webp",
    darkOn: "/images/zz-avatar-dark-on.webp",
  },
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?t=1778602757",
  namePronunciationUrl: "/audio/zuhad-zahid-name.m4a",
  timeZone: "Asia/Karachi", // PST — Pakistan Standard Time (UTC+5)
  keywords: [
    "ncdai",
    "nguyenchanhdai",
    "nguyen chanh dai",
    "chanhdai",
    "chanh dai",
    "iamncdai",
    "quaric",
    "zadark",
    "nguyễn chánh đại",
    "chánh đại",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
}
