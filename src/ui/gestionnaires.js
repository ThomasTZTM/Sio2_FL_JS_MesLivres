//console.log("JS - Gestionnaires - Mes Livres JS")

import {insertLivre, modifierEtat} from "../services/livreService.js";
import {afficherLivres} from "./render.js";
import {supprimerLivre} from "../services/livreService.js";

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

    // Traitement suppression d'un livre
    // Délégation d'évenement
    const listeLivres = document.querySelector("#booksList")
    listeLivres.addEventListener("click", (evt) =>{   // gérer le click
        // Récupérer l'élement sur lequel on à clicker
        const target = evt.target.closest(".delete-btn, .toggle-read-btn")
        if (target === null) return;
        // Récupérer l'id du livre à supprimer
        const idLivre = target.dataset.id
        // Déterminer
        if (target.classList.contains("delete-btn")) {
            supprimerLivre(idLivre)
            afficherLivres()
        }else if (target.classList.contains("toggle-read-btn")) {
            console.log("modif")
        }
    })
}