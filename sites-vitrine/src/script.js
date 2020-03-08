
//FONCTIONS DE LA PAGE PRINCIPALE : INDEX.HTML //
function changerTitre(id) {
    let titre = document.getElementById(id);
    titre.style.fontSize = "40px";
    titre.style.color = "#808e9b";

}
window.changerTitre = changerTitre;

function changerTitreRetour(id, color) {
    let titre = document.getElementById(id);
    titre.style.fontSize = "35px";
    if (color == null) {
        titre.style.color = "black";
    } else {
        titre.style.color = color;
    }
}
window.changerTitreRetour = changerTitreRetour;


const ajouter = new Vue({
    el: '#ajouter',
    data: {
        counter: 0
    }
})

const valider = new Vue({
    el: '#valider',
    data: {
        btnMsg: 'Valider ma commande',
        nouveauMsg: 'Validé !'
    },
    methods: {
        changerValider: function () {
            if (this.btnMsg == 'Valider ma commande') {
                this.btnMsg = this.nouveauMsg;
                document.getElementById("messageAnnonce").innerHTML = "<strong>Merci pour votre commande</strong>";
            } else if (this.btnMsg == this.nouveauMsg) {
                document.getElementById("messageAnnonce").innerHTML = "<span style= 'color: red;'><strong>Vous avez déjà validé !</strong></span>";
            }

        }
    }

})

const choisirMenu = new Vue({
    el: '#choisir-menu',
    data: {
        btnMsg: 'Choisir mes menus',
        nouveauMsg: 'Menus choisis'
    },
    methods: {
        choisirMenu: function () {
            if (this.btnMsg == 'Choisir mes menus') {
                this.btnMsg = this.nouveauMsg;
                document.getElementById("messageMenu").innerHTML = "<strong>Menus selectionnés avec succès</<strong>";
            } else if (this.btnMsg == this.nouveauMsg) {
                document.getElementById("messageMenu").innerHTML = "<span style= 'color: red;'><strong>Vous avez déjà selectionné vos menus</strong></span>"
            }
        }
    }
})

function changerCouleurPlats(id) {
    let plat = document.getElementById(id);
    plat.style.backgroundColor = "#ecf0f1";
}
window.changerCouleurPlats = changerCouleurPlats;


function changerCouleurPlatsRetour(id) {
    let plat = document.getElementById(id);
    plat.style.backgroundColor = "white";
}
window.changerCouleurPlatsRetour = changerCouleurPlatsRetour;



function changerBoutonForm(id) {
    let bouton = document.getElementById(id);
    bouton.textContent = "Message envoyé !"
}
window.changerBoutonForm = changerBoutonForm;

function focusMsg(id) {
    let Msg = document.getElementById(id);
    Msg.style.backgroundColor = "#ffcccc";
}
window.focusMsg = focusMsg;

function mettreConceptEnValeur(id) {
    let concept = document.getElementById(id);
    concept.style.backgroundColor = " #2f3542";
    concept.style.color = "#ced6e0";
}
window.mettreConceptEnValeur = mettreConceptEnValeur;

function mettreConceptOrigine(id) {
    let concept = document.getElementById(id);
    concept.style.backgroundColor = "#ced6e0";
    concept.style.color = " #2f3542";
}
window.mettreConceptOrigine = mettreConceptOrigine;

function backgroundReserver(id) {
    let reserver = document.getElementById(id);
    reserver.style.backgroundColor = "#808e9b";
    reserver.style.border = "dashed black";
}
window.backgroundReserver = backgroundReserver;

function backgroundRerserverRetour(id) {
    let reserver = document.getElementById(id);
    reserver.style.backgroundColor = "#ecf0f1";
    reserver.style.border = "dashed  #808e9b";
}
window.backgroundRerserverRetour = backgroundRerserverRetour;

function focusSurInput(id) {
    let input = document.getElementById(id);
    input.style.backgroundColor = "#ecf0f1";
}
window.focusSurInput = focusSurInput;

const buttonResa = new Vue({
    el: '#valider-resa',
    data: {
        btnMsg: 'Valider ma réservation',
        nouveauMsg: 'Validé !'
    },
    methods: {
        changerValiderResa: function () {
            if (this.btnMsg == 'Valider ma réservation') {
                this.btnMsg = this.nouveauMsg;
                document.getElementById('messageAnnonceResa').innerHTML = "<strong>Merci pour votre réservation</strong>";
            } else if (this.btnMsg == this.nouveauMsg) {
                document.getElementById('messageAnnonceResa').innerHTML = "<span style= 'color: red;'><strong>Vous avez déjà réservé !</strong></span>"
            }
        }
    }
})

// FONCTIONS POUR FAIRE MARCHER LE CALENDRIER //

class Calendar {
    constructor(domTarget) {
        // On récupère l'élément DOM passé en paramètre
        domTarget = domTarget || '.calendar';
        this.domElement = document.querySelector(domTarget);

        // Renvoit une erreur si l'élément n'éxiste pas
        if (!this.domElement) throw "Calendar - L'élément spécifié est introuvable";

        // Liste des mois
        this.monthList = new Array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aôut', 'septembre', 'octobre', 'novembre', 'décembre');

        // Liste des jours de la semaine
        this.dayList = new Array('dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi');

        // Date actuelle
        this.today = new Date();
        this.today.setHours(0, 0, 0, 0);

        // Mois actuel
        this.currentMonth = new Date(this.today.getFullYear(), this.today.getMonth(), 1);

        // On créé le div qui contiendra l'entête de notre calendrier
        let header = document.createElement('div');
        header.classList.add('header');
        this.domElement.appendChild(header);

        // On créé le div qui contiendra les jours de notre calendrier
        this.content = document.createElement('div');
        this.domElement.appendChild(this.content);

        // Bouton "précédent"
        let previousButton = document.createElement('button');
        previousButton.setAttribute('data-action', '-1');
        previousButton.textContent = '\u003c';
        header.appendChild(previousButton);

        // Div qui contiendra le mois/année affiché
        this.monthDiv = document.createElement('div');
        this.monthDiv.classList.add('month');
        header.appendChild(this.monthDiv);

        // Bouton "suivant"
        let nextButton = document.createElement('button');
        nextButton.setAttribute('data-action', '1');
        nextButton.textContent = '\u003e';
        header.appendChild(nextButton);

        // Action des boutons "précédent" et "suivant"
        this.domElement.querySelectorAll('button').forEach(element => {
            element.addEventListener('click', () => {
                this.currentMonth.setMonth(this.currentMonth.getMonth() * 1 + element.getAttribute('data-action') * 1);
                this.loadMonth(this.currentMonth);
            });
        });

        // On charge le mois actuel
        this.loadMonth(this.currentMonth);
    }

    loadMonth(date) {
        // On vide notre calendrier
        this.content.textContent = '';

        // On ajoute le mois/année affiché
        this.monthDiv.textContent = this.monthList[date.getMonth()].toUpperCase() + ' ' + date.getFullYear();

        // Création des cellules contenant le jour de la semaine
        for (let i = 0; i < this.dayList.length; i++) {
            let cell = document.createElement('span');
            cell.classList.add('cell');
            cell.classList.add('day');
            cell.textContent = this.dayList[i].substring(0, 3).toUpperCase();
            this.content.appendChild(cell);
        }

        // Création des cellules vides si nécessaire
        for (let i = 0; i < date.getDay(); i++) {
            let cell = document.createElement('span');
            cell.classList.add('cell');
            cell.classList.add('empty');
            this.content.appendChild(cell);
        }

        // Nombre de jour dans le mois affiché
        let monthLength = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        // Création des cellules contenant les jours du mois affiché
        for (let i = 1; i <= monthLength; i++) {
            let cell = document.createElement('span');
            cell.classList.add('cell');
            cell.textContent = i;
            this.content.appendChild(cell);

            // Timestamp de la cellule
            let timestamp = new Date(date.getFullYear(), date.getMonth(), i).getTime();

            // Ajoute une classe spéciale pour aujourd'hui
            if (timestamp === this.today.getTime()) {
                cell.classList.add('today');
            }
        }
    }
}

// Création de notre objet
const calendar = new Calendar('#calendar');

window.calendar = calendar;


// FONCTIONS POUR LA PAGE : RESERVATION.HTML //

// Bouton RESERVER 
const reserverCalendrier = new Vue({
    el: '#reserver-jour',
    data: {
        btnMsg: 'Réserver',
        nouveauMsg: 'Nous vous remercions !'
    },
    methods: {
        choisirJour: function () {
            if (this.btn == 'Réserver') {
                this.btn = this.nouveauMsg;
            }
        }
    }
})

// Regex Numéro de téléphone
const tel = new Vue({
    el: '#reserver-bordure1',
    data: {
        numeroTel: "(0|\\+33|0033)[1-9][0-9]{8}",
    },
    methods: {
        mettreNumTel: function () {
            if (this.numeroTel !== this.numeroTel) {
                return false
            }
        }
    }
})

const telBis = new Vue({
    el: '#selection-menu',
    data: {
        numeroTel: "(0|\\+33|0033)[1-9][0-9]{8}",
    },
    methods: {
        mettreNumTel: function () {
            if (this.numeroTel !== this.numeroTel) {
                return false
            }
        }
    }
})
































