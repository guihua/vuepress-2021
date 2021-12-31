import{d as n}from"./app.147292e0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u83B7\u53D6-ip-\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6-ip-\u5730\u5740" aria-hidden="true">#</a> \u83B7\u53D6 IP \u5730\u5740</h1><p>JS \u83B7\u53D6 IP \u5730\u5740\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getClientIP</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> ipAddress<span class="token punctuation">;</span>
  <span class="token keyword">var</span> headers <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>
  <span class="token keyword">var</span> forwardedIpsStr <span class="token operator">=</span> headers<span class="token punctuation">[</span><span class="token string">&#39;x-real-ip&#39;</span><span class="token punctuation">]</span> <span class="token operator">||</span> headers<span class="token punctuation">[</span><span class="token string">&#39;x-forwarded-for&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>forwardedIpsStr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ipAddress <span class="token operator">=</span> forwardedIpsStr
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ipAddress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ipAddress <span class="token operator">=</span> req<span class="token punctuation">.</span>connection<span class="token punctuation">.</span>remoteAddress<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> ipAddress<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,3);function e(t,r){return p}var l=s(a,[["render",e]]);export{l as default};
