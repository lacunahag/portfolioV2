#!/bin/bash
# workaround gh-pages being shit
# maybe the worst idea I've ever had. Do not copy this pattern

( 
    # safety first
    set -e
    test -z "$(git status --porcelain)" || { echo "Please commit or stash changes before deploying";  exit 1; }
    
    ## YEEEEEEEHAW
    git branch -D gh-pages
    git checkout -b gh-pages

    yarn install
    yarn build
    rm -rf src/ public/ README.md

    mv build/* .

    git add -A 
    git commit -m "Deploy"
    git push origin gh-pages --force # yeet
    git checkout master
) && echo "Deploy succeeded. Probably." || echo "Deploy failed :("
