// ******** Table of Contents ************
// 1. Functions
// 2. #createGridButton functionality
// 2. #resetCanvas functionality
// 4. Coloring functionality
// ***************************************

$(function() {

  // Form inputs
  const $inputHeight = $("#inputHeight");
  const $inputWidth = $("#inputWidth");
  const $createGridButton = $("#createGridButton");

  // Main grid/canvas area
  const $canvas = $("#pixelCanvas");

  // Color controls
  const $colorInput = $("#colorPicker");
  let $colorValue = $colorInput.val();
  let mousedown = false;


  // 1. *******************Functions **********************

  // ******************************************************

  function placeGridNumbers(height, width) {
    let gridSizeString = height + " x " + width;
    $('#canvasArea h2').children().remove();
    $('#canvasArea h2').append('<span class="gridSizeString">' + gridSizeString + '</span>');
  }

  // makeGrid() creates a grid/table based on user provided values
  function makeGrid(height, width) {

    placeGridNumbers(height, width);

    // TODO: Put a condition in there that if height === 0, don't run the program!

    // Clear any grids from the page
    $canvas.html('');

    let $row;

    // Create amount of rows requested via 'height' variable

    for (var i = 0; i < height; i++) {

      // 1. Create a row element (<tr>) until 'height' is met
      $row = $('<tr></tr>');

      // 2. make the necessary amount of columns (<tds>) & append them to each row      
      for (var j = 0; j < width; j++) {
        $row.append('<td></td>');
      }

      // 3. Append those rows (including <td>s) to the canvas
      $canvas.append($row);
    }


    $('#colorPicker').trigger('click');
  } // end of makeGrid()

  function colorElement(element) {
    $(element.target).css("background", $colorValue);
  } // end of colorElement()

  // 2. ********** #createGridButton functionality ************

  // ******************************************************

  $createGridButton.click(function(e) {
    e.preventDefault();

    let $heightValue = $inputHeight.val();
    let $widthValue = $inputWidth.val();

    makeGrid($heightValue, $widthValue);
  });

   // 3. ********** #resetCanvas functionality ************

  // ******************************************************

  function resetCanvas(e) {
    e.preventDefault();

    // Erase all table content
    $('#pixelCanvas').children().remove();

    // Reset initial grid values
    let $initialGridValue = $('#inputWidth').attr('value');
    $('#inputHeight, #inputWidth').val($initialGridValue);

    $('#canvasArea h2').children().remove();
}

  // 4. ************ Coloring functionality ***************

  // ******************************************************

  // Change value of color variable when new color is selected
  $colorInput.on('change', function() {
    $colorValue = $colorInput.val();
  });

  // When you mouse down on a tile, apply chosen color
  $canvas.on('mousedown', 'td', function(e) {
    mousedown = true;
    colorElement(e);
  });


  $canvas.on('mouseup', function() {
    mousedown = false;
  });

  // If you mouse over a tile when the mouse is still down, color that tile
  $canvas.on('mouseover', 'td', function(e) {
    if (mousedown) {
      colorElement(e);
    }
  });

  // A single 'click' on a tile will color it
  $canvas.on('click', 'td', function(e) {
    colorElement(e);
  });

  // TODO: Refactor this JS code

  // Prebuilt button functionality
  $('[data-gridscale]').click(function(e) {
    e.preventDefault();
    let $scaleByNumber = $(this).attr('data-gridscale');
    $('#inputHeight, #inputWidth').val($scaleByNumber);

    makeGrid($scaleByNumber, $scaleByNumber);
  });

  $('#inputHeight, #inputWidth').keypress(function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      let $heightValue = $inputHeight.val();
      let $widthValue = $inputWidth.val();

      makeGrid($heightValue, $widthValue);

      $inputHeight.val($heightValue);
      $inputWidth.val($widthValue);
    }
  });

  $('input[type=number]').keydown(function(e) {
      if (e.keyCode === 48) {
          if (this.value < 1) {
            alert('Please enter a number greater than 0!');
            $(this).val('1');
          }
        
      }
  });

  $('#resetButton').click(resetCanvas);


}); //end of $ (jQuery)


