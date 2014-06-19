CREATE DATABASE `picnic` CHARACTER SET utf8 COLLATE utf8_general_ci;
GRANT USAGE ON *.* to picnic@localhost identified by 'picnicmysql';
GRANT ALL PRIVILEGES ON picnic.* TO picnic@localhost;