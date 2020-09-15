$(document).ready(function(){

    // creo un oggetto che descrive uno studente con le seguenti proprieta: nome, cognome, eta

    var studente = {
        "nome": " ",
        "cognome": " ",
        "eta": "",
    }

    // stampo a schermo attraverso il for in tutte le proprieta

    for (var proprieta in studente) {
        console.log(proprieta + " " + studente[proprieta]);
    }

    // creo un array di oggetti studenti

    var studenti = [ {
        "nome": "Maurizio",
        "cognome": "Costanzo",
        "eta": 30
    },
    {
        "nome": "Belen",
        "cognome": "Rodriguez",
        "eta": 26
    },
    {
        "nome": "Paolo",
        "cognome": "Mardini",
        "eta": 50
    }
    ]

    // dare la possibilita all'utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
    var nuovoSudente = studente;
    nuovoSudente.nome = prompt("Inserisci il tuo nome");
    nuovoSudente.cognome = prompt("Inserisci il tuo cognome");
    nuovoSudente.eta = parseInt(prompt("Inserisci la tua età"));
    studenti.push(nuovoSudente);
    console.log(studenti);

    // ciclo su tutti gli studenti e stampo per ognuno nome e cognome

    for (var i = 0; i < studenti.length; i++) {
        // creo variabile con l'array studenti.
        var studenteLista = studenti[i];
        console.log(studenteLista.nome + " " + studenteLista.cognome);
    }

});




