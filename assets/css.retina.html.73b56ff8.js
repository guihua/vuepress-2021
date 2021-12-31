import{r as e,o as t,c,a as s,e as p,F as o,d as l,b as n}from"./app.147292e0.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},r=l(`<h1 id="retina-\u4E0B\u80CC\u666F\u56FE\u7247\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#retina-\u4E0B\u80CC\u666F\u56FE\u7247\u5B9E\u73B0" aria-hidden="true">#</a> retina \u4E0B\u80CC\u666F\u56FE\u7247\u5B9E\u73B0</h1><p>\u968F\u7740\u82F9\u679C\u7684 iPhone\u3001iPad \u548C Mac \u8BBE\u5907\u7684\u6D41\u884C\uFF0CRetina(\u89C6\u7F51\u819C)\u6280\u672F\u5F00\u59CB\u8FDB\u5165\u524D\u7AEF\u5F00\u53D1\u7684\u4E16\u754C\u3002</p><p>\u4E3A Retina \u5C4F\u5E55\u4E0B\u67E5\u8BE2 Web \u56FE\u50CF\u7684\u50CF\u7D20\u5BC6\u5EA6\uFF0C\u7136\u540E\u8C03\u7528\u5BF9\u5E94\u7684\u56FE\u50CF\u3002\u76EE\u524D\u8F83\u4E3A\u6D41\u884C\u7684\u65B9\u5F0F\u662F\u901A\u8FC7 CSS \u6216\u8005 JavaScript \u6765\u5B9E\u73B0\u3002</p><h2 id="_1-\u4F7F\u7528-css-media-queries" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528-css-media-queries" aria-hidden="true">#</a> 1.\u4F7F\u7528 CSS Media Queries</h2><p>\u4EE5\u4E0B\u4EE3\u7801\u6765\u6E90\u4E8E\u6DD8\u5B9D\u7F51\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span><span class="token punctuation">,</span>
  screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-moz-min-device-pixel-ratio</span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span><span class="token punctuation">,</span>
  screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-o-min-device-piratio</span><span class="token punctuation">:</span> 100/100<span class="token punctuation">)</span><span class="token punctuation">,</span>
  screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-pixel-ratio</span><span class="token punctuation">:</span> 1<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.bg</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;//gtms02.alicdn.com/tps/i2/TB1WCdPIpXXXXcaXFXXK7pO6XXX-226-178.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token property">-webkit-background-size</span><span class="token punctuation">:</span> 226px 178px<span class="token punctuation">;</span>
    <span class="token property">-moz-background-size</span><span class="token punctuation">:</span> 226px 178px<span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> 226px 178px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-webkit-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span><span class="token punctuation">,</span>
  screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-moz-min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span><span class="token punctuation">,</span>
  screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">-o-min-device-piratio</span><span class="token punctuation">:</span> 200/100<span class="token punctuation">)</span><span class="token punctuation">,</span>
  screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-device-pixel-ratio</span><span class="token punctuation">:</span> 2<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.bg</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;//gtms03.alicdn.com/tps/i3/TB1bF4TIpXXXXaAXFXX_PIy.XXX-452-356.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token property">-webkit-background-size</span><span class="token punctuation">:</span> 226px 178px<span class="token punctuation">;</span>
    <span class="token property">-moz-background-size</span><span class="token punctuation">:</span> 226px 178px<span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> 226px 178px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="_2-\u4F7F\u7528-javascript" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528-javascript" aria-hidden="true">#</a> 2.\u4F7F\u7528 JavaScript</h2><p>\u4F7F\u7528 js \u5BF9 <code>window.devicePixelRatio</code> \u8FDB\u884C\u5224\u65AD\uFF0C\u7136\u540E\u6839\u636E\u5BF9\u5E94\u7684\u503C\u7ED9 Retina \u5C4F\u5E55\u9009\u62E9\u56FE\u50CF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>devicePixelRatio <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> images <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    images<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> lowres <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> highres <span class="token operator">=</span> lowres<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;@2x.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> highres<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_3-\u4F7F\u7528-image-set-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528-image-set-\u5B9E\u73B0" aria-hidden="true">#</a> 3.\u4F7F\u7528 image-set \u5B9E\u73B0</h2><p><code>image-set()</code> \u53EF\u4EE5\u6839\u636E\u7528\u6237\u8BBE\u5907\u7684\u5206\u8FA8\u7387\u5339\u914D\u5408\u9002\u7684\u56FE\u50CF\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">selector</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>no-image-set.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">image-set</span><span class="token punctuation">(</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>foo-lowres.png<span class="token punctuation">)</span></span> 1x<span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>foo-highres.png<span class="token punctuation">)</span></span> 2x<span class="token punctuation">)</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u4E0D\u652F\u6301 <code>image-set</code>\uFF1A\u5728\u4E0D\u652F\u6301 <code>image-set</code> \u7684\u6D4F\u89C8\u5668\u4E0B\uFF0C\u4ED6\u4F1A\u652F\u6301 <code>background-image</code> \u56FE\u50CF\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4E0D\u652F\u6301 <code>image-set</code> \u7684\u6D4F\u89C8\u5668\u4E0B\uFF0C\u4ED6\u4EEC\u89E3\u6790 <code>background-image</code> \u4E2D\u7684\u80CC\u666F\u56FE\u50CF\uFF1B</li><li>\u652F\u6301 <code>image-set</code>\uFF1A\u5982\u679C\u4F60\u7684\u6D4F\u89C8\u5668\u652F\u6301 <code>image-set</code>\uFF0C\u800C\u4E14\u662F\u666E\u901A\u663E\u5C4F\u4E0B\uFF0C\u6B64\u65F6\u6D4F\u89C8\u5668\u4F1A\u9009\u62E9 <code>image-set</code> \u4E2D\u7684 <code>@1x</code> \u80CC\u666F\u56FE\u50CF\uFF1B</li><li>Retina \u5C4F\u5E55\u4E0B\u7684 <code>image-set</code>\uFF1A\u5982\u679C\u4F60\u7684\u6D4F\u89C8\u5668\u652F\u6301 <code>image-set</code>\uFF0C\u800C\u4E14\u662F\u5728 Retina \u5C4F\u5E55\u4E0B\uFF0C\u6B64\u65F6\u6D4F\u89C8\u5668\u4F1A\u9009\u62E9 <code>image-set</code> \u4E2D\u7684 <code>@2x</code> \u80CC\u666F\u56FE\u50CF\u3002</li></ul>`,13),k=s("code",null,"image-set",-1),d=n(" \u7684\u597D\u5904\u662F\uFF0C\u5728\u652F\u6301 "),b=s("code",null,"image-set",-1),m=n(" \u7684\u6D4F\u89C8\u5668\u4F1A\u5728\u9AD8\u5206\u8FA8\u4E0B\u5339\u914D\u9700\u8981\u7684\u56FE\u50CF\uFF0C\u800C\u6CA1\u6709\u5176\u4ED6\u989D\u5916\u7684\u529F\u80FD\u3002\u9057\u61BE\u7684\u662F\uFF0C\u76EE\u524D\uFF0C"),g={href:"https://drafts.csswg.org/css-images-4/#image-set-notation",target:"_blank",rel:"noopener noreferrer"},h=n("image-set"),_=n(" \u4EC5\u662F CSS4 \u7684\u4E00\u4E2A\u8349\u6848\uFF0C\u6B63\u5F0F\u4F7F\u7528\u8FD8\u9700\u8981\u65F6\u95F4\u3002"),x=n("Retina \u6DF1\u5165\u7406\u89E3\uFF0C\u8BF7\u53C2\u8003\u5927\u795E\u5927\u6F20\u7684"),f={href:"https://www.w3cplus.com/css/towards-retina-web.html",target:"_blank",rel:"noopener noreferrer"},y=n("\u8D70\u5411\u89C6\u7F51\u819C\uFF08Retina\uFF09\u7684 Web \u65F6\u4EE3"),v=n("\u3002");function w(X,z){const a=e("ExternalLinkIcon");return t(),c(o,null,[r,s("p",null,[k,d,b,m,s("a",g,[h,p(a)]),_]),s("p",null,[x,s("a",f,[y,p(a)]),v])],64)}var j=i(u,[["render",w]]);export{j as default};