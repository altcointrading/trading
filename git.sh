#!/bin/sh
# Commit mesage

if [ -z "$1" ]; then
 echo "Submit a commit message you uncultured swine!"
 exit
fi
# !!!!!!!!!!!!!!!!!!!!!!!!!!!
branch="master"
# !!!!!!!!!!!!!!!!!!!!!!!!!!!

git add .
git commit -m "$branch - $1"
git push origin $branch
