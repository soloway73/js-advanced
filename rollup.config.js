import css from "rollup-plugin-import-css";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/components/app.js",
  output: {
    dir: "dist",
    format: "iife",
    assetFileNames: "[name][extname]",
  },
  plugins: [css(), nodeResolve()],
};
