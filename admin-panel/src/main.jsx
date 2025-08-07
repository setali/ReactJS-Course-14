import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import faIR from "antd/locale/fa_IR.js";
import "@ant-design/v5-patch-for-react-19";
import JalaliProvider from "antd-jalali-v5";
import { DatePicker } from "antd";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ConfigProvider
    direction="rtl"
    locale={faIR}
    theme={{ token: { fontFamily: "vazir" } }}
  >
    <JalaliProvider />
    <App />
  </ConfigProvider>

  // </StrictMode>
);
