Vue.component("akk_t", {
  template: `<table id="AKK_SET">
    <tbody>       <tr>
	<th class="th">Role</th>
    <th class="th">status</th>
    <th class="th">email</th> 
    <th class="th">cod</th>
    <th class="th">create new</th></tr>
  
    <tr><td class="RLE_role" >EDITOR</td>
    <td class="AKKStdsk0"><span class="RLE_status"></span><br>
	
	<label class="switch"><input type="checkbox" class="akk_status"><span class="slider round"></span></label></td>
  
	<td class="AKKStdsk0"><span class="RLE_email"></span><br><button class="REL_email_B"></button></td>
	<td class="AKKStdsk1"><i class='fa fa-clone CP_BTN'></i><span class="RLE_cod"></span></td>
	<td class="AKKStdsk1"><i class='fa fa-edit Akks-editot'></i></td>            
  </tr>
  
    <tr><td class="RLE_role" >.SPECTATOR</td>
    <td class="AKKStdsk0"><span class="RLE_status"></span><br>
	
	<label class="switch"><input type="checkbox" class="akk_status"><span class="slider round"></span></label></td>
  
	<td class="AKKStdsk0"><span class="RLE_email"></span><br><button class="REL_email_B"></button></td>
	<td class="AKKStdsk1"><i class='fa fa-clone CP_BTN'></i><span class="RLE_cod"></span></td> 
	<td class="AKKStdsk1"><i class='fa fa-edit Akks-editot'></i></td>
  </tr>
  
    <tr><td class="RLE_role" >ANALIST</td>
    <td class="AKKStdsk0"><span class="RLE_status"></span><br>
	
	<label class="switch"><input type="checkbox" class="akk_status"><span class="slider round"></span></label></td>

	<td class="AKKStdsk0"><span class="RLE_email"></span><br><button class="REL_email_B"></button></td>
	<td class="AKKStdsk1"><i class='fa fa-clone CP_BTN'></i><span class="RLE_cod"></span></td> 
	<td class="AKKStdsk1"><i class='fa fa-edit Akks-editot'></i></td>
  </tr>
  
  
</tbody></table>`,
});

var storeqqee = new Vuex.Store({
  state: {
    view: "akk_t",
  },
});

var signqqee = new Vue({
  el: "#T_AKK_SET",
  store: store,
});
