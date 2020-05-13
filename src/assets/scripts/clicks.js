

//Click "Hi..."
$("[id=mainWelcome]").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#secondSection").offset().top
  }, 600);

  $('body').removeClass('stop-scrolling');
});

//click 'About me'
$("#goToMainWelcome").click(function() {
  console.log("clicked goToMainWelcome");
  $('html, body').animate({scrollTop: 0}, 500);
});
