var arr=function(a,b)
{
    var med=a.concat(b).sort()
    median=(med[med.length/2]+med[(med.length/2)-1])/2
    console.log(med);
    return median;
}
var result=arr([1,2,4,3],[7,6,5,8])
console.log(result);