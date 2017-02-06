define({ "api": [
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
          "content": "  HTTP/1.1 200 OK\n\n{\n \"data\": {\n   \"name\": \"Nancy\",\n   \"links\": {\n     \"self\": \"/LP/FindYourWay/api/api.php/destination/4\"\n   }\n }\n}",
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
            "field": "Not",
            "description": "<p>Found Destination inexistante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": " HTTP/1.1 404 Not Found\n\n{\n  \"Error\": \"Destination 143 inexistante\"\n}",
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
          "content": " HTTP/1.1 200 OK\n\n\"data\": {\n  \"0\": {\n    \"id\": 1,\n    \"label\": \"\",\n    \"name\": \"Nancy\",\n    \"latitude\": \"48.7092969\",\n    \"longitude\": \"6.2126329\"\n  },\n  \"links \": {\n    \"label\": {\n      \"href\": \"/LP/FindYourWay/api/api.php/destinations/1\"\n    }\n  }\n}",
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
            "field": "Not",
            "description": "<p>Found Destination inexistante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": " HTTP/1.1 404 Not Found\n\n{\n  \"Error\": \"Destination 143 inexistante\"\n}",
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
            "field": "Not",
            "description": "<p>Found Destination not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": " HTTP/1.1 404 Not Found\n\n{\n\"status\": {\n  \"404\": \"Destination not found.\"\n}",
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
          "content": " HTTP/1.1 200 OK\n\n{\n  \"destinations_number\": 3,\n  \"destinations\": [\n    {\n      \"name\": \"Nancy\",\n      \"links\": {\n        \"self\": \"/LP/FindYourWay/api/api.php/destinations/1\"\n      }\n    },\n    {\n      ...\n    }\n  ]\n}",
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
          "content": "  HTTP/1.1 200 OK\n\n{\n \"data\": {\n   \"name\": \"Nancy\",\n   \"links\": {\n     \"self\": \"/LP/FindYourWay/api/api.php/destination/4\"\n   }\n }\n}",
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
            "field": "Not",
            "description": "<p>Found Destination not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemple de réponse en cas d'erreur",
          "content": " HTTP/1.1 404 Not Found\n\n{\n\"status\": {\n  \"404\": \"Destination not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "input/doc.php",
    "groupTitle": "Destination"
  }
] });
