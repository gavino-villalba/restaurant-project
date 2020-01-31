 $(document).ready(function ($) {
   $('#fecha_reserva').datepicker({
        language: 'pt-BR'
     });


  var horas=0;
  var hora_min=9;
  var hora_max=20;

  for(var i=hora_min; i<hora_max; i++){
    $("#timeReserva").append('<option value='+i+'>'+i+':00 Hrs</option>');
  }

  var contador=1;

  // $(document).on("click",function(){
  //   // if(contador ==0){
  //   //   $(".menu_cabecera").animate({
  //   //     left: '-100%'
  //   //   });
  //   //   //contador=0;
  //   // }
  //
  //
  // })

  $(".menu_bar").click(function(){
    if(contador ==1){
      $(".menu_cabecera").animate({
        left: '0'
      });
      contador=0;
    }else{
      $(".menu_cabecera").animate({
        left: '-100%'
      });
      contador=1;
    }
  });

  $(".go_to").click(function(){
      $(".menu_cabecera").animate({
        left: '-100%'
      });
      contador=1;
    
  });





});
