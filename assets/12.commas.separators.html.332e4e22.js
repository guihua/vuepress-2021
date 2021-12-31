import{d as n}from"./app.147292e0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="javascript-\u5904\u7406\u6570\u5B57\u5206\u4F4D\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#javascript-\u5904\u7406\u6570\u5B57\u5206\u4F4D\u7B26\u53F7" aria-hidden="true">#</a> JavaScript \u5904\u7406\u6570\u5B57\u5206\u4F4D\u7B26\u53F7</h1><p>\u4E3A\u4E86\u65B9\u4FBF\u9605\u8BFB\u5C0F\u6570\u70B9\u524D\u540E\u7684\u6570\u5B57\u53EF\u4EE5\u88AB\u5206\u7EC4\uFF0C\u7531\u4E8E\u56FD\u9645\u4E0A\u8BED\u8A00\u91CC\u6700\u5E38\u89C1\u7684\u6570\u5B57\u8BFB\u6CD5\u662F\u5343\u4F4D\u5206\u4F4D\uFF0C\u5199\u6CD5\u7684\u5206\u7EC4\u4E5F\u662F\u5728\u5343\u4F4D\u6570\u4E0A\u3002 \u5982\u679C\u5F53\u5730\u4E60\u4FD7\u662F\u7528\u53E5\u70B9\u4F5C\u5C0F\u6570\u70B9\uFF0C\u5343\u4F4D\u7684\u5206\u53F7\u4E00\u822C\u662F\u9017\u53F7\u6216\u7A7A\u683C\u3002\u5982\u679C\u4E60\u4FD7\u91CC\u5C0F\u6570\u70B9\u662F\u9017\u53F7\uFF0C\u5343\u4F4D\u5206\u53F7\u4E00\u822C\u662F\u53E5\u70B9\u6216\u7A7A\u683C\u3002\u7531\u4E8E\u53EF\u80FD\u4EA7\u751F\u6B67\u4E49\uFF0C\u56FD\u9645\u6807\u51C6\u5EFA\u8BAE\u3001\u56FD\u9645\u5EA6\u91CF\u8861\u5C40\u66F4\u662F\u8981\u6C42\u7528\u7A7A\u683C\u800C\u4E0D\u8981\u7528\u9017\u53F7\u6216\u70B9\u3002</p><p>\u6211\u56FD\u7684\u6807\u51C6\uFF1A\u4E3A\u4FBF\u4E8E\u9605\u8BFB\uFF0C\u56DB\u4F4D\u4EE5\u4E0A\u7684\u6574\u6570\u6216\u5C0F\u6570\uFF0C\u53EF\u91C7\u7528\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u5206\u8282\u3002</p><ul><li>\u5343\u5206\u6487: \u6574\u6570\u90E8\u5206\u6BCF\u4E09\u4F4D\u4E00\u7EC4\uFF0C\u4EE5 <code>,</code> \u5206\u8282\u3002\u5C0F\u6570\u90E8\u5206\u4E0D\u5206\u8282\u3002\u56DB\u4F4D\u4EE5\u5185\u7684\u6574\u6570\u53EF\u4EE5\u4E0D\u5206\u8282\u3002\u5982\uFF1A<code>624,000</code>\u3001<code>92,300,000</code>\u3001<code>19,351,235.235767</code>\u3001<code>1256</code></li><li>\u5343\u5206\u7A7A: \u4ECE\u5C0F\u6570\u70B9\u8D77\uFF0C\u5411\u5DE6\u548C\u5411\u53F3\u6BCF\u4E09\u4F4D\u6570\u5B57\u4E00\u7EC4\uFF0C\u7EC4\u95F4\u7A7A\u56DB\u5206\u4E4B\u4E00\u4E2A\u6C49\u5B57\uFF0C\u5373\u4E8C\u5206\u4E4B\u4E00\u4E2A\u963F\u62C9\u4F2F\u6570\u5B57\u7684\u4F4D\u7F6E\u3002\u56DB\u4F4D\u4EE5\u5185\u7684\u6574\u6570\u53EF\u4EE5\u4E0D\u52A0\u5343\u5206\u7A7A\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">addCommas</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> aIntNum <span class="token operator">=</span> val<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>aIntNum<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        aIntNum<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> aIntNum<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d)(?=(\\d{3})+$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;$1,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>aIntNum<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> aIntNum<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        aIntNum<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> aIntNum<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d{3})</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;$1 &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> aIntNum<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6D4B\u8BD5</span>
<span class="token function">addCommas</span><span class="token punctuation">(</span><span class="token number">1234</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;1234&#39;</span>
<span class="token function">addCommas</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;12,345&#39;</span>
<span class="token function">addCommas</span><span class="token punctuation">(</span><span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;123,456&#39;</span>
<span class="token function">addCommas</span><span class="token punctuation">(</span><span class="token number">123456.4321</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;123,456.4321&#39;</span>
<span class="token function">addCommas</span><span class="token punctuation">(</span><span class="token number">123456.54321</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;123,456.543 21&#39;</span>
<span class="token function">addCommas</span><span class="token punctuation">(</span><span class="token number">123456.654321</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;123,456.654 321 &#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,5);function t(e,c){return p}var l=s(a,[["render",t]]);export{l as default};