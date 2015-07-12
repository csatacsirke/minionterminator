//style="background-image:url(/stickers/asset/?sticker_id=213405858808639&image_type=BestEffortImage);background-repeat:no-repeat;background-size:120px 120px;cursor:pointer;height:120px;width:120px;"
//document.body.style.border = "5px solid red";
//url("https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xaf1/t39.1997-6/s600x600/11405169_1598410653755570_505853584_n.png")

// valahogy meg kéne határozni random url ből hogy baszott minyon -e
// esetleg lehetne nézni hogy változik-e (mozgás)

/*
https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xaf1/t39.1997-6/s600x600/11405169_1598410653755570_505853584_n.png
https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xat1/t39.1997-6/s600x600/11414369_1598402840423018_1800544900_n.png
https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xfa1/t39.1997-6/p480x480/11405239_1598405810422721_1671966355_n.png
https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xat1/t39.1997-6/s600x600/11405203_1598404340422868_2023001922_n.png
https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xta1/t39.1997-6/s600x600/11057106_1598406267089342_680065874_n.png	
https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xat1/t39.1997-6/s600x600/11414384_1598406797089289_1118054438_n.png
https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xfa1/t39.1997-6/p720x720/11414392_1605075556422413_1740949803_n.png
https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xtf1/t39.1997-6/s600x600/11414396_1598403067089662_1800388206_n.png
https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xft1/t39.1997-6/s600x600/11409246_1598361110427191_519904874_n.png
https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xta1/t39.1997-6/s600x600/11409241_1598408767089092_1077535957_n.png
https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xtf1/t39.1997-6/p600x600/11404846_1605075633089072_358094530_n.png
https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xtf1/t39.1997-6/p480x480/11404908_1598358117094157_1838212288_n.png
https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xft1/t39.1997-6/s720x720/11414367_1605075793089056_1905798497_n.png
*/


var disgustingUrls = [
"11405169_1598410653755570_505853584_n.png" ,
"11414369_1598402840423018_1800544900_n.png",
"11405239_1598405810422721_1671966355_n.png",
"11405203_1598404340422868_2023001922_n.png",
"11057106_1598406267089342_680065874_n.png"	,
"11414384_1598406797089289_1118054438_n.png",
"11414392_1605075556422413_1740949803_n.png",
"11414396_1598403067089662_1800388206_n.png",
"11409246_1598361110427191_519904874_n.png" ,
"11409241_1598408767089092_1077535957_n.png",
"11404846_1605075633089072_358094530_n.png" ,
"11404908_1598358117094157_1838212288_n.png",
"11414367_1605075793089056_1905798497_n.png",
"/stickers/"
];


function removeMinions() {

	var divs = document.getElementsByTagName("div");
	for(var i = 0; i < divs.length; i++){
		var div = divs[i];
		
		
		//var disgustingUrl = "/stickers/";
		var lovelyUrl = "url('http://hirportal.sikerado.hu/images/kep/201203/sor.jpg')";
		
		for(var j=0; j < disgustingUrls.length; j++) {
			var disgustingUrl = disgustingUrls[j];
			
			var index = div.style.backgroundImage.indexOf(disgustingUrl);
			if(index > -1) {
				// kidobjuk az azonosítót amit a script fel tud ismerni az animációhoz
				div.setAttribute("data-reactid", "");
				// beállítunk egy szép hátteret
				div.style.backgroundImage = lovelyUrl;
				div.style.backgroundSize = div.style.width + "px " + div.style.height + "px";
				
			}
			
		}
		
		
		
	}

	
}

setInterval(removeMinions, 2000);
