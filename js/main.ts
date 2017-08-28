namespace hfuniverseclient {
    let url: string = "http://localhost:8100/";
    window.addEventListener("load", init);

    function init(): void {
        console.log("Init");
        document.getElementById("create").addEventListener("click", create);
        document.getElementById("login").addEventListener("click", login)
    }

    function create(): void {
        sendData("POST", JSON.stringify(createAuthMessage("", "create"))).then(displayResponse);
    }

    function login(): void {
        sendData("POST", JSON.stringify(createAuthMessage("", "login"))).then(displayResponse);
    }

    function createAuthMessage(auth: string, action: string): Message {
        return {
            auth: auth,
            handler: "auth",
            data: {
                user: (<HTMLInputElement>document.getElementById("user")).value,
                password: (<HTMLInputElement>document.getElementById("password")).value,
                action: action
            }
        };
    }

    // Async XMLHttpRequest using Promises
    // Example provided by Jake Archibald
    // at https://developers.google.com/web/fundamentals/getting-started/primers/promises
    function sendData(method: string, data: string): Promise<string> {
        return new Promise(function (resolve, reject) {
            let request: XMLHttpRequest = new XMLHttpRequest();

            request.open(method, url, true);

            // Listener for when request ist complete
            request.addEventListener("load", function () {
                if(request.status == 200) {
                    resolve(request.responseText);
                }
                else {
                    reject(Error(request.statusText));
                }
            });

            // Listener for when request fails on network level
            request.addEventListener("error", function () {
                reject(Error("Network Error"));
            });

            // Make the actual request
            request.send(data);
        });
    }

    // Display the response from the server in HTML
    function displayResponse(_data: string): void {
        document.getElementById("output").appendChild(document.createTextNode(_data));
    }
}


