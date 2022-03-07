Se rendre dans le dossier back :
Faire les étapes suivantes :

-	Composer install
-	Php bin/console doctrine:database:create
-	php bin/console doctrine:schema:update --force
-	php bin/console doctrine:fixtures:load

Il faut maintenant générer les clés pour l’utilisation de JWT pour l’authentification
Faire la commande : 
php bin/console lexik:jwt:generate-keypair
S’il y a une erreur, veuillez installer OpenSsl et réexécutez la précédente commande

Maintenant exécutez la commande: php -S 127.0.0.1:8000 -t public

Pour la partie front veuillez ouvrir un nouveau terminal :
Il faut se rendre dans le dossier front et exécuter les commandes suivantes
-	npm install
-	npm start
