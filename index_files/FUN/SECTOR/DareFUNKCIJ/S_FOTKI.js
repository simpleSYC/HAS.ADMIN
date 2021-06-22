var W3R = document.getElementsByClassName("w3-row");
var W3Q = document.getElementsByClassName("w3-quarter");
var FOTO_STALAZA = document.getElementsByClassName("FOTOstalaza");
var OPN_F_MDL = document.getElementsByClassName("UPLOUDbtn");
var EDIT_Icon = document.getElementsByClassName("EDIT_BTNSKO");
var MSN_IME = document.getElementsByClassName("FtkaMsnskoIme");
var MSN_IMG = document.getElementsByClassName("SHOWimg");
var MSN_NO_IMG = document.getElementsByClassName("fa fa-image blankIMG");

//
var FTO_MDL = document.getElementById("Modal_FOTOset");
var FTO_VIEW = document.getElementsByClassName("View_FOTO")[0];
var MSN_NO_FTO = document.getElementById("noFOTO");

function Preset_MSN_LABELS(a) {
  RESETparaMETARS();

  for (q = 0; q < FOTO_STALAZA.length; q++) {
    FOTO_STALAZA[q].style.display = "none";
  }

  for (i in a) {
    let I = parseInt(i);
    let v = null;
    let V = parseInt(
      EDIT_Icon[I].parentElement.parentElement.getAttribute("value")
    );
    if (V < 10) {
      v = "_# " + (V + 1);
    } else {
      v = ".#" + (V + 1);
    }

    FOTO_STALAZA[i].style.display = "block";
    EDIT_Icon[I].innerHTML = v;

    OPN_F_MDL[I].onclick = function () {
      let Ftka = a[V]["FTO"];
      PriPremi_FTO_MODEL(Ftka);
      URED_N = V;
    };
  }

  Polneje_FOTKA_DATA(a);
}

function Polneje_FOTKA_DATA(a) {
  for (i in a) {
    let F_src = a[i]["FTO"]["F_SRC"];
    let MSN_Imence = a[i]["STS"]["IME"];
    let I = parseInt(i);

    MSN_IME[I].innerHTML = MSN_Imence;

    if (F_src) {
      MSN_IMG[I].style.display = "block";
      MSN_NO_IMG[I].style.display = "none";
      MSN_IMG[I].src = F_src;
    } else {
      MSN_IMG[I].style.display = "none";
      MSN_NO_IMG[I].style.display = "block";
      MSN_IMG[I].src = null;
    }
  }
}

function PriPremi_FTO_MODEL(a) {
  let F_src = a["F_SRC"];
  let F_ime = a["F_IME"];

  if (F_ime) {
    FTO_VIEW.style.display = "block";
    MSN_NO_FTO.style.display = "none";
    FTO_VIEW.src = F_src;
  } else {
    FTO_VIEW.style.display = "none";
    MSN_NO_FTO.style.display = "block";
    FTO_VIEW.src = null;
  } //da se stavi defalka image

  FTO_MDL.style.display = "block";
}

function UPD_FTO_btn(T) {
  let n = URED_N;
  let o = G_DATA["UREDI"];
  let O = o[n]["FTO"];
  let PATH = "GROUP/" + G_DATA["G"] + "/UREDI/" + n + "/FTO/";

  if (T) {
    // gi mesti  true gi mesti uredskoto foto//// false go mesti intro foto

    if (FTO_url) {
      let starata_foto = O["F_IME"];
      if (starata_foto != NOVO_FOTO_iME) {
        MSN_NO_IMG[n].style.display = "none";

        MSN_IMG[n].src = FTO_url;
        MSN_IMG[n].style.display = "block";

        SYC_0000.child(PATH + "F_SRC").set(FTO_url);
        SYC_0000.child(PATH + "F_IME").set(NOVO_FOTO_iME);
      }
    }
  } else {
    MSN_NO_FTO.style.display = "block"; /// ova e delete

    MSN_NO_IMG[n].style.display = "inline-block";
    MSN_IMG[n].style.display = "none";

    SYC_0000.child(PATH + "F_SRC").set(false);
    SYC_0000.child(PATH + "F_IME").set(false);
  }

  if (!isNaN(n)) {
    FTO_MDL.style.display = "none";
  } //else
  //             {TAJ DRUGIOT MDEL PROFIL .style.display="none";}

  RESETparaMETARS();
}
