import "./style.css";
import "./initialpage.js";
import "./menu.js";
import "./about.js";
import loadInitialPage from "./initialpage.js";
import createMenu from "./menu.js";
import createAbout from "./about.js";

function tabSwitch() {
	const mainBtn = document.querySelector(".main");
	const menuBtn = document.querySelector(".menu");
	const aboutBtn = document.querySelector(".about");

	aboutBtn.addEventListener("click", () => {
		const menuContent = document.querySelector(".contentMenu");
		menuContent.remove();
		// const pageTitle = document.querySelector(".title");
		// pageTitle.remove();
		// const pageInfo = document.querySelector(".info");
		// pageInfo.remove();
		createAbout();
	});

	mainBtn.addEventListener("click", () => {
		const menuContent = document.querySelector(".contentMenu");
		menuContent.remove();
		loadInitialPage();
	});

	menuBtn.addEventListener("click", () => {
		const pageTitle = document.querySelector(".title");
		pageTitle.remove();
		const pageInfo = document.querySelector(".info");
		pageInfo.remove();
		// const aboutContent = document.querySelector(".contentAbout");
		// aboutContent.remove();
		createMenu();
	});
}

loadInitialPage();
tabSwitch();
