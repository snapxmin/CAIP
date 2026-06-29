import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true" && repositoryName;

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPagesBuild ? `/${repositoryName}` : undefined,
  assetPrefix: isGitHubPagesBuild ? `/${repositoryName}/` : undefined,
};

export default nextConfig;
