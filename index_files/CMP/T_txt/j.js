Vue.component("txt_t", {
  template: `<table id="SETAP_PLAN" style="margin-top: 130px;">
<tbody id="CL_setup">
</tbody>

</table>`,
});

var storeqqee = new Vuex.Store({
  state: {
    view: "txt_t",
  },
});

var signqqee = new Vue({
  el: "#STP_P_T",
  store: store,
});
