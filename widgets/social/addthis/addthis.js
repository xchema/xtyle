define(["jquery", "text!widgets/social/addthis/addthis.html", "require"], function($, addthisHtml, require){
  console.log("AddThis widget loaded");
  loadCss(require.toUrl("./addthis.css"));
});