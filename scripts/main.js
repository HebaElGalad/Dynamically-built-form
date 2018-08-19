var link = 'https://levelup-assessment-backend-odvoreherl.now.sh/api/';

$.ajax({
  url: link + 'getFormSchema',
  method: 'get',
  success: function(data){
  	$('#form').html("<h1>Email: " + data.email.value + "</h1>");
    console.log(data);
  },
  error: function(error) {
    console.log(error);
  }
});
