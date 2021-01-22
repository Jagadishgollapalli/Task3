(function(str)
{
    for(i=0;i<str.length;i++)
    {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].substr(1).toLowerCase();
    }
    console.log(str);
})(["ant","cat","dog"])