const code = "PASSWORD"
document.querySelector("#tinput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
		if (event.target.value == code) {
			
			log("Successful log in")
			for (let i = 0; i < 100; i++)  {
				setTimeout(() => {

					log(i + "%")
				}, i * 100);
			}

		} else {
			log("Incorrect password")
		}

    }
});

function log(msg) {
	try {
		document.querySelector("div#log").appendChild(document.createTextNode(msg));
	} catch(e) {
		alert(e)
	}
}
