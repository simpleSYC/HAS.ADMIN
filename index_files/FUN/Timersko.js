function Get_TAZE_M() {
  let J = new Date().getMonth() + 1;
  return parseInt(J);
}
function Get_TAZE_G() {
  let J = new Date().getUTCFullYear();
  return parseInt(J);
}

function Get_TmStamp() {
  let d = new Date(); //da se UTC!!!!
  let D = d.getDate();
  let M = d.getMonth() + 1;
  let Y = d.getFullYear();
  let hr = d.getHours();
  if (hr < 10) {
    hr = "0" + hr;
  }
  let min = d.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  return D + "/" + M + "/" + Y + "  " + hr + ":" + min;
}

setInterval(GetTime, 1000);
function GetTime() {
  let t = new Date();
  let hr = t.getHours();
  let min = t.getMinutes();
  let sec = t.getSeconds();

  if (MAIN_EL["AKCIJbtnTIMED"].style.display == "block") {
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    MAIN_EL["TIME"].innerHTML = hr + ":" + min + ":" + sec;

    let H = parseInt(MAIN_EL["vreme_H"].value);
    let M = parseInt(MAIN_EL["vreme_M"].value);
    min = parseInt(min);
    sec = parseInt(sec);
    let Rh = H - hr;
    let Rm = M - min - 1;
    let Rs = 59 - sec;

    if (Rh + Rm + Rs == 0) {
      if (parseInt(MAIN_EL["AKCIJbtnTIMED"].getAttribute("work"))) {
        LoadingData(G_DATA["G"], "PREVIWE");
      }
    } else {
      /// ebava malu ama ne e strasno
      // ne dava presmetena kalkulacija za razlika na den
      if (Rh < 0) {
        Rh = "-" + (Rh + 23);
      }
      if (Rm < 10) {
        Rm = "0" + Rm;
      }
      if (Rm < 0) {
        if (Rh == 0) {
          Rh = 23;
        }
      }
      if (Rs < 10) {
        Rs = "0" + Rs;
      }

      MAIN_EL["Timer"].innerHTML = Rh + ":" + Rm + ":" + Rs;
    }
  }
  /// ova e loso ama ajj
  if (
    MAIN_EL["Timer"].style.display != MAIN_EL["AKCIJbtnTIMED"].style.display
  ) {
    MAIN_EL["Timer"].style.display = MAIN_EL["AKCIJbtnTIMED"].style.display;
    MAIN_EL["TSTtime"].style.display = MAIN_EL["AKCIJbtnTIMED"].style.display;
    MAIN_EL["TIME"].style.display = MAIN_EL["AKCIJbtnTIMED"].style.display;
  }
}

function AKCIJA_TIMER(a) {
  let bC = "darkgray";
  let TxT = "Timer OFF";
  let O = 0.67;
  let B = false;
  if (parseInt(a.getAttribute("work"))) {
    a.setAttribute("work", "0");
  } else {
    a.setAttribute("work", "1");
    bC = "aquamarine";
    TxT = "now Timer is <br>READY FOR ACTION";
    O = 1;
    B = true;
  }

  a.style.backgroundColor = bC;
  a.innerHTML = TxT;
  a.style.opacity = O;
  MAIN_EL["vreme_H"].disabled = B;
  MAIN_EL["vreme_M"].disabled = B;
}
