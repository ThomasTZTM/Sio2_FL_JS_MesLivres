//console.log("JS - Gestionnaires - Mes Livres JS")

import {insertLivre} from "../services/livreService.js";
import {afficherLivres} from "./render.js";

export const setupGestionnaire = () => {

    // Récupérer les éléments dans le DOM
    const toggleFormBtn = document.querySelector("#toggleFormBtn")
    const formSection = document.querySelector("#formSection")
    const formCollapse = new bootstrap.Collapse(formSection, {toggle : false})
    const livreForm = document.querySelector("#bookForm")

    // Gestionnaire click bouton toggleFormBtn
    toggleFormBtn.addEventListener("click", ()=> {
        formCollapse.toggle()
    })

    // On reset le formulaire lorsque celui ci est caché
    formSection.addEventListener('hidden.bs.collapse', () =>{
        livreForm.reset()
    })

    // Traitement du formulaire
    livreForm.addEventListener("submit", (evt) =>{
        //Empécher le rechargement de la page
        evt.preventDefault()
        // Récupérer les valeurs saisies
        const titre = livreForm.title.value
        const auteur = livreForm.author.value
        const resume = livreForm.summary.value
        const estLu = livreForm.isRead.checked

        // Sauvegarder les données saisies
        insertLivre(titre,auteur,resume,estLu)

        // Fermer le formulaire
        formCollapse.hide()

        // Re-afficher la liste des livres
        afficherLivres()

    })
}