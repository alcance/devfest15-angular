$(document).ready(function() {

  var currentStep = 0;

  $('#step1').hide();
  $('#step2').hide();


  $('#btnStep1').click(function(){

    $('#step1').show();
    $('#step2').hide();

    currentStep = 1;
    // update dd

  });


  $('#btnStep2').click(function(){ // eventos

    $('#step1').hide(); //DOM
    $('#step2').show();

    currentStep = 2; // data
    // update dd

  });

});