function validateForm() {
    if (document.forms["myForm"]["firstName"].value === "") {
        alert("First name must be filled out");
        return false;
    }
    else if (document.forms["myForm"]["lastName"].value === "") {
        alert("Last name must be filled out");
        return false;
    }
    else if (document.forms["myForm"]["emailAdress"].value === "") {
        alert("Email adress must be filled out");
        return false;
    }
    else if (document.forms["myForm"]["streetAdress"].value === "") {
        alert("Street adress must be filled out");
        return false;
    }
    else if (document.forms["myForm"]["zipCode"].value === "") {
        alert("Zip code must be filled out");
        return false;
    }
    else if (document.forms["myForm"]["city"].value === "") {
        alert("City must be filled out");
        return false;
    }
}
