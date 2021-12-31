import{r as o,o as c,c as l,a as n,e,F as r,d as t,b as s}from"./app.147292e0.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const i={},d=t(`<h1 id="ant-design-\u9879\u76EE\u5B9E\u6218" tabindex="-1"><a class="header-anchor" href="#ant-design-\u9879\u76EE\u5B9E\u6218" aria-hidden="true">#</a> Ant Design \u9879\u76EE\u5B9E\u6218</h1><p>dva \u662F\u4E00\u4E2A\u57FA\u4E8E redux\u3001redux-saga \u548C React \u7684\u8F7B\u91CF\u7EA7\u524D\u7AEF\u6846\u67B6\u3002</p><h2 id="\u5B89\u88C5-dva-cli" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-dva-cli" aria-hidden="true">#</a> \u5B89\u88C5 dva-cli</h2><p>\u901A\u8FC7 npm \u5B89\u88C5 dva-cli \u5E76\u786E\u4FDD\u7248\u672C\u662F <code>0.7.0</code> \u6216\u4EE5\u4E0A\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> dva-cli -g
dva -v
<span class="token comment"># 0.7.9</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u521B\u5EFA\u65B0\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u65B0\u5E94\u7528" aria-hidden="true">#</a> \u521B\u5EFA\u65B0\u5E94\u7528</h2><p>\u5B89\u88C5\u5B8C dva-cli \u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u91CC\u8BBF\u95EE\u5230 <code>dva</code> \u547D\u4EE4\u3002\u73B0\u5728\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>dva new</code> \u521B\u5EFA\u65B0\u5E94\u7528\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dva new dva-quickstart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4F1A\u521B\u5EFA <code>dva-quickstart</code> \u76EE\u5F55\uFF0C\u5305\u542B\u9879\u76EE\u521D\u59CB\u5316\u76EE\u5F55\u548C\u6587\u4EF6\uFF0C\u5E76\u63D0\u4F9B\u5F00\u53D1\u670D\u52A1\u5668\u3001\u6784\u5EFA\u811A\u672C\u3001\u6570\u636E mock \u670D\u52A1\u3001\u4EE3\u7406\u670D\u52A1\u5668\u7B49\u529F\u80FD\u3002</p><p>\u7136\u540E\u6211\u4EEC\u8FDB\u5165 dva-quickstart \u76EE\u5F55\uFF0C\u5E76\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> dva-quickstart
<span class="token function">npm</span> start
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u51E0\u79D2\u949F\u540E\uFF0C\u4F60\u4F1A\u770B\u5230\u4EE5\u4E0B\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Compiled successfully<span class="token operator">!</span>

The app is running at:

  http://localhost:8000/

Note that the development build is not optimized.
To create a production build, use <span class="token function">npm</span> run build.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,13),u=s("\u5728\u6D4F\u89C8\u5668\u91CC\u6253\u5F00 "),b={href:"http://localhost:8000",target:"_blank",rel:"noopener noreferrer"},m=s("http://localhost:8000"),h=s(" \uFF0C\u4F60\u4F1A\u770B\u5230 dva \u7684\u6B22\u8FCE\u754C\u9762\u3002"),g=t(`<h2 id="\u4F7F\u7528-antd" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-antd" aria-hidden="true">#</a> \u4F7F\u7528 antd</h2><p>\u901A\u8FC7 npm \u5B89\u88C5 <code>antd</code> \u548C <code>babel-plugin-import</code>\u3002<code>babel-plugin-import</code> \u662F\u7528\u6765\u6309\u9700\u52A0\u8F7D <code>antd</code> \u7684\u811A\u672C\u548C\u6837\u5F0F\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> antd babel-plugin-import --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7F16\u8F91 <code>.roadhogrc</code>\uFF0C\u4F7F <code>babel-plugin-import</code> \u63D2\u4EF6\u751F\u6548\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token string">&quot;extraBabelPlugins&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
-    <span class="token string">&quot;transform-runtime&quot;</span>
+    <span class="token string">&quot;transform-runtime&quot;</span>,
+    <span class="token punctuation">[</span><span class="token string">&quot;import&quot;</span>, <span class="token punctuation">{</span> <span class="token string">&quot;libraryName&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;antd&quot;</span>, <span class="token string">&quot;style&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;css&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span>,
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,5),v=s("\u6CE8\uFF1Adva-cli \u57FA\u4E8E roadhog \u5B9E\u73B0 build \u548C server\uFF0C\u66F4\u591A .roadhogrc \u7684\u914D\u7F6E\u8BE6\u89C1 "),k={href:"https://github.com/sorrycc/roadhog#%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},_=s("roadhog#\u914D\u7F6E");function f(q,x){const a=o("ExternalLinkIcon");return c(),l(r,null,[d,n("p",null,[u,n("a",b,[m,e(a)]),h]),g,n("blockquote",null,[n("p",null,[v,n("a",k,[_,e(a)])])])],64)}var B=p(i,[["render",f]]);export{B as default};