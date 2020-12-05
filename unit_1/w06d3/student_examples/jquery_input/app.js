$(()=>{
    // Cache my dom nodes
    const $form = $('form');
    const $input = $('#text-box');
    const $password = $('#password');
    const $rosa = $('#rosa');
    const $jimmy = $('#jimmy');
   $form.on('submit', (event) => {
       event.preventDefault();
       let wasGood;
       if($password.val().length < 12){
           wasGood = false;
           $rosa.html(
               `<h1>
                   Rosa says you are trippin' your password is too short,
                   how about you make it longer than ${$password.val().length} characters, we want 12 thankya kindly.
               </h1>`
           )
            .css('color', 'red')
            .css('font-size', '48px');
       }else {
           wasGood = true;
           $rosa.html(
               `
               <h1>Your name is ${$input.val()}</h1>
               <h1>Your password was ${
                   $password
                       .val()
                       .split('')
                       .reduce((password, char, i)=>{
                           const maxIndex = $password.val().length - 1;
                           if(i > maxIndex - 4){
                               password = password + char;
                           }
                           return password
                       }, 'xxxxxx')
               }</h1>
               `
           )
           .css('color', 'black')
           .css('font-size', '32px'); 
       }
       if (wasGood){
           const $li = $('<li>').html(
               `
               ${$input.val()} logged in successfully
               `
           );
           $jimmy.append($li);
       } else {
           const $li = $('<li>').html(
               `
               ${$input.val()} doesn't know how to make a password in 2020
               `
           )
           .css('color', 'red');
           $jimmy.append($li);
       }
       event.currentTarget.reset();
   })
})