$(document).ready(function(){
  

    // Login Function
    const login1 = ['PeterJohn90','abc123'];
    const login2 = ['JohnSmith88', 'password123'];
    const login3 = ['SusanMcbeth101', 'qwerty101'];
    const login4 = ['BradPitt75', 'fightClubRules1'];




    $("#checkLogin").on("click", function(event){

        // Validate User input
        let loginValues = $("#login").serializeArray();

        let username = loginValues[0].value;
        let password = loginValues[1].value;
      
        $('#Username').css('border','1px solid #cacaca');
        $("#Username").attr("placeholder", "");
        

        if(username == ""){

            $('#Username').css('border','1px solid red');
            $("#Username").attr("placeholder", "Please enter a username");

        }

        $('#Password').css('border','1px solid #cacaca');
        $("#Password").attr("placeholder", "");

        if(password == ""){

            $('#Password').css('border','1px solid red');
            $("#Password").attr("placeholder", "Please enter a username");

        }
        
        if(username === login1[0] && password === login1[1]){
            alert("username correct");
        }

        if(username === login2[0] && password === login2[1]){
            alert("username correct");
        }

        if(username === login3[0] && password === login3[1]){
            alert("username correct");
        }

        if(username === login4[0] && password === login4[1]){
            alert("username correct");
        }
       

      

        //Check the username is in a dummy database

        

        //Check the password is in the dummy database



        //Create local storage / Log the user in



       
    });



    
});
