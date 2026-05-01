#!/bin/bash
# -----------------------------------------------------------------------------
# CCT Browser Patch Script
# Replaces references of org.chromium.chrome with com.cct.browser
# -----------------------------------------------------------------------------
set -e

CHROMIUM_SRC_DIR=$1

if [ -z "$CHROMIUM_SRC_DIR" ]; then
  echo "Usage: $0 <path_to_chromium_src>"
  exit 1
fi

echo "Patching Chromium source in $CHROMIUM_SRC_DIR..."
cd "$CHROMIUM_SRC_DIR"

# 1. Update AndroidManifest.xml for chrome public apk
find chrome/android -name "AndroidManifest.xml" -type f -exec sed -i 's/org.chromium.chrome/com.cct.browser/g' {} +

# 2. Update GN build arguments and strings
# Note: A complete package rename requires refactoring Java packages and JNI headers.
# For demonstration in this fork builder script, we patch standard GN config paths.
find chrome/android -name "BUILD.gn" -type f -exec sed -i 's/org.chromium.chrome/com.cct.browser/g' {} +

echo "Successfully patched manifest and configurations to com.cct.browser"
