const container = document.querySelector("#content");
document.body.appendChild(container);

function createMenu() {
	const contentDiv = document.createElement("div");
	contentDiv.classList.add("contentMenu");
	container.appendChild(contentDiv);
	const firstContainer = document.createElement("div");
	firstContainer.classList.add("firstContainer");
	contentDiv.appendChild(firstContainer);
	const firstItem = document.createElement("div");
	firstItem.innerText = "Protein Shake $7.99";
	firstContainer.appendChild(firstItem);
	const smoothiePic = document.createElement("img");
	smoothiePic.src =
		"/Users/danny/Desktop/the_odin_project/restaurant-page2022/strawberry-banana-protein-shake.webp";
	smoothiePic.style.width = "15em";
	smoothiePic.style.height = "15em";
	firstItem.appendChild(smoothiePic);

	const secondContainer = document.createElement("div");
	contentDiv.appendChild(secondContainer);
	const secondItem = document.createElement("div");
	secondItem.innerText = "Veggie Tacos $10.99";
	secondContainer.appendChild(secondItem);
	const tacoPic = document.createElement("img");
	tacoPic.src =
		"/Users/danny/Desktop/the_odin_project/restaurant-page2022/delicious-vegetarian-tacos-recipe.jpeg";
	tacoPic.style.width = "15em";
	tacoPic.style.height = "15em";
	secondItem.appendChild(tacoPic);

	const thirdContainer = document.createElement("div");
	contentDiv.appendChild(thirdContainer);
	const thirdItem = document.createElement("div");
	thirdItem.innerText = "Sweet Potato Bowl $15.99";
	thirdContainer.appendChild(thirdItem);
	const bowlPic = document.createElement("img");
	bowlPic.src =
		"/Users/danny/Desktop/the_odin_project/restaurant-page2022/sweet-potato-burrito-bowls-1.jpeg";
	bowlPic.style.width = "15em";
	bowlPic.style.height = "15em";
	thirdItem.appendChild(bowlPic);

	return contentDiv;
}

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
	const pageTitle = document.querySelector(".title");
	pageTitle.remove();
	const pageInfo = document.querySelector(".info");
	pageInfo.remove();
	// const aboutContent = document.querySelector(".contentAbout");
	// aboutContent.remove();
	createMenu();
});
