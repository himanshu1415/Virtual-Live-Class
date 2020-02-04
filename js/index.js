function newDoc() {
  window.location.assign("https://education.oracle.com/live-virtual-class-training-online")
}
function myprompt() {
  var person = prompt("Please enter your name", "Guest");
  if (person != null) {
    
    alert("Hello " + person + "! How are you today?");
  }
}
function searchgoogle()
{
  var data=form2.search1.value;
  var browser=form2.s1.value;
  var a;
  if(browser=="google")
  {var a="https://www.google.co.in/search?q=";
  } 
  else if(browser=="Wikipedia")
  {
    var a="https://en.wikipedia.org/wiki/";
  
  }
  else if(browser=="Yahoo")
  {
    var a="https://in.search.yahoo.com/search?p=";
  
  }
  url=a.concat(data);
  window.open(url);
}
function displayScore() { 
  var x= form1.HTML.value;
  var y= form1.JavaScript.value;
  if(x=="" || y=="")
  { alert("Select 1 option atleast");
return false;}
  var z=0; 
  if(x=="c" )
    { z=z+2; } 
  if(y=="2c")
      {z=z+2;}
      
   alert("You Got "+z+" Marks");
} 
function mouseOver() {
    alert("Student Marks");
  }
  function myfunction()
  { alert("Welcome To Online Virtual Class");
  }
  
  function myFunction1() {
    alert("You pressed a key inside the input field");
  }
function on()
{
     alert("For office use only");
     form1.psw.focus()
}
function myfunction12()
{
    form.email.value="";
    
} 
function addNumbers()
	{   
		var val1 = parseInt(document.getElementById("value1").value);
        var val2 = parseInt(document.getElementById("value2").value);
        var val3 = parseInt(document.getElementById("value3").value);
         var ansD = val1 + val2 + val3;
         var Percent= ansD/3;
         if (isNaN(value1) || isNaN(value1) || isNaN(value1) )  
         {
            alert("Enter Marks");
         } 
         else{
             document.getElementById("TotalMarks").value=ansD;
             document.getElementById("Percentage").value=Percent;
            if(val1>= val2 && val1>=val3)
              {
                document.getElementById("HighestMarks").value=val1;
              } 
            else if(val2>= val1 && val2>=val3)
              {
                document.getElementById("HighestMarks").value=val2;
              }
            else
              {
                document.getElementById("HighestMarks").value=val3;
              }
            }
        
    }
