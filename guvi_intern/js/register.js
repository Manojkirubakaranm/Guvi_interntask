$(function(){
    $("#registerForm").on('click', function(){
        var username  = $("#username").val();
        var email   = $("#email").val();
        var password       = $("#password").val();

        console.log("username",username)
        console.log("email",email)
        console.log("password",password)
        $.ajax({
            method: "POST",
            url:    "register.php",
            data: { "username": username,"email": email, "password": password},
           }).done(function( data ) {
              var result = $.parseJSON(data);
              var str = '';
              var cls = '';
              if(result == 1) {
                str = 'User record saved successfully.';
                cls = 'success';
              }else if( result == 2) {
                str = 'All fields are required.';
                cls = 'error';
              }else if( result == 3) {
                str = 'Enter a valid email address.';
                cls = 'error';
              }else{
                str = 'User data could not be saved. Please try again';
                cls = 'error';
              }
            $("#message").show(3000).html(str).addClass('success').hide(5000);
        });
    })
})