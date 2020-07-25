class Control
{
    getPage(url,callBack,async = null,stateData)
    {
        if(async === true)
        {
            $.ajax({
                url:url,
                type:"get",
                async:true,
                cache:false,
                success:function(res)
                {
                    callBack(res);
                    document.title = stateData.title;
                    window.history.replaceState("Any",stateData.title,stateData.path);
                }
            });
        }
        else {
            $.ajax({
                url:url,
                type:"get",
                async:false,
                cache:false,
                success:function(res)
                {
                    callBack(res);
                    document.title = stateData.title;
                    window.history.replaceState("Any",stateData.title,stateData.path);
                }
            });
        }
    }

    post(url,data,callBack,async = null) {
        if(async === true)
        {
            $.ajax({
                url:url,
                data:data,
                type:"post",
                async:true,
                cache:false,
                success:function(res)
                {
                    callBack(res);
                }
            });
        }
        else {
            $.ajax({
                url:url,
                data:data,
                type:"post",
                async:false,
                cache:false,
                success:function(res)
                {
                    callBack(res);
                }
            });
        }
    }

    postImage(url,data,callBack, async = null)
    {
        if(async === true)
        {
            $.ajax({
                url:url,
                data:data,
                type:"post",
                async:true,
                processData:false,
                contentType:false,
                cache:false,
                success:function(res)
                {
                    callBack(res);
                }
            });
        }
        else {
            $.ajax({
                url:url,
                data:data,
                type:"post",
                async:false,
                processData:false,
                contentType:false,
                cache:false,
                success:function(res)
                {
                    callBack(res);
                }
            });
        }
    }
}

let control = new Control();