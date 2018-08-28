// USE THE JSON SCHEMA RETURNED FROM THE API TO DYNAMICALLY BUILD THE FORM
let link = 'https://levelup-assessment-backend-ddmwdsdlta.now.sh/api/';

$.ajax({
  url: link + 'getFormSchema',
  method: 'GET',
  success: function(data){

    for (let key in data) {
      let appedndData = "";
      let lable = key;
      let inputType = data[key].type;
      let inputValue = data[key].value;

      appedndData += `<label for='${lable}'>${lable}</label>`;
      appedndData += `<input type='${inputType}' name='${lable}' id='${lable}' value='${inputValue}' />`;

      $('#level-up-form').append(appedndData);
    }
    
    // RESET THE CHECKBOX VALUE
    $(document).ready(function() {
      $('#final_submission').attr( 'value', null);
    });

    // console.log(data);

  },
  error: function(error) {
    console.log(error);
  }
});



// SUBMITING THE FORM AS A JSON OBJECT

// 1.Get the form data as array and json stringify it.
$( "#level-up-form" ).submit(function( event ) {
  event.preventDefault();
  let formData = $( this ).serializeArray();
  // console.log( formData );

  let jsonObject = {};
  for(let i = 0; i < formData.length; i++) {
    let key = formData[i].name;
    jsonObject[key] = formData[i].value;
  }
  // console.log(jsonObject);

  // 2.Setting the ajax request
  $.ajax({
    type: 'POST',
    headers: {
      'Content-Type' : 'application/json; charset=utf-8'
    },
    url: link + 'submission',
    data:  JSON.stringify(jsonObject),
    success: function(){
      console.log('Your form submited successfully!');
    },
    error: function(error) {
      console.log(error);
    },
    dataType: 'json'
  });

});
