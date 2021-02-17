function createDivs() {
    for (i = 0; i < 9; i++) {
      var d = document.createElement("DIV");
      document.body.appendChild(d);
  
      //Stuck here -borrowed some of this from a similar topic-    
      d.onclick = function() {
        return function() {
          var p = document.createElement("P");
          var x = document.createTextNode("X");
          p.appendChild(x);
          d.appendChild(p);
        }
      }(i);
      //-------------------------------------------------  
  
      var ii = document.createAttribute("id");
      ii.value = "D" + i;
      d.setAttributeNode(ii);
      var z = "D" + i;
      if (i == 3 || i == 6) {
        document.getElementById(z).style.clear = "left";
      }
    }
  }