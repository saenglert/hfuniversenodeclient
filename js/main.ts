/// <reference path="vendor/jquery.d.ts" />

namespace hfuniverseclient {
    $(window).on("load", init);

    function init(): void {
        console.log("Init");
        $("#submit").on("click", send);
    }

    function send(): void {
        let request: XMLHttpRequest = new XMLHttpRequest();
        request.addEventListener("readystatechange", function (): void {
           if (request.DONE) {
               console.log(request.responseText);
           }
        });
        request.open("GET", "http://localhost:8100/?command=test", true);
        request.send();

    }
}