# CAIP - Coding Agent Intelligence Platform

CAIP is a unified portal MVP that combines three core modules in one experience:

1. **Agent Benchmark Center**
2. **Workflow Marketplace**
3. **Enterprise ROI Dashboard**

This repository contains a first implementation of the V1 portal shell, shared data model, and module-level starter datasets.

## V1 Scope

- One portal shell with shared navigation and design language
- Common data standards across all three modules
- Foundation artifacts for governance, audit, and API integration
- Three-phase rollout plan and end-to-end value-loop validation

## Project Structure

- `/src` portal frontend shell and module views
- `/data` sample cross-module datasets
- `/schemas` JSON schema for unified entities
- `/docs` governance, rollout, and acceptance standards

## Run Locally

This MVP is static and dependency-free.

Open `/home/runner/work/CAIP/CAIP/src/index.html` in a browser.

## Deploy to GitHub Pages

This repository includes a Pages workflow at:

- `/home/runner/work/CAIP/CAIP/.github/workflows/deploy-pages.yml`

Deployment behavior:

- Triggers on pushes to `main` or `master`
- Publishes static files from `/home/runner/work/CAIP/CAIP/src`

After merge, enable GitHub Pages in repository settings and select **GitHub Actions** as the source.
The portal will be available at:

- `https://<owner>.github.io/<repo>/`
