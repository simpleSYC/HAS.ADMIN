PRISET_SETINGS_UI("Start_Screen");
function PRISET_SETINGS_UI(a) {
  let ui = [];
  let UI = {
    /// da se namesti planski
    0: MAIN_EL["Post_DATA_BTN"],
    1: TBL["FTO"]["FT_SET"],

    2: MAIN_EL["LogOut_BTN"],
    3: MAIN_EL["SUBJEKT"], /// tabelata za previve paramatars
    4: MAIN_EL["AKCIJbtnNOW"],
    5: MAIN_EL["AKCIJbtnTIMED"],
    // ova e LABEL tabelata uredi
    6: TBL["Labls"]["LABELS"],

    7: TBL["AKK"]["AKK_SET_PANEL"],
    8: MDL["log"]["INTRO"],

    9: MAIN_EL["Post_LABELS_BTN"],
  };
  for (i in UI) {
    UI[i].style.display = "none";
  }
  if (a == "Start_Screen") {
    ui = [UI[2], UI[4], UI[5]];
  }
  if (a == "LABELS") {
    Setap_ZA_LABELS(G_DATA["UREDI"]); ////!!!
    ui = [UI[9], UI[6]];
  }
  if (a == "FOTKI") {
    Preset_MSN_LABELS(G_DATA["UREDI"]); ///!!! da go nema bi bilo ok ama ajde
    ui = [UI[0], UI[1]];
  }
  if (a == "AKK") {
    LoadingData(G_DATA["G"], "AKK_STATUS");
    UI[7].style.display = "table";
  }
  if (a == "LoginPage") {
    ui = [UI[8]];
  }
  if (a == "Prewive_Parametars") {
    UI[3].innerHTML = "";
  }

  for (u in ui) {
    ui[u].style.display = "block";
  }
}
