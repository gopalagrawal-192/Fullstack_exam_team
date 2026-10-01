import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// Logic and API-integration tests. No database is required for pure-logic suites;
// integration tests run against an isolated test database.
const configDirectory = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
    globals: true,
    testTimeout: 15000,
  },
  resolve: {
    alias: { "@": resolve(configDirectory, ".") },
  },
});
