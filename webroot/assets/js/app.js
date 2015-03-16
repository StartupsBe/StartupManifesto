
$('[data-toggle="popover"]').popover();

var waypoints = $('#sug5').waypoint(function(direction) {
  //$('.cta-sign').addClass('active');
  $('.cta-sign').hide();
});

var waypoints = $('#sug4').waypoint(function(direction) {
  //$('.cta-sign').removeClass('active');
  $('.cta-sign').show();
});

var waypoints = $('#signitnow').waypoint(function(direction) {
  $('.cta-sign').hide();
});

var waypoints = $('.signitnow').waypoint(function(direction) {
  $('.cta-sign').hide();
});  

var waypoints = $('#sug5bottom').waypoint(function(direction) {
  $('.cta-sign').hide();
});  

$('a[href="#signitnow"]').click(function() {
  $('.cta-sign').hide();
  $('#name').focus();
});


$('.btn-readmore').click(function(){$(this).hide();});

// Google form shit


$("#submitbtn").click(function() {

  var googleForm = $(window).jqGoogleForms({"formKey": "1Y-rVMKkUgZ5I2RQ46MRME1YDP-l6fdlK_020sM8CFPw"});

  googleForm.sendFormData({
    "entry.2144525752": $('#name').val(),
    "entry.1975820011": $('#emailaddress').val(),
    "entry.192089280":  $('#optin').is(':checked')
  }); 

  $(".feedback").show();
  $(".theform").hide();



});