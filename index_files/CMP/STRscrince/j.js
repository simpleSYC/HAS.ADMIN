Vue.component("start_scrinot", {
  template: `<div>
    <h3 id="TiTle" style="text-align:center;position: relative;">HAS admin panel</h3>
    <img id="imgLOGO" src="https://simplesyc.github.io/HAS.SRC/MEDIA/HAS1000.png">

    <div id="LOG_TOGEL">
<span style="top: 21px;left: 4%;position: absolute;">Login as :</span>

<span>user</span>
<label class="switch" style="top: 13px;"><input type="checkbox" class="akk_status" onchange="Prenasocuvac();" checked ><span class="slider round"></span></label>
<span>admin</span> 

</div>
<br><br><br><br>
    <div id="Lin">
      <input type="email" placeholder="Email..." id="email_field_1" />
      <input type="password" placeholder="Password..." id="password_field_1" /><br>
      <button type="button"  onclick="login();">Login ADMIN PANEL</button> 
    </div>
      
</div>`,
});
var store = "";
var storeqqee = new Vuex.Store({
  state: {
    view: "start_scrinot",
  },
});

var signqqee = new Vue({
  el: "#login_div",
  store: store,
});

function Prenasocuvac(a) {
  let url = "https://simplesyc.github.io/HAS.WEB/";
  if (window.name) {
    url = window.name;
  }
  setTimeout(function () {
    window.open(url, "_self");
  }, 500);
}
