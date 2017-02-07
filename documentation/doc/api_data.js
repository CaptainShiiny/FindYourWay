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
          "content": "    HTTP/1.1 404 Not Found\n\n {\n   \"status\": {\n     \"404\": \"Clue not found\"\n   }\n}",
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
            "type": "Int",
            "optional": false,
            "field": "id_destination",
            "description": "<p>Id de la destination liée</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas de succès",
          "content": " HTTP/1.1 200 OK\n\n{\n  \"label\": \"Grand Est\",\n  \"position\": 1,\n  \"id_destination\": 1\n}",
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
          "content": " HTTP/1.1 200 OK\n\n{\n  \"clue_number\": 3,\n  \"clues\": [\n    {\n      \"label\": \"Tour Eiffel\",\n      \"position\": 1,\n      \"links\": {\n        \"self\": \"/clues/1\"\n      }\n    },\n    {\n      ...\n    }\n  ]\n}",
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
          "content": "HTTP/1.1 200 OK",
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
          "content": " HTTP/1.1 200 OK\n\n\"data\": {\n  \"0\": {\n    \"id\": 1,\n    \"label\": \"\",\n    \"name\": \"Nancy\",\n    \"latitude\": \"48.7092969\",\n    \"longitude\": \"6.2126329\"\n  },\n  \"links \": {\n    \"label\": {\n      \"href\": \"/api.php/destinations/1\"\n    }\n  }\n}",
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
          "content": " HTTP/1.1 200 OK\n\n{\n  \"destinations_number\": 3,\n  \"destinations\": [\n    {\n      \"name\": \"Nancy\",\n      \"links\": {\n        \"self\": \"/api.php/destinations/1\"\n      }\n    },\n    {\n      ...\n    }\n  ]\n}",
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
            "field": "label",
            "description": "<p>Label de la destination</p>"
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
  }
] });
