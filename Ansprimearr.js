var prime=function(num)
{
for(i=0;i<num.length;i++)
{
   if(num[i]>1){
   var y=0;
   for(j=2;j<num[i];j++)
   {
   if(num[i]%j===0)
   {
       y=1;
       continue;
   }
   }
   if(y===0)
   console.log(num[i]);
}
}}
var result=prime([3,5,7,9,10]);