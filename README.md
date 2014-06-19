Requirements
------------
node 0.10.x
npm 1.4.14
mysql 5.5.x
redis 2.2.12

NVM install
------------

```
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.7.0/install.sh | sh
$ nvm install 0.10
$ cd %project_dir%
$ nvm use
```
Now you can check your node version
```
$ node -v
```

Sails install
-------------
```
$ npm -g install sails
```

Run app
-------
```
$ npm install
$ sails lift
```

Deploy app
----------

```
$ npm -g install forever
$ cd www/public-speech-picnic
$ forever start -a -l /home/picnic/www/public-speech-picnic/logs/forever.log -o /home/picnic/www/public-speech-picnic/logs/out.log -e /home/picnic/www/public-speech-picnic/logs/err.log app.js
```

To stop app
```
$ forever stop app.js
```

Deploy admin
------------
```
$ forever start -a -l /home/picnic/www/public-speech-picnic/logs/admin/forever.log -o /home/picnic/www/public-speech-picnic/logs/admin/out.log -e /home/picnic/www/public-speech-picnic/logs/admin/err.log node_modules/express-admin/app.js admin/config/
```