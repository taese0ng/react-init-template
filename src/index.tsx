// react 18버전부터는 render를 사용할 수 없음 [StrictMode를 사용해야함].
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("root element not found.");

// root!는 root이 null이 아님을 단언하는 것.
createRoot(rootElement!).render(<App />);
