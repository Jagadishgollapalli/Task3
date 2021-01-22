var rotate=function(arr,k)
{
    var i=0
    while(i<k)
    {
        arr.unshift(arr.pop())
        i++
    }
    return arr;
}
var result=[]
result=rotate([1,2,3,4,5],3)
console.log(result)