import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                formSuccess: resolve(__dirname, "formSuccess.html"),
            },
        },
    },
});
