# CCT Browser

An Open Source Chromium-fork Android browser designed to be built via GitHub Actions.

## Project Details

- **Package Name:** `com.cct.browser`
- **Platform:** Android (arm64)
- **Base:** Chromium (Version: `126.0.6478.122`)

## Features

- **Automated CI/CD:** Built directly with GitHub actions using standard `depot_tools`.
- **Customized Package Name:** Automatically renames Android target package using patch scripts.
- **Open Source Frontend Hub:** (This repository) acts as the project hub and automated builder.

## How to Build via GitHub Actions

Because Chromium is a massive project (>100GB repository size, large RAM/CPU requirements), a standard GitHub Action runner is typically not large enough. 

Our `.github/workflows/build-chromium.yml` uses the `maximize-build-space` action as a workaround, but for reliable continuous integration you must use **Larger Runners** (e.g. `ubuntu-latest-8-cores` or higher) or a self-hosted runner.

To trigger a build:
1. Fork this repository.
2. Go to the **Actions** tab.
3. Select the **Build CCT Browser (Android)** workflow.
4. Click **Run workflow**.

When the run succeeds, you can download `CCTBrowser-arm64.apk` from the action's Artifacts.

## Local Build Environment Requirements

To replicate this locally (Ubuntu/Debian recommended):

1. **At least 150GB of free disk space**
2. **Minimum 16GB RAM** (32 GB+ recommended)
3. Run the commands as configured in `.github/workflows/build-chromium.yml`.

## License

This project is open-source and builds upon the open-source Chromium project.
