class HtmlRecyclerControl
{
    htmlSelect(key,value,element)
    {
        element.append("<option value='"+value+"'>"+key+"</option>");
    }
}

let recycler = new HtmlRecyclerControl();