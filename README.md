# FindYourWay

============================================================================================================
Pour un bon fonctionnement de l'application, nous vous recommandons de le lancer dans une machine virtuelle:
============================================================================================================

1) Copier dans un dossier vide les fichiers:
    - Vagrantfile
    - init_apache.sh
2) Créer deux sous-répertoires:
    - www
    - conf
3) Editer votre fichiers "hosts" en ajoutant:
    - 192.168.33.10 www.findyourway.local admin.findyourway.local play.findyourway.local
4) Dans le sous-répertoire "www/html", cloner le dépôt git:
5) Copier dans le répertoire "conf/sites-available" les fichiers:
    - 001-backoffice.conf
    - 002-game.conf
6) Se connecter en ssh sur Vagrant et redémarrer Apache
7) Installer la base de données présente dans "admin/bd"
