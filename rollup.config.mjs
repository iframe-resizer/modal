import copy from "rollup-plugin-copy";
import filesize from "rollup-plugin-filesize";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: 'src/modal.js',
  output: {
    file: 'iframe-resizer.modal.js',
    format: 'iife',
    name: 'ifrModal',
  },
  plugins: [
    filesize(),
    // terser({
    //   output: {
    //     comments: false,
    //   },
    // }),
    resolve(),
    copy({
      hook: 'closeBundle',
      targets: [
        {
          src: 'iframe-resizer.modal.js',
          dest: '.',
          transform: (contents) =>
            contents.toString().replace(/  /g, ''),
        },
      ],
      verbose: true,
    }),
  ],
}
