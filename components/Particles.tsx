"use client";

import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";

const ParticleComponent = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: "#e2e8f0",
        },
        links: {
          color: "#e2e8f0",
          distance: 170,
          enable: true,
          opacity: 0.28,
          width: 1.2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.45,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1600,
          },
          value: 180,
        },
        opacity: {
          value: 0.38,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2.2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      // Particles loaded callback
    }
  };

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="pointer-events-none"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -9999,
      }}
    />
  );
};

export default ParticleComponent;
