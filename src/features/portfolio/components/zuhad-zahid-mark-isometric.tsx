"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

/**
 * Isometric "Z Z" mark for Zuhad Zahid.
 * Built in the style of ncdai's isometric mark: same 32px grid
 * (x-step 32√3), 32px extrusion, cursor-tracking spotlight along the
 * strokes, and a 16px press-down interaction with a metal click sound.
 */
export function ZuhadZahidMarkIsometric() {
  const id = useId()
  const ids = {
    facePattern: `zz-face-pattern-${id}`,
    faceFill: `zz-face-fill-${id}`,
    strokeBack: `zz-stroke-back-${id}`,
    strokeFront: `zz-stroke-front-${id}`,
    radialGradient: `zz-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const [play] = useSound(metalClickSound)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 556]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 354]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return
    }

    if (window.matchMedia("(hover: none)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      viewBox="0 0 556 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </pattern>

        <motion.g
          id={ids.faceFill}
          variants={{
            normal: {
              transform: "translate(0px, 0px)",
            },
            pressed: {
              transform: "translate(0px, 16px)",
            },
          }}
          transition={transition}
        >
          <path d="M0.50 224.58L166.78 128.58L194.49 144.58L166.78 256.58L277.63 192.58L333.05 224.58L166.78 320.58L111.35 288.58L139.06 176.58L28.21 240.58Z" />
          <path d="M222.20 96.58L388.48 0.58L416.19 16.58L388.48 128.58L499.33 64.58L554.76 96.58L388.48 192.58L333.05 160.58L360.77 48.58L249.92 112.58Z" />
        </motion.g>

        <motion.path
          id={ids.strokeBack}
          variants={{
            normal: {
              d: "M194.49 176.58L166.78 288.58M333.05 256.58L166.78 352.58L111.35 320.58M139.06 208.58L28.21 272.58L0.50 256.58M194.49 144.58V176.58M166.78 256.58V288.58M333.05 224.58V256.58M166.78 320.58V352.58M111.35 288.58V320.58M139.06 176.58V208.58M28.21 240.58V272.58M0.50 224.58V256.58M416.19 48.58L388.48 160.58M554.76 128.58L388.48 224.58L333.05 192.58M360.77 80.58L249.92 144.58L222.20 128.58M416.19 16.58V48.58M388.48 128.58V160.58M554.76 96.58V128.58M388.48 192.58V224.58M333.05 160.58V192.58M360.77 48.58V80.58M249.92 112.58V144.58M222.20 96.58V128.58",
            },
            pressed: {
              d: "M194.49 176.58L166.78 288.58M333.05 256.58L166.78 352.58L111.35 320.58M139.06 208.58L28.21 272.58L0.50 256.58M194.49 160.58V176.58M166.78 272.58V288.58M333.05 240.58V256.58M166.78 336.58V352.58M111.35 304.58V320.58M139.06 192.58V208.58M28.21 256.58V272.58M0.50 240.58V256.58M416.19 48.58L388.48 160.58M554.76 128.58L388.48 224.58L333.05 192.58M360.77 80.58L249.92 144.58L222.20 128.58M416.19 32.58V48.58M388.48 144.58V160.58M554.76 112.58V128.58M388.48 208.58V224.58M333.05 176.58V192.58M360.77 64.58V80.58M249.92 128.58V144.58M222.20 112.58V128.58",
            },
          }}
          transition={transition}
        />

        <motion.path
          id={ids.strokeFront}
          variants={{
            normal: {
              d: "M0.50 224.58L166.78 128.58L194.49 144.58L166.78 256.58L277.63 192.58L333.05 224.58L166.78 320.58L111.35 288.58L139.06 176.58L28.21 240.58ZM222.20 96.58L388.48 0.58L416.19 16.58L388.48 128.58L499.33 64.58L554.76 96.58L388.48 192.58L333.05 160.58L360.77 48.58L249.92 112.58Z",
            },
            pressed: {
              d: "M0.50 240.58L166.78 144.58L194.49 160.58L166.78 272.58L277.63 208.58L333.05 240.58L166.78 336.58L111.35 304.58L139.06 192.58L28.21 256.58ZM222.20 112.58L388.48 16.58L416.19 32.58L388.48 144.58L499.33 80.58L554.76 112.58L388.48 208.58L333.05 176.58L360.77 64.58L249.92 128.58Z",
            },
          }}
          transition={transition}
        />

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>
      </defs>

      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-477.55 756.57L1254.51 -243.41" />
        <path d="M977.37 788.58L-754.67 -211.42" />
        <path d="M1143.65 692.58L-588.39 -307.42" />
      </g>

      <g className="fill-background" fillRule="evenodd" clipRule="evenodd">
        <motion.path
          variants={{
            normal: {
              d: "M194.49 144.58L166.78 256.58L166.78 288.58L194.49 176.58Z",
            },
            pressed: {
              d: "M194.49 160.58L166.78 272.58L166.78 288.58L194.49 176.58Z",
            },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: {
              d: "M333.05 224.58L166.78 320.58L111.35 288.58L111.35 320.58L166.78 352.58L333.05 256.58Z",
            },
            pressed: {
              d: "M333.05 240.58L166.78 336.58L111.35 304.58L111.35 320.58L166.78 352.58L333.05 256.58Z",
            },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: {
              d: "M139.06 176.58L28.21 240.58L0.50 224.58L0.50 256.58L28.21 272.58L139.06 208.58Z",
            },
            pressed: {
              d: "M139.06 192.58L28.21 256.58L0.50 240.58L0.50 256.58L28.21 272.58L139.06 208.58Z",
            },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: {
              d: "M416.19 16.58L388.48 128.58L388.48 160.58L416.19 48.58Z",
            },
            pressed: {
              d: "M416.19 32.58L388.48 144.58L388.48 160.58L416.19 48.58Z",
            },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: {
              d: "M554.76 96.58L388.48 192.58L333.05 160.58L333.05 192.58L388.48 224.58L554.76 128.58Z",
            },
            pressed: {
              d: "M554.76 112.58L388.48 208.58L333.05 176.58L333.05 192.58L388.48 224.58L554.76 128.58Z",
            },
          }}
          transition={transition}
        />
        <motion.path
          variants={{
            normal: {
              d: "M360.77 48.58L249.92 112.58L222.20 96.58L222.20 128.58L249.92 144.58L360.77 80.58Z",
            },
            pressed: {
              d: "M360.77 64.58L249.92 128.58L222.20 112.58L222.20 128.58L249.92 144.58L360.77 80.58Z",
            },
          }}
          transition={transition}
        />
      </g>

      {/* Edges that sit behind the top faces (far bottom edges and vertical
          corners) are drawn before the faces so they get occluded correctly. */}
      <use href={`#${ids.strokeBack}`} stroke="var(--stroke)" />
      <use href={`#${ids.strokeBack}`} stroke={`url(#${ids.radialGradient})`} />

      <use href={`#${ids.faceFill}`} className="fill-background" />
      <use href={`#${ids.faceFill}`} fill={`url(#${ids.facePattern})`} />

      <use href={`#${ids.strokeFront}`} stroke="var(--stroke)" />
      <use
        href={`#${ids.strokeFront}`}
        stroke={`url(#${ids.radialGradient})`}
      />
    </motion.svg>
  )
}
