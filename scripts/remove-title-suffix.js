"use strict";

hexo.extend.filter.register("after_render:html", function (data) {
  return data.replace(/<title>([^<]+?)\s*\|\s*[^<]+<\/title>/g, "<title>$1</title>");
});
