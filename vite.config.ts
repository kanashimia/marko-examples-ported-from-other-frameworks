import { defineConfig } from "vite";
import marko from "@marko/run/vite";

export default defineConfig({
  plugins: [
    marko(),
  ],
  build: {
    target: "es2022",
    minify: true,
    modulePreload: false,

    sourcemap: false,
    rollupOptions: {
      output: {
        // experimentalMinChunkSize: 99999999,
        // Output ESM for the server build also.
        // Remove when https://github.com/vitejs/vite/issues/2152 is resolved.
        format: "es",
        // intro: (chunk) => {
        //     // console.log(chunk.fileName);
        //     if (chunk.fileName === 'index.js') {
        //         return `import "./style.css";`
        //     }
        //     return ''
        // },
      },
    },
  },
});
