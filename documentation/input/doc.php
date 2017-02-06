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
