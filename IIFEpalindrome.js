(function(arr)
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
    console.log(pan) ;
})([121,123,124,232])