import withTwin from './withTwin.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's path and directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
export default withTwin({
  reactStrictMode: true,
  transpilePackages: ['three'],
  webpack(config) {
    // Add @svgr/webpack loader for handling SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Add alias support for paths from tsconfig.json
    config.resolve.alias = {
      ...config.resolve.alias, // preserve existing aliases
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@images': path.resolve(__dirname, 'src/images'),
    };

    return config;
  },
});



