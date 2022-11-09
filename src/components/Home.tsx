/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { RouteProps } from "react-router-dom";

const Home: FC = ({ ...props }): JSX.Element => {
  return (
    <div
      // for controlling the page layout with hash link scroll to effect
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        min-height: 100vmax;
        margin-top: -1.5em;
      `}
    >
      <h1>Daniel Grossberg</h1>
      <h2>Software Engineer</h2>
      <h4>coming soon...</h4>
    </div>
  );
};

export default Home;
