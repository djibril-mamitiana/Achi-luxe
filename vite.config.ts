import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite"; // <-- Ajoutez cet import

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Ajoutez ce bloc ci-dessous pour forcer le préréglage Vercel
  vite: {
    plugins: [
      nitro({
        preset: "vercel",
      }),
    ],
  },
});
