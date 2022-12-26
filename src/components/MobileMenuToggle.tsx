/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import theme from "../utilities/theme.js";
import { MouseEventHandler } from "react";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

export const MobileMenuToggle = ({
  toggle,
  colorMode,
}: {
  toggle: MouseEventHandler<HTMLButtonElement>;
  colorMode: string;
}) => (
  <button
    onClick={toggle}
    css={css`
      box-shadow: 0px 0px 5px 0.25px
        ${colorMode === "dark"
          ? theme.colors.dark.text
          : theme.colors.light.text};
    `}
  >
    <svg width="16" height="16" viewBox="0 0 18 18">
      <Path
        stroke={
          colorMode === "dark"
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        stroke={
          colorMode === "dark"
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        stroke={
          colorMode === "dark"
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
