#!/usr/bin/env bash
echo "Hello!"

bundle exec jekyll contentful
bundle exec jekyll build
npx staticrypt _site/index.html immunoglobulin -o _site/index.html