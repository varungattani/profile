function mouseOver(id1,id2,w1) {
    document.getElementById(id2).style.width = w1;
    document.getElementById(id1).style.height = "0rem";
    document.getElementById(id2).style.height = "0.5rem";
    
    document.getElementById(id2).style.backgroundColor = "#55ff06";
    
  }
  
  function mouseOut(id1,id2) {
    document.getElementById(id2).style.width = "0px";
   
    document.getElementById(id2).style.height = "0rem";
    document.getElementById(id1).style.height = "0.5rem";
    
    
    
  }