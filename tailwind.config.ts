import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
content: [
"./src/app/**/*.{ts,tsx}",
"./src/components/**/*.{ts,tsx}",
],
theme: {
extend: {
fontFamily: {
sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
},
colors: {
brand: {
50: "#eef5ff",
100: "#dae9ff",
200: "#b8d5ff",
300: "#8cbaff",
400: "#5a97ff",
500: "#2f73ff",
600: "#1e58e6",
700: "#1845b3",
800: "#163a8f",
900: "#132f73"
}
},
backgroundImage: {
"hero-gradient": "radial-gradient(1000px 600px at 10% 0%, rgba(47,115,255,0.25), transparent), radial-gradient(800px 500px at 90% 10%, rgba(99,102,241,0.25), transparent)",
},
boxShadow: {
soft: "0 10px 30px -12px rgba(0,0,0,0.25)",
}
},
},
plugins: [typography],
};
export default config;