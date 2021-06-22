function polneje_AKK_STATUS_TABLATA(a) {
  let ULOGA = [a["EDITOR"], a["SPECTATOR"], a["ANALIZA"]];
  let I = ["EDITOR", "SPECTATOR", "ANALIZA"];
  for (let i = 0; i < 3; i++) {
    TBL["AKK"]["RLE_CODE_TBL"][i].innerHTML = "";
    TBL["AKK"]["AKK_CKBOXS"][i].checked = ULOGA[i]["STATUS"];
    TBL["AKK"]["STS_TXT"][i].innerHTML = R_AKK_STATUS(
      TBL["AKK"]["AKK_CKBOXS"][i].checked
    );
    ULOGA_EMAIL(ULOGA[i]["email_veri"], i);

    TBL["AKK"]["RLE_CODE_TBL"][i].innerHTML = Puneje_cod(CODI, I[i]);

    if (Puneje_cod(CODI, I[i])) {
      TBL["AKK"]["CP_ICON"][i].style.display = "block";
    } else {
      TBL["AKK"]["CP_ICON"][i].style.display = "none";
    }
  }
}

function Puneje_cod(C, uloga) {
  let TxT = "";
  if (C["A"][uloga] != undefined) {
    TxT = C["A"][uloga]["cod"];
  } else if (!TxT && C["D"][uloga] != undefined) {
    TxT = C["D"][uloga];
  }
  return TxT;
}

function R_AKK_STATUS(a) {
  let txt = "inactived";
  if (a) {
    txt = "actived";
  }
  return txt;
}
/// ako postoi emali_veri i eT/F =Ver/Un ver inaku ne cr8 e
function ULOGA_EMAIL(a, n) {
  if (a != undefined) {
    if (a) {
      TBL["AKK"]["AKK_EML_TXT"][n].innerHTML = "verified";
      TBL["AKK"]["AKK_EML_BTN"][n].style.display = "block";
      TBL["AKK"]["AKK_EML_BTN"][n].onclick = function () {
        RST_PSS(n);
      };
      TBL["AKK"]["AKK_EML_BTN"][n].innerHTML = "reset password";
    } else {
      TBL["AKK"]["AKK_EML_TXT"][n].innerHTML = "not verified";
      TBL["AKK"]["AKK_EML_BTN"][n].style.display = "none";
      TBL["AKK"]["AKK_EML_BTN"][n].onclick = function () {};
      TBL["AKK"]["AKK_EML_BTN"][n].innerHTML = "";
    }
  } else {
    TBL["AKK"]["AKK_EML_TXT"][n].innerHTML = "not created";
    TBL["AKK"]["AKK_EML_BTN"][n].style.display = "none";
    TBL["AKK"]["AKK_EML_BTN"][n].onclick = function () {};
    TBL["AKK"]["AKK_EML_BTN"][n].innerHTML = "";
  }
}

function AKK_CKBOXS_ONADUVANJE_STATUS(ROLE) {
  let N = { EDITOR: 0, SPECTATOR: 1, ANALIZA: 2 };
  N = N[ROLE];
  let V = TBL["AKK"]["AKK_CKBOXS"][N].checked;
  TBL["AKK"]["STS_TXT"][N].innerHTML = R_AKK_STATUS(V);

  let PTH = "GROUP/" + G_DATA["G"] + "/ROLE/" + ROLE + "/STATUS";
  SYC_0000.child(PTH).set(V);

  if (CODI["A"][ROLE] != undefined) {
    let v = ROLE;
    if (!V) {
      v = false;
    }
    let C = CODI["A"][ROLE]["xCOD"] + "/" + CODI["A"][ROLE]["cod"];
    let path = "G-LISTA/" + G_DATA["G"] + "/" + C;
    SYC_0000.child(path).set(v);
  }
}

function RST_PSS(N) {
  let R = ["EDITOR", "SPECTATOR", "ANALIZA"];
  var auth = firebase.auth();
  let PAT = "GROUP/" + G_DATA["G"] + "/" + R[N] + "/email";
  SYC_0000.child(PAT)
    .once("value")
    .then(function (snapshot) {
      var emailAddress = snapshot.val();

      if (emailAddress) {
        emailAddress = emailAddress + ".com";
        auth
          .sendPasswordResetEmail(emailAddress)
          .then(function () {
            alert("hey password reset  was sent to \n" + emailAddress);
            // Email sent.
          })
          .catch(function (error) {
            alert("ERROR ... email isnt sent to \n" + emailAddress);
            // An error happened.
          });
      }
    });
}

MDL["AK"]["CR8_AKK"].onclick = function () {
  let Uloga_preset = MDL["AK"]["CR8_AKK"].getAttribute("uloga");
  CR8_NW_AKK(Uloga_preset);
};

function CR8_NW_AKK(a) {
  let OPCI = { EDITOR: 0, SPECTATOR: 1, ANALIZA: 2 };
  let I = OPCI[a];
  let codi = MDL["AK"]["COD_akk"].value.toString();
  D_CODI(a, codi);
  A_CODI(a);

  TBL["AKK"]["CP_ICON"][I].style.display = "block";
  TBL["AKK"]["RLE_CODE_TBL"][I].innerHTML = codi;

  let C_NEW = "COD/" + G_DATA["G"] + "/" + codi;
  SYC_0000.child(C_NEW).set(a);

  let PTH = "GROUP/" + G_DATA["G"] + "/ROLE/" + a;
  SYC_0000.child(PTH).set({ STATUS: true });

  copyToClipboard("x");

  MDL["AK"]["Cancel_Akk_Btn"].click();
  /// da go aktivira switcit ako e deaktiviranooo
  let SWICOT = TBL["AKK"]["AKK_CKBOXS"][I];
  if (!SWICOT.checked) {
    SWICOT.checked = true;
  }
}

/// za CODI menaciranje
function A_CODI(a) {
  if (CODI["A"][a] != undefined) {
    let path = "G-LISTA/" + G_DATA["G"] + "/" + CODI["A"][a]["xCOD"];
    SYC_0000.child(path).set(null);
  }
}

function D_CODI(a, b) {
  if (CODI["D"][a] != undefined) {
    let path = "COD/" + G_DATA["G"] + "/" + CODI["D"][a];
    SYC_0000.child(path).set(null);
  }
  CODI["D"][a] = b;
}

function Puneje_data_Akk_mdl(ROLE) {
  MDL["AK"]["COD_akk"].value = null;
  MDL["AK"]["ERR_CD"].innerHTML = "";
  MDL["AK"]["CR8_AKK"].disabled = true;
  MDL["AK"]["CR8_AKK"].setAttribute("uloga", ROLE);

  MDL["AK"]["SLKT_AKK"][0].innerHTML = ROLE;
  MDL["AK"]["SLKT_AKK"][1].innerHTML = ROLE + " account";
}

MDL["AK"]["COD_akk"].oninput = function () {
  OKcod(MDL["AK"]["COD_akk"].value);
};

window.onclick = function (event) {
  if (event.target == MDL["AK"]["mdl_AKKS"]) {
    MDL["AK"]["Cancel_Akk_Btn"].click();
  }
};

function X_CODI(a) {
  let F = false;
  for (i in CODI["D"]) {
    if (CODI["D"][i] == a) {
      F = true;
    }
  }
  if (!F) {
    for (q in CODI["A"]) {
      if (CODI["A"][q]["cod"] == a) {
        F = true;
      }
    }
  }
  return F;
}

function OKcod(a) {
  if (a.length > 3) {
    if (
      a.includes("/") ||
      a.includes("#") ||
      a.includes(".") ||
      a.includes(",") ||
      a.includes("`") ||
      a.includes("|") ||
      a.includes("'") ||
      a.includes('"') ||
      a.includes(" ") ||
      a.includes("[") ||
      a.includes("]") ||
      a.includes("%")
    ) {
      MDL["AK"]["CR8_AKK"].disabled = true;
      MDL["AK"]["ERR_CD"].innerHTML = "Unsupored charakter !";
    }
    if (X_CODI(a)) {
      MDL["AK"]["CR8_AKK"].disabled = true;
      MDL["AK"]["ERR_CD"].innerHTML = "Unsupored dupliccate cod !!!";
    } else {
      MDL["AK"]["CR8_AKK"].disabled = false;
      MDL["AK"]["ERR_CD"].innerHTML = "";
    }
  } else {
    MDL["AK"]["CR8_AKK"].disabled = true;
    MDL["AK"]["ERR_CD"].innerHTML = "";
  }
}
