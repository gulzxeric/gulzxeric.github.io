'use strict';

hexo.extend.filter.register('after_render:html', function (html) {
  if (html.indexOf('hexo-blog-encrypt') === -1) return html;

  html = html.replace(
    /log\.info\(ensurePrefix\("hexo-blog-encrypt: loaded\."\)\);/g,
    ''
  );

  html = html.replace(
    '</head>',
    '<style>' +
    '.hbe-content{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:12px}' +
    '' +
    '.hbe-input{margin:0;width:auto;flex:1;min-width:200px;overflow:visible}' +
    '.hbe-input-label{display:none}' +
    '' +
    '.hbe-input-field-default{opacity:1!important;color:inherit;margin-bottom:0;width:100%;background:transparent;border:2px solid var(--border-color,#d0d0d0);border-radius:8px;padding:12px 16px;font-size:1rem;line-height:1.4;transition:border-color .2s}' +
    '.hbe-input-field-default:focus{outline:none;border-color:var(--primary,#A31F34)}' +
    '.hbe-input-field-default::placeholder{color:var(--third-text-color,#999)}' +
    '' +
    '.hbe-btn{display:inline-flex;align-items:center;justify-content:center;padding:0 20px;height:48px;background:var(--primary,#A31F34);color:#fff;border:none;border-radius:8px;font-size:.95rem;font-weight:500;cursor:pointer;white-space:nowrap;transition:opacity .2s;line-height:1}' +
    '.hbe-btn:hover{opacity:.85}' +
    '.hbe-btn:disabled{opacity:.5;cursor:not-allowed}' +
    '.hbe-btn--loading{position:relative;color:transparent}' +
    '.hbe-btn--loading::after{content:"";position:absolute;width:18px;height:18px;top:50%;left:50%;margin:-9px 0 0 -9px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:hbe-spin .6s linear infinite}' +
    '@keyframes hbe-spin{to{transform:rotate(360deg)}}' +
    '' +
    '.hbe-error{width:100%;text-align:center;color:#e74c3c;font-size:.9rem;padding:6px 0 0;display:none;animation:hbe-fade-in .2s ease}' +
    '@keyframes hbe-fade-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}' +
    '' +
    '@media(max-width:600px){.hbe-content{flex-direction:column}.hbe-input{min-width:0;width:100%}.hbe-btn{width:100%;height:44px}}' +
    '</style>\n</head>'
  );

  html = html.replace(
    /<div class="hbe hbe-content">[\s\S]*?<\/div>\s*<\/div>/,
    '<div class="hbe hbe-content">\n    <div class="hbe hbe-input hbe-input-default">\n      <input class="hbe hbe-input-field hbe-input-field-default" type="password" id="hbePass" placeholder="请输入密码">\n    </div>\n    <button class="hbe-btn" type="button" id="hbeSubmit">确认</button>\n    <div class="hbe-error" id="hbeError"></div>\n  </div>'
  );

  html = html.replace(
    'src="/js/plugins/hbe.js"',
    'src="/assets/hbe.js"'
  );

  html = html.replace(
    'from "/js/plugins/hbe.js"',
    'from "/assets/hbe.js"'
  );

  return html;
});
