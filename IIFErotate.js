(function(arr,k)
{
    var i=0
    while(i<k)
    {
        arr.unshift(arr.pop())
        i++
    }
    console.log(arr);
})([1,2,3,4,5],3)

