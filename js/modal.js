const modal = document.getElementById("modal");
const modalDetails = document.getElementById("modal-details");
const closeModal = document.getElementById("close-modal");

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("project-card")) {
        const title = e.target.querySelector("h3").textContent;
        const description = e.target.querySelector("p").textContent;

        modalDetails.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
        modal.style.display = "flex";
    }
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});