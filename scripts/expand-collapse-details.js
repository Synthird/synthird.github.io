const expandAll = document.getElementById("expand-all"),
	colapseAll = document.getElementById("collapse-all"),
	details = document.getElementsByTagName("details");

function toggleDetails(opened) {
	for (const detail of details) {
		detail.open = opened;
	}
}

expandAll.addEventListener("click", () => {
	toggleDetails(true);
});

colapseAll.addEventListener("click", () => {
	toggleDetails(false);
});
