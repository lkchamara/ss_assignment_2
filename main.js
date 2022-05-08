$(document).ready(function(){
    
    // Google Client Id
    var clientId = "1066463102220-p7rlp5sour0d7qo1n7gq6ij78q8eh67o.apps.googleusercontent.com";

    // redirect_uri
    var redirect_uri = "http://localhost/demo/upload.html";

    // scope of the project
    var scope = "https://www.googleapis.com/auth/drive";

    $("#login").click(function(){

       signIn(clientId,redirect_uri,scope);

    });

    function signIn(clientId,redirect_uri,scope){
     
       url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
       +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
       +"&access_type=offline";

       window.location = redirect_uri;

    }

});
