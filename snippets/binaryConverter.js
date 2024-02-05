function Quadrat() {
    const Eingabe  = document.getElementById('Eingabe');
    const Ergebnis = Eingabe.value * Eingabe.value;
    alert('Das Quadrat von ' + Eingabe.value + ' = ' + Ergebnis);
    Eingabe.value = 0;
   }
  
  const los  = document.getElementById('los');
  los.addEventListener ('click', Quadrat, true);