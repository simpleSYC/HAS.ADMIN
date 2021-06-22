MAIN_EL["Cancel_CONTROL_PANEL"].onclick = function () {
  CancelPROCEDURA();
};

MAIN_EL["Edit_CONTROL_PANEL_TABEL"].onclick = function () {
  EDITOR_MODE(G_DATA["UREDI"]);
};

MAIN_EL["Post_LABELS_BTN"].onclick = function () {
  POSTIRAJ("LABELS");
};

MAIN_EL["Post_DATA_BTN"].onclick = function () {
  POSTIRAJ("DATA");
};

MAIN_EL["LogOut_BTN"].onclick = function () {
  logout();
};

MAIN_EL["AKCIJbtnNOW"].onclick = function () {
  LoadingData(G_DATA["G"], "PREVIWE");
};

MAIN_EL["AKCIJbtnTIMED"].onclick = function () {
  AKCIJA_TIMER(this);
};

MAIN_EL["STNGS_btn"].onclick = function () {
  DROPdwnbtn(MAIN_EL["STGNS_DRPDWN"]);
};

function POSTIRAJ(a) {
  let path = "GROUP/" + G_DATA["G"] + "/UREDI";
  if (a == "LABELS") {
    SYC_0000.child(path).set(UPD_LABELS());
  }
  if (a == "DATA") {
    SYC_0000.child(path).set(GET_NEW_UPDEJTED_DATA(G_DATA["UREDI"]));
    MAIN_EL["Cancel_CONTROL_PANEL"].click();
  }
  if (a == "EXTRA") {
    //loadscrinot
    //SYC_0000.child("I").set(UPD_INTRO(FULL_OBJEKT["I"]));
  }

  PRISET_SETINGS_UI("Start_Screen"); /// uspesen splashh da se stave kako bonus
}
////// akkk section mestene tie funkcii
for (let i = 0; i < 3; i++) {
  let U = ["EDITOR", "SPECTATOR", "ANALIZA"];
  U = U[i];
  TBL["AKK"]["AKKS_open_btn"][i].onclick = function () {
    Puneje_data_Akk_mdl(U);
    MDL["AK"]["mdl_AKKS"].style.display = "block";
  };
  /// +1 za da ne se brojje taj prviot na start skrinot
  TBL["AKK"]["AKK_CKBOXS"][i + 1].onclick = function () {
    AKK_CKBOXS_ONADUVANJE_STATUS(U);
  };
}

// When the user clicks on <span> (x), close the modal
MDL["AK"]["Cancel_Akk_Btn"].onclick = function () {
  MDL["AK"]["mdl_AKKS"].style.display = "none";
};
