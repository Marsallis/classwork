console.log('app.js');

$(() => {
  $('.outside').on('click', ()=> {
      console.log('Outside Clicked');
  })
  $('.inside').on('click', (event) => {
      console.log('Inside Clicked');
      return false;
  })
  
});