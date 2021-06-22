function Setap_ZA_LABELS(a) {
  TBL["Labls"]["LABELS"].innerHTML = null;
  TBL["Labls"]["TABELA"].style.display = "block";

  for (i in a) {
    cl_Setapot();
    let I = parseInt(i - 1);
    let N = I + 1;
    if (N < 10) {
      N = "_" + N;
    }
    TBL["Labls"]["REDICA_N"][I].innerHTML = N;
    TBL["Labls"]["TR"][I].setAttribute("s", i);
  } /// atribut na tr}

  for (e = 0; e < TBL["Labls"]["SMB_OPCI"].length; e++) {
    TBL["Labls"]["SMB_OPCI"][e].innerHTML = OPTions;
  }

  Puneje_Data_za_LABELS(a);
}
function Puneje_Data_za_LABELS(a) {
  for (I in a) {
    let i = parseInt(I) - 1;
    let T = {
      off_on: TBL["Labls"]["Status"][i],
      ime: TBL["Labls"]["MasinkaIme"][i],
      TxT: [
        TBL["Labls"]["P0_ime"][i],
        TBL["Labls"]["P1_ime"][i],
        TBL["Labls"]["P2_ime"][i],
      ],
      SMB: [
        TBL["Labls"]["P0_simbol"][i],
        TBL["Labls"]["P1_simbol"][i],
        TBL["Labls"]["P2_simbol"][i],
      ],
    };

    T["off_on"].selectedIndex = Statusirno_Prikaz(a[I]["STS"]["STATUS"]);
    T["ime"].value = a[I]["STS"]["IME"];

    for (q = 0; q < 3; q++) {
      T["TxT"][q].value = a[I]["STS"]["OZNAKI"][q]["TxT"];
      T["SMB"][q].selectedIndex = a[I]["STS"]["OZNAKI"][q]["SIMBOL"];
    }
  }
}

function Statusirno_Prikaz(a) {
  if (a < 0) {
    return 0;
  }
  return 1;
}

function Statuzko_ZA_data(a, b) {
  let c = Math.abs(b);
  if (!a) {
    c = c * -1;
  }
  return c;
}

function UPD_LABELS() {
  let O = G_DATA["UREDI"];

  for (I in O) {
    let Sts = O[I]["STS"]["STATUS"];
    let T = {
      S: TBL["Labls"]["Status"][I - 1].selectedIndex,
      I: TBL["Labls"]["MasinkaIme"][I - 1].value,

      s1: TBL["Labls"]["P0_simbol"][I - 1].selectedIndex,
      s2: TBL["Labls"]["P1_simbol"][I - 1].selectedIndex,
      s3: TBL["Labls"]["P2_simbol"][I - 1].selectedIndex,

      t1: TBL["Labls"]["P0_ime"][I - 1].value,
      t2: TBL["Labls"]["P1_ime"][I - 1].value,
      t3: TBL["Labls"]["P2_ime"][I - 1].value,
    };
    let Oo = [
      O[I]["STS"]["OZNAKI"][0]["VALUE"],
      O[I]["STS"]["OZNAKI"][1]["VALUE"],
      O[I]["STS"]["OZNAKI"][2]["VALUE"],
    ];
    O[I]["STS"] = {
      STATUS: Statuzko_ZA_data(T["S"], Sts),
      IME: T["I"],
      OZNAKI: {
        0: {
          SIMBOL: T["s1"],
          TxT: T["t1"],
          VALUE: Oo[0],
        },
        1: {
          SIMBOL: T["s2"],
          TxT: T["t2"],
          VALUE: Oo[1],
        },
        2: {
          SIMBOL: T["s3"],
          TxT: T["t3"],
          VALUE: Oo[2],
        },
      },
    };
  }
  return O;
}
