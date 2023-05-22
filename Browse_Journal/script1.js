var con=true;
			function ma(){
            var storage=document.getElementById("issueNoSelectBox");
            var stylestorage={
                "height":"auto","background":"linear-gradient(to left,#32da40,#69bef7)",
                "padding":"0 6%",
                
                "padding-top": "20px",
                "padding-bottom": "30px"};
            Object.assign(storage.style,stylestorage);
            
			if(con==false){
				var e=document.getElementById("ele");
				e.remove();
				con=true;
				}
			if(con==true){
				state();
                storage.scrollIntoView({behavior:'smooth'});
				con=false;
			}
			}
            function state(){
                var ele=document.createElement("div");
                var hea=document.createElement("h2");
                hea.innerHTML="Storage facility in Your Area";
                var styl={"font-size":"40px","color":"white","display":"block","text-align":"center","margin-bottom":"20px"};
                Object.assign(hea.style,styl);
                ele.appendChild(hea);
                var storage=document.getElementById("storage-facility");
				ele.setAttribute("id","ele");
                var st=document.getElementById("name").value;
                var rg=document.getElementById("region").value;
                switch(st){
                    case "bihar":var sb=[["ara","1600metric tonne","675778578","hs -23 ,bijnor area","full/4","2000"],
                    ["siwan","8000metric tonne","656747637","69M8-RG4,chakiya,hardia,mahadeva","empty/0","1000"],
                ["ara","9000 metric tonne","53542544","Old cold store,NH19,Nai Basti","full/15","2000"],
                ["Muzaffarpur","1500","9013761721","48A ,Bela insdustrial area phase 2,Narayanpur Ananat","half empty/0","3000"],
                ["Begusarai","2000","8083483456","Laxman Bag,swastik chowk,Ulao","empty/0","1500"],
                ["Patna","1200","9199312222","2v7c patna-parsa-siwan highway,bhataura","partial empty/0","1900"],
            ];
                                head(ele);
                                sb.forEach(sb1 => {
                                
                                    if(sb1[0]==rg){
                                        sendE(sb1,ele);
                                    }
                                    
                                });
                                break;
                    case "karnataka":var sb=[["Bangalore","1337","53545454","M/S Geekay Industries76,Indusrial suburb,Yeswantpur,Bangalore-560 002","emtpty/0","2000"],
                ["Belgaum","1500","654565612","Barafwala Ice & Cold Storage 239 / 4 , Mahatma Phule RoadGoa - Ves , ShahpurBELGAU","full/20","2000"]
            ];
                                head(ele);
                                sb.forEach(sb1 => {
                                
                                    if(sb1[0]==rg){
                                        sendE(sb1,ele);
                                    }
                                    
                                });
                            break;

                    case "andhrapradesh":var sb=[
                        ["Vijayawada","1500","7666657609","M/s Ratna Ice & Cold Storage,G.N.T. Road,Rajahmundry	","partial empty/0","1500"],
["Vijayawada","1500","8662831822","Rayanpadu Road, Golapadi, Gollapudi. Vijayawada Rural. Krishna","full/15","1900"],
["Guntur","4000","8926565140","Venkateswara Cold Storage Ltd ,Near Mirch Yard,ankireddypalem","empty/0","2500"],
["vishakhapatinam","2500","6665455536","M/S.Lacks Cold Storage (P) Ltd., Vellenki (V), Bheemili Mandal,VSP Dt.","half/0","2300"],
["Vijayawada","2500","9248067742","54/6 4th rd,Phase II ,industrial estate,autonagar","half empty/0","1900"],
                    ];
                    head(ele);
                    sb.forEach(sb1 => {
                    
                        if(sb1[0]==rg){
                            sendE(sb1,ele);
                        }
                        
                    });
                    break;




                
            }

            var ending={"margin-bottom":"20px","padding-bottom":"20px"};
            Object.assign(ele.style,ending);
            storage.appendChild(ele);


        }
        function head(ele){
            
            var e=document.createElement("div");
            var f=document.createElement("div");
            var g=document.createElement("div");
            var h=document.createElement("div");
            var i=document.createElement("div");
            var j=document.createElement("div");
            e.classList.add("e");
            f.classList.add("e");
            g.classList.add("e");
            h.classList.add("e");
            i.classList.add("e");
            j.classList.add("e");
            var sty1={"width":"10%"};
            var sty2={"width":"10%"};
            var sty3={"width":"15%"};
            var sty4={"width":"40%"};
            var sty5={"width":"13%"};
            var sty6={"width":"10%"};
            Object.assign(e.style,sty1);
            Object.assign(f.style,sty2);
            Object.assign(g.style,sty3);
            Object.assign(h.style,sty4);
            Object.assign(i.style,sty5);
            Object.assign(j.style,sty6);
            e.innerHTML="Area";
            f.innerHTML="Quantity(in kgs)";
            g.innerHTML="phone";
            h.innerHTML="Address";
            i.innerHTML="Status/waiting";
            j.innerHTML="Price(per kgs)"

            ele.appendChild(e);
            ele.appendChild(f);
            ele.appendChild(g);
            ele.appendChild(h);
            ele.appendChild(i);
            ele.appendChild(j);
        }
            function sendE(sb,ele){
                var main=document.createElement("div");
                main.classList.add("mi");
                var a=document.createElement("div");
                var b=document.createElement("div");
                var c=document.createElement("div");
                var d=document.createElement("div");
                var j=document.createElement("div");
                var k=document.createElement("div");
                var sty1={"width":"10%"};
                var sty2={"width":"10%"};
                var sty3={"width":"15%"};
                var sty4={"width":"40%"};
                var sty5={"width":"13%"};
                var sty6={"width":"10%"};
                Object.assign(a.style,sty1);
                Object.assign(b.style,sty2);
                Object.assign(c.style,sty3);
                Object.assign(d.style,sty4);
                Object.assign(j.style,sty5);
                Object.assign(k.style,sty6);
                
                a.innerHTML=sb[0];
                b.innerHTML=sb[1];
                c.innerHTML=sb[2];
                d.innerHTML=sb[3];
                j.innerHTML=sb[4];
                k.innerHTML=sb[5];
                a.classList.add("f");
                b.classList.add("f");
                c.classList.add("f");
                d.classList.add("f");
                j.classList.add("f");
                k.classList.add("f");
                           
                main.appendChild(a);
                main.appendChild(b);
                main.appendChild(c);
                main.appendChild(d);
                main.appendChild(j);
                main.appendChild(k);
               
                ele.appendChild(main);
            
                
            }