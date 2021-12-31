import{d as n}from"./app.147292e0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var a="/vuepress-2021/assets/05.hash.d561c0ec.png",p="/vuepress-2021/assets/hash.table.446195c6.png",e="/vuepress-2021/assets/hash.table.line.cd8bd853.png";const t={},o=n('<h1 id="\u54C8\u5E0C\u8868-\u6563\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u54C8\u5E0C\u8868-\u6563\u5217\u8868" aria-hidden="true">#</a> \u54C8\u5E0C\u8868/\u6563\u5217\u8868</h1><h2 id="\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u6570\u636E\u7ED3\u6784</h2><p>\u6563\u5217\u8868\u4E5F\u53EB\u54C8\u5E0C\u8868\uFF08<code>HashTable</code> \u4E5F\u53EB <code>HashMap</code>\uFF09\uFF0C\u662F Dictionary \u7C7B\u7684\u4E00\u79CD\u6563\u5217\u8868\u5B9E\u73B0\u65B9\u5F0F\u3002</p><h3 id="_1-\u54C8\u5E0C\u8868\u6709\u4F55\u7279\u6B8A\u4E4B\u5904" tabindex="-1"><a class="header-anchor" href="#_1-\u54C8\u5E0C\u8868\u6709\u4F55\u7279\u6B8A\u4E4B\u5904" aria-hidden="true">#</a> \uFF081\uFF09\u54C8\u5E0C\u8868\u6709\u4F55\u7279\u6B8A\u4E4B\u5904</h3><p>\u6570\u7EC4\u7684\u7279\u70B9\u662F\u5BFB\u5740\u65B9\u4FBF\uFF0C\u63D2\u5165\u548C\u5220\u9664\u56F0\u96BE\uFF1B\u800C\u94FE\u8868\u7684\u7279\u70B9\u662F\u5BFB\u5740\u56F0\u96BE\uFF0C\u63D2\u5165\u548C\u5220\u9664\u65B9\u4FBF\u3002\u54C8\u5E0C\u8868\u6B63\u662F\u7EFC\u5408\u4E86\u4E24\u8005\u7684\u4F18\u70B9\uFF0C\u5B9E\u73B0\u4E86\u5BFB\u5740\u65B9\u4FBF\uFF0C\u63D2\u5165\u5220\u9664\u5143\u7D20\u4E5F\u65B9\u4FBF\u7684\u6570\u636E\u7ED3\u6784</p><h3 id="_2-\u54C8\u5E0C\u8868\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_2-\u54C8\u5E0C\u8868\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> \uFF082\uFF09\u54C8\u5E0C\u8868\u5B9E\u73B0\u539F\u7406</h3><p>\u54C8\u5E0C\u8868\u5C31\u662F\u628A <code>Key</code> \u901A\u8FC7\u4E00\u4E2A<strong>\u56FA\u5B9A\u7684\u7B97\u6CD5\u51FD\u6570</strong>\u65E2\u6240\u8C13\u7684<strong>\u54C8\u5E0C\u51FD\u6570</strong>\u8F6C\u6362\u6210\u4E00\u4E2A\u6574\u578B\u6570\u5B57\uFF0C\u7136\u540E\u5C06\u8BE5\u6570\u5B57\u5BF9\u6570\u7EC4\u957F\u5EA6\u8FDB\u884C\u53D6\u4F59\uFF0C\u53D6\u4F59\u7ED3\u679C\u5C31\u5F53\u4F5C\u6570\u7EC4\u7684\u4E0B\u6807\uFF0C\u5C06 <code>value</code> \u5B58\u50A8\u5728\u4EE5\u8BE5\u6570\u5B57\u4E3A\u4E0B\u6807\u7684\u6570\u7EC4\u7A7A\u95F4\u91CC\u3002\u800C\u5F53\u4F7F\u7528\u54C8\u5E0C\u8868\u8FDB\u884C\u67E5\u8BE2\u7684\u65F6\u5019\uFF0C\u5C31\u662F\u518D\u6B21\u4F7F\u7528\u54C8\u5E0C\u51FD\u6570\u5C06 <code>key</code> \u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684\u6570\u7EC4\u4E0B\u6807\uFF0C\u5E76\u5B9A\u4F4D\u5230\u8BE5\u7A7A\u95F4\u83B7\u53D6 <code>value</code>\uFF0C\u5982\u6B64\u4E00\u6765\uFF0C\u5C31\u53EF\u4EE5\u5145\u5206\u5229\u7528\u5230\u6570\u7EC4\u7684\u5B9A\u4F4D\u6027\u80FD\u8FDB\u884C\u6570\u636E\u5B9A\u4F4D</p><p>\u4E0B\u9762\u662F\u5C06 <code>key</code> \u4E2D\u6BCF\u4E2A\u5B57\u6BCD\u7684 ASCII \u503C\u4E4B\u548C\u4F5C\u4E3A\u6570\u7EC4\u7684\u7D22\u5F15\uFF08\u54C8\u5E0C\u51FD\u6570\uFF09\u7684\u56FE\u4F8B\uFF1A</p><p><img src="'+a+`" alt="\u54C8\u5E0C\u8868"></p><h3 id="_3-\u6570\u7EC4\u7684\u957F\u5EA6\u4E3A\u4EC0\u4E48\u9009\u62E9\u8D28\u6570" tabindex="-1"><a class="header-anchor" href="#_3-\u6570\u7EC4\u7684\u957F\u5EA6\u4E3A\u4EC0\u4E48\u9009\u62E9\u8D28\u6570" aria-hidden="true">#</a> \uFF083\uFF09\u6570\u7EC4\u7684\u957F\u5EA6\u4E3A\u4EC0\u4E48\u9009\u62E9\u8D28\u6570</h3><p>\u4E66\u4E2D\u6709\u5982\u4E0B\u8BF4\u660E\uFF1A</p><blockquote><p>\u6563\u5217\u51FD\u6570\u7684\u9009\u62E9\u4F9D\u8D56\u4E8E\u952E\u503C\u7684\u6570\u636E\u7C7B\u578B\u3002\u5982\u679C\u952E\u662F\u6574\u6570\uFF0C\u6700\u7B80\u5355\u7684\u6563\u5217\u51FD\u6570\u5C31\u662F\u4EE5\u6570\u7EC4\u7684\u957F\u5EA6\u5BF9\u952E\u53D6\u4F59\u3002\u5728\u4E00\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6BD4\u5982\u6570\u7EC4\u7684\u957F\u5EA6\u4E3A 10\uFF0C\u800C\u952E\u503C\u90FD\u662F 10 \u7684\u500D\u6570\u65F6\uFF0C\u5C31\u4E0D\u63A8\u8350\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u4E86\u3002\u8FD9\u4E5F\u662F\u6570\u7EC4\u7684\u957F\u5EA6\u4E3A\u4EC0\u4E48\u8981\u662F\u8D28\u6570\u7684\u539F\u56E0\u4E4B\u4E00\u3002\u5982\u679C\u952E\u662F\u968F\u673A\u7684\u6574\u6570\uFF0C\u800C\u6563\u5217\u51FD\u6570\u5E94\u8BE5\u66F4\u5747\u5300\u5730\u5206\u5E03\u8FD9\u4E9B\u952E\uFF0C\u8FD9\u79CD\u6563\u5217\u65B9\u5F0F\u79F0\u4E3A\u9664\u7559\u4F59\u6570\u6CD5\u3002</p></blockquote><h2 id="\u54C8\u5E0C\u8868\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u54C8\u5E0C\u8868\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u54C8\u5E0C\u8868\u7684\u5B9E\u73B0</h2><p>\u6211\u4EEC\u4E3A\u54C8\u5E0C\u8868\u5B9E\u73B0\u4E0B\u9762\u51E0\u4E2A\u65B9\u6CD5\uFF1A</p><ul><li><code>hashMethod</code> \u54C8\u5E0C\u51FD\u6570\uFF0C\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u7D22\u5F15</li><li><code>put</code> \u6DFB\u52A0\u952E\u503C</li><li><code>get</code> \u7531\u952E\u83B7\u53D6\u503C</li><li><code>remove</code> \u79FB\u9664\u952E</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">HashTable</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_table <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u54C8\u5E0C\u51FD\u6570\u3010\u793E\u533A\u4E2D\u5B9E\u8DF5\u8F83\u597D\u7684\u7B80\u5355\u54C8\u5E0C\u51FD\u6570\u3011</span>
  <span class="token function">hashMethod</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> key <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token number">5381</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> key<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      hash <span class="token operator">=</span> hash <span class="token operator">*</span> <span class="token number">33</span> <span class="token operator">+</span> key<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> hash <span class="token operator">%</span> <span class="token number">1013</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">put</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> pos <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hashMethod</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>_table<span class="token punctuation">[</span>pos<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> pos <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hashMethod</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_table<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> pos <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hashMethod</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_table<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_table<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token string">&#39; --&gt; &#39;</span> <span class="token operator">+</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>\u5F53\u7136\u4E86\uFF0C\u4E00\u4E2A\u7B80\u5355\u7684\u54C8\u5E0C\u51FD\u6570\uFF0C\u5C06\u4E0D\u540C\u7684\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u6574\u6570\u65F6\uFF0C\u5F88\u6709\u53EF\u80FD\u4F1A\u51FA\u73B0\u591A\u4E2A\u4E0D\u540C\u5B57\u7B26\u4E32\u8F6C\u6362\u540E\u5BF9\u5E94\u540C\u4E00\u4E2A\u6574\u6570\uFF0C\u8FD9\u4E2A\u5C31\u9700\u8981\u8FDB\u884C\u51B2\u7A81\u7684\u5904\u7406\u3002</p><h2 id="\u5904\u7406\u51B2\u7A81\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u51B2\u7A81\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u5904\u7406\u51B2\u7A81\u7684\u65B9\u6CD5</h2><h3 id="_1-\u5206\u79BB\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#_1-\u5206\u79BB\u94FE\u63A5" aria-hidden="true">#</a> \uFF081\uFF09\u5206\u79BB\u94FE\u63A5</h3><p>\u5206\u79BB\u94FE\u63A5\u6CD5\u5305\u62EC\u4E3A\u6563\u5217\u8868\u7684\u6BCF\u4E00\u4E2A\u4F4D\u7F6E\u521B\u5EFA\u4E00\u4E2A\u94FE\u8868\u5E76\u5C06\u5143\u7D20\u5B58\u50A8\u5728\u91CC\u9762\u3002\u5B83\u662F\u89E3\u51B3\u51B2\u7A81\u7684\u6700\u7B80\u5355\u7684\u65B9\u6CD5\uFF0C\u4F46\u662F\u5B83\u5728 HashTable \u5B9E\u4F8B\u4E4B\u5916\u8FD8\u9700\u8981\u989D\u5916\u7684\u5B58\u50A8\u7A7A\u95F4\u3002</p><p><img src="`+p+'" alt="\u5206\u79BB\u94FE\u63A5"></p><p>\uFF082\uFF09\u7EBF\u6027\u63A2\u67E5</p><p>\u5F53\u60F3\u5411\u8868\u4E2D\u67D0\u4E2A\u4F4D\u7F6E\u52A0\u5165\u4E00\u4E2A\u65B0\u5143\u7D20\u7684\u65F6\u5019\uFF0C\u5982\u679C\u7D22\u5F15\u4E3A <code>index</code> \u7684\u4F4D\u7F6E\u5DF2\u7ECF\u88AB\u5360\u636E\u4E86\uFF0C\u5C31\u5C1D\u8BD5 <code>index+1</code> \u7684\u4F4D\u7F6E\u3002\u5982\u679C <code>index+1</code> \u7684\u4F4D\u7F6E\u4E5F\u88AB\u5360\u636E\u4E86\uFF0C\u5C31\u5C1D\u8BD5 <code>index+2</code> \u7684\u4F4D\u7F6E\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><p><img src="'+e+'" alt="\u7EBF\u6027\u63A2\u67E5"></p>',24);function c(l,u){return o}var k=s(t,[["render",c]]);export{k as default};
