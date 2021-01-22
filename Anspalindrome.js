var ispalindrome=function(arr)
{   
    var l=0;
    var pan=[];
    for(i=0;i<arr.length;i++)
    {  
        var s=0
        var temp=arr[i];
        while(arr[i]>0)
        {
            t=arr[i]%10;
            s=(s*10)+t;
            arr[i]=parseInt((arr[i])/10);
        }
        if(temp==s)
        {
            pan[l]=temp;
            l++;
        }
    }
    return pan;
}
var result=[]
result=ispalindrome([121,123,124,232])
console.log(result)