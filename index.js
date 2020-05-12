// Your code goes here
// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("text").innerHTML="This is really cool!")
// }

//curious why the above doesn't the above work. still learning. Comparing to solution file isn't very illuminating for this one:


document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );

  function updateDOM() {
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }
