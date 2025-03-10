const code = "PASSWORD"
let downloaded = false

document.querySelector("#tinput").focus({
	focusVisible: false
})

function refocus() {
	document.querySelector("#tinput").focus({
		focusVisible: false
	})
	requestAnimationFrame(refocus)
}
document.querySelector("#tinput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
		if (downloaded) {
			if (event.target.value == "y") {
				try {
					window.location.replace("video.html")

				} catch(e) {
					alert(e)
				}
			}
			if (event.target.value != "y") {
				log("Alright we get it you're very funny please just type y.")
			}

		} else if (event.target.value == code) {
			
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
						log("Download complete")
						log("Open video [y/n]")
						downloaded = true;
						// try {
						// 	window.location.replace("video.html")
						//
						// } catch(e) {
						// 	alert(e)
						// }
					}, 105 * 50);
			}, 100)

		} else {
			log("Incorrect password")
		}
		event.target.value = ""

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
log("Enter the password >")
refocus()
