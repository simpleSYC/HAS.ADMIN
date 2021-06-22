Vue.component("coper", {
  template: `<table>
    <tbody id="moeto">
    <tr  class="Redica_controlPanel"><td class="Ured_STATUS"></td><td><button class="Ured_ID" onclick="changeSTATUS(this);" ></button></td><td><button class="INP_stalaza" ><span class="SIMBOLCE SMBL_0"></span>-<input type="text" class="Input_VODA"/></button></td><td><button  class="INP_stalaza" ><span class="SIMBOLCE SMBL_1"></span>-<input type="text" class="Input_CASA"/></button></td><td><button  class="INP_stalaza" ><span class="SIMBOLCE SMBL_2"></span>-<input type="text" class="Input_S2"/></button></td></tr>
    
    <!--  class="Redica_setup" i controlpanel ke dobivatvaluaski funkcija za da dobijatvalue -->
    
    <tr class="Redica_setup"><td class="ROW_MASINKA" style="display: block ruby;">
    <a class="DVC_N"></a>  
    <div class="stalaza_SETUP">
    <select class="SETUP_STATUS"><option>&#128308;0FF</option><option>&#9989;0N</option></select></div>
    
    <div class="stalaza_SETUP"><input type="text" class="SETUP_IME" style="width:125px;text-align:center;" placeholder="Name Maschine"></div>
    
    <button type="button" class="SETUP_S_STALAZA">
    <input type="text" class="SETUP_S0_cod" placeholder="?"><a>|</a><select class="SETUP_S0_simbol TBL-SIMBOLS"></select>
    </button>
    
    <button type="button" class="SETUP_S_STALAZA">
    <input type="text" class="SETUP_S1_cod" placeholder="?"><a>|</a><select class="SETUP_S1_simbol TBL-SIMBOLS"></select>
    </button>
    
    <button type="button" class="SETUP_S_STALAZA">
    <input type="text" class="SETUP_S2_cod" placeholder="?"><a>|</a><select class="SETUP_S2_simbol TBL-SIMBOLS"></select>
    </button>
    
    </td></tr>
        
    </tbody></table>`,
});

var storeqqee = new Vuex.Store({
  state: {
    view: "coper",
  },
});

var signqqee = new Vue({
  el: "#bingo",
  store: store,
});
