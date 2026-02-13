function comparerPrixVoitures() {
    
    const voiture1 = {
        marque: "Renault",
        modele: "Clio",
        prix: 13000
    };

    const voiture2 = {
        marque: "Renault",
        modele: "Megane",
        prix: 18000
    };

    let voitureLaPlusChere;

    if (voiture1.prix > voiture2.prix) {
        voitureLaPlusChere = voiture1;
    } else {
        voitureLaPlusChere = voiture2;
    }

    const resultat = "Voiture la plus chère : " + voitureLaPlusChere.marque + " " + voitureLaPlusChere.modele;

    console.log(resultat);

    document.body.innerHTML += `<p>Exercice2 : <b>${resultat}</b></p>`;
}

comparerPrixVoitures();