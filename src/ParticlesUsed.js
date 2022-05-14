import './css/styles.css';
import Particles from "react-tsparticles";

export default function ParticlesUsed() {
  return (
    <div className="particles_div">
        <Particles
        className="particles-style"
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          particles: {
            number: {
              value: 60,
              limit: 60,
              density: {
                enable: true,
                value_area: 1000
              }
            },
            color: {
              value: "#F3EAC0"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5
              },
            },
            opacity: {
              value: 0.2,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 1,
                sync: false
              }
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 6,
                size_min: 6, // Circle size
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 120,
              color: "#3ec2cf",
              opacity: .2,
              width: 2
            },
            move: {
              enable: true,
              speed: 1.3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ["attract","bubble"],
                parallax: {
                    enable: false,
                    force: 50,
                    smooth: 10
                }
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 200,
                lineLinked: {
                  opacity: 1
                }
              },
              attract: {
                distance: 300,
                size: 200,
                duration: 2,
                opacity: .8,
                speed: .11
              },
              bubble: {
                opacity: 0.8,
                size: 8,
                color: {
                  value: "#922C40"
                }
              }
            }
          },
          
          retina_detect: true,
          fps_limit: 80,
          background: {
            color: {
             value: "#111627",
            },
          },
        }}
      />
    </div>
  );
}
