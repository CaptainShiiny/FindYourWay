# FindYourWay

============================================================================================================
Pour un bon fonctionnement de l'application, nous vous recommandons de le lancer dans une machine virtuelle:
============================================================================================================

1) Copier dans un dossier vide les fichiers (présents dans le dossier "installation"):
    - Vagrantfile
    - init_apache.sh
2) Créer deux sous-répertoires:
    - www
    - conf
3) Editer votre fichiers "hosts" en ajoutant:
    - 192.168.33.10 www.findyourway.local admin.findyourway.local play.findyourway.local
4) Faire un "vagrant up" dans le dossier précédemment crée et prendre un café le temps de l'installation
5) Dans le sous-répertoire "www/html", cloner le dépôt git: https://github.com/CaptainShiiny/FindYourWay.git
6) Copier dans le répertoire "conf/sites-available" les fichiers:
    - 001-backoffice.conf
    - 002-game.conf
7) Se connecter en ssh sur Vagrant
8) Activer (a2ensite) 001-backoffice.conf et 002-game.conf et redémarrer Apache
9) Aller dans le dossier "/var/www/html/FindYourWay/admin/bd", et installer la base. Le mot de passe est "root":
    $ mysql -u root -p
    mysql> CREATE DATABASE findyourway;
    mysql> USE findyourway;
    mysql> SOURCE findyourway.sql
10) Mettre le fichier conf.ini dans le dossier "admin/conf"
11) Dans le fichier /etc/mysql/my.cnf remplacer 127.0.0.1 par 0.0.0.0 à la ligne "bind-address"
12) Redémarrer MySQL :
    $ sudo /etc/init.d/mysql restart
