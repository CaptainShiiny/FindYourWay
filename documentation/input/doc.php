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
*            "self": "/api.php/destinations/1"
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
*        "self": "/api.php/destination/4"
*      }
*    }
*   }
*
* @apiError (Erreur : 400) BadRequest
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
*          "href": "/api.php/destinations/1"
*        }
*      }
*    }
*
* @apiError (Erreur : 404) NotFound Destination inexistante
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
* @apiParam  (Paramètres possible) {String} label Label de la destination
* @apiParam  (Paramètres possible) {Float} latitude Latitude de la destination
* @apiParam  (Paramètres possible) {Float} longitude Longitude de la destination
* @apiParam  (Paramètres possible) {String} name Nom de la destination
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
*        "self": "/api.php/destination/4"
*      }
*    }
*   }
*
* @apiError (Erreur : 404) NotFound Destination not found
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
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*  {
*    "status": {
*      "200": "Success"
*    }
*  }
*
* @apiError (Erreur : 404) Notfound Destination not found
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
* @apiGroup Clues
* @apiName listClues
* @apiVersion 0.1.0
*
* @api {get} /destinations/{id}/clues[/]  Afficher
*
* @apiDescription On affiche la liste des indices
*
* Retourne une représentation json des ressources
*
* Le résultat inclut le nombre de d'indices et un lien pour accéder à l'indice.
*
*
*
* @apiSuccess (Succès : 200) {Number} destinations_number Nombre d'indices dans la base
* @apiSuccess (Succès : 200) {Array} clues Tableau contenant les informations de chaque indices
* @apiSuccess (Succès : 200) {String} label Label de l'indice
* @apiSuccess (Succès : 200) {Link}   links Lien vers la destination
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*    {
*      "clue_number": 3,
*      "clues": [
*        {
*          "label": "Tour Eiffel",
*          "position": 1,
*          "links": {
*            "self": "/clues/1"
*          }
*        },
*        {
*          ...
*        }
*      ]
*    }
*/

/**
* @apiGroup Clues
* @apiName addClue
* @apiVersion 0.1.0
*
* @api {post} /destination/{id}/clues[/]  Ajouter
*
* @apiDescription On ajoute un indice
*
* Retourne une représentation json de la ressource ajoutée
* Un label ainsi qu'une position doivent être fournis
*
*
* @apiParam  (Paramètres requis) {String} label Label de l'indice
* @apiParam  (Paramètres requis) {Int} position Position de l'indice
*
*
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*    {
*      "Success": "Ajout de l'indice dans la base de données"
*    }
*
* @apiError (Erreur : 400) BadRequest Position déjà présente dans la base
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 400 Bad Request
*
*    {
*      "Error": "La position existe déjà"
*    }
*
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 400 Bad Request
*
*    {
*      "Error": "Il y a déjà 5 indices pour cette destination"
*    }
*
* @apiError (Erreur : 404) NotFound La ressource est introuvable
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 404 Not Found
*
*    {
*      "Error": "Ressource inconnue"
*    }
*/

/**
* @apiGroup Clues
* @apiName detailClue
* @apiVersion 0.1.0
*
* @api {get} /clues/{id}[/]  Détail
*
* @apiDescription On affiche un indice
*
* Retourne une représentation json de la ressource
*
*
* @apiSuccess (Succès : 200) {String} label Label de l'indice
* @apiSuccess (Succès : 200) {Int} position Position de l'indice
* @apiSuccess (Succès : 200) {Int} id_destination Id de la destination liée
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*    {
*      "label": "Grand Est",
*      "position": 1,
*      "id_destination": 1
*    }
*
* @apiError (Erreur : 404) NotFound Indice inexistant
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 404 Not Found
*
*    {
*      "Error": "Ressource Inconnue"
*    }
*/

/**
* @apiGroup Clues
* @apiName updateClue
* @apiVersion 0.1.0
*
* @api {put} /clues/{id}[/]  Modifier
*
* @apiDescription On modifie un indice
*
* Retourne une représentation json de la ressource ajoutée
* Un label ainsi qu'une position doivent être fournis
*
*
* @apiParam  (Paramètres requis) {String} label Label de l'indice
* @apiParam  (Paramètres requis) {Int} position Position de l'indice
*
*
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*
* @apiError (Erreur : 404) NotFound Destination not found
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
* @apiGroup Clues
* @apiName deleteClue
* @apiVersion 0.1.0
*
* @api {delete} /clues/{id}[/]  Supprimer
*
* @apiDescription On supprime un indice
*
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
* @apiError (Erreur : 404) NotFound Clue not found
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 404 Not Found
*
*  {
*    "status": {
*      "404": "Clue not found"
*    }
 * }
*
*/
