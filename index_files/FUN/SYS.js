EnterComandPress();
// enter da vrsi pritisok na drug elemenat
function EnterComandPress() {
  let O = [
    document.getElementsByTagName("input")[1],
    document.getElementsByTagName("input")[2],
    document.getElementById("COD_AKK"),
  ];
  let o = [
    document.getElementsByTagName("button")[0],
    document.getElementsByTagName("button")[0],
    document.getElementById("cr8_new_akk"),
  ];
  for (let i = 0; i < O.length; i++) {
    O[i].addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        o[i].click();
      }
    });
  }
}

var OPTions = "";
for (s in Simbol_TBLA) {
  OPTions = OPTions + "<option>" + Simbol_TBLA[s] + "</option>";
}

function cl_Setapot() {
  var itm = document.getElementById("moeto").children[1];
  var cln = itm.cloneNode(true);
  TBL["Labls"]["LABELS"].appendChild(cln);
}

function cl_ControlPanel() {
  var itm = document.getElementById("moeto").children[0];
  var cln = itm.cloneNode(true);
  document.getElementById("CL_controlPanel").appendChild(cln);
} /// nr r trstirano

function Setap_Za_REFUL(a) {
  document.getElementById("CL_controlPanel").innerHTML =
    '<tr style="text-align: center;" ><td></td><td><span class="T_des">STATUS</span></td><td><span class="T_des">S 1</span></td><td><span class="T_des">S 2</span></td><td><span class="T_des">S 3</span></td></tr>';

  for (i in a) {
    let N = parseInt(i);
    cl_ControlPanel();
    document
      .getElementsByClassName("Redica_controlPanel")
      [i - 1].setAttribute("value", N);
  }
}

for (q = 0; q < TBL["AKK"]["CP_ICON"].length; q++) {
  let Q = parseInt(q);
  TBL["AKK"]["CP_ICON"][Q].onclick = function () {
    copyToClipboard(Q);
  };
}

function copyToClipboard(a) {
  let C_TXT = " ";
  let C = TBL["AKK"]["CP_ICON"];
  for (q = 0; q < C.length; q++) {
    C[q].style.color = "black";
  }

  if (!isNaN(a)) {
    C[a].style.color = "dodgerblue";
    C_TXT = TBL["AKK"]["RLE_CODE_TBL"][a].innerHTML;
  }
  const str = C_TXT;

  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}
