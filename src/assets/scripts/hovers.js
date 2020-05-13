
$(".nav-link").hover(function(){
  $("#firstWelcomeLine #mainWelcome").addClass("BiggerIcon");
  if($(this).text() === "Work"){
      $("#firstWelcomeLine #mainWelcome").html("<i class='fas fa-window-maximize'></i>");
  }
  else if($(this).text() === "Courses"){
          $("#firstWelcomeLine #mainWelcome").html("<i class='fas fa-book'></i>");
  }
  else if($(this).text() === "Github"){
          $("#firstWelcomeLine #mainWelcome").html("<i class='fab fa-github-alt'></i>");
  } else {
      $("#firstWelcomeLine #mainWelcome").html("<i class='far fa-surprise'></i>");
  }
  $("#secondWelcomeLine #mainWelcome").hide();
}, function(){
  $("#firstWelcomeLine #mainWelcome").removeClass("BiggerIcon");
  $("#firstWelcomeLine #mainWelcome").html("Hey I am Bartek");
  $("#secondWelcomeLine #mainWelcome").show();
});

$(".specificProjectDescription, .projectInfo").mouseover(function() {
  $(".projectInfo").addClass("turnArrowUp");
}).mouseout(function() {
  $(".projectInfo").removeClass("turnArrowUp");
});

//navbar showing
$(function () {
  $(document).scroll(function () {
      var $nav = $("#navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
