/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n//FONCTIONS DE LA PAGE PRINCIPALE : INDEX.HTML //\r\nfunction changerTitre(id) {\r\n    let titre = document.getElementById(id);\r\n    titre.style.fontSize = \"40px\";\r\n    titre.style.color = \"#808e9b\";\r\n\r\n}\r\nwindow.changerTitre = changerTitre;\r\n\r\nfunction changerTitreRetour(id, color) {\r\n    let titre = document.getElementById(id);\r\n    titre.style.fontSize = \"35px\";\r\n    if (color == null) {\r\n        titre.style.color = \"black\";\r\n    } else {\r\n        titre.style.color = color;\r\n    }\r\n}\r\nwindow.changerTitreRetour = changerTitreRetour;\r\n\r\n\r\nconst ajouter = new Vue({\r\n    el: '#ajouter',\r\n    data: {\r\n        counter: 0\r\n    }\r\n})\r\n\r\nconst valider = new Vue({\r\n    el: '#valider',\r\n    data: {\r\n        btnMsg: 'Valider ma commande',\r\n        nouveauMsg: 'Validé !'\r\n    },\r\n    methods: {\r\n        changerValider: function () {\r\n            if (this.btnMsg == 'Valider ma commande') {\r\n                this.btnMsg = this.nouveauMsg;\r\n                document.getElementById(\"messageAnnonce\").innerHTML = \"<strong>Merci pour votre commande</strong>\";\r\n            } else if (this.btnMsg == this.nouveauMsg) {\r\n                document.getElementById(\"messageAnnonce\").innerHTML = \"<span style= 'color: red;'><strong>Vous avez déjà validé !</strong></span>\";\r\n            }\r\n\r\n        }\r\n    }\r\n\r\n})\r\n\r\nconst choisirMenu = new Vue({\r\n    el: '#choisir-menu',\r\n    data: {\r\n        btnMsg: 'Choisir mes menus',\r\n        nouveauMsg: 'Menus choisis'\r\n    },\r\n    methods: {\r\n        choisirMenu: function () {\r\n            if (this.btnMsg == 'Choisir mes menus') {\r\n                this.btnMsg = this.nouveauMsg;\r\n                document.getElementById(\"messageMenu\").innerHTML = \"<strong>Menus selectionnés avec succès</<strong>\";\r\n            } else if (this.btnMsg == this.nouveauMsg) {\r\n                document.getElementById(\"messageMenu\").innerHTML = \"<span style= 'color: red;'><strong>Vous avez déjà selectionné vos menus</strong></span>\"\r\n            }\r\n        }\r\n    }\r\n})\r\n\r\nfunction changerCouleurPlats(id) {\r\n    let plat = document.getElementById(id);\r\n    plat.style.backgroundColor = \"#ecf0f1\";\r\n}\r\nwindow.changerCouleurPlats = changerCouleurPlats;\r\n\r\n\r\nfunction changerCouleurPlatsRetour(id) {\r\n    let plat = document.getElementById(id);\r\n    plat.style.backgroundColor = \"white\";\r\n}\r\nwindow.changerCouleurPlatsRetour = changerCouleurPlatsRetour;\r\n\r\n\r\n\r\nfunction changerBoutonForm(id) {\r\n    let bouton = document.getElementById(id);\r\n    bouton.textContent = \"Message envoyé !\"\r\n}\r\nwindow.changerBoutonForm = changerBoutonForm;\r\n\r\nfunction focusMsg(id) {\r\n    let Msg = document.getElementById(id);\r\n    Msg.style.backgroundColor = \"#ffcccc\";\r\n}\r\nwindow.focusMsg = focusMsg;\r\n\r\nfunction mettreConceptEnValeur(id) {\r\n    let concept = document.getElementById(id);\r\n    concept.style.backgroundColor = \" #2f3542\";\r\n    concept.style.color = \"#ced6e0\";\r\n}\r\nwindow.mettreConceptEnValeur = mettreConceptEnValeur;\r\n\r\nfunction mettreConceptOrigine(id) {\r\n    let concept = document.getElementById(id);\r\n    concept.style.backgroundColor = \"#ced6e0\";\r\n    concept.style.color = \" #2f3542\";\r\n}\r\nwindow.mettreConceptOrigine = mettreConceptOrigine;\r\n\r\nfunction backgroundReserver(id) {\r\n    let reserver = document.getElementById(id);\r\n    reserver.style.backgroundColor = \"#808e9b\";\r\n    reserver.style.border = \"dashed black\";\r\n}\r\nwindow.backgroundReserver = backgroundReserver;\r\n\r\nfunction backgroundRerserverRetour(id) {\r\n    let reserver = document.getElementById(id);\r\n    reserver.style.backgroundColor = \"#ecf0f1\";\r\n    reserver.style.border = \"dashed  #808e9b\";\r\n}\r\nwindow.backgroundRerserverRetour = backgroundRerserverRetour;\r\n\r\nfunction focusSurInput(id) {\r\n    let input = document.getElementById(id);\r\n    input.style.backgroundColor = \"#ecf0f1\";\r\n}\r\nwindow.focusSurInput = focusSurInput;\r\n\r\nconst buttonResa = new Vue({\r\n    el: '#valider-resa',\r\n    data: {\r\n        btnMsg: 'Valider ma réservation',\r\n        nouveauMsg: 'Validé !'\r\n    },\r\n    methods: {\r\n        changerValiderResa: function () {\r\n            if (this.btnMsg == 'Valider ma réservation') {\r\n                this.btnMsg = this.nouveauMsg;\r\n                document.getElementById('messageAnnonceResa').innerHTML = \"<strong>Merci pour votre réservation</strong>\";\r\n            } else if (this.btnMsg == this.nouveauMsg) {\r\n                document.getElementById('messageAnnonceResa').innerHTML = \"<span style= 'color: red;'><strong>Vous avez déjà réservé !</strong></span>\"\r\n            }\r\n        }\r\n    }\r\n})\r\n\r\n// FONCTIONS POUR FAIRE MARCHER LE CALENDRIER //\r\n\r\nclass Calendar {\r\n    constructor(domTarget) {\r\n        // On récupère l'élément DOM passé en paramètre\r\n        domTarget = domTarget || '.calendar';\r\n        this.domElement = document.querySelector(domTarget);\r\n\r\n        // Renvoit une erreur si l'élément n'éxiste pas\r\n        if (!this.domElement) throw \"Calendar - L'élément spécifié est introuvable\";\r\n\r\n        // Liste des mois\r\n        this.monthList = new Array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aôut', 'septembre', 'octobre', 'novembre', 'décembre');\r\n\r\n        // Liste des jours de la semaine\r\n        this.dayList = new Array('dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi');\r\n\r\n        // Date actuelle\r\n        this.today = new Date();\r\n        this.today.setHours(0, 0, 0, 0);\r\n\r\n        // Mois actuel\r\n        this.currentMonth = new Date(this.today.getFullYear(), this.today.getMonth(), 1);\r\n\r\n        // On créé le div qui contiendra l'entête de notre calendrier\r\n        let header = document.createElement('div');\r\n        header.classList.add('header');\r\n        this.domElement.appendChild(header);\r\n\r\n        // On créé le div qui contiendra les jours de notre calendrier\r\n        this.content = document.createElement('div');\r\n        this.domElement.appendChild(this.content);\r\n\r\n        // Bouton \"précédent\"\r\n        let previousButton = document.createElement('button');\r\n        previousButton.setAttribute('data-action', '-1');\r\n        previousButton.textContent = '\\u003c';\r\n        header.appendChild(previousButton);\r\n\r\n        // Div qui contiendra le mois/année affiché\r\n        this.monthDiv = document.createElement('div');\r\n        this.monthDiv.classList.add('month');\r\n        header.appendChild(this.monthDiv);\r\n\r\n        // Bouton \"suivant\"\r\n        let nextButton = document.createElement('button');\r\n        nextButton.setAttribute('data-action', '1');\r\n        nextButton.textContent = '\\u003e';\r\n        header.appendChild(nextButton);\r\n\r\n        // Action des boutons \"précédent\" et \"suivant\"\r\n        this.domElement.querySelectorAll('button').forEach(element => {\r\n            element.addEventListener('click', () => {\r\n                this.currentMonth.setMonth(this.currentMonth.getMonth() * 1 + element.getAttribute('data-action') * 1);\r\n                this.loadMonth(this.currentMonth);\r\n            });\r\n        });\r\n\r\n        // On charge le mois actuel\r\n        this.loadMonth(this.currentMonth);\r\n    }\r\n\r\n    loadMonth(date) {\r\n        // On vide notre calendrier\r\n        this.content.textContent = '';\r\n\r\n        // On ajoute le mois/année affiché\r\n        this.monthDiv.textContent = this.monthList[date.getMonth()].toUpperCase() + ' ' + date.getFullYear();\r\n\r\n        // Création des cellules contenant le jour de la semaine\r\n        for (let i = 0; i < this.dayList.length; i++) {\r\n            let cell = document.createElement('span');\r\n            cell.classList.add('cell');\r\n            cell.classList.add('day');\r\n            cell.textContent = this.dayList[i].substring(0, 3).toUpperCase();\r\n            this.content.appendChild(cell);\r\n        }\r\n\r\n        // Création des cellules vides si nécessaire\r\n        for (let i = 0; i < date.getDay(); i++) {\r\n            let cell = document.createElement('span');\r\n            cell.classList.add('cell');\r\n            cell.classList.add('empty');\r\n            this.content.appendChild(cell);\r\n        }\r\n\r\n        // Nombre de jour dans le mois affiché\r\n        let monthLength = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();\r\n\r\n        // Création des cellules contenant les jours du mois affiché\r\n        for (let i = 1; i <= monthLength; i++) {\r\n            let cell = document.createElement('span');\r\n            cell.classList.add('cell');\r\n            cell.textContent = i;\r\n            this.content.appendChild(cell);\r\n\r\n            // Timestamp de la cellule\r\n            let timestamp = new Date(date.getFullYear(), date.getMonth(), i).getTime();\r\n\r\n            // Ajoute une classe spéciale pour aujourd'hui\r\n            if (timestamp === this.today.getTime()) {\r\n                cell.classList.add('today');\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n// Création de notre objet\r\nconst calendar = new Calendar('#calendar');\r\n\r\nwindow.calendar = calendar;\r\n\r\n\r\n// FONCTIONS POUR LA PAGE : RESERVATION.HTML //\r\n\r\n// Bouton RESERVER \r\nconst reserverCalendrier = new Vue({\r\n    el: '#reserver-jour',\r\n    data: {\r\n        btnMsg: 'Réserver',\r\n        nouveauMsg: 'Nous vous remercions !'\r\n    },\r\n    methods: {\r\n        choisirJour: function () {\r\n            if (this.btn == 'Réserver') {\r\n                this.btn = this.nouveauMsg;\r\n            }\r\n        }\r\n    }\r\n})\r\n\r\n// Regex Numéro de téléphone\r\nconst tel = new Vue({\r\n    el: '#reserver-bordure1',\r\n    data: {\r\n        numeroTel: \"(0|\\\\+33|0033)[1-9][0-9]{8}\",\r\n    },\r\n    methods: {\r\n        mettreNumTel: function () {\r\n            if (this.numeroTel !== this.numeroTel) {\r\n                return false\r\n            }\r\n        }\r\n    }\r\n})\r\n\r\nconst telBis = new Vue({\r\n    el: '#selection-menu',\r\n    data: {\r\n        numeroTel: \"(0|\\\\+33|0033)[1-9][0-9]{8}\",\r\n    },\r\n    methods: {\r\n        mettreNumTel: function () {\r\n            if (this.numeroTel !== this.numeroTel) {\r\n                return false\r\n            }\r\n        }\r\n    }\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });