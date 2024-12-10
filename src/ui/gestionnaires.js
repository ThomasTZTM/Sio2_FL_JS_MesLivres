//console.log("JS - Gestionnaires - Mes Livres JS")

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
        //console.log(titre,auteur,resume,estLu)

        // *******************************
        // Sauvegarder les données saisies
        // *******************************

        // 1. Créer un objet JS à partir des données saisies
        const livre = {
            titre : titre,
            auteur : auteur,
            resume : resume,
            estLu : estLu,

            id : crypto.randomUUID(),
            createdAt : new Date().toDateString()
        }
        //console.log(livre)

        // 2. Sérialiser transformer en json (str)
        const livreJson = JSON.stringify(livre)
        //console.log(livreJson)

        // 3. Sauvegarder dans le localstorage (JSON)
        // 3.1 Récupérer dans le localstorage la valeur liée à la clé "livres"
        const livresJson = localStorage.getItem("livres")
        //console.log(livreJson)
        // 3.2 Désérialiser le JSON dans un tableau JS
        const livres = livresJson ? JSON.parse(livresJson) : []
        //console.log(livres)
        // 3.3 Ajouter l'objet livre dans le tableau livre
        livres.push(livre)
        // 3.4 Sauvegarder le tableau livre dans le localstorage sous la clé "livres"
        localStorage.setItem("livres",JSON.stringify(livres))

        // 4. Cacher collapse le formulaire
        formCollapse.hide()

    })
}