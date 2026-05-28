'use strict';

hexo.extend.filter.register('after_render:html', function (html) {
  if (html.indexOf('article-copyright-info-container') === -1) return html;

  return html.replace(/<div class="article-copyright-info-container">[\s\S]*?<\/ul>\s*<\/div>/g, function (block) {
    return block.replace(/<li>(?:(?!<\/?li>)[\s\S])*?(?:\u521b\u5efa\u4e8e|\u66f4\u65b0\u4e8e|\u94fe\u63a5)(?:(?!<\/?li>)[\s\S])*?<\/li>/g, '');
  });
});
