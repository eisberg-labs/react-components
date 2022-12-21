#!/bin/bash

# Exit immediately if a command exits with a non zero status
set -e
# Treat unset variables as an error when substituting
set -u

function remove_html_extension() {
  TARGET=$1
  EXCLUDES_REGEX=$2

  for filename in $TARGET/*.html; do
    # File is html and not in $EXCLUDES_REGEX files
    if [[ $filename =~ ^.+\.html$ && ! $filename =~ $EXCLUDES_REGEX ]]; then
      original="$filename"
      # Get the filename without the path/extension
      filename=$(basename "$filename")
      extension="${filename##*.}"
      filename="${filename%.*}"

      # Move it
      mv $original $TARGET/$filename
    fi
  done
}

function upload_to_s3() {
  TARGET=$1
  BUCKET=$2
  DEST=$3
  ## Now upload to s3, deleting any items that no longer exist
  aws s3 sync --delete $TARGET s3://$BUCKET/$DEST
  ## Rename all files without the extension to mimetype text/html

  echo "Uploading to  s3://$BUCKET/$DEST"
  aws s3 cp \
    s3://$BUCKET/$DEST \
    s3://$BUCKET/$DEST \
    --exclude '*.*' \
    --no-guess-mime-type \
    --content-type="text/html" \
    --metadata-directive="REPLACE" \
    --recursive
}

function deploy() {
  TARGET=$1
  EXCLUDES_REGEX=$2
  BUCKET=$3
  DEST=$4

  remove_html_extension $TARGET $EXCLUDES_REGEX
  upload_to_s3 $TARGET $BUCKET $DEST
  rm -r $TARGET
}

deploy "$@"
