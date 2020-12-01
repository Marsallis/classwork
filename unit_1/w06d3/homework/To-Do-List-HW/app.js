$(() => {
    // Cache my DOM nodes
    const $input = $("#input-box");
    const $submit = $("#submit");
    const $toDoList = $("#incompleted-tasks");
    const $completed = $("#completed");
   
  //Add items to To-Do-List
    $submit.on("click", (event) => {
      event.preventDefault();
  
  //I struggled with this for days and finally found the answer and im so upset it was this simple LOL. The function ive tried the most was if ($input.val() /= " ") and tried to get it to work, then i figured out that the trim function works online.
       if ($input.val().trim().length > 0) {
         const $InputText = $input.val();
         $input.val("");
  //Add item to To List and add completed button to the end of input
         const $addItem = $(
           `<div class="to-do-item">${$InputText}<button type="button" id="completed-button">Completed</button></div>`
         ).on("click", (event) => {
           const $completedItem = $(event.currentTarget)
             .off("click")
             .removeClass("to-do-item")
             .addClass("done-item")
             .find("button")
             .text("Remove")
             .parent()
             .on("click", (event) => {
               $(event.currentTarget).remove();
             })
           $($completed).append($completedItem);
            });
         $($toDoList).append($addItem);
  //In case the text is left blank or has no text
       } else {
         alert("You didnt write any text!");
       }
      })
    })