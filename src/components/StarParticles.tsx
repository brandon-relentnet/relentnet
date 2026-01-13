import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { type ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

const StarParticles = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (): Promise<void> => {
    // container loaded
  }

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: { color: { value: '#050505' } },
      fullScreen: { enable: true, zIndex: 0 },
      fpsLimit: 120,
      particles: {
        // 1. DENSITY: Increase count for a "Milky Way" feel since we removed lines
        number: {
          value: 160,
          density: { enable: true, width: 1920, height: 1080 },
        },
        // 2. COLOR: Keep it subtle white/gold mix if you want, or just white
        color: { value: '#ffffff' },

        // 3. SHAPE: Pure circles
        shape: { type: 'circle' },

        // 4. OPACITY: Random opacity creates depth (some stars look further away)
        opacity: {
          value: { min: 0.1, max: 0.8 },
          animation: {
            enable: true,
            speed: 0.5, // Very slow twinkle
            mode: 'auto',
            sync: false,
          },
        },

        // 5. SIZE: Mostly small, occasional larger stars
        size: {
          value: { min: 0.5, max: 2.5 }, // 8px was too big (looked like bubbles)
        },

        // 6. MOVEMENT: extremely slow drift, no connecting lines
        move: {
          enable: true,
          speed: 0.2, // Drastically slowed down from 2
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },

        // 7. DISABLE LINES (Crucial for Luxury feel)
        links: { enable: false },
      },
      // Optional: Keep hover effect but make it subtle (push stars away gently)
      interactivity: {
        events: { onHover: { enable: true, mode: 'repulse' } },
        modes: { repulse: { distance: 100, duration: 0.4 } },
      },
      detectRetina: true,
    }),
    [],
  )

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    )
  }

  return <></>
}

export default StarParticles
