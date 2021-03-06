define({ "api": [
  {
    "group": "Clues",
    "name": "addClue",
    "version": "0.1.0",
    "type": "post",
    "url": "/destination/{id}/clues[/]",
    "title": "Ajouter",
    "description": "<p>On ajoute un indice</p> <p>Retourne une représentation json de la ressource ajoutée Un label ainsi qu'une position doivent être fournis</p>",
    "parameter": {
      "fields": {
        "Paramètres requis": [
          {
            "group": "Paramètres requis",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Label de l'indice</p>"
          },
          {
            "group": "Paramètres requis",
            "type": "Int",
            "optional": false,
            "field": "position",
            "description": "<p>Position de l'indice</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": " HTTP/1.1 200 OK\n\n{\n  \"Success\": \"Ajout de l'indice dans la base de données\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Position déjà présente dans la base</p>"
          }
        ],
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>La ressource est introuvable</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": " HTTP/1.1 400 Bad Request\n\n{\n  \"Error\": \"La position existe déjà\"\n}",
          "type": "json"
        },
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": " HTTP/1.1 400 Bad Request\n\n{\n  \"Error\": \"Il y a déjà 5 indices pour cette destination\"\n}",
          "type": "json"
        },
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": " HTTP/1.1 404 Not Found\n\n{\n  \"Error\": \"Ressource inconnue\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Clues"
  },
  {
    "group": "Clues",
    "name": "deleteClue",
    "version": "0.1.0",
    "type": "delete",
    "url": "/clues/{id}[/]",
    "title": "Supprimer",
    "description": "<p>On supprime un indice</p>",
    "success": {
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": "   HTTP/1.1 200 OK\n\n{\n  \"status\": {\n    \"200\": \"Success\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Clue not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 404 Not Found\n\n{\n  \"status\": {\n    \"404\": \"Clues not found\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Clues"
  },
  {
    "group": "Clues",
    "name": "detailClue",
    "version": "0.1.0",
    "type": "get",
    "url": "/clues/{id}[/]",
    "title": "Détail",
    "description": "<p>On affiche un indice</p> <p>Retourne une représentation json de la ressource</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Label de l'indice</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Int",
            "optional": false,
            "field": "position",
            "description": "<p>Position de l'indice</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>nom de la destination (par rapport à id_destination)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": " HTTP/1.1 200 OK\n\n{\n  \"label\": \"Grand Est\",\n  \"position\": 1,\n  \"destination\": {\n     \"name\": \"Nancy\",\n     \"link\": \"/FindYourWay/api/api.php/destinations/1\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Indice inexistant</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": " HTTP/1.1 404 Not Found\n\n{\n  \"Error\": \"Ressource Inconnue\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Clues"
  },
  {
    "group": "Clues",
    "name": "listClues",
    "version": "0.1.0",
    "type": "get",
    "url": "/destinations/{id}/clues[/]",
    "title": "Afficher",
    "description": "<p>On affiche la liste des indices</p> <p>Retourne une représentation json des ressources</p> <p>Le résultat inclut le nombre de d'indices et un lien pour accéder à l'indice.</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Int",
            "optional": false,
            "field": "Id",
            "description": "<p>id de l'indice</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "destinations_number",
            "description": "<p>Nombre d'indices dans la base</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Array",
            "optional": false,
            "field": "clues",
            "description": "<p>Tableau contenant les informations de chaque indices</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Label de l'indice</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Link",
            "optional": false,
            "field": "links",
            "description": "<p>Lien vers la destination</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": " HTTP/1.1 200 OK\n\n{\n  \"clue_number\": 5,\n  \"clues\": [\n    {\n      \"id\": \"1\"\n      \"label\": \"Meurthe-et-Moselle\",\n      \"position\": 1,\n      \"links\": {\n        \"self\": \"/FindYourWay/api/api.php/clues/1\"\n      }\n    },\n    {\n      ...\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Clues"
  },
  {
    "group": "Clues",
    "name": "updateClue",
    "version": "0.1.0",
    "type": "put",
    "url": "/clues/{id}[/]",
    "title": "Modifier",
    "description": "<p>On modifie un indice</p> <p>Retourne une représentation json de la ressource ajoutée Un label ainsi qu'une position doivent être fournis</p>",
    "parameter": {
      "fields": {
        "Paramètres requis": [
          {
            "group": "Paramètres requis",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Label de l'indice</p>"
          },
          {
            "group": "Paramètres requis",
            "type": "Int",
            "optional": false,
            "field": "position",
            "description": "<p>Position de l'indice</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n\n {\n\t\"data\": {\n\t\"name\": \"Plus belle place d'Europe\",\n\t\"links\": {\n\t  \"self\": \"/FindYourWay/api/api.php/clues/3\"\n   }\n  }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Destination not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 404 Not Found\n\n{\n  \"status\": {\n    \"404\": \"Destination not found.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Clues"
  },
  {
    "group": "Destination",
    "name": "addDestination",
    "version": "0.1.0",
    "type": "post",
    "url": "/destinations[/]",
    "title": "Ajouter",
    "description": "<p>On ajoute une destination</p> <p>Retourne une représentation json de la ressource ajoutée Un label, des coordonnées ainsi qu'un nom doivent être fournis</p> <p>Le résultat inclut un lien pour accéder à la destination.</p>",
    "parameter": {
      "fields": {
        "Paramètres requis": [
          {
            "group": "Paramètres requis",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Label de la destination</p>"
          },
          {
            "group": "Paramètres requis",
            "type": "Float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude de la destination</p>"
          },
          {
            "group": "Paramètres requis",
            "type": "Float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude de la destination</p>"
          },
          {
            "group": "Paramètres requis",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de la destination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Link",
            "optional": false,
            "field": "links",
            "description": "<p>Lien vers la destination</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": "  HTTP/1.1 200 OK\n\n{\n \"data\": {\n   \"name\": \"Nancy\",\n   \"links\": {\n     \"self\": \"/api.php/destination/4\"\n   }\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "BadRequest",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 400 Bad Request\n\n{\n  \"status\": {\n    \"400\": \"Veuillez bien compléter les champs suivants: label, longitude, latitude, name.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Destination"
  },
  {
    "group": "Destination",
    "name": "afficheDestinationId",
    "version": "0.1.0",
    "type": "get",
    "url": "/destinations/{id}[/]",
    "title": "Détail",
    "description": "<p>On affiche une destination</p> <p>Retourne une représentation json des ressources</p> <p>Le résultat inclut un lien pour accéder à la destination.</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Label de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Link",
            "optional": false,
            "field": "links",
            "description": "<p>Lien vers la destination</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": " HTTP/1.1 200 OK\n\n\"data\": {\n  \"0\": {\n    \"name\": \"Nancy\",\n \t \"label\": \"Félicitation, vous avez gagné une place VIP pour le concert du chanteur que vous voulez.\",\n  \t \"latitude\": \"48.683331\",\n  \t \"longitude\": \"6.2\",\n  },\n  \"links \": {\n      \"href\": \"/FindYourWay/api/api.php/destinations/1\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Destination inexistante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 404 Not Found\n\n{\n  \"status\": {\n    \"404\": \"Une erreur est survenue.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Destination"
  },
  {
    "group": "Destination",
    "name": "deleteDestination",
    "version": "0.1.0",
    "type": "delete",
    "url": "/destinations/{id}[/]",
    "title": "Supprimer",
    "description": "<p>On supprime une destination</p>",
    "success": {
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": "   HTTP/1.1 200 OK\n\n{\n  \"status\": {\n    \"200\": \"Success\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "Notfound",
            "description": "<p>Destination not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 404 Not Found\n\n{\n  \"status\": {\n    \"404\": \"Destination not found.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Destination"
  },
  {
    "group": "Destination",
    "name": "listDestinations",
    "version": "0.1.0",
    "type": "get",
    "url": "/destinations[/]",
    "title": "Afficher",
    "description": "<p>On affiche la liste des destinations</p> <p>Retourne une représentation json des ressources</p> <p>Le résultat inclut un lien pour accéder à la destination.</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "destinations_number",
            "description": "<p>Nombre de destinations dans la base</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Array",
            "optional": false,
            "field": "destinations",
            "description": "<p>Tableau contenant les informations de chaque destinations</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la destination à afficher</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Link",
            "optional": false,
            "field": "links",
            "description": "<p>Lien vers la destination</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": " HTTP/1.1 200 OK\n\n{\n  \"destinations_number\": 1,\n  \"destinations\": [\n    {\n      \"id\": \"1\",\n      \"name\": \"Nancy\",\n      \"links\": {\n        \"self\": \"/api.php/destinations/1\"\n      }\n    },\n    {\n      ...\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Destination"
  },
  {
    "group": "Destination",
    "name": "updateDestination",
    "version": "0.1.0",
    "type": "put",
    "url": "/destinations/{id}[/]",
    "title": "Modifier",
    "description": "<p>On modifie une destination</p> <p>Retourne une représentation json de la ressource ajoutée Un label, des coordonnées ainsi qu'un nom doivent être fournis</p>",
    "parameter": {
      "fields": {
        "Paramètres possible": [
          {
            "group": "Paramètres possible",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de la destination</p>"
          },
          {
            "group": "Paramètres possible",
            "type": "Float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude de la destination</p>"
          },
          {
            "group": "Paramètres possible",
            "type": "Float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude de la destination</p>"
          },
          {
            "group": "Paramètres possible",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Label de la destination</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de la destination</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Link",
            "optional": false,
            "field": "links",
            "description": "<p>Lien vers la destination</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": "  HTTP/1.1 200 OK\n\n{\n \"data\": {\n   \"name\": \"Paris\",\n   \"links\": {\n     \"self\": \"FindYourWay/api/api.php/destination/4\"\n   }\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Destination not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 404 Not Found\n\n{\n  \"status\": {\n    \"404\": \"Destination not found.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Destination"
  },
  {
    "group": "Game",
    "name": "addGame",
    "version": "0.1.0",
    "type": "post",
    "url": "/players/{id}/destinations/{destinations_id}/games[/]",
    "title": "Ajouter",
    "description": "<p>Ajout d'une partie</p>",
    "success": {
      "examples": [
        {
          "title": "Exemple de réponse en cas de succés",
          "content": "    HTTP/1.1 200 OK\n\n {\n\t\"data\": {\n\t  \"links\": {\n\t    \"self\": \"/FindYourWay/api/api.php/players/1/games/21\"\n\t  }\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 403": [
          {
            "group": "Erreur : 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>game not Created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 403 Forbidden\n\n{\n  \"status\": {\n    \"403\": \"No Token\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Game"
  },
  {
    "group": "Game",
    "name": "deleteGame",
    "version": "0.1.0",
    "type": "delete",
    "url": "/players/{id}/games/{id}[/]",
    "title": "Supprimer",
    "description": "<p>On supprime le jeu auquel était relié le joueur.</p>",
    "success": {
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": "   HTTP/1.1 200 OK\n\n{\n  \"status\": {\n    \"200\": \"Le jeu a été supprimé avec succès.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Game not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 404 Not Found\n\n{\n  \"status\": {\n    \"404\": \" not found\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Game"
  },
  {
    "group": "Game",
    "name": "getGame",
    "version": "0.1.0",
    "type": "get",
    "url": "/players/{id}/games[/]",
    "title": "Détails",
    "description": "<p>On affiche la liste des parties en rapport avec le joueur</p> <p>Retourne une représentation json de la ressource ajoutée</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "joueur",
            "description": "<p>Nom du joueur</p>"
          },
          {
            "group": "Succès : 200",
            "type": "float",
            "optional": false,
            "field": "score",
            "description": "<p>Le score du joueur effectuant la partie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succés",
          "content": "    HTTP/1.1 200 OK\n\n {\n\t\"data\": {\n\t  \"joueur\": \"Dorian\",\n\t  \"game\": \"1\",\n\t  \"links\": {\n      \"player\": \"/FindYourWay/api/api.php/players/1/games\", \n\t   }\n   }\n }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Paramètres requis": [
          {
            "group": "Paramètres requis",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token du joueur</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Erreur : 403": [
          {
            "group": "Erreur : 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Invalid Token</p>"
          }
        ],
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 403 Forbidden\n\n{\n  \"status\": {\n    \"403\": \"Invalid token.\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 404 Not Found\n\n{\n  \"status\": {\n    \"404\": \"Liste not found.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Game"
  },
  {
    "group": "Game",
    "name": "getGameId",
    "version": "0.1.0",
    "type": "get",
    "url": "/players/{id}/games/{id}[/]",
    "title": "Afficher",
    "description": "<p>On affiche le joueur qui est en rapport avec la partie</p> <p>Retourne une représentation json de la ressource ajoutée</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "joueur",
            "description": "<p>Nom du joueur</p>"
          },
          {
            "group": "Succès : 200",
            "type": "float",
            "optional": false,
            "field": "score",
            "description": "<p>Le score du joueur effectuant la partie</p>"
          },
          {
            "group": "Succès : 200",
            "type": "float",
            "optional": false,
            "field": "destination",
            "description": "<p>La ville à trouver</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succés",
          "content": "    HTTP/1.1 200 OK\n\n {\n\t\"data\": {\n\t  \"joueur\": \"Dorian\",\n\t  \"score\": \"0\",\n\t  \"destination\": \"Nancy\",\n\t  \"links\": {\n      \"player\": \"/FindYourWay/api/api.php/players/1\", \n\t    \"destination\": \"/FindYourWay/api/api.php/destinations/1\"\n\t  }\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 403": [
          {
            "group": "Erreur : 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Invalid Token</p>"
          }
        ],
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 403 Forbidden\n\n{\n  \"status\": {\n    \"403\": \"Invalid token.\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 404 Not Found\n\n{\n  \"status\": {\n    \"404\": \"Game not found.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Game"
  },
  {
    "group": "Game",
    "name": "updateGame",
    "version": "0.1.0",
    "type": "put",
    "url": "/players/{id}/games/{id}[/]",
    "title": "Modifier",
    "description": "<p>On modifie une destination dans un jeu</p> <p>Retourne une représentation json de la ressource ajoutée Un label ainsi qu'une longitude et latitude doivent être fournis</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>Nom de la destination modifié</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n\n {\n\t\"data\": {\n\t\"destination\": \"Nancy\",\n\t\"links\": {\n\t  \"self\": \"/FindYourWay/api/api.php/players/18\"\n   }\n  }\n }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Paramètres requis": [
          {
            "group": "Paramètres requis",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>destination du lieu qui a changé</p>"
          },
          {
            "group": "Paramètres requis",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Token du joueur pour accèder à la partie</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Destination not found</p>"
          }
        ],
        "Erreur : 403": [
          {
            "group": "Erreur : 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Invalid Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 404 Not Found\n\n{\n  \"status\": {\n    \"404\": \"Destination not found.\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 403 Forbidden\n\n{\n  \"status\": {\n    \"403\": \"Invalid token.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Game"
  },
  {
    "group": "Places",
    "name": "Places",
    "version": "0.1.0",
    "type": "get",
    "url": "/places/{id}[/]",
    "title": "Détails",
    "description": "<p>On affiche une destination avec ces détails</p> <p>Retourne une représentation json de la ressource ajoutée</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de la place associé</p>"
          },
          {
            "group": "Succès : 200",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Coordonnées (latitude) de la place</p>"
          },
          {
            "group": "Succès : 200",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Coordonnées (longitude) de la place</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succés",
          "content": "    HTTP/1.1 200 OK\n\n {\n\t\"data\": {\n\t  \"name\": \"Orly\",\n\t  \"latitude\": \"48.726194\",\n\t  \"longitude\": \"2.365097\",\n\t  \"links\": {\n\t    \"places\": \"/FindYourWay/api/api.php/places/1\"\n\t  }\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Place not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 404 Not Found\n\n{\n  \"status\": {\n    \"404\": \"Place not found\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Places"
  },
  {
    "group": "Places",
    "name": "addPlaces",
    "version": "0.1.0",
    "type": "post",
    "url": "/places[/]",
    "title": "Ajouter",
    "description": "<p>Ajout d'une destination</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de la place associé</p>"
          },
          {
            "group": "Succès : 200",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Coordonnées (latitude) de la place</p>"
          },
          {
            "group": "Succès : 200",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Coordonnées (longitude) de la place</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succés",
          "content": "    HTTP/1.1 200 OK\n\n {\n\t\"data\": {\n\t  \"name\": \"Parc de la pépinière\",\n\t  \"links\": {\n\t    \"self\": \"/FindYourWay/api/api.php/places/4\"\n\t  }\n   }\n }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Paramètres requis": [
          {
            "group": "Paramètres requis",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Nom de la place à ajouter</p>"
          },
          {
            "group": "Paramètres requis",
            "type": "Int",
            "optional": false,
            "field": "longitude",
            "description": "<p>Coordonnées (longitude) de la place</p>"
          },
          {
            "group": "Paramètres requis",
            "type": "Int",
            "optional": false,
            "field": "latitude",
            "description": "<p>Coordonnées (latitude) de la place</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Place not Created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 400 BadRequest\n\n{\n  \"status\": {\n    \"400\": \"Veuillez bien compléter les champs suivants : label, longitude, latitude.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Places"
  },
  {
    "group": "Places",
    "name": "deletePlaces",
    "version": "0.1.0",
    "type": "delete",
    "url": "/places/{id}[/]",
    "title": "Supprimer",
    "description": "<p>On supprime une destination</p>",
    "success": {
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": "   HTTP/1.1 200 OK\n\n{\n  \"status\": {\n    \"200\": \"Success\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Place not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 404 Not Found\n\n{\n  \"status\": {\n    \"404\": \"Place not found\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Places"
  },
  {
    "group": "Places",
    "name": "listPlaces",
    "version": "0.1.0",
    "type": "get",
    "url": "/places",
    "title": "Afficher",
    "description": "<p>On affiche une destination avec ces détails</p> <p>Retourne une représentation json de la ressource ajoutée</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Int",
            "optional": false,
            "field": "places_number",
            "description": "<p>Nombre de places présentes dans la base de données</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Nom de la place associé à la destination finale</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Array",
            "optional": false,
            "field": "places",
            "description": "<p>Tableau comportant les détails de la place</p>"
          },
          {
            "group": "Succès : 200",
            "type": "float",
            "optional": false,
            "field": "latitude",
            "description": "<p>Coordonnées (latitude) de la place</p>"
          },
          {
            "group": "Succès : 200",
            "type": "float",
            "optional": false,
            "field": "longitude",
            "description": "<p>Coordonnées (longitude) de la place</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succés",
          "content": "    HTTP/1.1 200 OK\n\n {\n    \"data\": {\n    \"places_number\": 3,\n    \"places\": [\n      {\n\t      \"label\": \"Orly\",\n\t      \"latitude\": \"48.726194\",\n\t      \"longitude\": \"2.365097\",\n\t      \"links\": {\n\t        \"self\": \"/FindYourWay/api/api.php/places/1\"\n\t       }\n       },\n       {\n         ...\n       }\n    ]\n   }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Places"
  },
  {
    "group": "Places",
    "name": "updatePlaces",
    "version": "0.1.0",
    "type": "put",
    "url": "/places/{id}[/]",
    "title": "Modifier",
    "description": "<p>On modifie un lieu</p> <p>Retourne une représentation json de la ressource ajoutée Un label ainsi qu'une longitude et latitude doivent être fournis</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de la place modifié</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n\n {\n\t\"data\": {\n\t\"name\": \"Paris\",\n\t\"links\": {\n\t  \"self\": \"/FindYourWay/api/api.php/places/2\"\n   }\n  }\n }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Paramètres requis": [
          {
            "group": "Paramètres requis",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Label du lieu</p>"
          },
          {
            "group": "Paramètres requis",
            "type": "Int",
            "optional": false,
            "field": "latitude",
            "description": "<p>Coordonnées géographiques (latitude) du lieu</p>"
          },
          {
            "group": "Paramètres requis",
            "type": "Int",
            "optional": false,
            "field": "longitude",
            "description": "<p>Coordonnées géographiques (longitude) du lieu</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Destination not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 404 Not Found\n\n{\n  \"status\": {\n    \"404\": \"Destination not found.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Places"
  },
  {
    "group": "Players",
    "name": "addPlayer",
    "version": "0.1.0",
    "type": "post",
    "url": "/players",
    "title": "Ajouter",
    "description": "<p>Ajout d'un joueur</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>Le token du joueur est retourné</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succés",
          "content": "    HTTP/1.1 200 OK\n\n {\n\t\"data\": {\n\t  \"token\": \"qEJ+dbGB4DOqYE4BP75KnbBuyXRZnfjS\"\n      \"links\": {\n\t    \"self\": \"/FindYourWay/api/api.php/players/21\"\n\t  }\n   }\n }",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Paramètres requis": [
          {
            "group": "Paramètres requis",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": "<p>Le nom du joueur</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Player not Created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 400 Bad Request\n\n{\n  \"status\": {\n    \"400\": \"Il manque une valeur au champ pseudo.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Players"
  },
  {
    "group": "Players",
    "name": "deletePlayers",
    "version": "0.1.0",
    "type": "delete",
    "url": "/players/{id}[/]",
    "title": "Supprimer",
    "description": "<p>On supprime le joueur.</p>",
    "success": {
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": "   HTTP/1.1 200 OK\n\n{\n  \"status\": {\n    \"200\": \"The player has been delete.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Player not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 404 Not Found\n\n{\n  \"status\": {\n    \"404\": \" Player not found\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Players"
  },
  {
    "group": "Players",
    "name": "getPlayerId",
    "version": "0.1.0",
    "type": "get",
    "url": "/players/{id}[/]",
    "title": "Détails",
    "description": "<p>On affiche un joueur en particulier</p> <p>Retourne une représentation json de la ressource ajoutée</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "joueur",
            "description": "<p>Nom du joueur</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succés",
          "content": "    HTTP/1.1 200 OK\n\n {\n\t\"data\": {\n\t  \"pseudo\": \"Dorian\",\n\t  }\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>Invalid Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": "   HTTP/1.1 400 Forbidden\n\n{\n  \"status\": {\n    \"400\": \"Une erreur est survenue.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Players"
  },
  {
    "group": "Players",
    "name": "listPlayers",
    "version": "0.1.0",
    "type": "get",
    "url": "/players",
    "title": "Afficher",
    "description": "<p>On affiche les joueurs avec leurs détails.</p> <p>Retourne une représentation json de la ressource ajoutée</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Int",
            "optional": false,
            "field": "players_number",
            "description": "<p>Nombre de joueurs présents dans la base</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "pseudo",
            "description": "<p>Le pseudonyme du joueur</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Array",
            "optional": false,
            "field": "players",
            "description": "<p>Tableau comportant les détails de chaque joueur</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succés",
          "content": "    HTTP/1.1 200 OK\n\n {\n    \"data\": {\n    \"players_number\": 18,\n    \"players\": [\n      {\n\t      \"pseudo\": \"Dorian\",\n\t      \"links\": {\n\t        \"self\": \"/FindYourWay/api/api.php/players/1\"\n\t       }\n       },\n       {\n         ...\n       }\n    ]\n   }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Players"
  }
] });
