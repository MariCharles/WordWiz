// Selecting elements from the DOM
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full_img");
const imgDesc = document.querySelector(".img_desc") 

// Adding click event listener to each image preview
previews.forEach(preview => {
	preview.addEventListener('click', () => {
		modal.classList.add("open");
		original.classList.add("open");
		// Dynamic change text and image
		const originalSrc = preview.getAttribute("data-original");
		original.src = `./IMG/IMG1/${originalSrc}`
		const altText = preview.alt;
		imgDesc.textContent = altText;
	});
});

// Adding click event listener to close the modal when clicking outside the image
modal.addEventListener('click', (e) => {
	if(e.target.classList.contains('modal')){
		modal.classList.remove("open");
		original.classList.remove("open");
	}
});


// JavaScript for image text visibility 

const galleryImages = document.querySelectorAll('.gallery_img');

galleryImages.forEach(image => {
	const imgText = image.querySelector('.img_text');
	image.addEventListener('mouseenter', () => {
		imgText.style.visibility = 'visible';
	});
	image.addEventListener('mouseleave', () => {
		imgText.style.visibility = 'hidden';
	});
});
