function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var username_error=document.getElementById("username_error");
    var password_error=document.getElementById("password_error");
    if(username=="sai" && password=="sai")
    {
        alert("Login successfull");
        return false;
    }
    else if(username=="" && password=="")
    {
        alert("Username and Passowrd can not be blank");
    }
    else if(username=="")
    {
        alert("Username can not be blank");
    }
    else if(password=="")
    {
        alert("Password can not be blank");
    }
    else
    {
        alert("Login failed check username and password and try again");
        return false;
    }
}