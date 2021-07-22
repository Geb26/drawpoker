const carte1 = document.querySelector("#carte1");
const carte2 = document.querySelector("#carte2");
const carte3 = document.querySelector("#carte3");
const carte4 = document.querySelector("#carte4");
const carte5 = document.querySelector("#carte5");
let tabl = [];
let c1 = "";
let c2 = "";
let c3 = "";
let c4 = "";
let c5 = "";
let c1c = "";
let c2c = "";
let c3c = "";
let c4c = "";
let c5c = "";
let c1v = "";
let c2v = "";
let c3v = "";
let c4v = "";
let c5v = "";
let mise = 0;
let bolg1 = false;
let bolg2 = false;
let bolg3 = false;
let bolg4 = false;
let bolg5 = false;
let bol1 = false;
let bol2 = true;
let pair = 0;
let pairj = 0;
let brelan = 0;
let carre = 0;
let quinte = 0;
let quinter = 0;
let couleur = 0;
let score = document.getElementById("score").textContent;

let gain = 0;
document.getElementById("bt1").disabled = true;

document.getElementById("mise").addEventListener("change", function verif() {
  mise = parseInt(document.getElementById("mise").value);
  if (mise > 0 && score > 0) {
    document.getElementById("bt1").disabled = false;
    bol2 = true;
    //document.getElementById("score").innerHTML = score - mise;
  } else {
    document.getElementById("bt1").disabled = true;
    bol2 = false;
  }
});

function verif2() {
  mise = parseInt(document.getElementById("mise").value);
  if (mise > 0 && score >= 0) {
    if ((bol1 === true)) {
      document.getElementById("bt1").disabled = false;
      bol2 = true;
    }
    //document.getElementById("score").innerHTML = score - mise;
  } else {
    document.getElementById("bt1").disabled = true;
    bol2 = false;
  }
}

function initialise() {
  tabl = [];

  for (let i = 2; i < 15; i++) {
    k = i;
    if (k === 11) {
      k = "J";
    }
    if (k === 12) {
      k = "Q";
    }
    if (k === 13) {
      k = "K";
    }
    if (k === 14) {
      k = "A";
    }
    tabl.push(k + "H");
    tabl.push(k + "C");
    tabl.push(k + "D");
    tabl.push(k + "S");
  }
  bolg1 = false;
  bolg2 = false;
  bolg3 = false;
  bolg4 = false;
  bolg5 = false;
  bol1 = false;
  document.getElementById("g1").innerHTML = "";
  document.getElementById("g2").innerHTML = "";
  document.getElementById("g3").innerHTML = "";
  document.getElementById("g4").innerHTML = "";
  document.getElementById("g5").innerHTML = "";
  let c1 = "";
  let c2 = "";
  let c3 = "";
  let c4 = "";
  let c5 = "";
  let c1c = "";
  let c2c = "";
  let c3c = "";
  let c4c = "";
  let c5c = "";
  let c1v = "";
  let c2v = "";
  let c3v = "";
  let c4v = "";
  let c5v = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("gain").innerHTML = "0";
  score = score - mise;
  document.getElementById("score").innerHTML = score;

  return tabl;
}
function melange(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

document.getElementById("bt1").addEventListener("click", function lancer() {
  verif2();
  if (bol2 === true) {
    if (bol1 === false) {
      initialise();
      melange(tabl);
      c1 = tabl[0];
      c2 = tabl[1];
      c3 = tabl[2];
      c4 = tabl[3];
      c5 = tabl[4];
      carte1.src = "./img/PNG/" + tabl[0] + ".png";
      carte2.src = "./img/PNG/" + tabl[1] + ".png";
      carte3.src = "./img/PNG/" + tabl[2] + ".png";
      carte4.src = "./img/PNG/" + tabl[3] + ".png";
      carte5.src = "./img/PNG/" + tabl[4] + ".png";
      bol1 = true;
      document.getElementById("mise").disabled = true;
    } else {
      if (bolg1 === false) {
        carte1.src = "./img/PNG/" + tabl[5] + ".png";
        c1 = tabl[5];
      }
      if (bolg2 === false) {
        carte2.src = "./img/PNG/" + tabl[6] + ".png";
        c2 = tabl[6];
      }
      if (bolg3 === false) {
        carte3.src = "./img/PNG/" + tabl[7] + ".png";
        c3 = tabl[7];
      }
      if (bolg4 === false) {
        carte4.src = "./img/PNG/" + tabl[8] + ".png";
        c4 = tabl[8];
      }
      if (bolg5 === false) {
        carte5.src = "./img/PNG/" + tabl[9] + ".png";
        c5 = tabl[9];
      }
      bol1 = false;
      document.getElementById("mise").disabled = false;
      verifresult();
    }
  }
});
carte1.addEventListener("click", function () {
  if (bol1 === true) {
    if (bolg1 === true) {
      document.getElementById("g1").innerHTML = "";
      bolg1 = false;
    } else {
      document.getElementById("g1").innerHTML = "GARDE";
      bolg1 = true;
    }
  }
});
carte2.addEventListener("click", function () {
  if (bol1) {
    if (bolg2 === true) {
      document.getElementById("g2").innerHTML = "";
      bolg2 = false;
    } else {
      document.getElementById("g2").innerHTML = "GARDE";
      bolg2 = true;
    }
  }
});
carte3.addEventListener("click", function () {
  if (bol1) {
    if (bolg3 === true) {
      document.getElementById("g3").innerHTML = "";
      bolg3 = false;
    } else {
      document.getElementById("g3").innerHTML = "GARDE";
      bolg3 = true;
    }
  }
});
carte4.addEventListener("click", function () {
  if (bol1) {
    if (bolg4 === true) {
      document.getElementById("g4").innerHTML = "";
      bolg4 = false;
    } else {
      document.getElementById("g4").innerHTML = "GARDE";
      bolg4 = true;
    }
  }
});
carte5.addEventListener("click", function () {
  if (bol1) {
    if (bolg5 === true) {
      document.getElementById("g5").innerHTML = "";
      bolg5 = false;
    } else {
      document.getElementById("g5").innerHTML = "GARDE";
      bolg5 = true;
    }
  }
});

function verifresult() {
  if (c1.length === 2) {
    c1v = c1.substring(0, 1);
    c1c = c1.substring(1, 2);
  } else {
    c1v = c1.substring(0, 2);
    c1c = c1.substring(2, 3);
  }
  if (c2.length === 2) {
    c2v = c2.substring(0, 1);
    c2c = c2.substring(1, 2);
  } else {
    c2v = c2.substring(0, 2);
    c2c = c2.substring(2, 3);
  }
  if (c3.length === 2) {
    c3v = c3.substring(0, 1);
    c3c = c3.substring(1, 2);
  } else {
    c3v = c3.substring(0, 2);
    c3c = c3.substring(2, 3);
  }
  if (c4.length === 2) {
    c4v = c4.substring(0, 1);
    c4c = c4.substring(1, 2);
  } else {
    c4v = c4.substring(0, 2);
    c4c = c4.substring(2, 3);
  }
  if (c5.length === 2) {
    c5v = c5.substring(0, 1);
    c5c = c5.substring(1, 2);
  } else {
    c5v = c5.substring(0, 2);
    c5c = c5.substring(2, 3);
  }
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  let p6 = 0;
  let p7 = 0;
  let p8 = 0;
  let p9 = 0;
  let p10 = 0;
  let p11 = 0;
  let p12 = 0;
  let p13 = 0;
  let p14 = 0;
  let coulC = 0;
  let coulD = 0;
  let coulH = 0;
  let coulS = 0;
  let AB = "0";
  let AC = "0";
  pairj = 0;
  pair = 0;
  brelan = 0;
  carre = 0;
  quinte = 0;
  quinter = 0;
  couleur = 0;
  for (let i = 1; i < 6; i++) {
    AB = "c" + [i] + "v";
    switch (eval(AB)) {
      case "2":
        {
          p2 = p2 + 1;
          if (p2 === 2) {
            pair = pair + 1;
          } else {
            if (p2 === 3) {
              brelan = brelan + 1;
              pair = pair - 1;
            } else {
              if (p2 === 4) {
                carre = carre + 1;
                brelan = brelan - 1;
              }
            }
          }
        }
        break;
      case "3":
        {
          p3 = p3 + 1;
          if (p3 === 2) {
            pair = pair + 1;
          } else {
            if (p3 === 3) {
              brelan = brelan + 1;
              pair = pair - 1;
            } else {
              if (p3 === 4) {
                carre = carre + 1;
                brelan = brelan - 1;
              }
            }
          }
        }
        break;
      case "4":
        {
          p4 = p4 + 1;
          if (p4 === 2) {
            pair = pair + 1;
          } else {
            if (p4 === 3) {
              brelan = brelan + 1;
              pair = pair - 1;
            } else {
              if (p4 === 4) {
                carre = carre + 1;
                brelan = brelan - 1;
              }
            }
          }
        }
        break;
      case "5":
        {
          p5 = p5 + 1;
          if (p5 === 2) {
            pair = pair + 1;
          } else {
            if (p5 === 3) {
              brelan = brelan + 1;
              pair = pair - 1;
            } else {
              if (p5 === 4) {
                carre = carre + 1;
                brelan = brelan - 1;
              }
            }
          }
        }
        break;
      case "6":
        {
          p6 = p6 + 1;
          if (p6 === 2) {
            pair = pair + 1;
          } else {
            if (p6 === 3) {
              brelan = brelan + 1;
              pair = pair - 1;
            } else {
              if (p6 === 4) {
                carre = carre + 1;
                brelan = brelan - 1;
              }
            }
          }
        }
        break;
      case "7":
        {
          p7 = p7 + 1;
          if (p7 === 2) {
            pair = pair + 1;
          } else {
            if (p7 === 3) {
              brelan = brelan + 1;
              pair = pair - 1;
            } else {
              if (p7 === 4) {
                carre = carre + 1;
                brelan = brelan - 1;
              }
            }
          }
        }
        break;
      case "8":
        {
          p8 = p8 + 1;
          if (p8 === 2) {
            pair = pair + 1;
          } else {
            if (p8 === 3) {
              brelan = brelan + 1;
              pair = pair - 1;
            } else {
              if (p8 === 4) {
                carre = carre + 1;
                brelan = brelan - 1;
              }
            }
          }
        }
        break;
      case "9":
        {
          p9 = p9 + 1;
          if (p9 === 2) {
            pair = pair + 1;
          } else {
            if (p9 === 3) {
              brelan = brelan + 1;
              pair = pair - 1;
            } else {
              if (p9 === 4) {
                carre = carre + 1;
                brelan = brelan - 1;
              }
            }
          }
        }
        break;
      case "10":
        {
          p10 = p10 + 1;
          if (p10 === 2) {
            pair = pair + 1;
          } else {
            if (p10 === 3) {
              brelan = brelan + 1;
              pair = pair - 1;
            } else {
              if (p10 === 4) {
                carre = carre + 1;
                brelan = brelan - 1;
              }
            }
          }
        }
        break;
      case "J":
        {
          p11 = p11 + 1;
          if (p11 === 2) {
            pair = pair + 1;
            pairj = 1;
          } else {
            if (p11 === 3) {
              brelan = brelan + 1;
              pair = pair - 1;
            } else {
              if (p11 === 4) {
                carre = carre + 1;
                brelan = brelan - 1;
              }
            }
          }
        }
        break;
      case "Q":
        {
          p12 = p12 + 1;
          if (p12 === 2) {
            pair = pair + 1;
            pairj = 1;
          } else {
            if (p12 === 3) {
              brelan = brelan + 1;
              pair = pair - 1;
            } else {
              if (p12 === 4) {
                carre = carre + 1;
                brelan = brelan - 1;
              }
            }
          }
        }
        break;
      case "K":
        {
          p13 = p13 + 1;
          if (p13 === 2) {
            pair = pair + 1;
            pairj = 1;
          } else {
            if (p13 === 3) {
              brelan = brelan + 1;
              pair = pair - 1;
            } else {
              if (p13 === 4) {
                carre = carre + 1;
                brelan = brelan - 1;
              }
            }
          }
        }
        break;
      case "A":
        {
          p14 = p14 + 1;
          p1 = p1 + 1;
          if (p14 === 2) {
            pair = pair + 1;
            pairj = 1;
          } else {
            if (p14 === 3) {
              brelan = brelan + 1;
              pair = pair - 1;
            } else {
              if (p14 === 4) {
                carre = carre + 1;
                brelan = brelan - 1;
              }
            }
          }
        }

        break;
    }
    AC = "c" + [i] + "c";
    switch (eval(AC)) {
      case "C":
        coulC = coulC + 1;
        break;
      case "D":
        coulD = coulD + 1;
        break;
      case "H":
        coulH = coulH + 1;
        break;
      case "S":
        coulS = coulS + 1;
        break;
    }
  }
  for (let j = 1; j < 11; j++) {
    if (
      eval("p" + [j]) === 1 &&
      eval("p" + [j + 1]) === 1 &&
      eval("p" + [j + 2]) === 1 &&
      eval("p" + [j + 3]) === 1 &&
      eval("p" + [j + 4]) === 1
    ) {
      quinte = 1;
      if (p14 === 1) {
        quinter = 1;
      }
    }
  }
  if (coulC === 5) {
    couleur = 1;
  }
  if (coulD === 5) {
    couleur = 1;
  }
  if (coulH === 5) {
    couleur = 1;
  }
  if (coulS === 5) {
    couleur = 1;
  }

  afficheresult();
}

function afficheresult() {
  let resultat = "";

  if (quinte === 1) {
    if (couleur === 1) {
      if (quinter === 1) {
        resultat = " une Quinte Flush Royale !!! ";
        gain = 250;
      } else {
        resultat = " une Quinte Flush !! ";
        gain = 50;
      }
    } else {
      resultat = " une Quinte !";
      gain = 4;
    }
  }
  if (couleur === 1 && quinte === 0) {
    resultat = " une couleur ";
    gain = 6;
  }
  if (carre === 1) {
    resultat = " un Carre !! ";
    gain = 25;
  }

  if (brelan === 1) {
    if (pair === 1) {
      resultat = " un Full House !";
      gain = 9;
    } else {
      resultat = " un Brelan ";
      gain = 3;
    }
  }

  if (pair === 2) {
    resultat = " Deux Paires ";
    gain = 2;
  }

  if (resultat === "") {
    if (pairj === 1) {
      resultat = " une paire de Valet ou mieux...";
      gain = 1;
    }
  }
  if (resultat === "") {
    resultat = " Desole , il faut rejouer";
    gain = 0;
  } else {
    resultat = " Bravo , vous avez " + resultat;
  }
  gain = gain * mise;
  document.getElementById("gain").innerHTML = gain;
  document.getElementById("score").textContent = score + gain;
  //document.getElementById("score").innerHTML = eval(score) + eval(gain);

  document.getElementById("result").innerHTML = resultat;

  score = score + gain;
  gain = 0;
  mise = 0;
}
