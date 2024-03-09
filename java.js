function choose ()
{
    let choice = confirm ("Do you want to be directed to window 2?");

    if (choice == 1)
    {
        window.open ("index2.html");
    }
    else
    {
        alert ("Okay then")
    }
}