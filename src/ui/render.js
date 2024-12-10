// Rendu des livres

import {findAllLivres} from "../services/livreService.js";

export const afficherLivres = () => {
    // Récupérer la div avec l'id "booksList"
    const listelivres = document.querySelector("#booksList")

    // Récupérer la liste des livres dans le localStorage (sous la forme d'un tableau)
    const Livres = findAllLivres()

    // Afficher chaque livre sous la forme d'une card

}