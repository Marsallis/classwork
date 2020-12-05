// console.log($);
// console.log('modal practice app.js is linked to this index.html');



$( () => {
// Cached DOM Nodes
const $modal = $('#modal');
const $textBox = $('#modal-textbox');
const $openModal = $('#openModal');
const $closeModal = $('#close');
  //event handlers
const openModal = (event) => {
  $modal.css('display', 'flex')
}
  //event listeners 
  $openModal.on('click', openModal);
  $closeModal.on('click', closeModal);
  // htmlelement.on('aneventttype', dothisEventHandler)
  setTimeout(openModal, 3000);
  setTimeout(closeModal, 7000); 
});


