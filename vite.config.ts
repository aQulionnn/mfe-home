import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),

        federation({
            name: "home",
            remotes: {
                auth: {
                    name: "auth",
                    entry: "https://bek-mfe-auth.netlify.app/remoteEntry.js",
                    type: "module",
                },
            }
        })
    ],
    server: {
        port: 5174
    },
    build: {
        target: "esnext"
    }
})
