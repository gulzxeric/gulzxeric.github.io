'use strict';

hexo.extend.filter.register('after_render:html', function (html) {
  if (html.indexOf('hexo-blog-encrypt') === -1) return html;

  html = html.replace(
    /log\.info\(ensurePrefix\("hexo-blog-encrypt: loaded\."\)\);/g,
    ''
  );

  return html;
});
