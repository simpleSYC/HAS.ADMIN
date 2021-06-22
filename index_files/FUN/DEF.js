/// simboli na reful tabla koga se pojacuvat brojkite
var Smbol_0 = document.getElementsByClassName("SMBL_0");
var Smbol_1 = document.getElementsByClassName("SMBL_1");
var Smbol_2 = document.getElementsByClassName("SMBL_2");
var SMB_012 = [Smbol_0, Smbol_1, Smbol_2];

/// INPUT ! na reful tabla koga se pojacuvat brojkite
var STS_2 = document.getElementsByClassName("Input_S2");

var Ured_S = document.getElementsByClassName("Ured_STATUS");
var Ured_I = document.getElementsByClassName("Ured_ID");
var INPUT_V = document.getElementsByClassName("Input_VODA");
var INPUT_C = document.getElementsByClassName("Input_CASA");

var MAIN_EL = {
  MAIN_S: document.getElementById("MAIN_SCRIN"),
  SUBJEKT: document.getElementById("SHWdata"),

  Edit_CONTROL_PANEL_TABEL: document.getElementById("Open_upd_data_panel"),
  Cancel_CONTROL_PANEL: document.getElementById("Cancel_procedura"),
  Post_LABELS_BTN: document.getElementById("Updejt_labels"),
  Post_DATA_BTN: document.getElementById("Updejt_data"),
  LogOut_BTN: document.getElementById("Log_out"),
  AKCIJbtnNOW: document.getElementById("Action_now"),
  AKCIJbtnTIMED: document.getElementById("Timer_button"),
  Edit_TABLE: document.getElementById("ControlPANEL"),
  vreme_H: document.getElementById("Input_H"),
  vreme_M: document.getElementById("Input_M"),
  TIME: document.getElementById("TIME"),
  TSTtime: document.getElementById("TIME_PANEL"),
  Timer: document.getElementById("Timer"),
  STNGS_BTN: document.getElementById("Stngs_btnce_all"),
  STNGS_btn: document.getElementsByClassName("dropbtn")[0],
  STGNS_DRPDWN: document.getElementById("setings_dropdown"),
  SekectTXT: document.getElementById("SLKT_STINGS"),
  Select_opcija: document.getElementsByClassName("LL"),
};
var TBL = {
  Labls: {
    TABELA: document.getElementById("SETAP_PLAN"),
    LABELS: document.getElementById("CL_setup"),
    TR: document.getElementsByClassName("Redica_setup"),
    REDICA_N: document.getElementsByClassName("DVC_N"),
    Status: document.getElementsByClassName("SETUP_STATUS"),
    MasinkaIme: document.getElementsByClassName("SETUP_IME"),
    P0_ime: document.getElementsByClassName("SETUP_S0_cod"),
    P1_ime: document.getElementsByClassName("SETUP_S1_cod"),
    P2_ime: document.getElementsByClassName("SETUP_S2_cod"),
    P0_simbol: document.getElementsByClassName("SETUP_S0_simbol"),
    P1_simbol: document.getElementsByClassName("SETUP_S1_simbol"),
    P2_simbol: document.getElementsByClassName("SETUP_S2_simbol"),
    SMB_OPCI: document.getElementsByClassName("TBL-SIMBOLS"),
  },
  FTO: {
    FT_SET: document.getElementById("FOTO_SET"),
  },

  AKK: {
    /// TBL["AKK"]["AKK_EML_BTN"]
    AKK_SET_PANEL: document.getElementById("AKK_SET"),
    CP_ICON: document.getElementsByClassName("CP_BTN"),
    RLE_CODE_TBL: document.getElementsByClassName("RLE_cod"),
    STS_TXT: document.getElementsByClassName("RLE_status"),
    AKK_CKBOXS: document.getElementsByClassName("akk_status"),
    AKK_EML_TXT: document.getElementsByClassName("RLE_email"),
    AKK_EML_BTN: document.getElementsByClassName("REL_email_B"),
    AKKS_open_btn: document.getElementsByClassName("Akks-editot"),
  },
};

var MDL = {
  log: {
    INTRO: document.getElementById("Intoro"),
    LOGIN_FOTO: document.getElementById("View_I_FOTO"),
    F_IME: document.getElementById("IME_F"),
    F_SLOGAN: document.getElementById("SOLGAN_F"),
    F_SUPPORT: document.getElementById("SUPPORT_F"),
    HELP_BTN: document.getElementById("help_btn"),
  },
  AK: {
    mdl_AKKS: document.getElementsByClassName("modaAKKS")[0],
    SLKT_AKK: document.getElementsByClassName("slk_akk"),
    COD_akk: document.getElementById("COD_AKK"),
    ERR_CD: document.getElementById("ErorINFO_cod"),
    CR8_AKK: document.getElementById("cr8_new_akk"),
    Cancel_Akk_Btn: document.getElementById("CANCEL_AKK_BTN"),
  },
};
