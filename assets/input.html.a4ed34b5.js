import{d as a}from"./app.147292e0.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},t=a(`<h1 id="html5-input-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#html5-input-\u7C7B\u578B" aria-hidden="true">#</a> HTML5 Input \u7C7B\u578B</h1><p>HTML5 \u62E5\u6709\u591A\u4E2A\u65B0\u7684\u8868\u5355\u8F93\u5165\u7C7B\u578B\uFF0C\u8FD9\u4E9B\u65B0\u7279\u6027\u63D0\u4F9B\u4E86\u66F4\u597D\u7684\u8F93\u5165\u63A7\u5236\u548C\u9A8C\u8BC1\u3002</p><p>\u65B0\u7684\u8F93\u5165\u7C7B\u578B\uFF1A</p><ul><li>email</li><li>URL</li><li>number</li><li>tel</li><li>range</li><li>Date pickers\uFF08date\uFF0Cmonth\uFF0Cweek\uFF0Ctime\uFF0Cdatetime\uFF0Cdatetime-local\uFF09</li><li>search</li><li>color</li></ul><p>\u4EE5\u4E0A\u8F93\u5165\u7C7B\u578B\uFF0C\u9664\u5374 IE\uFF0C\u5927\u591A\u6570\u90FD\u5DF2\u7ECF\u5F97\u5230\u5F88\u597D\u7684\u652F\u6301\uFF0C\u53EA\u662F\u5728\u5404\u4E2A\u6D4F\u89C8\u5668\u4E0A\u517C\u5BB9\u6027\u548C\u5916\u89C2\u5DEE\u8DDD\u6BD4\u8F83\u5927\u3002</p><h2 id="_1-input-\u7C7B\u578B-email" tabindex="-1"><a class="header-anchor" href="#_1-input-\u7C7B\u578B-email" aria-hidden="true">#</a> 1. Input \u7C7B\u578B - email</h2><p>email \u7C7B\u578B\u7528\u4E8E\u5E94\u8BE5\u5305\u542B e-mail \u5730\u5740\u7684\u8F93\u5165\u57DF\u3002\u5728\u63D0\u4EA4\u8868\u5355\u65F6\uFF0C\u4F1A\u81EA\u52A8\u9A8C\u8BC1 email \u57DF\u7684\u503C\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_2-input-\u7C7B\u578B-url" tabindex="-1"><a class="header-anchor" href="#_2-input-\u7C7B\u578B-url" aria-hidden="true">#</a> 2. Input \u7C7B\u578B - URL</h2><p>URL \u7C7B\u578B\u7528\u4E8E\u5E94\u8BE5\u5305\u542B URL \u5730\u5740\u7684\u8F93\u5165\u57DF\u3002\u5728\u63D0\u4EA4\u8868\u5355\u65F6\uFF0C\u4F1A\u81EA\u52A8\u9A8C\u8BC1 url \u57DF\u7684\u503C\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_3-input-\u7C7B\u578B-number" tabindex="-1"><a class="header-anchor" href="#_3-input-\u7C7B\u578B-number" aria-hidden="true">#</a> 3. Input \u7C7B\u578B - number</h2><p>number \u7C7B\u578B\u7528\u4E8E\u5E94\u8BE5\u5305\u542B\u6570\u503C\u7684\u8F93\u5165\u57DF\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number<span class="token punctuation">&quot;</span></span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528\u4E0B\u9762\u7684\u5C5E\u6027\u6765\u89C4\u5B9A\u5BF9\u6570\u5B57\u7C7B\u578B\u7684\u9650\u5B9A\uFF1A</p><ul><li>max\uFF0C\u89C4\u5B9A\u5141\u8BB8\u7684\u6700\u5927\u503C</li><li>min\uFF0C\u89C4\u5B9A\u5141\u8BB8\u7684\u6700\u5C0F\u503C</li><li>step\uFF0C\u89C4\u5B9A\u5408\u6CD5\u7684\u6570\u5B57\u95F4\u9694</li><li>value\uFF0C\u89C4\u5B9A\u9ED8\u8BA4\u503C</li></ul><h2 id="_4-input-\u7C7B\u578B-range" tabindex="-1"><a class="header-anchor" href="#_4-input-\u7C7B\u578B-range" aria-hidden="true">#</a> 4. Input \u7C7B\u578B - range</h2><p>range \u7C7B\u578B\u7528\u4E8E\u5E94\u8BE5\u5305\u542B\u4E00\u5B9A\u8303\u56F4\u5185\u6570\u5B57\u503C\u7684\u8F93\u5165\u57DF\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>range<span class="token punctuation">&quot;</span></span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>range \u7C7B\u578B\u663E\u793A\u4E3A\u6ED1\u52A8\u6761\u3002</p><p>range \u7C7B\u578B\u7684\u5C5E\u6027\u4E0E number \u7C7B\u578B\u7684\u76F8\u540C\uFF0C\u53EF\u4EE5\u901A\u8FC7 max\u3001min\u3001step \u548C value \u6765\u8FDB\u884C\u6570\u5B57\u7C7B\u578B\u7684\u9650\u5B9A\u3002</p><h2 id="_5-input-\u7C7B\u578B-date-pickers" tabindex="-1"><a class="header-anchor" href="#_5-input-\u7C7B\u578B-date-pickers" aria-hidden="true">#</a> 5. Input \u7C7B\u578B - Date Pickers</h2><p>HTML5 \u62E5\u6709\u591A\u4E2A\u53EF\u4F9B\u9009\u53D6\u65E5\u671F\u548C\u65F6\u95F4\u7684\u65B0\u8F93\u5165\u7C7B\u578B\uFF1A</p><ul><li>date - \u9009\u53D6\u65E5\u3001\u6708\u3001\u5E74</li><li>month - \u9009\u53D6\u6708\u3001\u5E74</li><li>week - \u9009\u53D6\u5468\u548C\u5E74</li><li>time - \u9009\u53D6\u65F6\u95F4\uFF08\u5C0F\u65F6\u548C\u5206\u949F\uFF09</li><li>datetime - \u9009\u53D6\u65F6\u95F4\u3001\u65E5\u3001\u6708\u3001\u5E74\uFF08UTC \u65F6\u95F4\uFF09</li><li>datetime-local - \u9009\u53D6\u65F6\u95F4\u3001\u65E5\u3001\u6708\u3001\u5E74\uFF08\u672C\u5730\u65F6\u95F4\uFF09</li></ul><p>\u793A\u4F8B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>date<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_6-input-\u7C7B\u578B-search" tabindex="-1"><a class="header-anchor" href="#_6-input-\u7C7B\u578B-search" aria-hidden="true">#</a> 6. Input \u7C7B\u578B - search</h2><p>search \u7C7B\u578B\u7528\u4E8E\u641C\u7D22\u57DF\uFF0C\u6BD4\u5982\u7AD9\u70B9\u641C\u7D22\u6216 Google \u641C\u7D22\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>search \u57DF\u663E\u793A\u4E3A\u5E38\u89C4\u7684\u6587\u672C\u57DF\u3002</p>`,30);function e(p,l){return t}var c=n(s,[["render",e]]);export{c as default};
