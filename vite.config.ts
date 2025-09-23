import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from "@module-federation/vite";

// https://vite.dev/config/

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "mfe-home",
            remotes: {
                auth: {
                    name: "auth",
                    entry: "https://bek-mfe-auth.netlify.app/remoteEntry.js",
                    type: "module",
                },
            },
            shared: ["react", "react-dom"]
        })
    ],
    build: {
        target: "esnext"
    }
})
