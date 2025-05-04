export function openModal(movie, modalElement, modalContentElement) {
  modalContentElement.innerHTML = `
    <button id="closeModal">✖</button>
    <h2>${movie.title}</h2>
    <p>개봉일: ${movie.release_date}</p>
    <p>${movie.overview}</p>
  `;

  modalElement.classList.remove("hidden");

  
  const closeModalBtn = document.getElementById('closeModal');
  closeModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalElement.classList.add('hidden');
  });
}




