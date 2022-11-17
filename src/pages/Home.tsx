/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../styles/pages.css";

import theme from "../utilities/theme";
const Home = ({ colorMode }: { colorMode: string }): JSX.Element => {
  return (
    <div
      style={{
        color:
          colorMode === "dark"
            ? theme.colors.dark.text
            : theme.colors.light.text,
      }}
      className="page home"
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: clamp(30px, 12vw, 60px);
        `}
      >
        <h1
          css={css`
            font-size: clamp(16px, 10vw, 100px);
            text-shadow: -0.0075em 0.0075em 0
                ${colorMode === "dark"
                  ? theme.colors.dark.text
                  : theme.colors.light.text},
              0.01em 0.01em 0 ${colorMode === "dark" ? "#dfdfe6" : "#323233"},
              0.02em 0.02em 0 ${colorMode === "dark" ? "#c6c6cc" : "#4a4a4d"},
              0.03em 0.03em ${colorMode === "dark" ? "#aeaeb3 " : "#636366"},
              0.04em 0.04em 0 ${colorMode === "dark" ? "#959599 " : "#7c7c80"},
              0.05em 0.05em 0 ${colorMode === "dark" ? "#7c7c80 " : "#959599"},
              0.06em 0.06em 0 ${colorMode === "dark" ? "#636366 " : "#aeaeb3"},
              0.07em 0.07em 0 ${colorMode === "dark" ? "#4a4a4d " : "#c6c6cc"};
          `}
        >
          DANIEL
        </h1>
        <h1
          css={css`
            font-size: clamp(16px, 10vw, 100px);
            margin-left: 10vw;
            text-shadow: -0.0075em 0.0075em 0
                ${colorMode === "dark"
                  ? theme.colors.dark.text
                  : theme.colors.light.text},
              0.01em 0.01em 0 ${colorMode === "dark" ? "#dfdfe6" : "#323233"},
              0.02em 0.02em 0 ${colorMode === "dark" ? "#c6c6cc" : "#4a4a4d"},
              0.03em 0.03em ${colorMode === "dark" ? "#aeaeb3 " : "#636366"},
              0.04em 0.04em 0 ${colorMode === "dark" ? "#959599 " : "#7c7c80"},
              0.05em 0.05em 0 ${colorMode === "dark" ? "#7c7c80 " : "#959599"},
              0.06em 0.06em 0 ${colorMode === "dark" ? "#636366 " : "#aeaeb3"},
              0.07em 0.07em 0 ${colorMode === "dark" ? "#4a4a4d " : "#c6c6cc"};
          `}
        >
          GROSSBERG
        </h1>
        <h2
          css={css`
            font-size: clamp(13px, 7vw, 70px);
            margin-left: 20vw;
            text-shadow: -0.0075em 0.0075em 0
                ${colorMode === "dark"
                  ? theme.colors.dark.text
                  : theme.colors.light.text},
              0.005em 0.005em 0 ${colorMode === "dark" ? "#dfdfe6" : "#323233"},
              0.01em 0.01em 0 ${colorMode === "dark" ? "#c6c6cc" : "#4a4a4d"},
              0.015em 0.015em ${colorMode === "dark" ? "#aeaeb3 " : "#636366"},
              0.02em 0.02em 0 ${colorMode === "dark" ? "#959599 " : "#7c7c80"},
              0.025em 0.025em 0 ${colorMode === "dark" ? "#7c7c80 " : "#959599"},
              0.03em 0.03em 0 ${colorMode === "dark" ? "#636366 " : "#aeaeb3"},
              0.035em 0.035em 0 ${colorMode === "dark" ? "#4a4a4d " : "#c6c6cc"};
          `}
        >
          Software
        </h2>
        <h2
          css={css`
            font-size: clamp(13px, 7vw, 70px);
            margin-left: 40vw;
            text-shadow: -0.0075em 0.0075em 0
                ${colorMode === "dark"
                  ? theme.colors.dark.text
                  : theme.colors.light.text},
              0.005em 0.005em 0 ${colorMode === "dark" ? "#dfdfe6" : "#323233"},
              0.01em 0.01em 0 ${colorMode === "dark" ? "#c6c6cc" : "#4a4a4d"},
              0.015em 0.015em ${colorMode === "dark" ? "#aeaeb3 " : "#636366"},
              0.02em 0.02em 0 ${colorMode === "dark" ? "#959599 " : "#7c7c80"},
              0.025em 0.025em 0 ${colorMode === "dark" ? "#7c7c80 " : "#959599"},
              0.03em 0.03em 0 ${colorMode === "dark" ? "#636366 " : "#aeaeb3"},
              0.035em 0.035em 0 ${colorMode === "dark" ? "#4a4a4d " : "#c6c6cc"};
          `}
        >
          Engineer
        </h2>
      </div>
    </div>
  );
};

export default Home;
