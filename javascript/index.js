//Écouteur qui affiche le texte
document.getElementsByTagName('a')[0].addEventListener('click', function() {
  document.getElementById('text').style.display = "block";
});
//Écouteur qui cache le texte
document.getElementsByTagName('a')[1].addEventListener('click', function() {
  document.getElementById('text').style.display = "none";
});
