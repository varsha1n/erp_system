import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Cart from "./pages/Cart.js";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard.js";
import History from "./pages/History.js";
import { CartProvider } from "./components/CartContext";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8EA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CartProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/History" element={<History />} />
          </Routes>
        </CartProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
