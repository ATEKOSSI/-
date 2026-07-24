// Le texte touchant découpé avec des retours à la ligne
const texteMessage = "Le temps passe, les chemins prennent parfois des directions différentes, et nos ambitions n'ont pas toujours trouvé le même écho.\n\nOn n'a pas pu concrétiser tout ce qu'on imaginait, et c'est ainsi...\n\nMais au-delà des silences, des virages et des difficultés, il y a une certitude qui ne bouge pas : ta gentillesse.\n\nTu es une personne profondément gentille, Mouna, et c'est précisément pour cela que je t'aime et t'apprécie telle que tu es.";

let indexLettre = 0;
const vitesseEcriture = 40; // Vitesse en millisecondes entre chaque lettre

function taperTexte() {
    const conteneurTexte = document.getElementById("texte-poeme");
    
    if (indexLettre < texteMessage.length) {
        conteneurTexte.textContent += texteMessage.charAt(indexLettre);
        indexLettre++;
        setTimeout(taperTexte, vitesseEcriture);
    } else {
        // Une fois le texte entièrement écrit, on affiche le bouton pour continuer
        const btnSuivant = document.getElementById("btn-suivant");
        btnSuivant.classList.remove("cache");
        btnSuivant.style.display = "inline-block";
    }
}

function passerAEcran(numeroEcran) {
    // 1. Cacher tous les écrans
    const ecrans = document.querySelectorAll('.ecran');
    ecrans.forEach(ecran => {
        ecran.classList.remove('actif');
        ecran.style.display = 'none';
    });

    // 2. Afficher l'écran demandé
    const ecranCible = document.getElementById('ecran' + numeroEcran);
    ecranCible.style.display = 'block';
    
    // Petit timeout pour laisser le temps au display de s'activer avant l'animation CSS
    setTimeout(() => {
        ecranCible.classList.add('actif');
    }, 50);

    // 3. Actions spécifiques selon l'écran
    if (numeroEcran === 2) {
        // Lancer la musique dès le premier clic
        const musique = document.getElementById("musique-anniv");
        musique.play().catch(error => console.log("Lecture audio bloquée :", error));
        
        // Lancer l'effet machine à écrire
        taperTexte();
    }
}
