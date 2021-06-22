var FULL_OBJEKT = {}; /// oviee da se skrijat od javno
function KOJeOVOJ(a) {
  let R = "REGROUP/" + a.uid;
  SYC_0000.child(R)
    .once("value")
    .then(function (snapshot) {
      let DATA = snapshot.val();
      let G_U = {};
      for (i in DATA) {
        G_U["U"] = i;
        G_U["G"] = DATA[i];
      }
      if (G_U["G"]) {
        PolnejeCodi(G_U["G"]);
        let PATH = "G-LISTA/" + G_U["G"] + "/" + a.uid + "/" + G_U["U"];
        SYC_0000.child(PATH)
          .once("value")
          .then(function (snapshot) {
            let CekDATA = snapshot.val();
            Prikaz(CekDATA, G_U["G"]);
          });
      } else {
        let B = [G_U["U"], a.uid.slice(0, 5)];
        Prikaz("SUSPEND", B);
      }
    });
}

function Prikaz(a, b) {
  let CekERROR = document.getElementById("PRE_chek");
  let EROR = document.getElementById("PRE_info");

  if (a === "ADMIN") {
    LoadingData(b, false);
    CekERROR.remove();
  } else if (a === "SUSPEND") {
    MAIN_EL["MAIN_S"].remove();
    CekERROR.style.display = "block";
    EROR.innerText =
      "This ACC with username *\n(  " +
      b[0] +
      "  )\n is suspende by Devolpers\nContact Devolper with \n Reference cod : " +
      b[1];
  } else {
    MAIN_EL["MAIN_S"].remove();
    CekERROR.style.display = "block";
    EROR.innerHTML = "OVAJ ne e admin na ovaa grupa";
  }
}
var CODI = { A: {}, D: {} };
var G_DATA = {}; /// se stava ova so potrebno kako sto treba
/// da se stave refresna Funkcija za refresh === loading DATA
function LoadingData(a, F) {
  SYC_0000.child("GROUP/" + a)
    .once("value")
    .then(function (snapshot) {
      G_DATA = snapshot.val();
      G_DATA["G"] = a;
      console.log(G_DATA);
      G_DATA["UREDI"] = Sredeno_A_UREDI(G_DATA["UREDI"]); ///////////// !!

      /////      FULL_OBJEKT["R"] = F["R"];
      MAIN_EL["MAIN_S"].style.display = "contents";
      MAIN_EL["MAIN_S"].style.width = 37 + "%";
      PreSET();

      if (F == "PREVIWE") {
        Akcija_Previve_Parametars(G_DATA["UREDI"]);
      }

      if (F == "AKK_STATUS") {
        polneje_AKK_STATUS_TABLATA(G_DATA["ROLE"]);
      }
    });
}
function Sredeno_A_UREDI(a) {
  let b = {};
  for (q = 1; q < a.length; q++) {
    b[q] = a[q];
  }
  return b;
}

function PolnejeCodi(a) {
  SYC_0000.child("COD/" + a)
    .once("value")
    .then(function (snapshot) {
      if (snapshot.val()) {
        let I = snapshot.val();
        for (i in I) {
          CODI["D"][I[i]] = i;
        }
      }
    });

  SYC_0000.child("G-LISTA/" + a)
    .once("value")
    .then(function (snapshot) {
      let I = snapshot.val();
      if (I != undefined) {
        for (i in I) {
          for (q in I[i]) {
            CODI["A"][I[i][q]] = {
              xCOD: i,
              cod: q,
            };
          }
        }
      }
    });
}
