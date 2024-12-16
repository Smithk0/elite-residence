
  $(document).ready(function () {
    $('#wf-form-Footer-Subscribe-Form').submit(function (e) {
      e.preventDefault();

      var email = $('#Footer-Subscribe-Form-Input').val();

      //Mailchimp API key and list ID
      var apiKey = 'afde591d1f1c6fcdd088a954af27851b-us21';
      var listId = 'a87d9e7158';

      $.ajax({
        method: 'POST',
        url: 'https://us21.api.mailchimp.com/3.0/lists/' + listId + '/members/',
        headers: {
          'Authorization': 'Basic ' + btoa('anystring:' + apiKey)
        },
        contentType: 'application/json',
        data: JSON.stringify({
          email_address: email,
          status: 'subscribed'
        }),
        success: function () {
          // Handle success (optional)
          console.log('Email subscribed successfully');
        },
        error: function (error) {
          // Handle error (optional)
          console.error('Error subscribing email:', error);
        }
      });
    });
  });
