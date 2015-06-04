var addButton = $('#addButton');
    subtractButton = $('#subtractButton');
    multiplyButton = $('#multiplyButton');
    divideButton = $('#divideButton');
    answer = $('#answer');

addButton.click(function(){
  var numba1 = Number($('#numOne').val());
  var numba2 = Number($('#numTwo').val());
  var calc = numba1 + numba2;
  answer.html(calc);
});

subtractButton.click(function(){
  var numba1 = Number($('#numOne').val());
  var numba2 = Number($('#numTwo').val());
  var calc = numba1 - numba2;
  answer.html(calc);
});

multiplyButton.click(function(){
  var numba1 = Number($('#numOne').val());
  var numba2 = Number($('#numTwo').val());
  var calc = numba1 * numba2;
  answer.html(calc);
});

divideButton.click(function(){
  var numba1 = Number($('#numOne').val());
  var numba2 = Number($('#numTwo').val());
  var calc = numba1 / numba2;
  answer.html(calc);
});
