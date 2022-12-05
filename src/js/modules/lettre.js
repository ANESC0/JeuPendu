



export function verifLettre(word, letter) {


    
  let result = false;

  for (let i = 0; i < word.length; i++) {
    console.log(letter)
    console.log(word[i].letter)
    console.log(word)
    if (word[i].letter == letter) {
      result = true;
      word[i].hidden = false;
    }
   
  }

  

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

       

        li.textContent = word[i].letter;
       
       

      } else {
        
        li.textContent = " ? ";
       
       
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
