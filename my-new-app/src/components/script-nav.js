function myFunction() {
    alert('hui');
    var x = document.getElementById('myNav');
   
    if (x.className === "my-nav") {
     x.className += " active";
     } else {
         x.className = "my-nav";
    }

    var x2 = document.getElementById('myHeader');
   
    if (x2.className === "my-header") {
     x2.className += " active";
     } else {
         x2.className = "my-header";
    }    
}
