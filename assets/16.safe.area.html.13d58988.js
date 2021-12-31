import{d as n}from"./app.147292e0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="ios-\u5B89\u5168\u533A\u57DF" tabindex="-1"><a class="header-anchor" href="#ios-\u5B89\u5168\u533A\u57DF" aria-hidden="true">#</a> iOS \u5B89\u5168\u533A\u57DF</h1><p>\u5C01\u88C5\u83B7\u53D6\u5C4F\u5E55\u5B89\u5168\u533A\u57DF\u7684\u65B9\u6CD5\uFF1A</p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token operator">+</span> <span class="token punctuation">(</span>UIEdgeInsets<span class="token punctuation">)</span>bq_screenSafeArea <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">@</span><span class="token function">available</span><span class="token punctuation">(</span>iOS <span class="token number">11.0</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> UIApplication<span class="token punctuation">.</span>sharedApplication<span class="token punctuation">.</span>delegate<span class="token punctuation">.</span>window<span class="token punctuation">.</span>safeAreaInsets<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> UIEdgeInsetsZero<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,3);function p(t,c){return e}var r=s(a,[["render",p]]);export{r as default};
