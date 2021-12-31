import{d as s}from"./app.147292e0.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h1 id="react-\u5C5E\u6027\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#react-\u5C5E\u6027\u8BBF\u95EE" aria-hidden="true">#</a> React \u5C5E\u6027\u8BBF\u95EE</h1><p>React \u7EC4\u4EF6\u53EF\u4EE5\u8FD4\u56DE\u901A\u8FC7\u5C5E\u6027\u4F20\u9012\u8FDB\u6765\u7684\u503C\u3002</p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u5236\u5B9A\u4E00\u4E2A\u5C5E\u6027\u540D <code>greetTarget</code>\uFF0C\u4E0B\u9762\u5F00\u59CB\u5C5E\u6027\u7684\u4F7F\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> HelloMessage <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>greetTarget<span class="token punctuation">}</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8BBF\u95EE\u4E00\u4E2A\u5C5E\u6027\u7684\u65B9\u5F0F\uFF0C\u662F\u901A\u8FC7\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u53EF\u4EE5\u8BBF\u95EE\u7684 <code>this.props</code> \u5C5E\u6027\u6765\u8C03\u7528\u5B83\u3002</p><blockquote><p>\u6CE8\u610F\u6211\u4EEC\u6307\u5B9A\u8FD9\u4E2A\u5C5E\u6027\u7684\u65B9\u5F0F\uFF1A\u6211\u4EEC\u628A\u5B83\u653E\u5728\u4E00\u4E2A\u5927\u62EC\u53F7\u4E2D\u3002\u5728 JSX \u4E2D\uFF0C\u5982\u679C\u4F60\u60F3\u628A\u4E00\u4E9B\u4E8B\u60C5\u5F53\u4F5C\u8868\u8FBE\u5F0F\u6765\u8BA1\u7B97\uFF0C\u5C31\u5FC5\u987B\u5C06\u5B83\u653E\u5728\u5927\u62EC\u53F7\u4E2D\u3002\u5982\u679C\u4E0D\u8FD9\u6837\u505A\uFF0C\u90A3\u4E48\u5C31\u4F1A\u770B\u5230\u539F\u59CB\u6587\u672C\u88AB\u6253\u5370\u51FA\u6765\u4E86\u3002</p></blockquote><p>\u5C5E\u6027\u88AB\u5B9A\u4E49\u540E\uFF0C\u5269\u4E0B\u7684\u5C31\u662F\u4F20\u9012\u5C5E\u6027\u503C\u4E3A\u7EC4\u4EF6\u8C03\u7528\u7684\u4E00\u90E8\u5206\u3002\u5B9E\u73B0\u65B9\u5F0F\u662F\u5728\u7EC4\u4EF6\u8C03\u7528\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u540C\u540D\u5C5E\u6027\u540E\u8DDF\u8981\u4F20\u9012\u8FDB\u6765\u7684\u503C\u3002</p><p>\u5728\u6211\u4EEC\u7684\u793A\u4F8B\u4E2D\uFF0C\u5C31\u662F\u7528 <code>greetTarget</code> \u5C5E\u6027\u548C\u60F3\u7ED9\u5B83\u7684\u503C\u6765\u4FEE\u6539 <code>HelloMessage</code> \u8C03\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>HelloMessage greetTarget<span class="token operator">=</span><span class="token string">&quot;React World&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>HelloMessage greetTarget<span class="token operator">=</span><span class="token string">&quot;Fighting&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>HelloMessage greetTarget<span class="token operator">=</span><span class="token string">&quot;Someone&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u73B0\u5728\u6BCF\u4E2A <code>HelloMessage</code> \u8C03\u7528\u90FD\u6709 <code>greetTarget</code> \u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u7684\u5C5E\u6027\u503C\u4E3A\u6211\u4EEC\u60F3\u8981\u7684\u4EFB\u4F55\u503C\u3002</p><p>\u901A\u8FC7\u5C5E\u6027\u503C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5BF9\u7EC4\u4EF6\u8FDB\u884C\u975E\u5E38\u7075\u6D3B\u7684\u5E94\u7528\u3002</p>`,11);function e(t,o){return p}var l=n(a,[["render",e]]);export{l as default};