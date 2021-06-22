const MASINA_STATUS = {
  /// U SHER LOKACIJA i da se razmisle za kostumize
  1: { TexT: "OK", Boi: "green" },
  2: { TexT: "LEER", Boi: "gray" },
  3: { TexT: "KAPUT", Boi: "red" },
  4: { TexT: "PAUSA", Boi: "darkgoldenrod" },
  5: { TexT: "CLEANING", Boi: "blue" },
  6: { TexT: "REPAIR", Boi: "purple" },
  7: { TexT: "ok & 4 Sale", Boi: "lime" },
};

const Boite = {
  // ova ne e bas onadeno
  1: "#00A170",
  2: "#A0DAA9",
  3: "#FAE03C",
  4: "#FDAC53",
  5: "#CD212A",
  6: "#00A170",
  7: "#A0DAA9",
  8: "#FAE03C",
};

function changeSTATUS(a) {
  let I = parseInt(a.parentElement.parentElement.getAttribute("value") - 1);
  let S = parseInt(a.parentElement.parentElement.getAttribute("s"));

  var novSTATUS = S + 1;
  if (novSTATUS > 7) {
    novSTATUS = 1;
  }

  a.parentElement.parentElement.setAttribute("s", novSTATUS);
  var novSTATUS_TXT = MASINA_STATUS[novSTATUS]["TexT"];
  Ured_S[I].innerHTML = novSTATUS_TXT;
}

function PreSET() {
  MAIN_EL["STNGS_BTN"].style.display = "block";
  MAIN_EL["vreme_H"].value = 9;
  MAIN_EL["vreme_M"].value = 30;

  for (i = 0; i < INPUT_V.length; i++) {
    INPUT_V[i].value = "";
    INPUT_C[i].value = "";
    Ured_S[i].parentElement.style.display = "none";
    Ured_S[i].parentElement.setAttribute("s", "X");
  }
}

function Akcija_Previve_Parametars(a) {
  //// kako preset li e ova???
  MAIN_EL["Timer"].innerHTML = "Loading .......";
  MAIN_EL["Cancel_CONTROL_PANEL"].style.display = "block";

  MAIN_EL["LogOut_BTN"].style.display = "none";

  MAIN_EL["STNGS_BTN"].style.display = "none";
  MAIN_EL["STGNS_DRPDWN"].style.display = "none";
  MAIN_EL["AKCIJbtnNOW"].style.display = "none";
  MAIN_EL["AKCIJbtnTIMED"].style.display = "none";

  MAIN_EL["SUBJEKT"].style.display = "block";
  /// tabelata za previve parametar e ova

  GET_AND_CHEK_WORNINGS(a);
}

var POST_OBJEKT = {};
function EDITOR_MODE(O) {
  Setap_Za_REFUL(O);
  POST_OBJEKT = O;

  MAIN_EL["Post_DATA_BTN"].style.display = "block";

  MAIN_EL["SUBJEKT"].style.display = "none";
  MAIN_EL["Edit_TABLE"].style.display = "block";

  Potpolni_Pole_so_DojdenataDATA(O);
}
function Pipnato(a, I) {
  let i = parseInt(I) - 1;
  if (
    a[I]["STS"]["STATUS"] !=
      parseInt(Ured_S[i].parentElement.getAttribute("s")) ||
    a[I]["STS"]["OZNAKI"][0]["VALUE"] != B_procente(INPUT_V[i]) ||
    a[I]["STS"]["OZNAKI"][1]["VALUE"] != B_procente(INPUT_C[i]) ||
    a[I]["STS"]["OZNAKI"][2]["VALUE"] != B_procente(STS_2[i])
  ) {
    return true;
  }
}

function GET_NEW_UPDEJTED_DATA(a) {
  let M = Get_TAZE_M();
  let J = Get_TAZE_G();
  let Ii = [INPUT_V, INPUT_C, STS_2];
  for (I in a) {
    if (Pipnato(a, I)) {
      let MESECOT = a[I]["UPD"][J][M];
      let URED = a[I]["STS"];
      URED["STATUS"] = parseInt(Ured_S[I - 1].parentElement.getAttribute("s"));
      /// blankoto e najdole a staruva G_DATA so 1 i mora da se minusira 1
      for (i = 0; i < 3; i++) {
        URED["OZNAKI"][i]["VALUE"] = B_procente(Ii[i][I - 1]);
      }

      let n = 0;
      for (e in MESECOT) {
        if (MESECOT[e]) {
          n = n + 1;
        }
      }
      MESECOT[n] = Get_TmStamp();
    }
  }
  return a;
}

function B_procente(a) {
  let B = parseInt(a.value);
  if (isNaN(B)) {
    B = parseInt(a.placeholder);
  }
  return B;
}

function Potpolni_Pole_so_DojdenataDATA(a) {
  /// uloga na css e
  // ova e ze prevjuvot . da se reducira drugpat na tenane da  ne se izgube focusot
  for (I in a) {
    let i = I - 1;
    //	Ured_S[i].parentElement.style.display="";
    if (a[I]["STS"]["STATUS"] < 0) {
      Ured_S[i].parentElement.style.display = "none";
    } else {
      Ured_S[i].parentElement.style.display = "";
    }
    let m_s = Math.abs(parseInt(a[I]["STS"]["STATUS"]));
    console.log(m_s);
    let M_S = MASINA_STATUS[m_s]["TexT"];
    Ured_S[i].parentElement.setAttribute("s", a[I]["STS"]["STATUS"]);
    Ured_S[i].innerHTML = M_S;
    Ured_I[i].innerHTML = a[I]["STS"]["IME"];

    INPUT_V[i].placeholder = a[I]["STS"]["OZNAKI"][0]["VALUE"];
    INPUT_C[i].placeholder = a[I]["STS"]["OZNAKI"][1]["VALUE"];
    STS_2[i].placeholder = a[I]["STS"]["OZNAKI"][2]["VALUE"];

    for (e = 0; e < 3; e++) {
      if (a[I]["STS"]["OZNAKI"][e]["SIMBOL"]) {
        SMB_012[e][i].innerHTML =
          Simbol_TBLA[a[I]["STS"]["OZNAKI"][e]["SIMBOL"]];
      } else {
        SMB_012[e][i].parentElement.style.display = "none";
      }
    }
  }
}

function CancelPROCEDURA() {
  MAIN_EL["Cancel_CONTROL_PANEL"].style.display = "none";
  MAIN_EL["Post_DATA_BTN"].style.display = "none";
  MAIN_EL["LogOut_BTN"].style.display = "block";

  MAIN_EL["SUBJEKT"].style.display = "none";
  MAIN_EL["SUBJEKT"].innerHTML = "";
  MAIN_EL["Edit_TABLE"].style.display = "none";

  MAIN_EL["AKCIJbtnNOW"].style.display = "block";
  MAIN_EL["AKCIJbtnTIMED"].style.display = "block";

  MAIN_EL["Edit_CONTROL_PANEL_TABEL"].style.display = "none";
}

function Get_BOJA_TxT(a) {
  let S = parseInt(Math.abs(a));
  let A =
    "<span class='Statusko' style='color:" +
    MASINA_STATUS[S]["Boi"] +
    "'>" +
    MASINA_STATUS[S]["TexT"] +
    "</span>";
  return " : " + A;
}

function Get_BOJA_N(a) {
  let A = parseInt(a);
  let Bojata_selektirana;
  let ALL = " - <span class='N_oko' style='color:";
  if (A >= 80) {
    Bojata_selektirana = Boite[4];
  } else if (A >= 60) {
    Bojata_selektirana = Boite[3];
  } else if (A >= 40) {
    Bojata_selektirana = Boite[2];
  } else if (A >= 20) {
    Bojata_selektirana = Boite[1];
  } else {
    Bojata_selektirana = Boite[0];
  }
  ALL = ALL + Bojata_selektirana + "'> " + a + "</span>";
  return ALL;
}

function GET_AND_CHEK_WORNINGS(a) {
  let T = {};
  for (i in a) {
    let IME = a[i]["STS"]["IME"];
    let Stvar = a[i]["STS"]["OZNAKI"];
    let QTI = a[i]["STS"]["OZNAKI"];
    let SIMBOLOT = a[i]["STS"]["OZNAKI"];
    let Statuskoto = a[i]["STS"]["STATUS"];
    T[0] = "<div class='Stalazi_Lini' style='text-align:center;'><hr>";
    T[1] = "<span>" + IME + Get_BOJA_TxT(Statuskoto) + "</span>    <br>";
    T[2] =
      "<button class='btn_oko'>" +
      Stvar[0]["TxT"] +
      Get_BOJA_N(QTI[0]["VALUE"]) +
      "</button>";
    T[3] =
      "<button class='btn_oko'>" +
      Stvar[1]["TxT"] +
      Get_BOJA_N(QTI[1]["VALUE"]) +
      "</button>";
    T[4] =
      "<button class='btn_oko'>" +
      Stvar[2]["TxT"] +
      Get_BOJA_N(QTI[2]["VALUE"]) +
      "</button> </div>";

    for (e = 0; e < 3; e++) {
      if (!SIMBOLOT[e]["SIMBOL"]) {
        T[e + 2] =
          "<button class='btn_oko' style='color:#fff0;'>empty</button>";
      }
    }

    let TT = T[0] + T[1] + T[2] + T[3] + T[4];
    MAIN_EL["SUBJEKT"].innerHTML = MAIN_EL["SUBJEKT"].innerHTML + " " + TT;

    if (Statuskoto < 0) {
      let m = i - 1;
      document.getElementsByClassName("Stalazi_Lini")[m].style.opacity = 0.2;
    }
  }

  MAIN_EL["Edit_CONTROL_PANEL_TABEL"].style.display = "block";
}
