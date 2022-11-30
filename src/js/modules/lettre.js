



export function verifLettre(word, letter) {


    console.log("ça commence")
  let result = false;

  for (let i = 0; i < word.length; i++) {
    console.log(letter)
    console.log(word[i].letter)
    console.log(word)
    if (word[i].letter == letter) {
      result = true;
      word[i].hidden = false;
    }
    console.log(i)
  }

  console.log(result)

  return result;
}

export function afficheLetter(word) {
  
    let mot = document.getElementById("mot");
    mot.innerHTML="";
    let li;
    console.log("okay")

    for (let i = 0; i < word.length; i++) {

        li = document.createElement("li");
        li.setAttribute("class", "letter");
      if (word[i].hidden == false) {

        console.log("okay"+i)

        li.textContent = word[i].letter;
       
        console.log("lettre ajouté")

      } else {
        
        li.textContent = " ? ";
       
        console.log("la lettre n'est pas ajouté")
      }

      mot.appendChild(li);
    }
  
}

export function creerMot(word) {
  let tab = word.split("");
  let mot = [];

  for (let i = 0; i < tab.length; i++) {
    let currLet = {
      letter: tab[i],
      hidden: true,
    };
    mot.push(currLet);
  }

  return mot;
}
