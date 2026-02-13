function vigenere() {
    let message = prompt("Entrez le message à chiffrer :");
    let cle = prompt("Entrez la clé (lettres uniquement) :");

    if (!message || !cle) return;

    message = message.toUpperCase();
    cle = cle.toUpperCase();

    if (!/^[A-Z]+$/.test(cle)) {
        alert("La clé doit contenir uniquement des lettres !");
        return;
    }

    let messageChiffre = "";
    let indexCle = 0; 

    for (let i = 0; i < message.length; i++) {
        let codeM = message.charCodeAt(i);

        if (codeM >= 65 && codeM <= 90) {
            let m = codeM - 65; 
            
            let k = cle.charCodeAt(indexCle % cle.length) - 65; 

            let c = (m + k) % 26; 
            
            messageChiffre += String.fromCharCode(c + 65);
            indexCle++; 
        } else {
            messageChiffre += message[i];
        }
    }

    console.log("Message original :", message);
    console.log("Clé :", cle);
    console.log("Résultat :", messageChiffre);

    document.body.innerHTML += `
        <div>
            <p><b>Chiffrement de Vigenère</b></p>
            <p>Message : ${message}</p>
            <p>Clé : ${cle}</p>
            <p><b>Résultat : ${messageChiffre}</b></p>
        </div>
    `;
}

vigenere();