Vue.component("mdlste", {
  template: `<div>
  <div class="modaAKKS">
  
    <!-- Modal content -->
    <div class="modaAKKS-content">
      <div class="modaAKKS-header" style="text-align: center;">
        <span>create new</span><br><span class="slk_akk"></span><br><span>account role</span>
      </div>
      <div class="modaAKKS-body"><p>enter invite code for new account</p> 
  <input type="text" id="COD_AKK" placeholder="*4 charater minum"><br>
  <p id="ErorINFO_cod" style="color:red;text-align: center;"></p>
  
  
  <p>*Momental <span class="slk_akk"></span> will be owerwrite with new one after created</p>
  
      </div>
      <div class="modaAKKS-footer">
        <button type="button" id="cr8_new_akk">CREATE ACCOUNT</button>
        <button type="button" id="CANCEL_AKK_BTN">cancel</button>
      </div>
    </div>    
  
  </div>
  
  
   <div id="Modal_FOTOset" class="modal" style="display:none;"><!-- Modal content -->
    <div class="modal-content" style="margin-bottom: 200px;">
      <span class="close" onclick="this.parentElement.parentElement.style.display='none';RESETparaMETARS();">&times;</span>
      
      <button type="button"  onclick="UPD_FTO_btn(false);" style="width: auto;margin:-15px;position: inherit;display: grid;float: left;background:red;" >deletedefalt img</button>
      <br><br><input type="file" value="upload" id="fileButonP_FOTO" style="width: auto;float: right;position: inherit;">
      <img class="View_FOTO"><i id="noFOTO" class='fa fa-image blankIMG'></i>
      
      <button type="button"  onclick="UPD_FTO_btn(true);" style="width: auto;margin: auto;position: inherit;display: grid;float: left;" >update</button>
      <button type="button"  onclick="FOTO_model.style.display='none';RESETparaMETARS();" style="width: auto;margin: auto;position: inherit;display: grid;float: right;background:#c4572c;" >cancel</button>
  
    </div>
   </div>
</div>`,
});

var storeqqee = new Vuex.Store({
  state: {
    view: "mdlste",
  },
});

var signqqee = new Vue({
  el: "#MDLS",
  store: store,
});
