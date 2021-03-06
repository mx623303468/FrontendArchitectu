import babel from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";

export default {
  input: "src/index.js",
  output: {
    file: "dist/vue.js",
    name: "Vue",
    format: "umd",
    sourcemap: true,
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    serve({
      openPage: "/public/index.html",
      open: true,
      port: 3000,
      contentBase: "",
    }),
  ],
};
