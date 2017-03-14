# trading

jekyll theme in newspaper style

this theme passes the test for current AMP version (accelerated mobile pages)

## auto-deployment

if you want to set up an autodeployment through git ...

1/ On the VPS: 

* install ruby, jekyll, git-core. 
* create a bare repo

```
cd
mkdir repos && cd repos
mkdir trading-bare.git
cd trading-bare.git
git init --bare
```

* create the hook

```
cd hooks
vim post-receive
```

* ...with content

```
#!/bin/bash -l
GIT_REPO=$HOME/repos/trading-bare.git
TMP_GIT_CLONE=$HOME/tmp/git/trading
PUBLIC_WWW=/var/www/trading/html

git clone $GIT_REPO $TMP_GIT_CLONE
jekyll build --source $TMP_GIT_CLONE --destination $PUBLIC_WWW
rm -Rf $TMP_GIT_CLONE
exit
```

(change paths accordingly, make it executable)

2/ Your local repo with your website:

* add a new remote for autodeployment

`git remote add vps your-server-username@XX.XXX.XXX.XXX:repos/trading-bare.git`

To deploy you do `git push vps master`.


