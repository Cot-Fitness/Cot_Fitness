const onglets = Array.from(document.querySelectorAll(".ongletC"));
const contenu = Array.from(document.querySelectorAll(".container"));
let index = 0;

onglets.forEach(onglet => {
    onglet.addEventListener("click", tabsAnimation);
});

function tabsAnimation(e) {
    const newIndex = onglets.indexOf(e.target);
    
    if (document.startViewTransition) {
        document.startViewTransition(() => updateTabs(newIndex));
    } else {
        updateTabs(newIndex);
    }
}

function updateTabs(newIndex) {
    onglets[index].classList.remove("activeOnglet");
    contenu[index].classList.remove("activeInfoOnglet");
    
    index = newIndex;
    
    onglets[index].classList.add("activeOnglet");
    contenu[index].classList.add("activeInfoOnglet");
}

const filtres = Array.from(document.querySelectorAll(".filtre"));
const pricing = Array.from(document.querySelectorAll(".offresTarifs"));

filtres.forEach(filtre => {
    filtre.addEventListener("click", filtrage)
})

let ordre = 0;
function filtrage(e) {
    const el = e.target;

    // Retirer les classes actives de l'onglet et du contenu actuel
    filtres[ordre].classList.remove("activF");
    pricing[ordre].classList.remove("activFT");

    // Mettre à jour l'index en fonction de l'onglet cliqué
    ordre = filtres.indexOf(el);

    // Ajouter les classes actives au nouvel onglet et contenu
    filtres[ordre].classList.add("activF");
    pricing[ordre].classList.add("activFT");

}

document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('CoursCo');
    const prices = document.querySelectorAll('.prix');
    
    checkbox.addEventListener('change', function() {
        prices.forEach(price => {
            let basePrice = parseInt(price.textContent); // Récupérer le prix de base à partir de l'attribut data
            if (checkbox.checked) {
                price.textContent = (basePrice + 5) + '€/mois';
                price.classList.add("CourCoDes");
            } else {
                price.textContent = (basePrice - 5 ) + '€/mois';
                price.classList.remove("CourCoDes") // Restaurer le prix de base
            }
        });
    });
});