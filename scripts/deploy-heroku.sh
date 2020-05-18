#!/bin/bash
echo "Running release $TAG"

wget -qO- https://toolbelt.heroku.com/install.sh | sh && \
docker login --username="$HEROKU_USERNAME" --password="$HEROKU_API_KEY" registry.heroku.com && \
docker tag "$IMAGE_STORAGE":"$TAG" registry.heroku.com/"$HEROKU_APP_NAME"/web && \
docker push registry.heroku.com/"$HEROKU_APP_NAME"/web && \
heroku container:release web --app "$HEROKU_APP_NAME"