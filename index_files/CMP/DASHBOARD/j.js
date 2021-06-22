Vue.component("dashboard", {
  template: `<div>
    <button type="button" id="Cancel_procedura">Cancel<br>Procedura</button>
    <button type="button" id="Open_upd_data_panel">Refule<br>System</button>

    <button type="button" id="Updejt_labels">Updejt<br>Labels</button>
    <button type="button" id="Updejt_data">Update<br>Data</button>

    <button type="button" id="Log_out">Log out</button>
    <button type="button" id="Action_now">Action<br>now</button>
    <button type="button" id="Timer_button" work="0">Timer OFF</button> 
   

    <div class="dropdown" id="Stngs_btnce_all" > 
    <button type="button" class="dropbtn">Settings <a>&#8693;</a>
    
    <span id="SLKT_STINGS"></span></button> 
  
        <div id="setings_dropdown" class="dropdown-content" >
          <a onclick="STNGS_txt(this,1);" class="LL">labels</a>
          <a onclick="STNGS_txt(this,2);" class="LL">fotki</a>
          <a onclick="STNGS_txt(this,3);" class="LL">akk</a>
          <a onclick="STNGS_txt(this,4);" class="LL">Login page</a>
          <a onclick="STNGS_txt(this,0);" class="LL" style="display:none;">Start screan</a>
      </div>
      </div> 
    
      
    <p id="TIME" style="text-align:center;"></p>
    <p id="TIME_PANEL" style="text-align:center;">
    <input type="text" id="Input_H"/>:<input type="text" id="Input_M"/><br>
    <span id="Timer"></span></p>
    
</div>`,
});

var storeqqee = new Vuex.Store({
  state: {
    view: "dashboard",
  },
});

var signqqee = new Vue({
  el: "#Dashboardot",
  store: store,
});

function DROPdwnbtn(a) {
  let P = "none";
  if (a.style.display == P) {
    P = "block";
  }
  a.style.display = P;
}

function STNGS_txt(a, N) {
  let Prikaz = {
    /// ovie se od SETINGS BTN
    0: "Start_Screen",
    1: "LABELS",
    2: "FOTKI",
    3: "AKK",
    4: "LoginPage",
    // ovie se od AKCIJA BTN
    5: "Prewive_Parametars",
    6: "Update_Parametars",
  };
  PRISET_SETINGS_UI(Prikaz[N]);

  MAIN_EL["SekectTXT"].innerHTML = " ";
  MAIN_EL["STGNS_DRPDWN"].style.display = "none";
  MAIN_EL["STNGS_BTN"].style.display = "block";
  if (N) {
    MAIN_EL["SekectTXT"].innerHTML = " " + a.innerHTML;
    MAIN_EL["Select_opcija"][4].style.display = "block";
  } else {
    MAIN_EL["Select_opcija"][4].style.display = "none";
  }
}
