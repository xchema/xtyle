define(["jquery", "text!widgets/capitionator/capitionator.html", "require"], function($, html, require){
  console.log("capitionator widget loaded");
  loadCss(require.toUrl("./capitionator.css"));
  $.widget("ui.captionator", {  
    options: {
      location: "bottom",
      color: "#fff",
      backgroundColor: "#000"
    },
  });
});