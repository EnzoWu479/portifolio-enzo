import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/custom-animation.css",
    "./src/styles/stroke-animation.css",
  ],
  theme: {
    colors: {
      "black-blue": "#1795a8",
      "light-blue": "#24afc1",
      yellow: "#fccf47",
      white: "#f8f8f8",
      "dark-gray": "#141416",
      "gray": "#666",
      "dark-gray-1": "#222",
      "black": "#000",
      "error": "#FF6969",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "background-home": "url('/assets/images/bg.png')",
        
      },
      keyframes: {
        MoveUpInitial: {
          to: {
            transform: "translate3d(0,-105%,0)",
          },
        },
        MoveUpEnd: {
          from: {
            transform: "translate3d(0,100%,0)",
          },
          to: {
            transform: "translate3d(0,0,0)",
          },
        },
        Floating: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-1%)",
          },
        },
        AutoRun: {
          "0%": {
            transform: "perspective(800px) rotateX(-16deg) rotateY(0deg)",
          },
          "100%": {
            transform: "perspective(800px) rotateX(-16deg) rotateY(360deg)",
          },
        },
      },
    },
    animation: {
      MoveUpInitial: "MoveUpInitial",
      MoveUpEnd: "MoveUpEnd",
      Floating: "Floating 2s infinite",
      AutoRun: "AutoRun 20s linear infinite",
    },
  },
  plugins: [],
};
// @keyframes MoveUpInitial {
// 	to {
// 		transform: translate3d(0,-105%,0);
// 	}
// }

// @keyframes MoveUpEnd {
// 	from {
// 		transform: translate3d(0,100%,0);
// 	}
// 	to {
// 		transform: translate3d(0,0,0);
// 	}
// }
export default config;
