//console.log("JS - Gestionnaires - Mes Livres JS")

export const setupGestionnaire = () => {

    // Récupérer les éléments dans le DOM
    const toggleFormBtn = document.querySelector("#toggleFormBtn")
    const formSection = document.querySelector("#formSection")

    //
    const formCollapse = new bootstrap.Collapse(formSection, {toggle : false})

    // Gestionnaire click bouton toggleFormBtn
    toggleFormBtn.addEventListener("click", ()=> {
        formCollapse.toggle()
    })
}