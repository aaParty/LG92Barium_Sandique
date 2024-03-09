function changePicture1 ()
{
    image.src='images/pic1.png';
}

function changePicture2 ()
{
    image.src='images/pic2.png';
}

function choose ()
{
    let choice = confirm ("Do you want to be directed back to the 1st window?");

    if (choice == 1)
    {
        window.open ("index.html");
    }
    else
    {
        alert ("Okay then")
    }
}