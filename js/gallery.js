function activateGallery() {
	let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
	let mainImage = document.querySelector("#gallery-photo > img");
	let currentClass = "current";
	let title = document.querySelector("#gallery-info .title");
	let description = document.querySelector("#gallery-info .description");

	thumbnails.forEach(function(thumbnail) {
		let newImageSrc = thumbnail.dataset.largeVersion
		let largeVersion = new Image();
		largeVersion.src = newImageSrc;

		thumbnail.addEventListener("click", function() {
			// set clicked image as display image
			mainImage.setAttribute("src", newImageSrc);
			mainImage.setAttribute("alt", thumbnail.dataset.title);

			// change which image is current
			document.querySelector("." + currentClass).classList.remove(currentClass);
			thumbnail.parentNode.classList.add(currentClass);

			// change display image title and description in third column
			title.innerHTML = thumbnail.dataset.title;
			description.innerHTML = thumbnail.dataset.description;
		});
	});
}