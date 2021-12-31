import{r as a,o as p,c as t,a as n,e,F as o,d as c,b as r}from"./app.147292e0.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=c(`<h1 id="css3-heart" tabindex="-1"><a class="header-anchor" href="#css3-heart" aria-hidden="true">#</a> CSS3 Heart</h1><p>\u901A\u8FC7 <code>:before</code>, <code>:after</code> \u4F2A\u7C7B\uFF0C\u589E\u52A0\u4E24\u4E2A\u534A\u5706\u5E76\u5B9A\u4F4D\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">#heart</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 100px auto<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#heart:before, #heart:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50px 50px 0 0<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#heart:after</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,3),k={href:"https://jsfiddle.net/guihua/h10we3v3/",target:"_blank",rel:"noopener noreferrer"},b=r("CSS3 Heart");function m(d,h){const s=a("ExternalLinkIcon");return p(),t(o,null,[i,n("p",null,[n("a",k,[b,e(s)])])],64)}var g=l(u,[["render",m]]);export{g as default};
