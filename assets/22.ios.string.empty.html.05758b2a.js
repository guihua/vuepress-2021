import{d as n}from"./app.147292e0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="ios-\u5224\u65AD\u5B57\u7B26\u4E32\u4E3A\u7A7A" tabindex="-1"><a class="header-anchor" href="#ios-\u5224\u65AD\u5B57\u7B26\u4E32\u4E3A\u7A7A" aria-hidden="true">#</a> iOS \u5224\u65AD\u5B57\u7B26\u4E32\u4E3A\u7A7A</h1><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token operator">+</span>  <span class="token punctuation">(</span>BOOL<span class="token punctuation">)</span>isBlankString<span class="token punctuation">:</span><span class="token punctuation">(</span>NSString <span class="token operator">*</span><span class="token punctuation">)</span>aStr <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>aStr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> YES<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>aStr isKindOfClass<span class="token punctuation">:</span><span class="token punctuation">[</span>NSNull class<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> YES<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    NSCharacterSet <span class="token operator">*</span>set <span class="token operator">=</span> <span class="token punctuation">[</span>NSCharacterSet whitespaceAndNewlineCharacterSet<span class="token punctuation">]</span><span class="token punctuation">;</span>
    NSString <span class="token operator">*</span>trimmedStr <span class="token operator">=</span> <span class="token punctuation">[</span>aStr stringByTrimmingCharactersInSet<span class="token punctuation">:</span>set<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>trimmedStr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> YES<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> NO<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,2);function t(e,c){return p}var l=s(a,[["render",t]]);export{l as default};
