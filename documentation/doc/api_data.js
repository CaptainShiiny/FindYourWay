define({ "api": [
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
  }
] });
