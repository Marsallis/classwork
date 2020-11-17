if (typeof jQuery == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
   } else {console.log('I did it! I linked jQuery and this js file!')};
  
$(() => {
    
    //Year 1//


    const $conatiner = $('#container')
    console.log($container)

    const $h1 = $('<h1>').text('Hogwarts');
    console.log($h1)
    

    
    //Year 2//


    const $h2 = $('<h2>').text('Marsallis Faircloth');
    const $h3 = $('<h3>').text('Gryffindor');
    const $h4 = $('<h4>').addClass('owl').text('Aero');
    const $h4two = $('<h4>').text('Birch Wand with Phoenix Feather Core');

    
    
    //Year 3//


    const $ul = $('<ul>').attr('storage', 'trunk');
    const $li = $('<li>').text('butter beer');
    const $li2 = $('<li>').addClass('secret').text('invisibility');
    const $li3 = $('<li>').addClass('secret').text('magic map');
    const $li4 = $('<li>').addClass('secret').text('time turner');
    const $li5 = $('<li>').addClass('owl').text('leash');
    const $li6 = $('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans');
    $ul.append($li, $li2, $li3, $li4, $li5, $li6);


    
    //Year 4//


    const $h5 = $('<h5>').text('Spring 2017');
    const $th = $('<th>').text('Day');
    const $th2 = $('<th>').text('Classes');
    const $thead = $('<thead>').append($th, $th2);
    const $td = $('<td>').text('Monday');
    const $td2 = $('<td>').text('Potions');
    const $td3 = $('<td>').text('Tuesday');
    const $td4 = $('<td>').text('History of Magic');
    const $td5 = $('<td>').text('Wendsday');
    const $td6 = $('<td>').text('Quidditch Practice');
    const $td7 = $('<td>').text('Thursday');
    const $td8 = $('<td>').text('Transfiguration');
    const $td9 = $('<td>').text('Friday');
    const $td10 = $('<td>').text('Charms');
    const $tr = $('<tr>').append($td, $td2);
    const $tr2 = $('<tr>').append($td3, $td4);
    const $tr3 = $('<tr>').append($td5, $td6);
    const $tr4 = $('<tr>').append($td7, $td8);
    const $tr5 = $('<tr>').append($td9, $td10);
    const $table = $('<table>').append($thead,$tr,$tr2, $tr3, $tr4, $tr5);
    $container.append($h1, $h2, $h3, $h4, $h4Two, $ul, $h5, $table);

   
   
    //Year 5//


    $h4two.remove();
    $li.remove();
    $h4two.text('new Birch Wand with Pheonix Feather Core');
    $h4two.css('color', 'indigo');
    $h4.detach();   
    $h4.insertAfter($h3);



    //Year 6//


    $('.secret'.hide(2000));
    $('.secret').show('slow');
    $li4.addClass('cabbage');
    $li4.remove('cabbage');



    //Year 7//


    $h5.text('Spring 2018')
    const $moreButterBeer = $('<li>').text('Butter Beer');
    $ul.append($moreButterBeer);
    $ul.replace('trunk', 'chest');

});








// Couldnt get it to open and show my changes from jQuery, kept getting this error and all i got was a pink screen because of my css- background-color: pink, i didnt know what this error was supposed to mean since it said that i have linked j query properly. I tried to complete the assignment as best as possible without being able to see my progress
// I did it! I linked jQuery and this js file!
// jquery-3.5.1.js:4046 jQuery.Deferred exception: $container is not defined ReferenceError: $container is not defined
//     at HTMLDocument.<anonymous> (file:///Users/marsallisfaircloth/code/SEIR-Ruth-Final/unit_1/w05d03/homework/hogwarts/app.js:11:17)
//     at mightThrow (https://code.jquery.com/jquery-3.5.1.js:3762:29)
//     at process (https://code.jquery.com/jquery-3.5.1.js:3830:12) undefined
// jQuery.Deferred.exceptionHook @ jquery-3.5.1.js:4046
// process @ jquery-3.5.1.js:3834
// setTimeout (async)
// (anonymous) @ jquery-3.5.1.js:3868
// fire @ jquery-3.5.1.js:3496
// fireWith @ jquery-3.5.1.js:3626
// fire @ jquery-3.5.1.js:3634
// fire @ jquery-3.5.1.js:3496
// fireWith @ jquery-3.5.1.js:3626
// ready @ jquery-3.5.1.js:4106
// completed @ jquery-3.5.1.js:4116
// jquery-3.5.1.js:4055 Uncaught ReferenceError: $container is not defined
//     at HTMLDocument.<anonymous> (app.js:11)
//     at mightThrow (jquery-3.5.1.js:3762)
//     at process (jquery-3.5.1.js:3830)
// (anonymous) @ app.js:11
// mightThrow @ jquery-3.5.1.js:3762
// process @ jquery-3.5.1.js:3830
// setTimeout (async)
// jQuery.readyException @ jquery-3.5.1.js:4054
// (anonymous) @ jquery-3.5.1.js:4074
// mightThrow @ jquery-3.5.1.js:3762
// process @ jquery-3.5.1.js:3830
// setTimeout (async)
// (anonymous) @ jquery-3.5.1.js:3868
// fire @ jquery-3.5.1.js:3496
// fireWith @ jquery-3.5.1.js:3626
// fire @ jquery-3.5.1.js:3634
// fire @ jquery-3.5.1.js:3496
// fireWith @ jquery-3.5.1.js:3626
// process @ jquery-3.5.1.js:3850
// setTimeout (async)
// (anonymous) @ jquery-3.5.1.js:3868
// fire @ jquery-3.5.1.js:3496
// fireWith @ jquery-3.5.1.js:3626
// fire @ jquery-3.5.1.js:3634
// fire @ jquery-3.5.1.js:3496
// fireWith @ jquery-3.5.1.js:3626
// ready @ jquery-3.5.1.js:4106
// completed @ jquery-3.5.1.js:4116