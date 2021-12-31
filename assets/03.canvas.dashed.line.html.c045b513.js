import{r as e,o,c,a as n,e as t,F as u,d as a,b as s}from"./app.147292e0.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=a(`<h1 id="canvas-\u7ED8\u5236\u865A\u7EBF\u548C\u5706\u70B9\u7EBF" tabindex="-1"><a class="header-anchor" href="#canvas-\u7ED8\u5236\u865A\u7EBF\u548C\u5706\u70B9\u7EBF" aria-hidden="true">#</a> Canvas \u7ED8\u5236\u865A\u7EBF\u548C\u5706\u70B9\u7EBF</h1><h2 id="\u7ED8\u5236\u865A\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u7ED8\u5236\u865A\u7EBF" aria-hidden="true">#</a> \u7ED8\u5236\u865A\u7EBF</h2><p><code>CanvasRenderingContext2D.setLineDash()</code> \u662F Canvas 2D API \u8BBE\u7F6E\u865A\u7EBF\u6837\u5F0F\u7684\u65B9\u6CD5\u3002</p><p>\u4F7F\u7528\u65B9\u5F0F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ctx<span class="token punctuation">.</span><span class="token function">setLineDash</span><span class="token punctuation">(</span>segments<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5176\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570 <code>segments</code>\uFF0C\u8FD9\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A <code>Array</code> \u6570\u7EC4\uFF0C\u662F\u4E00\u7EC4\u63CF\u8FF0\u4EA4\u66FF\u7ED8\u5236\u7EBF\u6BB5\u548C\u95F4\u8DDD\uFF08\u5750\u6807\u7A7A\u95F4\u5355\u4F4D\uFF09\u957F\u5EA6\u7684\u6570\u5B57\u3002\u5982\u679C\u6570\u7EC4\u5143\u7D20\u7684\u6570\u91CF\u662F\u5947\u6570\uFF0C\u6570\u7EC4\u7684\u5143\u7D20\u4F1A\u88AB\u590D\u5236\u5E76\u91CD\u590D\u3002</p><p>\u6211\u4EEC\u6765\u770B\u7B2C\u4E00\u4E2A\u6848\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">drawScreen</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span><span class="token function">setLineDash</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&#39;#f36&#39;</span><span class="token punctuation">;</span>
    
    ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,8),k=s("\u67E5\u770B\u6548\u679C\uFF1A"),b={href:"https://jsfiddle.net/guihua/03vcaLb3/",target:"_blank",rel:"noopener noreferrer"},m=s("Canvas Dashed Line Demo 01"),d=a(`<p>\u6539\u53D8\u4E00\u4E0B <code>setLineDash()</code> \u7684\u53C2\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ctx<span class="token punctuation">.</span><span class="token function">setLineDash</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,2),v=s("\u8BF7\u770B\u6548\u679C\uFF1A"),h={href:"https://jsfiddle.net/guihua/2ov5x4aw/1/",target:"_blank",rel:"noopener noreferrer"},x=s("Canvas Dashed Line Demo 02"),f=a(`<p>\u628A\u4E0A\u9762\u7684\u6848\u4F8B\u6269\u5C55\u4E00\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">drawScreen</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  
  ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">setLineDash</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&#39;#f36&#39;</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">setLineDash</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,2),g={href:"https://jsfiddle.net/guihua/2ov5x4aw/2/",target:"_blank",rel:"noopener noreferrer"},_=s("Canvas Dashed Line Demo 03"),y=a(`<p>\u7531\u6B64\u6211\u4EEC\u53D1\u73B0\uFF0C<code>setLineDash()</code> \u7684\u6570\u7EC4\u53C2\u6570\u662F\u6309\u7167\u201C\u7EBF|\u95F4\u8DDD\u201D\u7684\u683C\u5F0F\u4E0D\u65AD\u91CD\u590D\u7684\u3002</p><h2 id="\u7ED8\u5236\u5706\u7EBF" tabindex="-1"><a class="header-anchor" href="#\u7ED8\u5236\u5706\u7EBF" aria-hidden="true">#</a> \u7ED8\u5236\u5706\u7EBF</h2><p>Canvas \u4E2D\u6CA1\u6709\u76F4\u63A5\u7ED8\u5236\u5706\u7EBF\uFF08dotted\uFF09\u7684 API\u3002</p><p>\u6211\u4EEC\u9700\u8981\u624B\u52A8\u5C01\u88C5\u4E00\u4E2A <code>CanvasRenderingContext2D.dottedLine</code> \u7684 API \u6765\u5B9E\u73B0\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> canvasPrototype <span class="token operator">=</span> window<span class="token punctuation">.</span>CanvasRenderingContext2D <span class="token operator">&amp;&amp;</span> <span class="token class-name">CanvasRenderingContext2D</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>

canvasPrototype<span class="token punctuation">.</span><span class="token function-variable function">dottedLine</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2<span class="token punctuation">,</span> interval</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>interval<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        interval <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> isHorizontal <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>x1 <span class="token operator">==</span> x2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        isHorizontal <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> len <span class="token operator">=</span> isHorizontal <span class="token operator">?</span> x2 <span class="token operator">-</span> x1 <span class="token operator">:</span> y2 <span class="token operator">-</span> y1<span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> progress <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>len <span class="token operator">&gt;</span> progress<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        progress <span class="token operator">+=</span> interval<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>progress <span class="token operator">&gt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            progress <span class="token operator">=</span> len<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isHorizontal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>x1 <span class="token operator">+</span> progress<span class="token punctuation">,</span> y1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>x1 <span class="token operator">+</span> progress<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1 <span class="token operator">+</span> progress<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1 <span class="token operator">+</span> progress<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>\u63A5\u4E0B\u6765\uFF0C\u5728 Canvas \u753B\u5E03\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F\u5C31\u53EF\u4EE5\u7ED8\u5236\u5706\u70B9\u7EBF\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>context<span class="token punctuation">.</span><span class="token function">dottedLine</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5F53 <code>x1</code> \u548C <code>x2</code> \u7684\u503C\u76F8\u7B49\u65F6\uFF0C\u53EF\u4EE5\u7ED8\u5236\u7AD6\u7EBF\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>context<span class="token punctuation">.</span><span class="token function">dottedLine</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u591A\u6761\u5706\u70B9\u7EBF\u7EC4\u5408\uFF0C\u6211\u4EEC\u53EF\u4EE5\u753B\u51FA\u4E00\u4E2A\u5706\u70B9\u77E9\u5F62\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>context<span class="token punctuation">.</span><span class="token function">dottedLine</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
context<span class="token punctuation">.</span><span class="token function">dottedLine</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
context<span class="token punctuation">.</span><span class="token function">dottedLine</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
context<span class="token punctuation">.</span><span class="token function">dottedLine</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,11);function j(w,L){const p=e("ExternalLinkIcon");return o(),c(u,null,[r,n("p",null,[k,n("a",b,[m,t(p)])]),d,n("p",null,[v,n("a",h,[x,t(p)])]),f,n("p",null,[n("a",g,[_,t(p)])]),y],64)}var P=l(i,[["render",j]]);export{P as default};
