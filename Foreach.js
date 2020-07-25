class Foreach
{
    serializeData(object,appendTo)
    {
        Object.keys(object).forEach(function (key) {
            appendTo(key);
        });
    }
}

let fe = new Foreach();