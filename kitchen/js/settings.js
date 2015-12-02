$(document).ready(function(){
   //Showing SERVER_IP value
   $('#server-ip').val(SERVER_IP);
   $('#submit-settings').click(function(){
      SERVER_IP = $('#server-ip').val();
      localStorage.setItem("SERVER_IP", SERVER_IP);
      $('#ajax-panel-success').show();
      //Hiding success panel after 10 seconds
      setTimeout(function(){
         $('#ajax-panel-success').hide();
      }, 10000);
   });
});
