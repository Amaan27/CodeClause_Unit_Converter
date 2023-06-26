function convert() {
    var ipVal = parseFloat(document.getElementById('ipVal').value);
    var ipUnit = document.getElementById('ipUnit').value;
    var opUnit = document.getElementById('opUnit').value;
    var opVal;
  
    if (ipUnit === opUnit) {
      opVal = ipVal;
    } 
   
    else if (ipUnit === 'm') {
      if (opUnit === 'km') 
        opVal = ipVal * 0.001;
       else if (opUnit === 'ft') 
        opVal = ipVal * 3.28084;
       else if (opUnit === 'mi') 
        opVal = ipVal * 0.000621371; 
    } 
    
    else if (ipUnit === 'km') {
      if (opUnit === 'm') 
        opVal = ipVal * 1000;
       else if (opUnit === 'ft') 
        opVal = ipVal * 3280.84;
       else if (opUnit === 'mi') 
        opVal = ipVal * 0.621371;  
    } 
    
    else if (ipUnit === 'ft') {
      if (opUnit === 'm') 
        opVal = ipVal * 0.3048;
       else if (opUnit === 'km') 
        opVal = ipVal * 0.0003048;
       else if (opUnit === 'mi') 
        opVal = ipVal * 0.000189394;  
    } 
    
    else if (ipUnit === 'mi') {
      if (opUnit === 'm') 
        opVal = ipVal * 1609.34;
       else if (opUnit === 'km') 
        opVal = ipVal * 1.60934;
       else if (opUnit === 'ft') 
        opVal = ipVal * 5280; 
    }
  
    document.getElementById('opVal').value = opVal.toFixed(2);
  }
  