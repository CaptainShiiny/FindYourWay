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
* @apiSuccess (Succès : 200) {Int} id Id de la destination à afficher
* @apiSuccess (Succès : 200) {String} name Nom de la destination
* @apiSuccess (Succès : 200) {Link}   links Lien vers la destination
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*    {
*      "destinations_number": 1,
*      "destinations": [
*        {
*          "id": "1",
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
*        "name": "Nancy",
*     	 "label": "Félicitation, vous avez gagné une place VIP pour le concert du chanteur que vous voulez.",
*      	 "latitude": "48.683331",
*      	 "longitude": "6.2",
*      },
*      "links ": {
*          "href": "/FindYourWay/api/api.php/destinations/1"
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
*      "404": "Une erreur est survenue."
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
* @apiParam  (Paramètres possible) {String} name Nom de la destination
* @apiParam  (Paramètres possible) {Float} latitude Latitude de la destination
* @apiParam  (Paramètres possible) {Float} longitude Longitude de la destination
* @apiParam  (Paramètres possible) {String} label Label de la destination
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
*      "name": "Paris",
*      "links": {
*        "self": "FindYourWay/api/api.php/destination/4"
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
* @apiSuccess (Succès : 200) {Int} Id id de l'indice
* @apiSuccess (Succès : 200) {Number} destinations_number Nombre d'indices dans la base
* @apiSuccess (Succès : 200) {Array} clues Tableau contenant les informations de chaque indices
* @apiSuccess (Succès : 200) {String} label Label de l'indice
* @apiSuccess (Succès : 200) {Link}   links Lien vers la destination
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*    {
*      "clue_number": 5,
*      "clues": [
*        {
*          "id": "1"
*          "label": "Meurthe-et-Moselle",
*          "position": 1,
*          "links": {
*            "self": "/FindYourWay/api/api.php/clues/1"
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
* @apiSuccess (Succès : 200) {String} name nom de la destination (par rapport à id_destination)
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*    {
*      "label": "Grand Est",
*      "position": 1,
*      "destination": {
*         "name": "Nancy",
*         "link": "/FindYourWay/api/api.php/destinations/1"
*       }
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
*  {
*	"data": {
*	"name": "Plus belle place d'Europe",
*	"links": {
*	  "self": "/FindYourWay/api/api.php/clues/3"
*    }
*   }
*  }
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
*      "404": "Clues not found"
*    }
*  }
*
*/

/**
* @apiGroup Places
* @apiName listPlaces
* @apiVersion 0.1.0
*
* @api {get} /places	Afficher
*
* @apiDescription On affiche une destination avec ces détails
*
* Retourne une représentation json de la ressource ajoutée
*
* @apiSuccess (Succès : 200) {Int} places_number Nombre de places présentes dans la base de données
* @apiSuccess (Succès : 200) {String} label Nom de la place associé à la destination finale
* @apiSuccess (Succès : 200) {Array} places Tableau comportant les détails de la place 
* @apiSuccess (Succès : 200) {float} latitude Coordonnées (latitude) de la place
* @apiSuccess (Succès : 200) {float} longitude Coordonnées (longitude) de la place
*
* @apiSuccessExample {json} Exemple de réponse en cas de succés
*     HTTP/1.1 200 OK
*
*  {
*     "data": {
*     "places_number": 3,
*     "places": [
*       {
*	      "label": "Orly",
*	      "latitude": "48.726194",
*	      "longitude": "2.365097",
*	      "links": {
*	        "self": "/FindYourWay/api/api.php/places/1"
*	       }
*        },
*        {
*          ...
*        }
*     ]
*    }
*  }
*
*/

/**
* @apiGroup Places
* @apiName Places
* @apiVersion 0.1.0
*
* @api {get} /places/{id}[/]	Détails
*
* @apiDescription On affiche une destination avec ces détails
*
* Retourne une représentation json de la ressource ajoutée
*
* @apiSuccess (Succès : 200) {String} name Nom de la place associé
* @apiSuccess (Succès : 200) {float} latitude Coordonnées (latitude) de la place
* @apiSuccess (Succès : 200) {float} longitude Coordonnées (longitude) de la place
*
*
* @apiSuccessExample {json} Exemple de réponse en cas de succés
*     HTTP/1.1 200 OK
*
*  {
*	"data": {
*	  "name": "Orly",
*	  "latitude": "48.726194",
*	  "longitude": "2.365097",
*	  "links": {
*	    "places": "/FindYourWay/api/api.php/places/1"
*	  }
*    }
*  }
*
* @apiError (Erreur : 404) NotFound Place not found
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 404 Not Found
*
*  {
*    "status": {
*      "404": "Place not found"
*    }
*  }
*/

/**
* @apiGroup Places
* @apiName addPlaces
* @apiVersion 0.1.0
*
* @api {post} /places[/] Ajouter
*
* @apiDescription Ajout d'une destination
*
*
* @apiSuccess (Succès : 200) {String} name Nom de la place associé
* @apiSuccess (Succès : 200) {float} latitude Coordonnées (latitude) de la place
* @apiSuccess (Succès : 200) {float} longitude Coordonnées (longitude) de la place
*
* @apiParam (Paramètres requis) {String} label Nom de la place à ajouter
* @apiParam (Paramètres requis) {Int} longitude Coordonnées (longitude) de la place
* @apiParam (Paramètres requis) {Int} latitude Coordonnées (latitude) de la place
*
* @apiSuccessExample {json} Exemple de réponse en cas de succés
*     HTTP/1.1 200 OK
*
*  {
*	"data": {
*	  "name": "Parc de la pépinière",
*	  "links": {
*	    "self": "/FindYourWay/api/api.php/places/4"
*	  }
*    }
*  }
*
* @apiError (Erreur : 400) BadRequest Place not Created
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 400 BadRequest
*
*  {
*    "status": {
*      "400": "Veuillez bien compléter les champs suivants : label, longitude, latitude."
*    }
*  }
*/

/**
* @apiGroup Places
* @apiName updatePlaces
* @apiVersion 0.1.0
*
* @api {put} /places/{id}[/]  Modifier
*
* @apiDescription On modifie un lieu
*
* Retourne une représentation json de la ressource ajoutée
* Un label ainsi qu'une longitude et latitude doivent être fournis
*
* @apiSuccess (Succès : 200) {String} name Nom de la place modifié
*
* @apiParam  (Paramètres requis) {String} label Label du lieu
* @apiParam  (Paramètres requis) {Int} latitude Coordonnées géographiques (latitude) du lieu
* @apiParam  (Paramètres requis) {Int} longitude Coordonnées géographiques (longitude) du lieu
*
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*  {
*	"data": {
*	"name": "Paris",
*	"links": {
*	  "self": "/FindYourWay/api/api.php/places/2"
*    }
*   }
*  }
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
* @apiGroup Places
* @apiName deletePlaces
* @apiVersion 0.1.0
*
* @api {delete} /places/{id}[/]  Supprimer
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
* @apiError (Erreur : 404) NotFound Place not found
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 404 Not Found
*
*  {
*    "status": {
*      "404": "Place not found"
*    }
*  }
*
*/

/**
* @apiGroup Game
* @apiName addGame
* @apiVersion 0.1.0
*
* @api {post} /players/{id}/destinations/{destinations_id}/games[/] Ajouter
*
* @apiDescription Ajout d'une partie
*
*
*
* @apiSuccessExample {json} Exemple de réponse en cas de succés
*     HTTP/1.1 200 OK
*
*  {
*	"data": {
*	  "links": {
*	    "self": "/FindYourWay/api/api.php/players/1/games/21"
*	  }
*    }
*  }
*
* @apiError (Erreur : 403) Forbidden game not Created
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 403 Forbidden
*
*  {
*    "status": {
*      "403": "No Token"
*    }
*  }
*/

/**
* @apiGroup Game
* @apiName getGameId
* @apiVersion 0.1.0
*
* @api {get} /players/{id}/games/{id}[/]	Afficher
*
* @apiDescription On affiche le joueur qui est en rapport avec la partie
*
* Retourne une représentation json de la ressource ajoutée
*
* @apiSuccess (Succès : 200) {String} joueur Nom du joueur
* @apiSuccess (Succès : 200) {float} score Le score du joueur effectuant la partie
* @apiSuccess (Succès : 200) {float} destination La ville à trouver
*
*
* @apiSuccessExample {json} Exemple de réponse en cas de succés
*     HTTP/1.1 200 OK
*
*  {
*	"data": {
*	  "joueur": "Dorian",
*	  "score": "0",
*	  "destination": "Nancy",
*	  "links": {
*       "player": "/FindYourWay/api/api.php/players/1", 
*	    "destination": "/FindYourWay/api/api.php/destinations/1"
*	  }
*    }
*  }
*
* @apiError (Erreur : 403) Forbidden Invalid Token
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 403 Forbidden
*
*  {
*    "status": {
*      "403": "Invalid token."
*    }
*  }
*
* @apiError (Erreur : 404) NotFound
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 404 Not Found
*
*  {
*    "status": {
*      "404": "Game not found."
*    }
*  }
*/

/**
* @apiGroup Game
* @apiName getGame
* @apiVersion 0.1.0
*
* @api {get} /players/{id}/games[/]	Détails
*
* @apiDescription On affiche la liste des parties en rapport avec le joueur 
*
* Retourne une représentation json de la ressource ajoutée
*
* @apiSuccess (Succès : 200) {String} joueur Nom du joueur
* @apiSuccess (Succès : 200) {float} score Le score du joueur effectuant la partie
*
* @apiParam  (Paramètres requis) {String} Token Token du joueur
*
* @apiSuccessExample {json} Exemple de réponse en cas de succés
*     HTTP/1.1 200 OK
*
*  {
*	"data": {
*	  "joueur": "Dorian",
*	  "game": "1",
*	  "links": {
*       "player": "/FindYourWay/api/api.php/players/1/games", 
*	   }
*    }
*  }
*
* @apiError (Erreur : 403) Forbidden Invalid Token
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 403 Forbidden
*
*  {
*    "status": {
*      "403": "Invalid token."
*    }
*  }
*
* @apiError (Erreur : 404) NotFound
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 404 Not Found
*
*  {
*    "status": {
*      "404": "Liste not found."
*    }
*  }
*/

/**
* @apiGroup Game
* @apiName deleteGame
* @apiVersion 0.1.0
*
* @api {delete} /players/{id}/games/{id}[/]  Supprimer
*
* @apiDescription On supprime le jeu auquel était relié le joueur.
*
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*  {
*    "status": {
*      "200": "Le jeu a été supprimé avec succès."
*    }
*  }
*
* @apiError (Erreur : 404) NotFound Game not found
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 404 Not Found
*
*  {
*    "status": {
*      "404": " not found"
*    }
*  }
*
*/

/**
* @apiGroup Game
* @apiName updateGame
* @apiVersion 0.1.0
*
* @api {put} /players/{id}/games/{id}[/]  Modifier
*
* @apiDescription On modifie une destination dans un jeu
*
* Retourne une représentation json de la ressource ajoutée
* Un label ainsi qu'une longitude et latitude doivent être fournis
*
* @apiSuccess (Succès : 200) {String} destination Nom de la destination modifié
*
* @apiParam  (Paramètres requis) {String} destination destination du lieu qui a changé
* @apiParam  (Paramètres requis) {String} Token Token du joueur pour accèder à la partie
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*  {
*	"data": {
*	"destination": "Nancy",
*	"links": {
*	  "self": "/FindYourWay/api/api.php/players/18"
*    }
*   }
*  }
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
* @apiError (Erreur : 403) Forbidden Invalid Token
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 403 Forbidden
*
*  {
*    "status": {
*      "403": "Invalid token."
*    }
*  }
*
*/

/**
* @apiGroup Players
* @apiName deletePlayers
* @apiVersion 0.1.0
*
* @api {delete} /players/{id}[/]  Supprimer
*
* @apiDescription On supprime le joueur.
*
*
* @apiSuccessExample {json} Exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*  {
*    "status": {
*      "200": "The player has been delete."
*    }
*  }
*
* @apiError (Erreur : 404) NotFound Player not found
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 404 Not Found
*
*  {
*    "status": {
*      "404": " Player not found"
*    }
*  }
*
*/

/**
* @apiGroup Players
* @apiName addPlayer
* @apiVersion 0.1.0
*
* @api {post} /players Ajouter
*
* @apiDescription Ajout d'un joueur
*
* @apiSuccess (Succès : 200) {String} Token Le token du joueur est retourné
*
* @apiParam  (Paramètres requis) {String} pseudo Le nom du joueur
*
* @apiSuccessExample {json} Exemple de réponse en cas de succés
*     HTTP/1.1 200 OK
*
*  {
*	"data": {
*	  "token": "qEJ+dbGB4DOqYE4BP75KnbBuyXRZnfjS"
      "links": {
*	    "self": "/FindYourWay/api/api.php/players/21"
*	  }
*    }
*  }
*
* @apiError (Erreur : 400) BadRequest Player not Created
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 400 Bad Request
*
*  {
*    "status": {
*      "400": "Il manque une valeur au champ pseudo."
*    }
*  }
*/

/**
* @apiGroup Players
* @apiName listPlayers
* @apiVersion 0.1.0
*
* @api {get} /players	Afficher
*
* @apiDescription On affiche les joueurs avec leurs détails.
*
* Retourne une représentation json de la ressource ajoutée
*
* @apiSuccess (Succès : 200) {Int} players_number Nombre de joueurs présents dans la base
* @apiSuccess (Succès : 200) {String} pseudo Le pseudonyme du joueur
* @apiSuccess (Succès : 200) {Array} players Tableau comportant les détails de chaque joueur
*
* @apiSuccessExample {json} Exemple de réponse en cas de succés
*     HTTP/1.1 200 OK
*
*  {
*     "data": {
*     "players_number": 18,
*     "players": [
*       {
*	      "pseudo": "Dorian",
*	      "links": {
*	        "self": "/FindYourWay/api/api.php/players/1"
*	       }
*        },
*        {
*          ...
*        }
*     ]
*    }
*  }
*
*/

/**
* @apiGroup Players
* @apiName getPlayerId
* @apiVersion 0.1.0
*
* @api {get} /players/{id}[/]	Détails
*
* @apiDescription On affiche un joueur en particulier
*
* Retourne une représentation json de la ressource ajoutée
*
* @apiSuccess (Succès : 200) {String} joueur Nom du joueur
*
*
* @apiSuccessExample {json} Exemple de réponse en cas de succés
*     HTTP/1.1 200 OK
*
*  {
*	"data": {
*	  "pseudo": "Dorian",
*	  }
*    }
*  }
*
* @apiError (Erreur : 400) Forbidden Invalid Token
*
* @apiErrorExample {json} Exemple de réponse en cas d'erreur
*     HTTP/1.1 400 Forbidden
*
*  {
*    "status": {
*      "400": "Une erreur est survenue."
*    }
*  }
*
*/