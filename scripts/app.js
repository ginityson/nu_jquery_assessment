// When the page loads,
//have a button on the DOM that says 'generate'.
// Upon clicking on that button, append a new container onto the DOM.
// That container should have two buttons, one that reads 'delete',
// the other that reads 'change'.
// Additionally, there should be text that provides a number.
// The number should be the number of times the 'generate row' button has been clicked.
// //
// // The delete button should delete JUST the container that the button is in.
// The change button should change the background-color of the container to red.
// The default or 'normal' state of the background-color should be yellow.
// Clicking the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc.
// //
// // Do not add in anything additional beyond what is required. The goal is not to be clever here, it is simply to execute on the provided instructions.
// //

var clicks = 0;//global variable for the clicking

$(function() { // When the page loads
//have a button on the DOM that says 'generate' this is in index.html
  $('#generateRow').on('click', function() {//event handlers
    clicks++;//counts clicks
    console.log('Super! we have clicked in generateRow');
    // Upon clicking on that button, append a new container onto the DOM.
    var newContainer = document.createElement('div');
    newContainer.className='container';//give it a className
    newContainer.id = 'row' + clicks;//give it a name of row and the click count

    // That container should have two buttons, one that reads 'delete', 'change'.

    var deleteButton = document.createElement('button');// create delete button
    deleteButton.textContent='delete';//the button says delete
    deleteButton.className = 'delete';//give it a className of delete
      newContainer.appendChild( deleteButton );//add it as child to newContainer

    var changeButton = document.createElement('button');// create change button
    changeButton.textContent='change';//button says change
    changeButton.className = 'change';//give it a className of change
      newContainer.appendChild( changeButton );//add it as child to newContainer

    var clicksOutput = document.createElement('p');// create text output

    newContainer.appendChild( clicksOutput );// append to container

    $('body').append( newContainer );// append container to body

    $('p').text( clicks );// set text for all p tags
  });

  // click for all of 'change' class
  $(document).on('click', '.change', function(){
    //$(this).toggleClass('yellow');

    var parent = $(this).parent();// get parent

    var parentClass = parent.attr('class');// get parent class

    if( parentClass == 'red'){// toggle class color
      // remove current class and add new class
      parent.removeClass().addClass('yellow');
      parent.css({ 'background-color': 'yellow' });
    }else{
      parent.removeClass().addClass('red');
      parent.css({ 'background-color': 'red' });
    }
  });

  // click for all with class delete
  $(document).on('click', '.delete', function(){

    $(this).parent().remove();// remove parent
  });
});
