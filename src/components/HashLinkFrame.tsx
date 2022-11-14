/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import MyStory from "../pages/MyStory";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import TechStack from "../pages/TechStack";
import Contact from "../pages/Contact";

const HashLinkFrame = ({ colorMode }: { colorMode: string }): JSX.Element => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <div>
      <header id="home">
        <Home colorMode={colorMode} />
      </header>
      <header
        id="my-story"
        css={css`
          ::before {
            display: block;
            content: " ";
            margin-top: -150px;
            height: 150px;
            visibility: hidden;
            pointer-events: none;
          }
        `}
      >
        <MyStory colorMode={colorMode} />
      </header>
      <header
        id="tech-stack"
        css={css`
          ::before {
            display: block;
            content: " ";
            margin-top: -150px;
            height: 150px;
            visibility: hidden;
            pointer-events: none;
          }
        `}
      >
        <TechStack colorMode={colorMode} />
      </header>
      <header
        id="projects"
        css={css`
          ::before {
            display: block;
            content: " ";
            margin-top: -150px;
            height: 150px;
            visibility: hidden;
            pointer-events: none;
          }
        `}
      >
        <Projects colorMode={colorMode} />
      </header>
      <header
        id="contact"
        css={css`
          ::before {
            display: block;
            content: " ";
            margin-top: -150px;
            height: 150px;
            visibility: hidden;
            pointer-events: none;
          }
        `}
      >
        <Contact colorMode={colorMode} />
      </header>
    </div>
  );
};

export default HashLinkFrame;