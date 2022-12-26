/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../utilities/theme.js";
import ProjectCard from "../components/ProjectCard.jsx";
import projectDetails from "../utilities/projectDetails.js";
import { Fragment } from "react";

import "../styles/pages.css";

const Projects = ({
  colorMode,
  width,
  breakpoint,
}: {
  colorMode: string;
  width: number;
  breakpoint: number;
}): JSX.Element => {
  return (
    <Fragment>
      <div
        style={{
          color:
            colorMode === "dark"
              ? theme.colors.dark.text
              : theme.colors.light.text,
        }}
        className="page"
        css={css`
          margin-bottom: -10rem;
          @media screen and (max-width: 600px) {
            margin-bottom: -15rem;
          }
        `}
      >
        <div className="page-container">
          <h2
            className="title"
            css={css`
              margin-bottom: 5rem;
            `}
          >
            Projects
          </h2>
          {projectDetails.projects.map((item) => {
            return (
              <ProjectCard
                key={item.i}
                colorMode={colorMode}
                reverse={item.reverse}
                title={item.title}
                description={item.description}
                details={item.details}
                tech={item.tech}
                gif={item.gif}
                liveLink={item.liveLink}
                repo={item.repo}
                i={item.i}
                width={width}
                breakpoint={breakpoint}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
