/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import HashLinkFrame from "./components/HashLinkFrame.jsx";
import storage from "./utilities/storage.js";
import BackgroundDark from "./components/BackgroundDark.jsx";
import BackgroundLight from "./components/BackgroundLight.jsx";
import SEO from "./components/SEO.jsx";
import NotFound from "./pages/NotFound.jsx";

const App: FC = () => {
  const [colorMode, setColorMode] = useState(localStorage.colorMode || "dark");
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  useEffect(() => {
    storage(colorMode);
  }, [colorMode]);
  return (
    <ChakraProvider>
      <SEO />
      <div
        className="App"
        css={css`
          position: relative;
          display: grid;
          grid-template: 100px repeat(auto-fit, minmax(500px, 1fr)) / 1fr;
          align-items: center;
          overflow: hidden;
        `}
      >
        <div
          css={css`
            position: fixed;
            top: 0;
            right: 0;
            z-index: -1;
          `}
        >
          {colorMode === "dark" ? <BackgroundDark /> : <BackgroundLight />}
        </div>
        <BrowserRouter>
          <Nav
            colorMode={colorMode}
            setColorMode={setColorMode}
            width={width}
            breakpoint={breakpoint}
          />
          <Routes>
            <Route
              path="/"
              element={
                <HashLinkFrame
                  colorMode={colorMode}
                  width={width}
                  breakpoint={breakpoint}
                />
              }
            />
            <Route path="*" element={<NotFound colorMode={colorMode} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
};

export default App;
