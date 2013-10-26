/**
 * Author : VenomVendor
 * Dated : 27,Oct'13.
 * URL : https://www.google.co.in/search?q=VenomVendor
 * Copyright : VenomVendor.
 * License : This work is licensed under the Apache License, Version 2.0 (the "License");
 * http://www.apache.org/licenses/LICENSE-2.0
 **/
				var mysheet = document.styleSheets[0] /* Select StyleSheet */
				var myrules = mysheet.rules || mysheet.cssRules;
				/* Direct 
					var myrules = document.styleSheets[0].rules || document.styleSheets[0].cssRules;
				*/
				for (i = 0; i < myrules.length; i++) {
				    targetrule = myrules[i]
				    //console.log(i+" : "+ targetrule.style.cssText);
				}

				function PrintRules() {
				    var totalStyleSheets = document.styleSheets.length;

				    var _ID = 1;
				    for (var TSS = 0; TSS < totalStyleSheets; TSS++) {
				        //console.log("TSS" + TSS);
				        var p_id;
				        var rules = document.styleSheets[0].rules || document.styleSheets[0].cssRules;

				        for (var x = 0; x < rules.length; x++) //Total 
				        {
				            try {
				                var title = rules[x].style.cssText;
				                //var nextLine = " ;\n" /* Uncomment when "html: false" in tooltip options >> vice-versa */
				                var nextLine = "<br>" /* Uncomment when "html: true" in tooltip options >> vice-versa */
				                title = title.replace(/;/g, nextLine);
				                var splitText = rules[x].selectorText
				                var split = splitText.split(",");
				                for (var i = 0; i < split.length; i++) {
				                    // console.log(split[i] + title)
				                    p_id = "vee" + _ID;
				                    document.getElementById("out").innerHTML += "<span style='cursor:pointer' class='someClass' id='vee" + _ID + "'>" + split[i] + "</span> <br />";
				                    //$("#vee"+_ID).attr('title', title); /* jQuery */
				                    document.getElementById("vee" + _ID).setAttribute("title", title);
				                    _ID++;
				                }
				                //$('#p'+p_id).attr('title', title);
				            } catch (e) {
				                console.log(e);
				                console.log("Error" + p_id);
				            }
				        }
						/* After Creating Elements */
				        $(".someClass").tooltip({
				            placement: 'right',
				            html: true,
				            trigger: 'hover'
				        });
				    }
				}