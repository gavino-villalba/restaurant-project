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

});
