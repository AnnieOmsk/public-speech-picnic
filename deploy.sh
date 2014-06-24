#!/bin/bash
nvm use
forever stop app.js
forever stop node_modules/express-admin/app.js
git checkout .
git pull origin master
npm install
forever start -a -l /home/picnic/www/public-speech-picnic/logs/forever.log -o /home/picnic/www/public-speech-picnic/logs/out.log -e /home/picnic/www/public-speech-picnic/logs/err.log app.js
forever start -a -l /home/picnic/www/public-speech-picnic/logs/admin/forever.log -o /home/picnic/www/public-speech-picnic/logs/admin/out.log -e /home/picnic/www/public-speech-picnic/logs/admin/err.log node_modules/express-admin/app.js admin/config/
