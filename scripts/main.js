var link = 'https://levelup-assessment-backend-odvoreherl.now.sh/api/';

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
      appedndData += `<input type='${inputType}' name='${lable}' value='${inputValue}' />`;

      $('#level-up-form').append(appedndData);
    }

    console.log(data);
  },
  error: function(error) {
    console.log(error);
  }
});
