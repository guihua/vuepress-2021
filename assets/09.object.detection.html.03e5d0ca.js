import{d as n}from"./app.147292e0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u5BF9\u8C61\u5C5E\u6027\u68C0\u6D4B" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u5C5E\u6027\u68C0\u6D4B" aria-hidden="true">#</a> \u5BF9\u8C61\u5C5E\u6027\u68C0\u6D4B</h1><p>\u5728 JavaScript \u4E2D\u5BF9\u8C61\u5C5E\u6027\u7684\u68C0\u6D4B\u4E3B\u8981\u6709\u4EE5\u4E0B\u51E0\u79CD\u65B9\u6CD5\u3002</p><ul><li><code>in</code> \u8FD0\u7B97\u7B26</li><li><code>hasOwnProperty()</code> \u65B9\u6CD5</li><li><code>propertyIsEnumerable()</code> \u65B9\u6CD5</li><li><code>!==undefined</code></li></ul><h2 id="in\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#in\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> in\u8FD0\u7B97\u7B26</h2><p>\u4F7F\u7528 <code>in</code> \u8FD0\u7B97\u7B26\u53EF\u4EE5\u68C0\u6D4B\u5BF9\u8C61\u5C5E\u6027\uFF0C\u5982\u679C\u6307\u5B9A\u7684\u5C5E\u6027\u5B58\u5728\u4E8E\u6307\u5B9A\u7684\u5BF9\u8C61\u4E2D\uFF0C\u5C31\u4F1A\u8FD4\u56DE <code>true</code>\uFF0C\u53CD\u4E4B\u8FD4\u56DE\u7684\u662F <code>false</code>\u3002</p><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u6F14\u793A\u4E86 <code>in</code> \u662F\u5982\u4F55\u68C0\u6D4B\u5BF9\u8C61\u5C5E\u6027\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> myCar <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;make&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Honda&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;model&#39;</span><span class="token operator">:</span> <span class="token string">&#39;Accord&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;year&#39;</span><span class="token operator">:</span> <span class="token number">1998</span>
<span class="token punctuation">}</span>

<span class="token string">&#39;make&#39;</span> <span class="token keyword">in</span> myCar<span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token string">&#39;name&#39;</span> <span class="token keyword">in</span> myCar<span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token string">&#39;toString&#39;</span> <span class="token keyword">in</span> myCar<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728\u4F7F\u7528 <code>in</code> \u8FD0\u7B97\u7B26\u505A\u5BF9\u8C61\u5C5E\u6027\u68C0\u6D4B\u65F6\uFF0C\u8FD0\u7B97\u7B26\u53F3\u4FA7\u5FC5\u987B\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6BD4\u5982\u53EF\u4EE5\u662F\u4E00\u4E2A <code>string</code> \u5305\u88C5\u7684\u5BF9\u8C61\uFF0C\u4F46\u4E0D\u80FD\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u539F\u59CB\u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&#39;w3cplus&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token string">&#39;length&#39;</span> <span class="token keyword">in</span> name<span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token string">&#39;w3cplus&#39;</span> <span class="token keyword">in</span> name<span class="token punctuation">;</span> <span class="token comment">// false</span>

<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;w3cplus&#39;</span><span class="token punctuation">;</span>
<span class="token string">&#39;length&#39;</span> <span class="token keyword">in</span> name<span class="token punctuation">;</span> <span class="token comment">//false</span>
<span class="token string">&#39;w3cplus&#39;</span> <span class="token keyword">in</span> name<span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4F7F\u7528 <code>delete</code> \u8FD0\u7B97\u7B26\u5220\u9664\u4E86\u4E00\u4E2A\u5BF9\u8C61\u4E00\u4E2A\u5C5E\u6027\uFF0C\u8FD9\u65F6\u4F7F\u7528 <code>in</code> \u8FD0\u7B97\u7B26\u68C0\u6D4B\u5220\u9664\u7684\u5C5E\u6027\u65F6\u4F1A\u8FD4\u56DE <code>false</code>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;w3cplus&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;blog&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// Object {type: &quot;blog&quot;}</span>
name <span class="token keyword">in</span> obj<span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5982\u679C\u4F60\u53EA\u662F\u5C06\u4E00\u4E2A\u5C5E\u6027\u7684\u503C\u8D4B\u503C\u4E3A <code>undefined</code>\uFF0C\u800C\u6CA1\u6709\u7528 <code>delete</code> \u5220\u9664\u5B83\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F7F\u7528 <code>in</code> \u8FD0\u7B97\u7B26\u68C0\u6D4B\u5BF9\u8C61\u5C5E\u6027\u65F6\u4F9D\u65E7\u4F1A\u8FD4\u56DE <code>true</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;w3cplus&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;blog&#39;</span>
<span class="token punctuation">}</span>

obj<span class="token punctuation">.</span>url <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token string">&#39;url&#39;</span> <span class="token keyword">in</span> obj<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="hasownproperty-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#hasownproperty-\u65B9\u6CD5" aria-hidden="true">#</a> hasOwnProperty() \u65B9\u6CD5</h2><p>\u4F7F\u7528 <code>hasOwnProperty()</code> \u65B9\u6CD5\u53EF\u4EE5\u5224\u65AD\u67D0\u4E2A\u5BF9\u8C61\u662F\u5426\u542B\u6709\u6307\u5B9A\u7684\u81EA\u8EAB\u5C5E\u6027\u3002\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u6240\u6709\u627F\u7EE7\u7EE7\u627F\u4E86 <code>Object.prototype</code> \u7684\u5BF9\u8C61\u90FD\u4F1A\u4ECE\u539F\u578B\u94FE\u4E0A\u7EE7\u627F\u5230<code>hasOwnProperty()</code> \u65B9\u6CD5\u4E0A\u3002\u800C\u4E14\u8BE5\u65B9\u6CD5\u4F1A\u5FFD\u7565\u6389\u90A3\u4E9B\u4ECE\u539F\u578B\u4E0A\u7EE7\u627F\u5230\u7684\u5C5E\u6027\u3002</p><p>\u5982\u679C\u5BF9\u8C61 <code>obj</code> \u5305\u542B\u6307\u5B9A\u7684 <code>prop</code> \u5C5E\u6027\u7684\u8BDD\uFF0C\u4F7F\u7528 <code>hasOwnProperty()</code> \u65B9\u6CD5\u5C06\u8FD4\u56DE <code>true</code> \u503C\uFF0C\u53CD\u4E4B\u5C06\u4F1A\u8FD4\u56DE <code>false</code>\u3002</p><p>\u5148\u6765\u770B\u4E2A\u7B80\u5355\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;w3cplus&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;blog&#39;</span>
<span class="token punctuation">}</span>

obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;toString&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u53EA\u6709 <code>hasOwnProperty()</code> \u53EF\u4EE5\u7ED9\u51FA\u6B63\u786E\u548C\u671F\u671B\u7684\u7ED3\u679C\uFF0C\u8FD9\u5728\u904D\u5386\u5BF9\u8C61\u7684\u5C5E\u6027\u65F6\u4F1A\u5F88\u6709\u7528\u3002 \u6CA1\u6709\u5176\u5B83\u65B9\u6CD5\u53EF\u4EE5\u7528\u6765\u6392\u9664\u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027\uFF0C\u800C\u4E0D\u662F\u5B9A\u4E49\u5728\u5BF9\u8C61\u81EA\u8EAB\u4E0A\u7684\u5C5E\u6027\u3002</p><p><code>hasOwnProperty()</code> \u65B9\u6CD5\u53EA\u4F1A\u67E5\u627E\u81EA\u8EAB\u5C5E\u6027\uFF0C\u4E0D\u4F1A\u6839\u636E\u539F\u578B\u94FE\u8FDB\u884C\u67E5\u627E\u3002\u800C\u4E14 <code>hasOwnProperty()</code> \u65B9\u6CD5\u5728\u78B0\u5230\u5BF9\u8C61\u62E5\u6709\u81EA\u5DF2\u7684 <code>hasOwnProperty</code> \u65B9\u6CD5\u65F6\uFF0C\u5176\u539F\u578B\u94FE\u4E0A\u7684\u540C\u540D\u65B9\u6CD5 <code>hasOwnProperty()</code> \u5C31\u4F1A\u88AB\u906E\u853D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">hasOwnProperty</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    bar<span class="token operator">:</span> <span class="token string">&#39;Here be dragons&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

foo<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u59CB\u7EC8\u8FD4\u56DE false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5982\u679C\u62C5\u5FC3 <code>hasOwnProperty()</code> \u65B9\u6CD5\u6709\u53EF\u80FD\u88AB\u906E\u853D\u7684\u8FD9\u79CD\u60C5\u51B5\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u539F\u578B\u94FE\u4E0A\u771F\u6B63\u7684 <code>hasOwnProperty</code> \u65B9\u6CD5:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="propertyisenumerable-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#propertyisenumerable-\u65B9\u6CD5" aria-hidden="true">#</a> propertyIsEnumerable() \u65B9\u6CD5</h2><p><code>propertyIsEnumerable()</code> \u65B9\u6CD5\u662F <code>hasOwnProperty()</code> \u65B9\u6CD5\u7684\u4E00\u4E2A\u5347\u7EA7\u7248\u3002\u5728 JavaScript \u4E2D\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u6709\u4E00\u4E2A <code>propertyIsEnumerable()</code> \u65B9\u6CD5\u3002\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u5224\u65AD\u51FA\u6307\u5B9A\u7684\u5BF9\u8C61 <code>obj</code> \u91CC\u7684\u5C5E\u6027 <code>prop</code> \u662F\u5426\u53EF\u679A\u4E3E\uFF0C\u4E5F\u5C31\u662F\u8BF4\u8BE5\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u901A\u8FC7 <code>for...in</code> \u5FAA\u73AF\u904D\u5386\u5230\uFF0C\u4E0D\u8FC7\u6709\u4E9B\u5C5E\u6027\u867D\u7136\u53EF\u4EE5\u901A\u8FC7 <code>for...in</code> \u5FAA\u73AF\u904D\u5386\u5230\uFF0C\u4F46\u56E0\u4E3A\u5B83\u4EEC\u4E0D\u662F\u81EA\u8EAB\u5C5E\u6027\uFF0C\u800C\u662F\u4ECE\u539F\u578B\u94FE\u4E0A\u7EE7\u627F\u7684\u5C5E\u6027,\u6240\u4EE5\u8BE5\u65B9\u6CD5\u4E5F\u4F1A\u8FD4\u56DE <code>false</code>\u3002\u5982\u679C\u5BF9\u8C61\u6CA1\u6709\u6307\u5B9A\u7684\u5C5E\u6027\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE <code>false</code>\u3002</p><p>\u5148\u6765\u770B\u4E00\u4E2A <code>propertyIsEnumerable()</code> \u65B9\u6CD5\u5728\u666E\u901A\u5BF9\u8C61\u548C\u6570\u7EC4\u4E0A\u7684\u57FA\u672C\u7528\u6CD5:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;w3cplus is website&#39;</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;blog&#39;</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">propertyIsEnumerable</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// true</span>
obj<span class="token punctuation">.</span><span class="token function">propertyIsEnumerable</span><span class="token punctuation">(</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// true</span>
obj<span class="token punctuation">.</span><span class="token function">propertyIsEnumerable</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// false</span>
obj<span class="token punctuation">.</span><span class="token function">propertyIsEnumerable</span><span class="token punctuation">(</span><span class="token string">&#39;toString&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="undefined" tabindex="-1"><a class="header-anchor" href="#undefined" aria-hidden="true">#</a> !==undefined</h2><p>\u8FD8\u6709\u4E00\u79CD\u7B80\u5355\u7684\u65B9\u6CD5\u53EF\u4EE5\u5224\u65AD\u5BF9\u8C61\u7684\u5C5E\u6027\u662F\u5426\u5B58\u5728\uFF0C\u901A\u8FC7\u5C5E\u6027 <code>!== undefined</code> \u6765\u5224\u65AD\u3002\u6B64\u65F6\u4F1A\u68C0\u6D4B\u81EA\u8EAB\u548C\u7EE7\u627F\u6765\u7684\u5C5E\u6027\u3002\u4E4B\u6240\u4EE5\u4F7F\u7528 <code>!==</code> \u800C\u4E0D\u662F <code>!=</code> \u662F\u56E0\u4E3A <code>!==</code> \u53EF\u4EE5\u533A\u5206 <code>undefined</code> \u548C <code>null</code>\u3002\u4F46\u662F\u6B64\u65B9\u6CD5\u6709\u4E00\u4E2A\u5F0A\u7AEF\uFF0C\u5F53\u5C5E\u6027\u5B58\u5728\u4E14\u503C\u4E3A <code>undefined</code> \u65F6\uFF0C\u65E0\u6CD5\u505A\u51FA\u51C6\u786E\u5224\u65AD\u3002\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span><span class="token keyword">undefined</span><span class="token punctuation">,</span>
    z<span class="token operator">:</span><span class="token keyword">null</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>x <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true \u5C5E\u6027\u5B58\u5728</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>y <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false \u6B64\u65F6\u4F1A\u51FA\u73B0\u6B67\u4E49\uFF0C\u4E0D\u80FD\u51C6\u786E\u5224\u65AD\u5C5E\u6027\u662F\u4E0D\u5B58\u5728\u8FD8\u662F\u5C5E\u6027\u503C\u4E3Aundefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>z <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true \u5C5E\u6027\u5B58\u5728</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>z <span class="token operator">!=</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false != \u4E0D\u80FD\u533A\u5206undefined\u548Cnull\uFF0C\u5C06\u4E24\u8005\u540C\u7B49\u5BF9\u5F85</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>w <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false \u5C5E\u6027\u4E0D\u5B58\u5728</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>toString <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true \u5B58\u5728toString\u51FD\u6570\u5C5E\u6027\u3002</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u7136\u800C\u6709\u4E00\u79CD\u573A\u666F\u53EA\u80FD\u4F7F\u7528 <code>in</code> \u8FD0\u7B97\u7B26\uFF0C\u800C\u4E0D\u80FD\u4F7F\u7528\u4E0A\u8FF0\u5C5E\u6027\u8BBF\u95EE\u7684\u65B9\u5F0F\u3002<code>in</code> \u53EF\u4EE5\u533A\u5206\u4E0D\u5B58\u5728\u7684\u5C5E\u6027\u548C\u5B58\u5728\u7684\u5C5E\u6027\u4F46\u5176\u503C\u4E3A <code>undefined</code>\u3002\u5982\u4E0B\u9762\u7684\u4EE3\u7801\u6240\u793A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    x <span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token comment">// \u5C5E\u6027\u663E\u5F0F\u8D4B\u503C\u4E3Aundefined</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span>x <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">//false,\u5C5E\u6027\u5B58\u5728\uFF0C\u4F46\u503C\u4E3Aundefined</span>
obj<span class="token punctuation">.</span>y <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">//false,\u5C5E\u6027\u4E0D\u5B58\u5728</span>
<span class="token string">&quot;x&quot;</span> <span class="token keyword">in</span> obj<span class="token punctuation">;</span> <span class="token comment">// true \u5C5E\u6027\u5B58</span>
<span class="token string">&quot;y&quot;</span> <span class="token keyword">in</span> obj<span class="token punctuation">;</span> <span class="token comment">// false \u5C5E\u6027\u4E0D\u5B58\u5728</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>x<span class="token punctuation">;</span> <span class="token comment">// \u5220\u9664\u5C5E\u6027x</span>
<span class="token string">&quot;x&quot;</span> <span class="token keyword">in</span> obj<span class="token punctuation">;</span> <span class="token comment">// false \u5C5E\u6027\u4E0D\u5B58</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,32);function e(o,t){return p}var r=s(a,[["render",e]]);export{r as default};
