 function display(val)
 {
    //+= will append the previous value to the current value
   document.getElementById("id1").value+=val; 
 }

 function solve()
 {
    let x= document.getElementById("id1").value;
    let y= eval(x);  //will evaluate the function
    document.getElementById("id1").value =y;
 }

 function clr()
 {
    document.getElementById("id1").value= " ";
 }