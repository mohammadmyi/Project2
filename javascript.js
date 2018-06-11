$.noConflict(); 
jQuery(document).ready(function($){
    $('.btn-t').focus(function(){
        $('.btn-t').css('color','red');

    });

    $('.in1').blur(function(){
        var pp1=$(".in1").val();
        if (pp1=="") {
           $(".w1").html("Please Enter Your Name").css("color","red");
        } else {
           $(".w1").html("Thank You").css("color","green");            
        }
    });

    $('.in2').blur(function(){
        var pp2=$(".in2").val();
        if (pp2=="") {
           $(".w2").html("Please Enter Your Email").css("color","red");
        } else {
           $(".w2").html("Thank You").css("color","green");            
        }
    });
    


    /*  Jquery Ajax
        
       $(".btn-t").click(function(){
        var pp1=$(".in1").val();
        var pp2=$(".in2").val();       
        $.post("index.php",{ps1=pp1},function(Data){
        $(".w1").html(Data);})
        $.post("index.php",{ps2=pp2},function(Data){
            $(".w2").html(Data);});
   });*/

   $(window).scroll(function() {
    if ($(document).scrollTop()>70) {
      $(".navbar").addClass("paien");
      $(".navbar div").css("background-color","#35050dea");      
      $(".dropdown-menu ").addClass("paien1");
      $(".dropdown-item").addClass("paien1");
      
    } else {
      $(".navbar").removeClass("paien");
      $(".navbar div").css("background-color","#edbe30");            
      $(".dropdown-menu ").removeClass("paien1");
      $(".dropdown-item").removeClass("paien1");
      
    }
  });


});
