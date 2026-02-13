function separerParIndex() {
    const liste = [11, 34, 22, 76, 31, 12, 29];
    
    const indexPair = [];
    const indexImpair = [];

    for (let i = 0; i < liste.length; i++) {
        if (i % 2 === 0) {
            indexPair.push(liste[i]);
        } else {
            indexImpair.push(liste[i]);
        }
    }

    console.log("Indices pairs :", indexPair);
    console.log("Indices impairs :", indexImpair);

    document.body.innerHTML += `
        <div >
            <p><b>Exercice1 :</b></p>
            <p>Indices pairs : [${indexPair.join(', ')}]</p>
            <p>Indices impairs : [${indexImpair.join(', ')}]</p>
        </div>
    `;
}

separerParIndex();