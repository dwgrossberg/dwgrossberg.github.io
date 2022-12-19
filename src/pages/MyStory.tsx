/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../utilities/theme";
import { Image } from "@chakra-ui/react";
import casualMe from "../assets/casualMe.jpg";
import useFitText from "use-fit-text";
import { Fragment } from "react";
import "../styles/pages.css";

const MyStory = ({ colorMode }: { colorMode: string }): JSX.Element => {
  const { fontSize, ref } = useFitText({ minFontSize: 75, maxFontSize: 1000 });
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
          margin-bottom: -15rem;
          @media screen and (max-width: 600px) {
            margin-bottom: 7rem;
          }
        `}
      >
        <div className="page-container">
          <h2 className="title">My Story</h2>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              gap: 2rem;
              flex-direction: row;
              @media screen and (max-width: 600px) {
                align-items: center;
                flex-direction: column;
              }
            `}
          >
            <span
              css={css`
                filter: drop-shadow(
                  2px 3px 3px
                    ${colorMode === "dark"
                      ? theme.colors.dark.text
                      : theme.colors.light.text}
                );
              `}
            >
              <Image
                src={casualMe}
                alt="Daniel Grossberg"
                css={css`
                  clip-path: polygon(
                    20% 0%,
                    80% 0%,
                    100% 20%,
                    100% 80%,
                    80% 100%,
                    20% 100%,
                    0% 80%,
                    0% 20%
                  );
                  max-width: 185px;
                `}
              />
            </span>
            <div
              id="storyText"
              ref={ref}
              style={{ fontSize }}
              css={css`
                height: 300px;
                text-align: left;
                min-width: 200px;
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                @media screen and (max-width: 600px) {
                  width: 100%;
                  text-align: center;
                  place-self: center;
                }
              `}
            >
              <p>
                With a background in marketing and design, I excel at
                transforming ideas into immersive experiences. I build
                interactive software with a focus on seamless customer journeys
                and powerful user engagements.
              </p>
              <p>
                And no matter what, I love working through the technical details
                of a problem in search of a solution, whether it’s drilling down
                into a complicated bug report or scrutinizing a high-level
                business concept.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyStory;
