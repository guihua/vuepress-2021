import{d as n}from"./app.147292e0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="react-\u4F20\u9012\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#react-\u4F20\u9012\u5C5E\u6027" aria-hidden="true">#</a> React \u4F20\u9012\u5C5E\u6027</h1><p>\u5904\u7406\u5C5E\u6027\u6709\u4EE4\u4EBA\u6CAE\u4E27\u7684\u4E00\u9762\u3002</p><p>\u5728\u53EA\u5904\u7406\u4E00\u5C42\u7EC4\u4EF6\u65F6\uFF0C\u5C06\u5C5E\u6027\u4ECE\u4E00\u4E2A\u7EC4\u4EF6\u4F20\u9012\u5230\u53E6\u4E00\u4E2A\u5F88\u7B80\u5355\u3002\u4F46\u662F\u5982\u679C\u4F60\u60F3\u5C06\u4E00\u4E2A\u5C5E\u6027\u5728\u591A\u5C42\u7EC4\u4EF6\u4E4B\u95F4\u4F20\u9012\uFF0C\u4E8B\u60C5\u5C31\u5F00\u59CB\u53D8\u5F97\u590D\u6742\u4E86\u3002</p><p>React \u5F3A\u5236\u4E00\u4E2A\u547D\u4EE4\u94FE\uFF0C\u5728\u94FE\u4E2D\uFF0C\u5C5E\u6027\u5FC5\u987B\u4ECE\u7236\u7EC4\u4EF6\u5411\u4E0B\u6D41\u52A8\u5230\u76F4\u63A5\u7684\u5B50\u7EC4\u4EF6\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u4F20\u9012\u4E00\u4E2A\u5C5E\u6027\u65F6\uFF0C\u4F60\u4E0D\u80FD\u8DF3\u8FC7\u5B50\u5C42\u3002\u8FD9\u8FD8\u610F\u5473\u7740\u4F60\u7684\u5B50\u7EC4\u4EF6\u4E0D\u80FD\u628A\u4E00\u4E2A\u5C5E\u6027\u4F20\u56DE\u5230\u7236\u7EC4\u4EF6\u3002</p><p>\u6240\u6709\u7684\u901A\u8BAF\u662F\u4ECE\u7236\u5230\u5B50\u5355\u5411\u7684\u3002</p><h2 id="\u6269\u5C55\u8FD0\u7B97\u7B26-spread-operator" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u8FD0\u7B97\u7B26-spread-operator" aria-hidden="true">#</a> \u6269\u5C55\u8FD0\u7B97\u7B26\uFF08Spread Operator\uFF09</h2><p>\u6269\u5C55\u8FD0\u7B97\u7B26\u5141\u8BB8\u4F60\u5C06\u6570\u7EC4\u5C55\u5F00\u4E3A\u5355\u4E2A\u7684\u5143\u7D20\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">printStuff</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Printing: &#39;</span> <span class="token operator">+</span> a <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> b <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0D\u7528\u6269\u5C55\u8FD0\u7B97\u7B26</span>
<span class="token function">printStuff</span><span class="token punctuation">(</span>items<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> items<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> items<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u7528\u6269\u5C55\u8FD0\u7B97\u7B26</span>
<span class="token function">printStuff</span><span class="token punctuation">(</span><span class="token operator">...</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u6B63\u786E\u4F20\u9012\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u6B63\u786E\u4F20\u9012\u5C5E\u6027" aria-hidden="true">#</a> \u6B63\u786E\u4F20\u9012\u5C5E\u6027</h2><p>\u6211\u4EEC\u8981\u9762\u5BF9\u7684\u5728\u7EC4\u4EF6\u4E4B\u95F4\u4F20\u9012\u5C5E\u6027\u8FD9\u79CD\u60C5\u51B5\uFF0C\u4E0E\u5206\u522B\u8BBF\u95EE\u6BCF\u4E2A\u6570\u7EC4\u6761\u76EE\u5F88\u76F8\u4F3C\u3002</p><p>\u6211\u4EEC\u5148\u8FDB\u884C\u53C2\u6570\u4F20\u9012\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Shirt color<span class="token operator">=</span><span class="token string">&quot;steelblue&quot;</span> num<span class="token operator">=</span><span class="token string">&quot;3.14&quot;</span> size<span class="token operator">=</span><span class="token string">&quot;medium&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6211\u4EEC\u7684 <code>props</code> \u5BF9\u8C61\u770B\u8D77\u6765\u50CF\u4E0B\u9762\u8FD9\u6837\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> props <span class="token operator">=</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> <span class="token string">&#39;steelblue&#39;</span><span class="token punctuation">,</span>
  num<span class="token operator">:</span> <span class="token string">&#39;3.14&#39;</span><span class="token punctuation">,</span>
  size<span class="token operator">:</span> <span class="token string">&#39;medium&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5728 <code>Shirt</code> \u7EC4\u4EF6\u4E2D\uFF0C\u8FD0\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u63A5\u6536\u53C2\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> Shirt <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Display <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6700\u540E\uFF0C\u5728 <code>Display</code> \u7EC4\u4EF6\u4E2D\uFF0C\u63A5\u6536\u4F20\u9012\u7684\u53C2\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> Display <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>num<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>size<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u901A\u8FC7\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\uFF0C\u5982\u679C\u66FE\u7ECF\u51B3\u5B9A\u8981\u6DFB\u52A0\u5C5E\u6027\u3001\u91CD\u547D\u540D\u5C5E\u6027\u3001\u5220\u9664\u5C5E\u6027\uFF0C\u6216\u8005\u505A\u4EFB\u4F55\u5176\u5B83\u4E0E\u5C5E\u6027\u76F8\u5173\u7684\u9B3C\u628A\u620F\uFF0C\u4F60\u5C31\u4E0D\u9700\u8981\u505A\u5927\u91CF\u4E0D\u540C\u7684\u4FEE\u6539\u4E86\u3002\u53EA\u9700\u8981\u5728\u5B9A\u4E49\u5C5E\u6027\u7684\u5730\u65B9\u505A\u4E00\u4E2A\u4FEE\u6539\uFF0C\u5728\u6D88\u8D39\u8BE5\u5C5E\u6027\u7684\u5730\u65B9\u505A\u53E6\u4E00\u4E2A\u4FEE\u6539\u3002\u8FD9\u5C31\u591F\u4E86\u3002\u6240\u6709\u4EC5\u4EC5\u4F20\u9012\u6539\u5C5E\u6027\u7684\u4E2D\u95F4\u7EC4\u4EF6\u5C06\u4FDD\u6301\u4E0D\u53D8\uFF0C\u56E0\u4E3A {this.props} \u8868\u8FBE\u5F0F\u4E0D\u5305\u542B\u5185\u90E8\u5230\u5E95\u53D1\u751F\u4E86\u4EC0\u4E48\u7684\u7EC6\u8282\u3002</p>`,19);function t(e,o){return p}var r=s(a,[["render",t]]);export{r as default};