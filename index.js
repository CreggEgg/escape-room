const code = "PASSWORD"
document.querySelector("#tinput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
		if (event.target.value == code) {
			
			log("Successful log in")
			setTimeout(() => {
				log(0 + "%")
				// changeLast(16 + "%")
					for (let i = 0; i < 100; i++)  {
						setTimeout(() => {
							changeLast("Downloading  " + i + "%")
						}, i * 50);
					}
					setTimeout(() => {
						try {
							window.location.replace("video.html")

						} catch(e) {
							alert(e)
						}
					}, 105 * 50);
			}, 100)

		} else {
			log("Incorrect password")
		}

    }
});

function log(msg) {
	try {
		// let content = document.createElement("p");
		// content.appendChild(document.createTextNode(msg))
		//
		// document.querySelector("div#log").appendChild(content);
		const para = document.createElement("p");
		const node = document.createTextNode(msg);
		para.appendChild(node);

		const element = document.getElementById("log");
		element.appendChild(para);
	} catch(e) {
		alert(e)
	}
}
function changeLast(msg) {
	try {
		let children = document.getElementById("log").lastChild;
		children.innerText = msg;
	} catch(e) {
		alert(e)
	}
}
