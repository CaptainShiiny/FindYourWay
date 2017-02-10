#!/usr/bin/env bash

debconf-set-selections <<< 'mysql-server mysql-server/root_password password root'
debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password root'
apt-get update
apt-get install -y vim

sudo apt-get -y install git apache2 mysql-server php5 libapache2-mod-php5 php5-gd php5-mcrypt php5-mysql

