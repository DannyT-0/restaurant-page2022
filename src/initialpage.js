const container = document.querySelector("#content");
document.body.appendChild(container);

function createHeader() {
	const contentDiv = document.createElement("div");
	contentDiv.classList.add("contentMain");
	container.appendChild(contentDiv);
	const pageTitle = document.createElement("h1");
	pageTitle.classList.add("title");
	const pageInfo = document.createElement("p");
	pageInfo.classList.add("info");
	pageTitle.innerText = "Dani's";
	pageInfo.innerText = "Packed with protein for all your gym needs";
	container.appendChild(pageTitle);
	container.appendChild(pageInfo);

	return contentDiv;
}

function createButton() {
	const menuBar = document.createElement("div");
	menuBar.classList.add("menuBar");
	container.appendChild(menuBar);
	const listContainer = document.createElement("ul");
	menuBar.appendChild(listContainer);
	const menubarMain = document.createElement("button");
	menubarMain.innerText = "Main Page";
	const menubarMenu = document.createElement("button");
	menubarMenu.classList.add("menu");
	menubarMenu.innerText = "Menu";
	const menubarAbout = document.createElement("button");
	menubarAbout.classList.add("about");
	menubarAbout.innerText = "About Us";
	menuBar.appendChild(menubarMain);
	menuBar.appendChild(menubarMenu);
	menuBar.appendChild(menubarAbout);
	menubarMain.addEventListener("click", () => {
		const menuContent = document.querySelector(".contentMenu");
		menuContent.remove();
		createHeader();
	});

	return menuBar;
}

function loadInitialPage() {
	createButton();
	createHeader();
}

loadInitialPage();
