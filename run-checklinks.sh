#!/bin/bash

# Exit the script with error code 1 if any command fails
set -euxo pipefail

npm run checklinks
