 $(document).ready(function ($) {



   $("#fecha_reserva").datepicker({
                        format:"dd/mm/yyyy",
                        language: "es",
                        startDate: "' . date('d/m/Y', strtotime(min($arrFechas))) . '",
                        endDate: "' . date('d/m/Y', strtotime(max($arrFechas))) . '"
                    });
});
