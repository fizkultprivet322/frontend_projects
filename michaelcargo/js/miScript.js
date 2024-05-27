
	$(document).ready(function() {
  	$('.example').magnificPopup({type:'image'});
});

	$(document).ready(function() {
  	$('.pc').magnificPopup({type:'image'});
});

	$(document).ready(function() {
  	$('.foto2').magnificPopup({type:'image'});
});

$('#sendMail').submit(function(event){
    var form = this;
    $.post(
         'php/mail.php',// адрес обработчика
         $("#sendMail").serialize(), // отправляемые данные         
        function(msg) { // получен ответ сервера  
            console.log(msg);
            form.reset();
        } 
    );
    event.preventDefault();
});

$('#sendMail').submit(function(event){
    var form = this;
    $.post(
         'php/mail.php',// адрес обработчика
         $("#sendMail").serialize(), // отправляемые данные         
        function(msg) { // получен ответ сервера  
            console.log(msg);
            form.reset();
        } 
    );
    event.preventDefault();
});