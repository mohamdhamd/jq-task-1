$(document).ready(function(){
	$(".btn").click(function(){
        $(".bg-1").animate({left:"-1800px"},2000)
        })


	$(".btn-2").click(function(){
        $(".bg-2").css({"display":"block"})
        $(".bg-2").animate({top:"0"},1000)
        })


	$(".btn-1").click(function(){
        $(".bg-3").css({"display":"block"})
        $(".bg-3").animate({top:"0"},1000)
        })
        $(".sub-3").click(function(){
        var nameS =document.getElementById("nameS").value;
        localStorage.setItem("nameS",nameS);
        var passwordS =document.getElementById("passwordS").value;
        localStorage.setItem("passwordS",passwordS);

        $(".bg-3").animate({"left":"-2000px"},500)
        $(".bg-2").css({"display":"block"},10).animate({"top":"0px"},1000)

        
        $(".sub-2").click(function(){
                var nameL =document.getElementById("nameL").value;
                localStorage.setItem("nameL",nameL);
                var passwordL =document.getElementById("passwordL").value;
                localStorage.setItem("passwordL",passwordL);


                if(nameS == nameL && passwordL == passwordS , passwordS!="" && nameS!=""){
                        $(".bg-2").animate({"left":"-2000px"},1000)
                        $(".bg-4").css({"display":"block"},10)
                        $(".bg-4").animate({"top":"0px"},2000)
                }
                
                else{
                        alert("name or password not correct")
                }


        })





        })





})
