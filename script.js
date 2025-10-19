// Contacto modal
const submitButton = document.querySelector('#openModalButton');
const myModal = new bootstrap.Modal(document.getElementById('modal'));
submitButton.addEventListener('click', function(e) {
  e.preventDefault();
  myModal.show();
});
