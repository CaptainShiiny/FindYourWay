/** apidoc -i input/ -o doc/ -t template/
* @apiGroup Destination
* @apiName listDestinations
* @apiVersion 0.1.0
*
* @api {get} /destinations[/]  Afficher
*
* @apiDescription On affiche la liste des destinations
*
* Retourne une représentation json des ressources
*
* Le résultat inclut un lien pour accéder à la destination.
*
*
*
* @apiSuccess (Succès : 200) {Number} destinations_number Nombre de destinations dans la base
* @apiSuccess (Succès : 200) {Array} destinations Tableau contenant les informations de chaque destinations
* @apiSuccess (Succès : 200) {String} name Nom de la destination
* @apiSuccess (Succès : 200) {Link}   links Lien vers la destination
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*    {
*      "destinations_number": 3,
*      "destinations": [
*        {
*          "name": "Nancy",
*          "links": {
*            "self": "/LP/FindYourWay/api/api.php/destinations/1"
*          }
*        },
*        {
*          ...
*        }
*      ]
*    }
*/

/**
* @apiGroup Destination
* @apiName addDestination
* @apiVersion 0.1.0
*
* @api {post} /destinations[/]  Ajouter
*
* @apiDescription On ajoute une destination
*
* Retourne une représentation json de la ressource ajoutée
* Un label, des coordonnées ainsi qu'un nom doivent être fournis
*
* Le résultat inclut un lien pour accéder à la destination.
*
* @apiParam  (Paramètres requis) {String} label Label de la destination
* @apiParam  (Paramètres requis) {Float} latitude Latitude de la destination
* @apiParam  (Paramètres requis) {Float} longitude Longitude de la destination
* @apiParam  (Paramètres requis) {String} name Nom de la destination
*
*
* @apiSuccess (Succès : 200) {String} name Nom de la destination
* @apiSuccess (Succès : 200) {Link}   links Lien vers la destination
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*   {
*    "data": {
*      "name": "Nancy",
*      "links": {
*        "self": "/LP/FindYourWay/api/api.php/destination/4"
*      }
*    }
*   }
*
* @apiError (Erreur : 400) Bad Request
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 400 Bad Request
*
*  {
*    "status": {
*      "400": "Veuillez bien compléter les champs suivants: label, longitude, latitude, name."
*    }
*  }
*/

/**
* @apiGroup Destination
* @apiName afficheDestinationId
* @apiVersion 0.1.0
*
* @api {get} /destinations/{id}[/]  Détail
*
* @apiDescription On affiche une destination
*
* Retourne une représentation json des ressources
*
* Le résultat inclut un lien pour accéder à la destination.
*
*
* @apiSuccess (Succès : 200) {Int} id Id de la destination
* @apiSuccess (Succès : 200) {String} label Label de la destination
* @apiSuccess (Succès : 200) {Float} latitude Latitude de la destination
* @apiSuccess (Succès : 200) {Float} longitude Longitude de la destination
* @apiSuccess (Succès : 200) {String} name Nom de la destination
* @apiSuccess (Succès : 200) {Link}   links Lien vers la destination
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*    "data": {
*      "0": {
*        "id": 1,
*        "label": "",
*        "name": "Nancy",
*        "latitude": "48.7092969",
*        "longitude": "6.2126329"
*      },
*      "links ": {
*        "label": {
*          "href": "/LP/FindYourWay/api/api.php/destinations/1"
*        }
*      }
*    }
*
* @apiError (Erreur : 404) Not Found Destination inexistante
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 404 Not Found
*
*  {
*    "status": {
*      "404": "Destination not found."
*    }
*  }
*/

/**
* @apiGroup Destination
* @apiName updateDestination
* @apiVersion 0.1.0
*
* @api {put} /destinations/{id}[/]  Modifier
*
* @apiDescription On modifie une destination
*
* Retourne une représentation json de la ressource ajoutée
* Un label, des coordonnées ainsi qu'un nom doivent être fournis
*
*
* @apiParam  (Paramètres requis) {String} label Label de la destination
* @apiParam  (Paramètres requis) {Float} latitude Latitude de la destination
* @apiParam  (Paramètres requis) {Float} longitude Longitude de la destination
* @apiParam  (Paramètres requis) {String} name Nom de la destination
*
*
* @apiSuccess (Succès : 200) {String} name Nom de la destination
* @apiSuccess (Succès : 200) {Link}   links Lien vers la destination
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*   {
*    "data": {
*      "name": "Nancy",
*      "links": {
*        "self": "/LP/FindYourWay/api/api.php/destination/4"
*      }
*    }
*   }
*
* @apiError (Erreur : 404) Not Found Destination not found
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 404 Not Found
*
*  {
*    "status": {
*      "404": "Destination not found."
*    }
*  }
*
*/

/**
* @apiGroup Destination
* @apiName deleteDestination
* @apiVersion 0.1.0
*
* @api {delete} /destinations/{id}[/]  Supprimer
*
* @apiDescription On supprime une destination
*
*
*
* @apiSuccess (Succès : 200) {String} name Nom de la destination
* @apiSuccess (Succès : 200) {Link}   links Lien vers la destination
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*  {
*    "status": {
*      "200": "Success"
*    }
*  }
*
* @apiError (Erreur : 404) Not Found Destination not found
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 404 Not Found
*
*  {
*    "status": {
*      "404": "Destination not found."
*    }
*  }
*
*/
