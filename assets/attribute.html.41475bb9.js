import{d as a}from"./app.147292e0.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},t=a(`<h1 id="html5-\u8868\u5355\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#html5-\u8868\u5355\u5C5E\u6027" aria-hidden="true">#</a> HTML5 \u8868\u5355\u5C5E\u6027</h1><p>\u65B0\u7684 <code>form</code> \u5C5E\u6027\uFF1A</p><ul><li>autocomplete</li><li>novalidate</li></ul><p>\u65B0\u7684 <code>input</code> \u5C5E\u6027\uFF1A</p><ul><li>autocomplete</li><li>autofocus</li><li>form</li><li>form overrides (formaction, formenctype, formmethod, formnovalidate, formtarget)</li><li>height \u548C width</li><li>list</li><li>min, max \u548C step</li><li>multiple</li><li>pattern (regexp)</li><li>placeholder</li><li>required</li></ul><h2 id="_1-autocomplete-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_1-autocomplete-\u5C5E\u6027" aria-hidden="true">#</a> 1. autocomplete \u5C5E\u6027</h2><p><code>autocomplete</code> \u5C5E\u6027\u89C4\u5B9A <code>form</code> \u6216 <code>input</code> \u57DF\u5E94\u8BE5\u62E5\u6709\u81EA\u52A8\u5B8C\u6210\u529F\u80FD\u3002</p><p><code>autocomplete</code> \u9002\u7528\u4E8E <code>&lt;form&gt;</code> \u6807\u7B7E\uFF0C\u4EE5\u53CA\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1A<code>text</code>, <code>search</code>, <code>url</code>, <code>telephone</code>, <code>email</code>, <code>password</code>, <code>datepickers</code>, <code>range</code> \u4EE5\u53CA <code>color</code>\u3002</p><p>\u5F53\u7528\u6237\u5728\u81EA\u52A8\u5B8C\u6210\u57DF\u4E2D\u5F00\u59CB\u8F93\u5165\u65F6\uFF0C\u6D4F\u89C8\u5668\u5E94\u8BE5\u5728\u8BE5\u57DF\u4E2D\u663E\u793A\u586B\u5199\u7684\u9009\u9879\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo_form.asp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>get<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  First name:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fname<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
  Last name:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lname<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
  E-mail:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>off<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_2-autofocus-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_2-autofocus-\u5C5E\u6027" aria-hidden="true">#</a> 2. autofocus \u5C5E\u6027</h2><p>autofocus \u5C5E\u6027\u89C4\u5B9A\u5728\u9875\u9762\u52A0\u8F7D\u65F6\uFF0C\u57DF\u81EA\u52A8\u5730\u83B7\u5F97\u7126\u70B9\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autofocus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>autofocus<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p><code>autofocus</code> \u5C5E\u6027\u9002\u7528\u4E8E\u6240\u6709 <code>&lt;input&gt;</code> \u6807\u7B7E\u7684\u7C7B\u578B\u3002</p></blockquote><h2 id="_3-form-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_3-form-\u5C5E\u6027" aria-hidden="true">#</a> 3. form \u5C5E\u6027</h2><p><code>form</code> \u5C5E\u6027\u89C4\u5B9A\u8F93\u5165\u57DF\u6240\u5C5E\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u8868\u5355\u3002</p><blockquote><p>\u5982\u9700\u5F15\u7528\u4E00\u4E2A\u4EE5\u4E0A\u7684\u8868\u5355\uFF0C\u8BF7\u4F7F\u7528\u7A7A\u683C\u5206\u9694\u7684\u5217\u8868\u3002</p></blockquote><p><code>form</code> \u5C5E\u6027\u5FC5\u987B\u5F15\u7528\u6240\u5C5E\u8868\u5355\u7684 id\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo_form.asp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>get<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_form<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  First name:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fname<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
Last name:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lname<span class="token punctuation">&quot;</span></span> <span class="token attr-name">form</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_form<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>form</code> \u5C5E\u6027\u9002\u7528\u4E8E\u6240\u6709 <code>&lt;input&gt;</code> \u6807\u7B7E\u7684\u7C7B\u578B\u3002</p></blockquote><h2 id="_4-\u8868\u5355\u91CD\u5199\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-\u8868\u5355\u91CD\u5199\u5C5E\u6027" aria-hidden="true">#</a> 4. \u8868\u5355\u91CD\u5199\u5C5E\u6027</h2><p>\u8868\u5355\u91CD\u5199\u5C5E\u6027\uFF08form override attributes\uFF09\u5141\u8BB8\u60A8\u91CD\u5199 <code>form</code> \u5143\u7D20\u7684\u67D0\u4E9B\u5C5E\u6027\u8BBE\u5B9A\u3002</p><p>\u8868\u5355\u91CD\u5199\u5C5E\u6027\u6709\uFF1A</p><ul><li>formaction - \u91CD\u5199\u8868\u5355\u7684 action \u5C5E\u6027</li><li>formenctype - \u91CD\u5199\u8868\u5355\u7684 enctype \u5C5E\u6027</li><li>formmethod - \u91CD\u5199\u8868\u5355\u7684 method \u5C5E\u6027</li><li>formnovalidate - \u91CD\u5199\u8868\u5355\u7684 novalidate \u5C5E\u6027</li><li>formtarget - \u91CD\u5199\u8868\u5355\u7684 target \u5C5E\u6027</li></ul><blockquote><p>\u8868\u5355\u91CD\u5199\u5C5E\u6027\u9002\u7528\u4E8E\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1Asubmit \u548C image\u3002</p></blockquote><p>\u793A\u4F8B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo_form.asp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>get<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_form<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  E-mail:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userid<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Submit<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">formaction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo_admin.asp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Submit as admin<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">formnovalidate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Submit without validation<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_5-height-\u548C-width-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_5-height-\u548C-width-\u5C5E\u6027" aria-hidden="true">#</a> 5. height \u548C width \u5C5E\u6027</h2><p><code>height</code> \u548C <code>width</code> \u5C5E\u6027\u89C4\u5B9A\u7528\u4E8E <code>image</code> \u7C7B\u578B\u7684 <code>input</code> \u6807\u7B7E\u7684\u56FE\u50CF\u9AD8\u5EA6\u548C\u5BBD\u5EA6\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img_submit.gif<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>99<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>99<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>input</code> \u7C7B\u578B\u4E3A <code>image</code> \u65F6\uFF0C\u66F4\u5EFA\u8BAE\u91C7\u7528 <code>&lt;img src=&quot;&quot; alt=&quot;&quot;&gt;</code> \u5B9E\u73B0\u3002</p><h2 id="_6-list-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_6-list-\u5C5E\u6027" aria-hidden="true">#</a> 6. list \u5C5E\u6027</h2><p><code>list</code> \u5C5E\u6027\u89C4\u5B9A\u8F93\u5165\u57DF\u7684 datalist\uFF0C\u5B83\u662F\u8F93\u5165\u57DF\u7684\u9009\u9879\u5217\u8868\u3002</p><blockquote><p><code>list</code> \u5C5E\u6027\u9002\u7528\u4E8E\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1Atext, search, URL, telephone, email, date pickers, number, range \u4EE5\u53CA color\u3002</p></blockquote><h2 id="_7-min\u3001max-\u548C-step-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_7-min\u3001max-\u548C-step-\u5C5E\u6027" aria-hidden="true">#</a> 7. min\u3001max \u548C step \u5C5E\u6027</h2><p><code>min</code>\u3001<code>max</code> \u548C <code>step</code> \u5C5E\u6027\u7528\u4E8E\u4E3A\u5305\u542B\u6570\u5B57\u6216\u65E5\u671F\u7684 <code>input</code> \u7C7B\u578B\u89C4\u5B9A\u9650\u5B9A\uFF08\u7EA6\u675F\uFF09\u3002</p><p><code>max</code> \u5C5E\u6027\u89C4\u5B9A\u8F93\u5165\u57DF\u6240\u5141\u8BB8\u7684\u6700\u5927\u503C\u3002</p><p><code>min</code> \u5C5E\u6027\u89C4\u5B9A\u8F93\u5165\u57DF\u6240\u5141\u8BB8\u7684\u6700\u5C0F\u503C\u3002</p><p><code>step</code> \u5C5E\u6027\u4E3A\u8F93\u5165\u57DF\u89C4\u5B9A\u5408\u6CD5\u7684\u6570\u5B57\u95F4\u9694\u3002</p><blockquote><p><code>min</code>\u3001<code>max</code> \u548C <code>step</code> \u5C5E\u6027\u9002\u7528\u4E8E\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1Adate pickers\u3001number \u4EE5\u53CA range\u3002</p></blockquote><h2 id="_8-multiple-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_8-multiple-\u5C5E\u6027" aria-hidden="true">#</a> 8. multiple \u5C5E\u6027</h2><p>multiple \u5C5E\u6027\u89C4\u5B9A\u8F93\u5165\u57DF\u4E2D\u53EF\u9009\u62E9\u591A\u4E2A\u503C\u3002 \u6CE8\u91CA\uFF1Amultiple \u5C5E\u6027\u9002\u7528\u4E8E\u4EE5\u4E0B\u7C7B\u578B\u7684 <input> \u6807\u7B7E\uFF1Aemail \u548C file\u3002</p><h2 id="_9-novalidate-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_9-novalidate-\u5C5E\u6027" aria-hidden="true">#</a> 9. novalidate \u5C5E\u6027</h2><p><code>novalidate</code> \u5C5E\u6027\u89C4\u5B9A\u5728\u63D0\u4EA4\u8868\u5355\u65F6\u4E0D\u5E94\u8BE5\u9A8C\u8BC1 <code>form</code> \u6216 <code>input</code> \u57DF\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo_form.asp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>get<span class="token punctuation">&quot;</span></span> <span class="token attr-name">novalidate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  E-mail:
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_email<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>novalidate</code> \u5C5E\u6027\u9002\u7528\u4E8E <code>&lt;form&gt;</code> \u4EE5\u53CA\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1Atext, search, URL, telephone, email, password, date pickers, range \u4EE5\u53CA color.</p><h2 id="_10-pattern-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_10-pattern-\u5C5E\u6027" aria-hidden="true">#</a> 10. pattern \u5C5E\u6027</h2><p><code>pattern</code> \u5C5E\u6027\u89C4\u5B9A\u7528\u4E8E\u9A8C\u8BC1 <code>input</code> \u57DF\u7684\u6A21\u5F0F\uFF08pattern\uFF09\u3002</p><p>\u6A21\u5F0F\uFF08pattern\uFF09\u662F\u6B63\u5219\u8868\u8FBE\u5F0F\u3002</p><p><code>pattern</code> \u5C5E\u6027\u9002\u7528\u4E8E\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1Atext, search, URL, telephone, email \u4EE5\u53CA password\u3002</p><p>\u663E\u793A\u4E86\u4E00\u4E2A\u53EA\u80FD\u5305\u542B\u4E09\u4E2A\u5B57\u6BCD\u7684\u6587\u672C\u57DF\uFF08\u4E0D\u542B\u6570\u5B57\u53CA\u7279\u6B8A\u5B57\u7B26\uFF09\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[A-z]{3}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_11-placeholder-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_11-placeholder-\u5C5E\u6027" aria-hidden="true">#</a> 11. placeholder \u5C5E\u6027</h2><p><code>placeholder</code> \u5C5E\u6027\u63D0\u4F9B\u4E00\u79CD\u63D0\u793A\uFF08hint\uFF09\uFF0C\u63CF\u8FF0\u8F93\u5165\u57DF\u6240\u671F\u5F85\u7684\u503C\u3002</p><p><code>placeholder</code> \u5C5E\u6027\u9002\u7528\u4E8E\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1Atext, search, URL, telephone, email \u4EE5\u53CA password\u3002</p><p>\u63D0\u793A\uFF08hint\uFF09\u4F1A\u5728\u8F93\u5165\u57DF\u4E3A\u7A7A\u65F6\u663E\u793A\u51FA\u73B0\uFF0C\u4F1A\u5728\u8F93\u5165\u57DF\u83B7\u5F97\u7126\u70B9\u65F6\u6D88\u5931\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>search<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="_12-required-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_12-required-\u5C5E\u6027" aria-hidden="true">#</a> 12. required \u5C5E\u6027</h2><p><code>required</code> \u5C5E\u6027\u89C4\u5B9A\u5FC5\u987B\u5728\u63D0\u4EA4\u4E4B\u524D\u586B\u5199\u8F93\u5165\u57DF\uFF08\u4E0D\u80FD\u4E3A\u7A7A\uFF09\u3002</p><p><code>required</code> \u5C5E\u6027\u9002\u7528\u4E8E\u4EE5\u4E0B\u7C7B\u578B\u7684 <code>&lt;input&gt;</code> \u6807\u7B7E\uFF1Atext, search, URL, telephone, email, password, date pickers, number, checkbox, radio \u4EE5\u53CA file\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>required<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,62);function p(e,o){return t}var l=n(s,[["render",p]]);export{l as default};
