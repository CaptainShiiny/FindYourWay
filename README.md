# FindYourWay

============================================================================================================
Pour un bon fonctionnement de l'application, nous vous recommandons de le lancer dans une machine virtuelle:
============================================================================================================

    ## Copier dans un dossier vide les fichiers (présents dans le dossier "installation"):
        - Vagrantfile
        - init_apache.sh
    ## Créer deux sous-répertoires:
        - www
        - conf
    ## Editer votre fichiers "hosts" en ajoutant:
        - 192.168.33.10 www.findyourway.local admin.findyourway.local play.findyourway.local
    ## Faire un "vagrant up" dans le dossier précédemment crée et prendre un café le temps de l'installation
    ## Dans le sous-répertoire "www/html", cloner le dépôt git: https://github.com/CaptainShiiny/FindYourWay.git
    ## Copier dans le répertoire "conf/sites-available" les fichiers:
        - 001-backoffice.conf
        - 002-game.conf
    ## Se connecter en ssh sur Vagrant
    ## Activer (a2ensite) 001-backoffice.conf et 002-game.conf et redémarrer Apache
    ## Copier le fichier adminer.php dans "www/html" et aller sur adminer (findyourway.local/adminer.php) puis remplir les informations suivantes
        - server : findyourway
        - username : root
        - password : root
        - database :
    ## Importer le fichier sql se trouvant dans "admin/bd"
    ## Mettre le fichier conf.ini dans le dossier "admin/conf"
    ## Supprimer le fichier index.html présent dans "www/html"

=================================
Note
==================================

Pour accèder au backoffice (admin.findyourway.local) :

    - login     : admin
    - password : pass
