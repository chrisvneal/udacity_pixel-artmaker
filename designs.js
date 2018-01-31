$(function() {

  // Form inputs
  const $inputHeight = $("#inputHeight");
  const $inputWidth = $("#inputWidth");
  const $colorInput = $("#colorPicker");
  const $submitButton = $("#submitButton");

  // Form input values  
  let $colorValue = $colorInput.val();


  


  // makeGrid() creates a grid/table based on user provided values
  function makeGrid(height, width) {
    let $row;
    const $canvas = $("#pixelCanvas");
    
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
  } // end of makeGrid()



  // Call makeGrid() via submitButton;
  $submitButton.click(function(e) {
    e.preventDefault();

    let $heightValue = $inputHeight.val();
    let $widthValue = $inputWidth.val();

    makeGrid($heightValue, $widthValue);
  });









}); //end of $ (jQuery)