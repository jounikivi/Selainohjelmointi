function lisaaViesti() {
  // Hae syötekentän arvo
  var viestiKentta = document.getElementById('viestiKentta');
  var viestinTeksti = viestiKentta.value;

  // Luo uusi kappaleelementti
  var uusiViesti = document.createElement('p');
  uusiViesti.textContent = viestinTeksti;

  // Lisää uusi kappale viestisäiliöön
  var viestiSailio = document.getElementById('viestiSailio');
  viestiSailio.appendChild(uusiViesti);

  // Tyhjennä syötekenttä seuraavaa viestiä varten
  viestiKentta.value = '';
}
