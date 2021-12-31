import{d as n}from"./app.147292e0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="array-\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#array-\u6392\u5E8F" aria-hidden="true">#</a> Array \u6392\u5E8F</h1><p>\u5728 JavaScript \u4E2D\u81EA\u5E26\u4E86 <code>sort()</code> \u548C <code>reverse()</code> \u4E24\u4E2A\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5BF9\u6570\u7EC4\u8FDB\u884C\u6392\u5E8F\u64CD\u4F5C\u3002</p><h2 id="sort-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#sort-\u65B9\u6CD5" aria-hidden="true">#</a> sort() \u65B9\u6CD5</h2><p><code>sort()</code> \u65B9\u6CD5\u5BF9\u6570\u7EC4\u7684\u5143\u7D20\u505A\u539F\u5730\u7684\u6392\u5E8F\uFF0C\u5E76\u8FD4\u56DE\u8FD9\u4E2A\u6570\u7EC4\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>sort()</code> \u65B9\u6CD5\u662F\u6309\u5347\u5E8F\u6392\u5217\u6570\u7EC4\u9879\u3002\u4E3A\u4E86\u5B9E\u73B0\u6392\u5E8F\uFF0C<code>sort()</code> \u65B9\u6CD5\u4F1A\u8C03\u7528\u6BCF\u4E2A\u6570\u7EC4\u9879\u7684 <code>toString()</code> \u8F6C\u578B\u65B9\u6CD5\uFF0C\u7136\u540E\u6BD4\u8F83\u5F97\u5230\u7684\u5B57\u7B26\u4E32\uFF0C\u4EE5\u786E\u5B9A\u5982\u4F55\u6392\u5E8F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jame&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dog&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;Jack&quot;, &quot;dog&quot;, &quot;hello&quot;, &quot;jame&quot;]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u63A5\u4E0B\u6765\uFF0C\u518D\u770B\u4E00\u4E2A\u6570\u5B57\u7684\u6570\u7EC4\u6392\u5217\u7684\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 10, 22, 5]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6B64\u65F6\uFF0C\u8F93\u51FA\u7ED3\u679C\u8D85\u51FA\u9884\u6599\u3002\u8FD9\u662F\u4E3A\u4F55\uFF1F</p><p>\u5728 <code>sort()</code> \u65B9\u6CD5\u4E2D\uFF0C<strong>\u5982\u679C\u7701\u7565\u53C2\u6570\uFF0C\u6570\u7EC4\u9879\u4F1A\u5148\u6839\u636E <code>toString()</code> \u51FD\u6570\u5C06\u5176\u503C\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\u5728\u8FDB\u884C\u6BD4\u8F83\uFF0C\u662F\u6309 UNICODE \u8FDB\u884C\u6BD4\u8F83\u7684\uFF0C\u7136\u540E\u6839\u636E\u8FD9\u4E2A\u8FDB\u884C\u6392\u5E8F</strong>\u3002</p><p>\u6B63\u5982\u6700\u524D\u9762\u7684\u793A\u4F8B\uFF0C&quot;Jack&quot; \u4F1A\u6392\u5728 &quot;dog&quot; \u524D\u9762\u3002\u5F53\u6570\u5B57\u8FDB\u884C\u6392\u5E8F\u7684\u65F6\u5019\uFF0C&quot;5&quot; \u4F1A\u51FA\u73B0\u5728 &quot;10&quot; \u548C &quot;22&quot; \u4E4B\u540E\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u5148\u4F1A\u88AB\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\uFF0C\u800C \u201C10\u201D \u548C \u201C22\u201D \u90FD\u6BD4 \u201C5\u201D \u8981\u9760\u524D\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>charCodeAt()</code> \u6765\u9A8C\u8BC1\u4E00\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;Jack&quot;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">74</span>
<span class="token string">&quot;dog&quot;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">100</span>
<span class="token string">&quot;5&quot;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">53</span>
<span class="token string">&quot;10&quot;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">49</span>
<span class="token string">&quot;22&quot;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">50</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>sort()</code> \u65B9\u6CD5\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u6BD4\u8F83\u51FD\u6570 <code>compareFunction</code> \u4F5C\u4E3A\u53C2\u6570\uFF0C\u4EE5\u4FBF\u6211\u4EEC\u6307\u5B9A\u54EA\u4E2A\u503C\u4F4D\u4E8E\u54EA\u4E2A\u503C\u7684\u524D\u9762\u3002</p><p>\u5982\u679C\u6307\u660E\u4E86 <code>compareFunction</code>\uFF0C\u90A3\u4E48\u6570\u7EC4\u4F1A\u6309\u7167\u8C03\u7528\u8BE5\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u8FDB\u884C\u6392\u5E8F\u3002\u6BD4\u8F83\u51FD\u6570 <code>compareFunction</code> \u63A5\u6536\u4E24\u4E2A\u53C2\u6570 <code>a</code> \u548C <code>b</code>\uFF0C<code>a</code> \u548C <code>b</code> \u662F\u4E24\u4E2A\u5C06\u8981\u88AB\u6BD4\u8F83\u7684\u5143\u7D20\uFF1A</p><ul><li><code>compareFunction(a,b)</code> \u8FD4\u56DE\u7684\u503C\u5C0F\u4E8E <code>0</code>\uFF1A\u90A3\u4E48 <code>a</code> \u5C31\u5C0F\u4E8E <code>b</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4 <code>a</code> \u6392\u5728\u4E86 <code>b</code> \u7684\u524D\u9762</li><li><code>compareFunction(a,b)</code> \u8FD4\u56DE\u7684\u503C\u5927\u4E8E <code>0</code>: \u90A3\u4E48 <code>a</code> \u5C31\u5927\u4E8E <code>b</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4 <code>a</code> \u6392\u5728\u4E86 <code>b</code> \u7684\u540E\u9762</li><li><code>compareFunction(a,b)</code> \u8FD4\u56DE\u7684\u503C\u7B49\u4E8E <code>0</code>\uFF1A\u90A3\u4E48 <code>a</code> \u5C31\u7B49\u4E8E <code>b</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4 <code>a</code> \u548C <code>b</code> \u7684\u4F4D\u7F6E\u4FDD\u6301\u4E0D\u53D8</li></ul><p><code>compareFunction(a,b)</code> \u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">compareFunction</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// a \u6392\u5728 b \u7684\u524D\u9762</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// a \u6392\u5728 b \u7684\u540E\u9762</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// a \u548C b \u7684\u4F4D\u7F6E\u4FDD\u6301\u4E0D\u53D8</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u4E2A\u51FD\u6570\u53EF\u9002\u7528\u4E8E\u5927\u591A\u6570\u6570\u636E\u7C7B\u578B\uFF0C\u53EA\u8981\u5C06 <code>compareFunction(a,b)</code> \u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u7ED9 <code>sort()</code> \u65B9\u6CD5\u5373\u53EF\u3002\u56E0\u5230\u524D\u9762\u7684\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>compareFunction<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06 compareFunction \u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u7ED9 sort()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 5, 10, 22]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6570\u7EC4 arr \u4ECD\u7136\u4FDD\u6301\u4E86\u6B63\u786E\u7684\u5347\u5E8F\u6392\u5217\u3002\u5176\u5B9E\u53EF\u4EE5\u901A\u8FC7 <code>compareFunction(a,b)</code> \u5BF9\u6570\u7EC4\u4F5C\u964D\u5E8F\u6392\u5217\uFF0C\u53EA\u9700\u8981\u5C06 <code>compareFunction</code> \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u505A\u4E2A\u8C03\u6574\u5373\u53EF\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">compareFunction</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// a \u6392\u5728 b \u7684\u540E\u9762</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// a \u6392\u5728 b \u7684\u524D\u9762</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// a \u548C b \u4FDD\u6301\u4F4D\u7F6E\u4E0D\u53D8</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>compareFunction<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06 compareFunction \u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u4F20\u7ED9 sort()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [22, 10, 5, 1]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p>\u6CE8\uFF1A<code>compareFunction(a, b)</code> \u5FC5\u987B\u603B\u662F\u5BF9\u76F8\u540C\u7684\u8F93\u5165\u8FD4\u56DE\u76F8\u540C\u7684\u6BD4\u8F83\u7ED3\u679C\uFF0C\u5426\u5219\u6392\u5E8F\u7684\u7ED3\u679C\u5C06\u662F\u4E0D\u786E\u5B9A\u7684\u3002</p></blockquote><p>\u5BF9\u4E8E\u6570\u5B57\u7C7B\u578B\u6216 <code>valueOf()</code> \u65B9\u6CD5\u8FD4\u56DE\u6570\u503C\u7C7B\u578B\u7684\u5BF9\u8C61\u7C7B\u578B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u66F4\u7B80\u5355\u7684\u6BD4\u8F83\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ascSort(a, b) \u4F20\u7ED9 sort()\uFF0C\u6570\u5B57\u6570\u7EC4\u4F5C\u5347\u5E8F\u6392\u5217</span>
<span class="token keyword">function</span> <span class="token function">ascSort</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// a \u548C b \u662F\u6570\u7EC4\u4E2D\u76F8\u90BB\u7684\u4E24\u4E2A\u6570\u7EC4\u9879</span>
  <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
  <span class="token comment">// \u5982\u679C return -1, \u8868\u793A a \u5C0F\u4E8E b\uFF0Ca \u6392\u5217\u5728 b \u7684\u524D\u9762</span>
  <span class="token comment">// \u5982\u679C return 1, \u8868\u793A a \u5927\u4E8E b\uFF0Ca \u6392\u5217\u5728 b \u7684\u540E\u9762</span>
  <span class="token comment">// \u5982\u679C return 0, \u8868\u793A a \u7B49\u4E8E b\uFF0Ca \u548C b \u7684\u4F4D\u7F6E\u4FDD\u6301\u4E0D\u53D8</span>
<span class="token punctuation">}</span>

<span class="token comment">// desSort(a, b) \u4F20\u7ED9sort()\uFF0C\u6570\u5B57\u6570\u7EC4\u4F5C\u964D\u5E8F\u6392\u5217</span>
<span class="token keyword">function</span> <span class="token function">desSort</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// a\u548Cb\u662F\u6570\u7EC4\u4E2D\u76F8\u90BB\u7684\u4E24\u4E2A\u6570\u7EC4\u9879</span>
  <span class="token keyword">return</span> b <span class="token operator">-</span> a<span class="token punctuation">;</span>
  <span class="token comment">// \u5982\u679C return -1, \u8868\u793A b \u5C0F\u4E8E a\uFF0Cb \u6392\u5217\u5728 a \u7684\u524D\u9762</span>
  <span class="token comment">// \u5982\u679C return 1, \u8868\u793A b \u5927\u4E8E a\uFF0Cb \u6392\u5217\u5728 a \u7684\u540E\u9762</span>
  <span class="token comment">// \u5982\u679C return 0, \u8868\u793A b \u7B49\u4E8E a\uFF0Cb \u548C a \u7684\u4F4D\u7F6E\u4FDD\u6301\u4E0D\u53D8</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u6765\u770B\u770B\u7ED3\u679C\u662F\u4E0D\u662F\u6211\u4EEC\u60F3\u8981\u7684\u7ED3\u679C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>ascSort<span class="token punctuation">)</span><span class="token punctuation">;</span>
arr2<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>desSort<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 3, 4, 10]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [100, 99, 12, 3, 2]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u5BF9\u8C61\u6570\u7EC4\u6392\u5217" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u6570\u7EC4\u6392\u5217" aria-hidden="true">#</a> \u5BF9\u8C61\u6570\u7EC4\u6392\u5217</h3><ol><li>\u6309\u7167\u5BF9\u8C61\u5C5E\u6027\u6392\u5E8F\uFF0C\u8BBE\u7F6E\u5347\u5E8F or \u964D\u5E8F\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">objectSort</span><span class="token punctuation">(</span><span class="token parameter">property<span class="token punctuation">,</span> desc</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u964D\u5E8F\u6392\u5217</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>desc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">&gt;</span> b<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">&lt;</span> b<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">&lt;</span> b<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">&gt;</span> b<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">29</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Anna Smith&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">24</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Peter Jones&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">39</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token function">objectSort</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6309 object \u4E2D\u7684 name \u7684\u964D\u5E8F\u6392\u5217</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token function">objectSort</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6309 objcet \u4E2D\u7684 age \u5347\u5E8F\u6392\u5217</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ol start="2"><li>\u6309\u7167\u5BF9\u8C61\u5C5E\u6027\u6392\u5E8F\u52A8\u6001\u6392\u5E8F\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">dynamicSort</span><span class="token punctuation">(</span><span class="token parameter">property</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> sortOrder <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>property<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sortOrder <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    property <span class="token operator">=</span> property<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">&lt;</span> b<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">&gt;</span> b<span class="token punctuation">[</span>property<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result <span class="token operator">*</span> sortOrder<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token function">dynamicSort</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6309\u5347\u5E8F\u6392\u5217</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token function">dynamicSort</span><span class="token punctuation">(</span><span class="token string">&#39;-age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6309\u964D\u5E8F\u6392\u5217</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="3"><li>\u591A\u4E2A\u5C5E\u6027\u6392\u5E8F\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">dynamicSortMultiple</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> props <span class="token operator">=</span> arguments<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj1<span class="token punctuation">,</span> obj2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
      result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
      numberOfProperties <span class="token operator">=</span> props<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>result <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> numberOfProperties<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">=</span> <span class="token function">dynamicSort</span><span class="token punctuation">(</span>props<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

myArray<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token function">dynamicSortMultiple</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="reverse-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#reverse-\u65B9\u6CD5" aria-hidden="true">#</a> reverse() \u65B9\u6CD5</h2><p><code>reverse()</code> \u65B9\u6CD5\u76F8\u5BF9\u800C\u8A00\u8981\u7B80\u5355\u5F97\u591A\uFF0C\u5B83\u5C31\u662F\u7528\u6765\u98A0\u5012\u6570\u7EC4\u4E2D\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u5E76\u8FD4\u56DE\u8BE5\u6570\u7EC4\u7684\u5F15\u7528\u3002</p><p>\u6BD4\u5982\u6211\u4EEC\u6709\u4E00\u4E2A\u6570\u7EC4\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Airen&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;W3cplus&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Blog&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;Blog&quot;, &quot;W3cplus&quot;, &quot;Airen&quot;]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,38);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};