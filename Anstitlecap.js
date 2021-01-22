var title=function(str)
{
    for(i=0;i<str.length;i++)
    {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].substr(1).toLowerCase();
    }
    return str;
}
var result=title(["ant","cat","dog"])
console.log(result);