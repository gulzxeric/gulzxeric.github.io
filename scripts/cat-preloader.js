'use strict';

hexo.extend.filter.register('after_render:html', function (html) {
  var preloaderStart = html.indexOf('<div class="preloader">');
  if (preloaderStart === -1) return html;

  var preloaderEnd = html.indexOf('</div>', preloaderStart);
  var depth = 1;
  var pos = preloaderStart + '<div class="preloader">'.length;
  while (depth > 0 && pos < html.length) {
    var openTag = html.indexOf('<div', pos);
    var closeTag = html.indexOf('</div>', pos);
    if (closeTag === -1) break;
    if (openTag !== -1 && openTag < closeTag) {
      depth++;
      pos = openTag + '<div'.length;
    } else {
      depth--;
      pos = closeTag + '</div>'.length;
      if (depth === 0) {
        preloaderEnd = closeTag;
      } else {
        pos = closeTag + '</div>'.length;
      }
    }
  }

  if (depth !== 0) return html;

  var before = html.substring(0, preloaderStart);
  var after = html.substring(preloaderEnd + '</div>'.length);

  return before +
    '<div class="preloader">\n' +
    '    <style>\n' +
    '        .loading-cat {\n' +
    '            font-size: 60px;\n' +
    '            animation: catSpin 1.5s linear infinite;\n' +
    '        }\n' +
    '        .cat-loader-text {\n' +
    '            margin-top: 20px;\n' +
    '            font-size: 16px;\n' +
    '            color: var(--preloader-text-color);\n' +
    '        }\n' +
    '        @keyframes catSpin {\n' +
    '            0% { transform: rotate(0deg); }\n' +
    '            100% { transform: rotate(360deg); }\n' +
    '        }\n' +
    '    </style>\n' +
    '    <div class="loading-cat">\u{1F431}</div>\n' +
    '    <div class="cat-loader-text">Loading...</div>\n' +
    '    <script>\n' +
    '        let themeStatus = JSON.parse(localStorage.getItem(\'REDEFINE-THEME-STATUS\'))?.isDark;\n' +
    '\n' +
    '        if (themeStatus === undefined || themeStatus === null) {\n' +
    '            if (window.matchMedia && window.matchMedia(\'(prefers-color-scheme: dark)\').matches) {\n' +
    '                themeStatus = \'dark\';\n' +
    '            } else {\n' +
    '                themeStatus = \'light\';\n' +
    '            }\n' +
    '        }\n' +
    '\n' +
    '        if (themeStatus) {\n' +
    '            document.documentElement.style.setProperty(\'--preloader-background-color\', \'#202124\');\n' +
    '            document.documentElement.style.setProperty(\'--preloader-text-color\', \'#fff\');\n' +
    '        } else {\n' +
    '            document.documentElement.style.setProperty(\'--preloader-background-color\', \'#fff\');\n' +
    '            document.documentElement.style.setProperty(\'--preloader-text-color\', \'#000\');\n' +
    '        }\n' +
    '\n' +
'        window.addEventListener(\'load\', function () {\n' +
'            setTimeout(hidePreloader, 700);\n' +
'        });\n' +
    '\n' +
    '        function hidePreloader() {\n' +
    '            var preloader = document.querySelector(\'.preloader\');\n' +
    '            if (preloader) {\n' +
    '                preloader.style.opacity = \'0\';\n' +
    '                setTimeout(function () {\n' +
    '                    preloader.style.display = \'none\';\n' +
    '                }, 200);\n' +
    '            }\n' +
    '        }\n' +
    '    <\/script>\n' +
    '</div>' +
    after;
});
