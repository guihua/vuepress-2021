import{r as t,o as e,c as o,a as s,e as c,F as l,d as a,b as n}from"./app.147292e0.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=a(`<h1 id="react-\u6DF1\u5165-jsx" tabindex="-1"><a class="header-anchor" href="#react-\u6DF1\u5165-jsx" aria-hidden="true">#</a> React \u6DF1\u5165 JSX</h1><p>\u6D4F\u89C8\u5668\u662F\u4E0D\u77E5\u9053\u5982\u4F55\u5904\u7406 JSX \u7684\uFF0C\u6211\u4EEC\u9700\u8981\u7528 Babel \u628A JSX \u8F6C\u6362\u6210\u6D4F\u89C8\u5668\u53EF\u4EE5\u7406\u89E3\u7684 JavaScript\u3002</p><h2 id="jsx-\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#jsx-\u7279\u6027" aria-hidden="true">#</a> JSX \u7279\u6027</h2><h3 id="_1-\u53EA\u80FD\u8FD4\u56DE\u4E00\u4E2A\u6839\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-\u53EA\u80FD\u8FD4\u56DE\u4E00\u4E2A\u6839\u8282\u70B9" aria-hidden="true">#</a> 1.\u53EA\u80FD\u8FD4\u56DE\u4E00\u4E2A\u6839\u8282\u70B9</h3><p>\u5728 JSX \u4E2D\uFF0Creturn \u6216\u8005 render \u7684\u4E1C\u897F\u4E0D\u80FD\u7531\u591A\u4E2A\u6839\u5143\u7D20\u7EC4\u6210\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Letter<span class="token operator">&gt;</span><span class="token constant">B</span><span class="token operator">&lt;</span><span class="token operator">/</span>Letter<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Letter<span class="token operator">&gt;</span><span class="token constant">E</span><span class="token operator">&lt;</span><span class="token operator">/</span>Letter<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Letter<span class="token operator">&gt;</span><span class="token constant">I</span><span class="token operator">&lt;</span><span class="token operator">/</span>Letter<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Letter<span class="token operator">&gt;</span><span class="token constant">O</span><span class="token operator">&lt;</span><span class="token operator">/</span>Letter<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Letter<span class="token operator">&gt;</span><span class="token constant">U</span><span class="token operator">&lt;</span><span class="token operator">/</span>Letter<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#container&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5982\u679C\u4F60\u60F3\u50CF\u8FD9\u6837\u505A\u70B9\u4EC0\u4E48\uFF0C\u90A3\u4E48\u4F60\u9700\u8981\u5148\u5C06\u6240\u6709\u5143\u7D20\u7528\u4E00\u4E2A\u7236\u5143\u7D20\u5305\u8D77\u6765\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Letter<span class="token operator">&gt;</span><span class="token constant">B</span><span class="token operator">&lt;</span><span class="token operator">/</span>Letter<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Letter<span class="token operator">&gt;</span><span class="token constant">E</span><span class="token operator">&lt;</span><span class="token operator">/</span>Letter<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Letter<span class="token operator">&gt;</span><span class="token constant">I</span><span class="token operator">&lt;</span><span class="token operator">/</span>Letter<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Letter<span class="token operator">&gt;</span><span class="token constant">O</span><span class="token operator">&lt;</span><span class="token operator">/</span>Letter<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Letter<span class="token operator">&gt;</span><span class="token constant">U</span><span class="token operator">&lt;</span><span class="token operator">/</span>Letter<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5F53\u4F7F\u7528 <code>render</code> \u548C <code>return</code> \u51FD\u6570\u65F6\uFF0C\u6700\u7EC8\u8FD4\u56DE\u7684\u662F\u5355\u4E2A <code>createElement</code> \u8C03\u7528\uFF08\u8FD9\u4E2A <code>createElement</code> \u53EF\u80FD\u4F1A\u6709\u5F88\u591A\u5D4C\u5957\u7684 <code>createElement</code> \u8C03\u7528\uFF09\u3002</p><p>\u5982\u4E0B\u662F\u4E0A\u9762\u7684 JSX \u8F6C\u6362\u4E3A JavaScript \u540E\u7684\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>
    <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">null</span><span class="token punctuation">,</span>
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Letter<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Letter<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;E&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Letter<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;I&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Letter<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;O&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Letter<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;U&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5982\u679C\u662F\u6709\u591A\u4E2A\u6839\u5143\u7D20\uFF0C\u5C31\u4F1A\u7834\u574F\u51FD\u6570\u8FD4\u56DE\u503C\u4EE5\u53CA <code>createElement</code> \u7684\u673A\u5236\uFF0C\u6240\u4EE5\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u53EA\u80FD\u6307\u5B9A\u4E00\u4E2A\u8FD4\u56DE\u4E00\u4E2A\u6839\u5143\u7D20\u7684\u539F\u56E0\u3002</p><h3 id="_2-\u4E0D\u80FD\u6307\u5B9A-inline-css" tabindex="-1"><a class="header-anchor" href="#_2-\u4E0D\u80FD\u6307\u5B9A-inline-css" aria-hidden="true">#</a> 2.\u4E0D\u80FD\u6307\u5B9A inline CSS</h3><p>\u5728 HTML \u4E2D\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728 HTML \u5143\u7D20\u7684 <code>style</code> \u5C5E\u6027\u4E0A\u8BBE\u5B9A CSS \u5C5E\u6027\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-family</span><span class="token punctuation">:</span>Arial<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span>24px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Blah!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5728 JSX \u4E2D\uFF0C<code>style</code> \u5C5E\u6027\u4E0D\u80FD\u5305\u542B CSS\uFF0C\u800C\u662F\u5F15\u7528\u4E00\u4E2A\u5305\u542B\u6837\u5F0F\u4FE1\u606F\u7684\u5BF9\u8C61\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> Letter <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> letterStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
      padding<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      margin<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      backgroundColor<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>bgcolor<span class="token punctuation">,</span>
      color<span class="token operator">:</span> <span class="token string">&#39;#333&#39;</span><span class="token punctuation">,</span>
      display<span class="token operator">:</span> <span class="token string">&#39;inline-block&#39;</span><span class="token punctuation">,</span>
      fontFamily<span class="token operator">:</span> <span class="token string">&#39;monospace&#39;</span><span class="token punctuation">,</span>
      fontSize<span class="token operator">:</span> <span class="token string">&#39;32&#39;</span><span class="token punctuation">,</span>
      textAlign<span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>letterStyle<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u6709\u4E00\u4E2A <code>letterStyle</code> \u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5305\u542B\u6240\u6709\u7684 CSS \u5C5E\u6027\uFF08\u6309\u9A7C\u5CF0\u547D\u540D\u6CD5\u5219\u547D\u540D\u7684 JavaScript \u5F62\u5F0F\uFF09\u53CA\u5176\u503C\u3002\u8BE5\u5BF9\u8C61\u5C31\u662F\u6211\u4EEC\u6307\u5B9A\u7ED9 <code>style</code> \u5C5E\u6027\u7684\u5BF9\u8C61\u3002</p><h3 id="_3-\u4FDD\u7559\u5173\u952E\u5B57\u548C-classname" tabindex="-1"><a class="header-anchor" href="#_3-\u4FDD\u7559\u5173\u952E\u5B57\u548C-classname" aria-hidden="true">#</a> 3.\u4FDD\u7559\u5173\u952E\u5B57\u548C className</h3><p>JavaScript \u6709\u5F88\u591A\u4E0D\u80FD\u7528\u4F5C\u6807\u8BC6\u7B26\uFF08\u5373\u53D8\u91CF\u548C\u5C5E\u6027\u540D\uFF09\u7684\u5173\u952E\u5B57\u548C\u503C\u3002</p><p>\u8FD9\u4E9B\u5173\u952E\u5B57\u5305\u62EC\uFF1A<code>break</code>, <code>case</code>, <code>class</code>, <code>catch</code>, <code>const</code>, <code>continue</code>, <code>debugger</code>, <code>default</code>, <code>delete</code>, <code>do</code>, <code>else</code>, <code>export</code>, <code>extends</code>, <code>finally</code>, <code>for</code>, <code>function</code>, <code>if</code>, <code>import</code>, <code>in</code>, <code>instanceof</code>, <code>new</code>, <code>return</code>, <code>super</code>, <code>switch</code>, <code>this</code>, <code>throw</code>, <code>try</code>, <code>typeof</code>, <code>var</code>, <code>void</code>, <code>while</code>, <code>with</code>, <code>yield</code>\u3002</p><p>\u5F53\u6211\u4EEC\u5728\u7F16\u5199 JSX \u65F6\uFF0C\u4E5F\u5FC5\u987B\u6CE8\u610F\u4E0D\u8981\u7528\u8FD9\u4E9B\u5173\u952E\u5B57\u4F5C\u4E3A\u6807\u8BC6\u7B26\u3002</p><p>\u6211\u4EEC\u6765\u770B\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;slideIn&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;emphasis&quot;</span><span class="token operator">&gt;</span>Gabagool<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Label <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u65E0\u89C6 JavaScript \u7684\u4FDD\u7559\u5173\u952E\u5B57 <code>class</code>\uFF08\u5C31\u50CF\u4E0A\u9762\u4EE3\u7801\u4E2D\u4E00\u6837\uFF09\u662F\u4E0D\u884C\u7684\u3002\u4F60\u9700\u8981\u505A\u7684\u662F\u7528 DOM API \u7248\u672C\u7684 <code>class</code> \u5C5E\u6027 <code>className</code> \u6765\u4EE3\u66FF\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;slideIn&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">&quot;emphasis&quot;</span><span class="token operator">&gt;</span>Gabagool<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Label <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,26),k=n("\u5B8C\u6574\u7684\u5C5E\u6027\u652F\u6301\uFF0C\u8BF7\u53C2\u8003\uFF1A "),d={href:"https://facebook.github.io/react/docs/dom-elements.html",target:"_blank",rel:"noopener noreferrer"},b=n("JSX \u652F\u6301\u7684\u5C5E\u6027"),m=n("\u3002"),g=a(`<p>\u56E0\u4E3A\u8FD9\u4E9B\u4E0E HTML \u884C\u4E3A\u7684\u7EC6\u5C0F\u504F\u5DEE\uFF0C\u6211\u4EEC\u8D8B\u5411\u4E8E\u8BF4 JSX \u652F\u6301 HTML \u7C7B\u4F3C\u7684\u8BED\u6CD5\uFF0C\u800C\u4E0D\u662F\u5C31\u8BF4 JSX \u652F\u6301 HTML\u3002</p><p>\u5BF9 JSX \u548C HTML \u4E4B\u95F4\u7684\u5173\u7CFB\u7684\u6700\u6E05\u6670\u7684\u56DE\u7B54\u6765\u81EA\u4E8E React \u56E2\u961F\u6210\u5458\uFF0CBen Alpert\uFF0C\u4ED6\u5728 Quora \u4E2D\u8FD9\u6837\u56DE\u7B54\uFF1A</p><blockquote><p>\u2026\u6211\u4EEC\u7684\u60F3\u6CD5\u662F JSX \u7684\u4E3B\u8981\u4F18\u70B9\u662F \u5339\u914D\u5173\u95ED\u6807\u8BB0\u7684\u5BF9\u79F0\u6027\u8BA9\u4EE3\u7801\u66F4\u5BB9\u6613\u8BFB\u61C2\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u4E0E HTML \u6216\u8005 XML \u76F8\u4F3C\u3002\u76F4\u63A5\u590D\u5236/\u7C98\u8D34 HTML \u5F88\u65B9\u4FBF\uFF0C\u4F46\u662F\u5176\u5B83 It&#39;s convenient to copy/paste HTML directly, but other minor differences (in self-closing tags, for example) make this a losing battle and we have a HTML to JSX converter to help you anyway. \u6700\u540E\uFF0C\u8981\u5C06 HTML \u7FFB\u8BD1\u4E3A\u901A\u987A\u7684 React \u4EE3\u7801\uFF0C\u76F8\u5F53\u5927\u7684\u5DE5\u4F5C\u91CF\u901A\u5E38\u662F\u5C06\u6807\u8BB0\u6253\u788E\u4E3A\u6709\u610F\u4E49\u7684\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u5C06 class \u53D8\u4E3A className \u53EA\u662F\u5DE5\u4F5C\u91CF\u4E2D\u7684\u4E00\u4E2A\u5C0F\u90E8\u5206\u3002</p></blockquote><h3 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h3><p>\u5C31\u50CF\u5728 HTML\u3001CSS \u548C JavaScript \u4E2D\u5199\u6CE8\u91CA\u662F\u4E00\u4E2A\u597D\u4E3B\u610F\u4E00\u6837\uFF0C\u5728 JSX \u5185\u63D0\u4F9B\u6CE8\u91CA\u4E5F\u662F\u4E2A\u597D\u4E3B\u610F\u3002\u5728 JSX \u4E2D\u6307\u5B9A\u6CE8\u91CA\u4E0E\u5728 JavaScript \u5199\u6CE8\u91CA\u5F88\u76F8\u4F3C\uFF0C\u53EA\u6709\u4E00\u4E2A\u4F8B\u5916\u3002\u5982\u679C\u4F60\u6307\u5B9A\u4E00\u4E2A\u6CE8\u91CA\u4F5C\u4E3A\u4E00\u4E2A\u6807\u8BB0\u7684\u5B50\u8282\u70B9\uFF0C\u90A3\u4E48\u4F60\u5FC5\u987B\u7528 <code>{</code> \u548C <code>}</code> \u628A\u6CE8\u91CA\u5305\u8D77\u6765\uFF0C\u4EE5\u786E\u4FDD\u5B83\u88AB\u89E3\u6790\u4E3A\u4E00\u4E2A\u8868\u8FBE\u5F0F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;slideIn&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;emphasis&quot;</span><span class="token operator">&gt;</span>Gabagool<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token comment">/* I am a child comment */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>Label <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u672C\u4F8B\u4E2D\u7684\u6CE8\u91CA\u662F div \u5143\u7D20\u7684\u4E00\u4E2A\u5B50\u5143\u7D20\u3002\u5982\u679C\u5B8C\u5168\u5728\u4E00\u4E2A\u6807\u8BB0\u5185\u90E8\u6307\u5B9A\u6CE8\u91CA\uFF0C\u90A3\u4E48\u5C31\u4E0D\u9700\u8981\u7528\u5927\u62EC\u53F7\u628A\u5355\u884C\u6216\u8005\u591A\u884C\u6CE8\u91CA\u62EC\u8D77\u6765\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;slideIn&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;emphasis&quot;</span><span class="token operator">&gt;</span>Gabagool<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Label
      <span class="token comment">/* This comment
        goes across
        multiple lines */</span>
      className<span class="token operator">=</span><span class="token string">&quot;colorCard&quot;</span> <span class="token comment">// end of line</span>
    <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_5-\u5927\u5C0F\u5199\u3001html-\u5143\u7D20\u548C\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-\u5927\u5C0F\u5199\u3001html-\u5143\u7D20\u548C\u7EC4\u4EF6" aria-hidden="true">#</a> 5. \u5927\u5C0F\u5199\u3001HTML \u5143\u7D20\u548C\u7EC4\u4EF6</h3><p>\u8981\u8868\u793A HTML \u5143\u7D20\uFF0C\u5FC5\u987B\u786E\u4FDD HTML \u6807\u8BB0\u662F\u5C0F\u5199\u5B57\u6BCD\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>section<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Something goes here<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5F53\u8868\u793A\u7EC4\u4EF6\u65F6\uFF0C\u7EC4\u4EF6\u7684\u540D\u79F0\u5FC5\u987B\u662F\u5927\u5199\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>MyCustomComponent <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5982\u679C\u5927\u5C0F\u5199\u51FA\u9519\uFF0CReact \u5C06\u4E0D\u4F1A\u6B63\u786E\u6E32\u67D3\u5185\u5BB9\u3002\u5F53\u4EE3\u7801\u8FD0\u884C\u4E0D\u6B63\u786E\u65F6\uFF0C\u5927\u5C0F\u5199\u95EE\u9898\u53EF\u80FD\u662F\u4F60\u60F3\u5230\u7684\u6700\u540E\u7684\u4E8B\u60C5\uFF0C\u6240\u4EE5\u8BB0\u4F4F\u8FD9\u4E2A\u5C0F\u6280\u5DE7\u3002</p><h3 id="jsx-\u53EF\u4EE5\u51FA\u73B0\u5728\u4EFB\u4F55\u5730\u65B9" tabindex="-1"><a class="header-anchor" href="#jsx-\u53EF\u4EE5\u51FA\u73B0\u5728\u4EFB\u4F55\u5730\u65B9" aria-hidden="true">#</a> JSX \u53EF\u4EE5\u51FA\u73B0\u5728\u4EFB\u4F55\u5730\u65B9</h3><p>\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\uFF0CJSX \u5E76\u4E0D\u662F\u50CF\u6211\u4EEC\u524D\u9762\u770B\u5230\u7684\u793A\u4F8B\u4E00\u6837\uFF0C\u6574\u9F50\u5730\u6392\u5217\u5728\u4E00\u4E2A render \u6216\u8005 return \u51FD\u6570\u5185\u3002\u770B\u770B\u5982\u4E0B\u793A\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> swatchComponent <span class="token operator">=</span> <span class="token operator">&lt;</span>Swatch color<span class="token operator">=</span><span class="token string">&quot;#2F004F&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Swatch<span class="token operator">&gt;</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>swatchComponent<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6211\u4EEC\u6709\u4E00\u4E2A <code>swatchComponent</code> \u53D8\u91CF\uFF0C\u8BE5\u53D8\u91CF\u88AB\u521D\u59CB\u5316\u4E3A\u4E00\u884C JSX\u3002\u5F53 <code>swatchComponent</code> \u53D8\u91CF\u653E\u5728 render \u51FD\u6570\u5185\u65F6\uFF0C<code>Swatch</code> \u7EC4\u4EF6\u5C31\u88AB\u521D\u59CB\u5316\u3002\u8FD9\u4E00\u5207\u90FD\u662F\u6709\u6548\u7684\uFF0C\u5E76\u4E14\u5728\u5C06\u6765\u5F53\u6211\u4EEC\u5B66\u4E60\u5982\u4F55\u7528 JavaScript \u751F\u6210\u548C\u64CD\u4F5C JSX \u65F6\uFF0C\u6211\u4EEC\u5C06\u4F1A\u505A\u66F4\u591A\u8FD9\u79CD\u4E8B\u60C5\u3002</p><h3 id="html-\u8F6C\u4E49" tabindex="-1"><a class="header-anchor" href="#html-\u8F6C\u4E49" aria-hidden="true">#</a> HTML \u8F6C\u4E49</h3><p>React \u4F1A\u5C06\u6240\u6709\u8981\u663E\u793A\u5230 DOM \u7684\u5B57\u7B26\u4E32\u8F6C\u4E49\uFF0C\u9632\u6B62 XSS\u3002\u6240\u4EE5\u5982\u679C JSX \u4E2D\u542B\u6709\u8F6C\u4E49\u540E\u7684\u5B9E\u4F53\u5B57\u7B26\u6BD4\u5982 <code>&amp;copy;</code> (\xA9) \u6700\u540E\u663E\u793A\u5230 DOM \u4E2D\u4E0D\u4F1A\u6B63\u786E\u663E\u793A\uFF0C\u56E0\u4E3A React \u81EA\u52A8\u628A <code>&amp;copy;</code> \u4E2D\u7684\u7279\u6B8A\u5B57\u7B26\u8F6C\u4E49\u4E86\u3002\u6709\u51E0\u79CD\u89E3\u51B3\u529E\u6CD5\uFF1A</p><ul><li>\u76F4\u63A5\u4F7F\u7528 UTF-8 \u5B57\u7B26 \xA9</li><li>\u4F7F\u7528\u5BF9\u5E94\u5B57\u7B26\u7684 Unicode \u7F16\u7801\uFF0C\u67E5\u8BE2\u7F16\u7801</li><li>\u4F7F\u7528\u6570\u7EC4\u7EC4\u88C5 <code>&lt;div&gt;{[&#39;cc &#39;, &lt;span&gt;&amp;copy;&lt;/span&gt;, &#39; 2015&#39;]}&lt;/div&gt;</code></li><li>\u76F4\u63A5\u63D2\u5165\u539F\u59CB\u7684 HTML</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{{__html:</span> <span class="token attr-name">&#39;cc</span> <span class="token attr-name">&amp;copy;</span> <span class="token attr-name">2015&#39;}}</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u81EA\u5B9A\u4E49-html-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49-html-\u5C5E\u6027" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49 HTML \u5C5E\u6027</h3><p>\u5982\u679C\u5728 JSX \u4E2D\u4F7F\u7528\u7684\u5C5E\u6027\u4E0D\u5B58\u5728\u4E8E HTML \u7684\u89C4\u8303\u4E2D\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u4F1A\u88AB\u5FFD\u7565\u3002\u5982\u679C\u8981\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u53EF\u4EE5\u7528 <code>data-</code> \u524D\u7F00\u3002</p><p>\u53EF\u8BBF\u95EE\u6027\u5C5E\u6027\u7684\u524D\u7F00 <code>aria-</code> \u4E5F\u662F\u652F\u6301\u7684\u3002</p><h3 id="\u652F\u6301\u7684\u6807\u7B7E\u548C\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301\u7684\u6807\u7B7E\u548C\u5C5E\u6027" aria-hidden="true">#</a> \u652F\u6301\u7684\u6807\u7B7E\u548C\u5C5E\u6027</h3><p>\u5982\u679C\u4F60\u8981\u4F7F\u7528\u7684\u67D0\u4E9B\u6807\u7B7E\u6216\u5C5E\u6027\u4E0D\u5728\u8FD9\u4E9B\u652F\u6301\u5217\u8868\u91CC\u9762\u5C31\u53EF\u80FD\u88AB React \u5FFD\u7565\uFF0C\u5FC5\u987B\u8981\u4F7F\u7528\u7684\u8BDD\u53EF\u4EE5\u63D0 issue\uFF0C\u6216\u8005\u7528\u524D\u9762\u63D0\u5230\u7684 <code>dangerouslySetInnerHTML</code>\u3002</p>`,27);function v(h,f){const p=t("ExternalLinkIcon");return e(),o(l,null,[i,s("p",null,[k,s("a",d,[b,c(p)]),m]),g],64)}var L=r(u,[["render",v]]);export{L as default};