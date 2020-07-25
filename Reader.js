class Reader
{
    readImage(source,imgelem)
    {
        if(source.files && source.files[0])
        {
            let reader = new FileReader();
            reader.onload = function(e)
            {
                $(imgelem).fadeOut(0);
                $(imgelem).fadeIn(500);
                $(imgelem).attr("src",e.target.result);
            }

            reader.readAsDataURL(source.files[0]);
        }

    }
}

let reader = new Reader();