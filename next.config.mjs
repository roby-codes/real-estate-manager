/** @type {import('next').NextConfig} */

import { fileURLToPath } from "node:url";
import createJiti from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/env");

const nextConfig = { output: "standalone" };

export default nextConfig;
