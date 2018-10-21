let icons = document.getElementsByClassName("icons");

//setInterval(illuminate, 2000);

illuminate();

function illuminate() {
    for(var i = 0; i < icons.length; i++ ) {/*
        setTimeout(function() {
            console.log(icons[i].classList[1]);
        }, 1000);*/
        console.log(icons[i])
    }
}

function addClass(adder) {
  adder.classList.add("illuminate");
}
