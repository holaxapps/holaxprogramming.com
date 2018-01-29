#!/bin/bash

DEFAULT=posts
CATEGORY=${1:-$DEFAULT}
git pull
git add . && git commit -m "Update $CATEGORY"
git push -u origin master