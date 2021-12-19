#!/bin/sh
# Commit mesage

if [ -z "$1" ]; then
 echo "Submit a commit message you uncultured swine!"
 exit
fi
echo " === [*] build"
BUNDLE_GEMFILE='./website/Gemfile' bundle exec jekyll b --source ./website/ --destination ./website/_site

echo " === [*] push"
git add .
git commit -m "GIT+DEPLOY - $1"
git push origin dev

echo " === [*] publish"
rsync -zavP ./website/_site/* dev:/var/www/demo-trading/
