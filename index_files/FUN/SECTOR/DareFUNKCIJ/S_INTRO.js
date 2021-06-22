function PRESET_INTRO(a){
if(a["TXT"]["TITLE"])	{MDL["log"]["F_IME"].value=a["TXT"]["TITLE"];}		else{MDL["log"]["F_IME"].value=		null;}
if(a["TXT"]["SLOGAN"])	{MDL["log"]["F_SLOGAN"].value=a["TXT"]["SLOGAN"];}	else{MDL["log"]["F_SLOGAN"].value=	null;}
if(a["TXT"]["SUPPORT"])	{MDL["log"]["F_SUPPORT"].value=a["TXT"]["SUPPORT"];}else{MDL["log"]["F_SUPPORT"].value=	null;}
if(a["L_FOTO"]["F_IME"]){MDL["log"]["LOGIN_FOTO"].src=a["L_FOTO"]["F_SRC"];}else{MDL["log"]["LOGIN_FOTO"].src=	DefalkaFTO;}
if(a["C_BTN"])			{MDL["log"]["HELP_BTN"].selectedIndex=1;}			else{MDL["log"]["HELP_BTN"].selectedIndex=0;}}

function UPD_INTRO(a){let O={"TXT":{"TITLE":false,"SLOGAN":false,"SUPPORT":false},"L_FOTO":{"F_IME":false,"F_SRC":false},"C_BTN":false};
O["TXT"]["TITLE"]= 		MDL["log"]["F_IME"].value;
O["TXT"]["SLOGAN"]= 	MDL["log"]["F_IME"].value;
O["TXT"]["SUPPORT"]= 	MDL["log"]["F_SUPPORT"].value;
if(MDL["log"]["HELP_BTN"].selectedIndex){O["C_BTN"]=true;}
if(a["L_FOTO"]["F_SRC"]!=MDL["log"]["LOGIN_FOTO"].src){
O["L_FOTO"]["F_IME"]=	NOVO_INTRO_FOTO_iME;	
O["L_FOTO"]["F_SRC"]=	FTO_INTRO_url;	}
else{
O["L_FOTO"]["F_IME"]=	a["L_FOTO"]["F_IME"];	
O["L_FOTO"]["F_SRC"]=	a["L_FOTO"]["F_SRC"];}return O;}