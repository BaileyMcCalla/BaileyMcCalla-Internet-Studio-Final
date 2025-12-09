const btns = document.querySelectorAll("[data-target]");
const close_btns = document.querySelectorAll(".modal-btn");
const overlay = document.querySelector("#overlay");

btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		document.querySelector(btn.dataset.target).classList.add("active");
		overlay.classList.add("active")
	});
});

close_btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.closest(".modal").classList.remove("active");
		overlay.classList.remove("active");
	});
});

window.onclick =(e) => {
	if (e.target == overlay) {
		const modals = document.querySelectorAll(".modal");
		modals.forEach((modal) => modal.classList.remove("active"));
		overlay.classList.remove("active"); 
	}
};
	
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.tabTarget)
		tabContents.forEach(tabContent => {
			tabContent.classList.remove('active')	
		})
		tabContents.forEach(tabContents => {
			tabContent.classList.remove('active')
		})
		target.classList.add('active')	
	})
})