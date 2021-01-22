(function(a,b)
{
    var med=a.concat(b).sort()
    median=(med[med.length/2]+med[(med.length/2)-1])/2
    console.log(med);
    console.log(median);
})([1,2,4,3],[7,6,5,8])