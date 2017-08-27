/// <reference path="vendor/jquery.d.ts" />
var hfuniverseclient;
(function (hfuniverseclient) {
    $(window).on("load", init);
    function init() {
        console.log("Init");
        $("#submit").on("click", send);
    }
    function send() {
        var request = new XMLHttpRequest();
        request.addEventListener("readystatechange", function () {
            if (request.DONE) {
                console.log(request.responseText);
            }
        });
        request.open("GET", "http://localhost:8100/?command=test", true);
        request.send();
    }
})(hfuniverseclient || (hfuniverseclient = {}));
