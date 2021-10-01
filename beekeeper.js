function verifyPassword(form)
{
    password1 = form.password1.value;
    password2 = form.password2.value;

    if(password1 != password2)
    {
        alert("Password did not match. Please try again.");
        return false;
    }

    else
    {
        return true;
    }
}

function usernameValid(form)
{
    username1 = form.username1.value;

    if(username1.length < 8)
    {
        alert("Username must be at least 8 characters long.");
        return false;
    }

    else if(username1.length > 25)
    {
        alert("Username must be less than 25 characters long.");
        return false;
    }

    else if(username1 == "jBillz" || username1 == "PineapplesBelongOnPizza" || username1 == "TheRock" || username1 == "ZachKing" || username1 == "Rihanna" || username1 == "Microsoft" || username1 == "ActionJackson" )
    {
        alert("Bezos reserved this username")
        return false
    }
    
    else
    {
        return true;
    }
}
