var html = document.getElementById('id-html'),
    css = document.getElementById('id-css3'),
    sass = document.getElementById('id-sass'),
    uikit = document.getElementById('id-uikit'),
    js = document.getElementById('id-js'),
    angular = document.getElementById('id-angular'),
    git = document.getElementById('id-git'),
    joomla = document.getElementById('id-joomla'),
    php = document.getElementById('id-php'),
    python = document.getElementById('id-python'),
    java = document.getElementById('id-java'),
    android = document.getElementById('id-android');


  var icons = document.getElementsByClassName('icons');

  setClass();
  setInterval(removeClass, 5000);
  setInterval(setClass, 4000);
  

  function setClass() {
      setTimeout(illuminate, 1000, html);
      setTimeout(illuminate, 1500, css);
      setTimeout(illuminate, 2000, sass);
      setTimeout(illuminate, 2500, uikit);
      setTimeout(illuminate, 3000, js);
      setTimeout(illuminate, 3500, angular);
      setTimeout(illuminate, 4000, git);
      setTimeout(illuminate, 4500, joomla);
      setTimeout(illuminate, 5000, php);
      setTimeout(illuminate, 5500, python);
      setTimeout(illuminate, 6000, java);
      setTimeout(illuminate, 6500, android);
  }

  function removeClass() {
    setTimeout(deIlluminate, 1000, html);
    setTimeout(deIlluminate, 1500, css);
    setTimeout(deIlluminate, 2000, sass);
    setTimeout(deIlluminate, 2500, uikit);
    setTimeout(deIlluminate, 3000, js);
    setTimeout(deIlluminate, 3500, angular);
    setTimeout(deIlluminate, 4000, git);
    setTimeout(deIlluminate, 4500, joomla);
    setTimeout(deIlluminate, 5000, php);
    setTimeout(deIlluminate, 5500, python);
    setTimeout(deIlluminate, 6000, java);
    setTimeout(deIlluminate, 6500, android);
}
  
function illuminate(i) {
    i.classList.add('illuminate');
}

function deIlluminate(j) {
    j.classList.remove('illuminate');
}

jQuery(document).ready(function () {

	$("#form").submit(function(){
		$.ajax({
			type: "POST",
			url: "/js/main.php",
			data: $(this).serialize()
		}).done(function(){
		document.getElementById('greeting').textContent = 'Danke! ich erreiche Sie sobald, wie möglich';
		});
		return false;
	});
});