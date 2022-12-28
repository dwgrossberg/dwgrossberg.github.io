#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
echo 'https://danielgrossberg.com' > CNAME

# deploy via surge
surge

cd -

git add -A
git commit -a -m "Run build && deploy via Surge (deploy.sh)"