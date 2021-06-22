Vue.component("intro_t", {
  template: `
<div class="modal-content" style="margin-top:33px;padding-bottom:33px;">
 
    <button type="button"  onclick="dflka_IMG_INTRO();" style="width: auto;margin:-15px;position: inherit;display: grid;float: left;background:red;" >defalt img</button>
    <br><br><input type="file" value="upload" id="fileButon_INTRO_FOTO" style="width: auto;float: right;position: inherit;">
    <img id="View_I_FOTO" class="View_INTRO_FOTO" >

<p> update GMBH name</p>
<input type="text" id="IME_F" style="width: 90%;margin: auto;display: table-caption;" ><br><br>

<p> update GMBH slogan text</p>
<input type="text" id="SOLGAN_F" style="width: 90%;margin: auto;display: table-caption;" ><br><br>
	
<p>Login in problem help button     <select id="help_btn" style="width: 71px;"><option>disable</option><option>add</option></select> </p>
<input type="text" id="SUPPORT_F" style="width: 90%;margin: auto;display: table-caption;" ><br><br>



<div     style="display: flex;">
    <button type="button"  onclick="POSTIRAJ();" style="width: auto;margin: auto;position: inherit;display: grid;float: left;" >update</button>
    <button type="button"  onclick="close_INTRO();" style="width: auto;margin: auto;position: inherit;display: grid;float: right;background:#c4572c;" >cancel</button>
</div>
</div>`,
});

var storeqqee = new Vuex.Store({
  state: {
    view: "intro_t",
  },
});

var signqqee = new Vue({
  el: "#Intoro",
  store: store,
});

function dflka_IMG_INTRO() {
  NOVO_INTRO_FOTO_iME = false;
  UPD_INTRO_Pic.value = null;
  MDL["log"]["LOGIN_FOTO"].src = DefalkaFTO;
}

function close_INTRO() {
  STNGS_txt(MAIN_EL["Select_opcija"][4], 0);
  MDL["log"]["INTRO"].style.display = "none";
  RESET_I_paraMETARS();
}
