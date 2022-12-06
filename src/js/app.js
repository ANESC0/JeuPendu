import {
  verifLettre,
  afficheLetter,
  creerMot,
} from "games/js/modules/lettre.js";

///

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// affichage

const progression = document.getElementById("progression");
const proposition = document.getElementById("checkMot");

// données élémentaires

let tentativesRes = 11;

let listeMots = [
  "alpha",
  "omega",
  "beta",
  "gamma",
  "epouvantail",
  "anticonstitutionnellement",
  "bateau",
  "chat",
  "chien",
  "roue",
  "casquette",
  "gant",
  "soulier",
  "basket",
  "tableau",
  "cachuete",
  "chapeau",
  "botte",
  "scorpion",
  "alchimie",
  "dragon",
  "fourmi",
  "scarabe",
  "baleine",
  "arbre",
  "buisson",
  "cryptomonnaie",
  "telephone",
  "ordinateur",
];

let word = listeMots[getRandomInt(listeMots.length)];

let mot = creerMot(word);

// afficher le nombre de tentatives

const tentatives = document.getElementById("tentatives");
tentatives.textContent = `Tentatives restantes : ${tentativesRes}`;

// afficher le mot a chercher

afficheLetter(word);

//

// on met des ecouteur sur les boutons du clavier

let bA = document.querySelector("#bA");
let bB = document.querySelector("#bB");
let bC = document.querySelector("#bC");
let bD = document.querySelector("#bD");
let bE = document.querySelector("#bE");
let bF = document.querySelector("#bF");
let bG = document.querySelector("#bG");
let bH = document.querySelector("#bH");
let bI = document.querySelector("#bI");
let bJ = document.querySelector("#bJ");
let bK = document.querySelector("#bK");
let bL = document.querySelector("#bL");
let bM = document.querySelector("#bM");
let bN = document.querySelector("#bN");
let bO = document.querySelector("#bO");
let bP = document.querySelector("#bP");
let bQ = document.querySelector("#bQ");
let bR = document.querySelector("#bR");
let bS = document.querySelector("#bS");
let bT = document.querySelector("#bT");
let bU = document.querySelector("#bU");
let bV = document.querySelector("#bV");
let bW = document.querySelector("#bW");
let bX = document.querySelector("#bX");
let bY = document.querySelector("#bY");
let bZ = document.querySelector("#bZ");

let bRejouer = document.querySelector("#rejouer");

// on met des ecouteurs de click sur toutes les touches du clavier

bA.addEventListener("click", () => {
  ProposerLettre(mot, "a");
  actualiseImg(tentativesRes);
});
bB.addEventListener("click", () => {
  ProposerLettre(mot, "b");
  actualiseImg(tentativesRes);
});
bC.addEventListener("click", () => {
  ProposerLettre(mot, "c");
  actualiseImg(tentativesRes);
});
bD.addEventListener("click", () => {
  ProposerLettre(mot, "d");
  actualiseImg(tentativesRes);
});
bE.addEventListener("click", () => {
  ProposerLettre(mot, "e");
  actualiseImg(tentativesRes);
});
bF.addEventListener("click", () => {
  ProposerLettre(mot, "f");
  actualiseImg(tentativesRes);
});
bG.addEventListener("click", () => {
  ProposerLettre(mot, "g");
  actualiseImg(tentativesRes);
});
bH.addEventListener("click", () => {
  ProposerLettre(mot, "h");
  actualiseImg(tentativesRes);
});
bI.addEventListener("click", () => {
  ProposerLettre(mot, "i");
  actualiseImg(tentativesRes);
});
bJ.addEventListener("click", () => {
  ProposerLettre(mot, "j");
  actualiseImg(tentativesRes);
});
bK.addEventListener("click", () => {
  ProposerLettre(mot, "k");
  actualiseImg(tentativesRes);
});
bL.addEventListener("click", () => {
  ProposerLettre(mot, "l");
  actualiseImg(tentativesRes);
});
bM.addEventListener("click", () => {
  ProposerLettre(mot, "m");
  actualiseImg(tentativesRes);
});
bN.addEventListener("click", () => {
  ProposerLettre(mot, "n");
  actualiseImg(tentativesRes);
});
bO.addEventListener("click", () => {
  ProposerLettre(mot, "o");
  actualiseImg(tentativesRes);
});
bP.addEventListener("click", () => {
  ProposerLettre(mot, "p");
  actualiseImg(tentativesRes);
});
bQ.addEventListener("click", () => {
  ProposerLettre(mot, "q");
  actualiseImg(tentativesRes);
});
bR.addEventListener("click", () => {
  ProposerLettre(mot, "r");
  actualiseImg(tentativesRes);
});
bS.addEventListener("click", () => {
  ProposerLettre(mot, "s");
  actualiseImg(tentativesRes);
});
bT.addEventListener("click", () => {
  ProposerLettre(mot, "t");
  actualiseImg(tentativesRes);
});
bU.addEventListener("click", () => {
  ProposerLettre(mot, "u");
  actualiseImg(tentativesRes);
});
bV.addEventListener("click", () => {
  ProposerLettre(mot, "v");
  actualiseImg(tentativesRes);
});
bW.addEventListener("click", () => {
  ProposerLettre(mot, "w");
  actualiseImg(tentativesRes);
});
bX.addEventListener("click", () => {
  ProposerLettre(mot, "x");
  actualiseImg(tentativesRes);
});
bY.addEventListener("click", () => {
  ProposerLettre(mot, "y");
  actualiseImg(tentativesRes);
});
bZ.addEventListener("click", () => {
  ProposerLettre(mot, "z");
  actualiseImg(tentativesRes);
});

bRejouer.addEventListener("click", () => {
  reset();
  document.location = "#jeu";
});

// pour proposer un mot
let motProp = document.getElementById("barreSoluce");

proposition.addEventListener("click", () => {
  proposerMot(motProp.value.toLowerCase());
  actualiseImg(tentativesRes);
});

function ProposerLettre(mot, lettre) {
  try {
    if (tentativesRes > 0) {
      if (tentativesRes > 0 && verifLettre(mot, lettre)) {
        afficheLetter(mot);
        let newInfo = document.createElement("li");
        newInfo.textContent = `Nouvelle lettre ajoutée "${lettre}"`;
        progression.appendChild(newInfo);
      } else {
        let newInfo = document.createElement("li");
        newInfo.textContent = `lettre introuvable`;
        newInfo.style.color = "#FF6347";
        progression.appendChild(newInfo);
        decrementer();
        if (tentativesRes == 0) {
          perdu();
          document.location = "#demo";
        }
      }
    } else {
      let newInfo = document.createElement("li");
      newInfo.textContent = `Vous n'avez plus de tentatives ☠️ `;
      newInfo.style.color = "black";
      progression.appendChild(newInfo);
      perdu();
      document.location = "#demo";
    }
  } catch (error) {
    console.log(error);
  }
}

function proposerMot(moot) {
  if (moot != "") {
    if (tentativesRes > 0) {
      if (moot == word) {
        let titre = document.getElementById("titreF");
        let descr = document.getElementById("descF");

        titre.textContent = "Gagné ! ";
        descr.textContent =
          "vous avez gagné la partie Felicitation ! Voulez-vous relancer une partie?";

        document.location = "#demo";

        console.log("trouvé");
      } else {
        if (tentativesRes == 0) {
          perdu();
          document.location = "#demo";
        } else {
          decrementer();
        }
      }
    } else {
      perdu();
      document.location = "#demo";
    }
  } else {
    // proposition vide
  }
}

function perdu() {
  let titre = document.getElementById("titreF");
  let descr = document.getElementById("descF");

  descr.textContent =
    "vous avez perdu la partie ... Voulez-vous relancer une partie?";
  titre.textContent = "Perdu ! ";
}

function decrementer() {
  if (tentativesRes > 0) {
    tentativesRes -= 1;
    tentatives.textContent = ` Tentatives restantes : ${tentativesRes}`;
  }
}

function actualiseImg(tenta) {
  let tentav = document.getElementById("imgStep");

  switch (tenta) {
    case 11:
      tentav.src = "assets/img/img0.png";
      break;
    case 10:
      tentav.src = "assets/img/img1.png";
      break;
    case 9:
      tentav.src = "assets/img/img2.png";
      break;
    case 8:
      tentav.src = "assets/img/img3.png";
      break;
    case 7:
      tentav.src = "assets/img/img4.png";
      break;
    case 6:
      tentav.src = "assets/img/img5.png";
      break;
    case 5:
      tentav.src = "assets/img/img6.png";
      break;
    case 4:
      tentav.src = "assets/img/img7.png";
      break;
    case 3:
      tentav.src = "assets/img/img8.png";
      break;
    case 2:
      tentav.src = "assets/img/img9.png";
      break;
    case 1:
      tentav.src = "assets/img/img10.png";
      break;
    case 0:
      tentav.src = "assets/img/img11.png";
      break;
  }
}

function reset() {
  tentativesRes = 11;
  word = listeMots[getRandomInt(listeMots.length)];
  mot = creerMot(word);

  tentatives.textContent = `Tentatives restantes : ${tentativesRes}`;

  // afficher le mot a chercher

  afficheLetter(word);

  // remettre l image a 0

  actualiseImg(tentativesRes);

  // on vide l input

  document.querySelector("#barreSoluce").value = "";

  // on vide la div de progression

  progression.innerHTML = "";
}
