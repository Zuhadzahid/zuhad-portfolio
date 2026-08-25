import { cn } from "@/lib/utils"

/**
 * The ZZ brand mark — the Z² logo glyph with a transparent background,
 * theme-matched like the profile avatar: black glyph in light mode,
 * white glyph in dark mode.
 */
export function ZzMark({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("inline-flex aspect-square select-none", className)}
      aria-hidden
      {...props}
    >
      {}
      <img
        className="size-full object-contain dark:hidden"
        src="/images/zz-glyph-dark.png"
        alt=""
      />
      {}
      <img
        className="hidden size-full object-contain dark:block"
        src="/images/zz-glyph-light.png"
        alt=""
      />
    </span>
  )
}
