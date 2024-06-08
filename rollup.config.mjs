import filesize from "rollup-plugin-filesize";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.js",
  output: {
    file: "index.js",
    format: "iife",
    name: "ifrModal",
  },
  plugins: [
    filesize(),
    terser({
      output: {
        comments: false,
      },
    }),
    resolve(),
  ],
}
