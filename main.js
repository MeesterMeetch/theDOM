<<<<<<< HEAD
console.log("Welcome to the DOM");
console.log("Why - Thank You Calvin");




$(function(){

    $(".num-button").click(function(){
        // do stuff
    });

    $(".clear-button").click(function(){
        // do stuff
    });

    $(".function-button").click(function(){
        // do stuff
    });

    $(".equals-button").click(function(){
         // do stuff
    });
});

// __Resets the Calculator to Default Values, or to Final Value of Last Calculation__
function resetCalculator(currentValue) {
    $("#display").val(currentValue);
    $(".function-button").removeClass("pendingFunction");
    $("#display").data("isPendingFunction", false);
    $("#display").data("thePendingFunction", "");
    $("#display").data("valueOneLocked", false);
    $("#display").data("valueTwoLocked", false);
    $("#display").data("valueOne", currentValue);
    $("#display").data("valueTwo", 0);
    $("#display").data("fromPrevious", false);
}
// _________Clicking A Number____________________
$(".num-button").click(function(){

    if ($("#display").data("fromPrevious") == true) {

        resetCalculator($(this).text());

    } else if (($("#display").data("isPendingFunction") == true) && ($("#display").data("valueOneLocked") == false)) {

        $("#display").data("valueOne", $("#display").val());
        $("#display").data("valueOneLocked", true);

        $("#display").val($(this).text());
        $("#display").data("valueTwo", $("#display").val());
        $("#display").data("valueTwoLocked", true);

    // Clicking a number AGAIN, after first number locked and already value for second number
    } else if (($("#display").data("isPendingFunction") == true) && ($("#display").data("valueOneLocked") == true)) {

        var currentValue = $("#display").val();
        var toAdd = $(this).text();

        var newValue = currentValue + toAdd;

        $("#display").val(newValue);

        $("#display").data("valueTwo", $("#display").val());
        $("#display").data("valueTwoLocked", true);

    // Clicking on a number fresh
    } else {

        var currentValue = $("#display").val();
        if (currentValue == "0") {
            currentValue = "";
        }

        var toAdd = $(this).text();

        var newValue = currentValue + toAdd;

        $("#display").val(newValue);

    }

});


//Function Buttons
$(".function-button").click(function(){

    if ($("#display").data("fromPrevious") == true) {
        resetCalculator($("#display").val());
        $("#display").data("valueOneLocked", false);
        $("#display").data("fromPrevious", false)
    }

    // Let it be known that a function has been selected
    var pendingFunction = $(this).text();
    $("#display").data("isPendingFunction", true);
    $("#display").data("thePendingFunction", pendingFunction);

    // Visually represent the current function
    $(".function-button").removeClass("pendingFunction");
    $(this).addClass("pendingFunction");
});


// Equals Button //

$(".equals-button").click(function(){

    if (($("#display").data("valueOneLocked") == true) && ($("#display").data("valueTwoLocked") == true)) {

        if ($("#display").data("thePendingFunction") == " ") {
            var finalValue = parseFloat($("#display").data("valueOne"))   parseFloat($("#display").data("valueTwo"));
        } else if ($("#display").data("thePendingFunction") == "%u2013") {
            var finalValue = parseFloat($("#display").data("valueOne")) - parseFloat($("#display").data("valueTwo"));
        } else if ($("#display").data("thePendingFunction") == "x") {
            var finalValue = parseFloat($("#display").data("valueOne")) * parseFloat($("#display").data("valueTwo"));
        } else if ($("#display").data("thePendingFunction") == "/") {
            var finalValue = parseFloat($("#display").data("valueOne")) / parseFloat($("#display").data("valueTwo"));
        }

        $("#display").val(finalValue);

        resetCalculator(finalValue);
        $("#display").data("fromPrevious", true);

    } else {
        // both numbers are not locked, do nothing.
    }

});

 // CLEAR!! //
$(".clear-button").click(function(){
    resetCalculator("0");
=======
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
>>>>>>> 66a3f317fad9b5ee93acfbea2280e7d0300a0a2b
});
