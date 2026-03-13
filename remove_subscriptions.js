var i = 0;

var myVar = setInterval(myTimer, 500);

function myTimer () {

    var els = document.getElementById("grid-container").getElementsByClassName("ytd-expanded-shelf-contents-renderer");

    if (i < els.length) {

        els[i].querySelector("[aria-label^='Unsubscribe from']").click();

        setTimeout(function () {

          
                        let unSubBtn = document.getElementById("confirm-button"); 
                        unSubBtn.querySelector("[aria-label='Unsubscribe']").click();

        }, 1000);

        setTimeout(function () {

            els[i].parentNode.removeChild(els[i]);

        }, 1000);

    }

    i++;

}