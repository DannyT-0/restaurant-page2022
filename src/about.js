const container = document.querySelector("#content");
document.body.appendChild(container);

function createAbout() {
	const contentDiv = document.createElement("div");
	contentDiv.classList.add("contentAbout");
	container.appendChild(contentDiv);
	const bio = document.createElement("p");
	bio.classList.add("bio");
	bio.innerText =
		"We're a fake non family owned place that serves vegetarian food. Come pay outrageously high prices on things you could easily make at home";
	contentDiv.appendChild(bio);
	return contentDiv;
}

export default createAbout;
