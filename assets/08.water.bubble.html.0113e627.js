import{r as t,o,c as e,a as n,e as p,F as c,b as s,d as l}from"./app.147292e0.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},k=n("h1",{id:"\u6C34\u7403\u52A8\u753B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6C34\u7403\u52A8\u753B","aria-hidden":"true"},"#"),s(" \u6C34\u7403\u52A8\u753B")],-1),i={href:"https://jsfiddle.net/guihua/vtpxb4o0/",target:"_blank",rel:"noopener noreferrer"},b=s("\u6C34\u7403\u52A8\u753B"),m=l(`<p>\u6E90\u7801\u5B9E\u73B0\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
oRange <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByName</span><span class="token punctuation">(</span><span class="token string">&#39;range&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token constant">M</span> <span class="token operator">=</span> Math<span class="token punctuation">;</span>
Sin <span class="token operator">=</span> <span class="token constant">M</span><span class="token punctuation">.</span>sin<span class="token punctuation">;</span>
Cos <span class="token operator">=</span> <span class="token constant">M</span><span class="token punctuation">.</span>cos<span class="token punctuation">;</span>
Sqrt <span class="token operator">=</span> <span class="token constant">M</span><span class="token punctuation">.</span>sqrt<span class="token punctuation">;</span>
Pow <span class="token operator">=</span> <span class="token constant">M</span><span class="token punctuation">.</span>pow<span class="token punctuation">;</span>
<span class="token constant">PI</span> <span class="token operator">=</span> <span class="token constant">M</span><span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">;</span>
Round <span class="token operator">=</span> <span class="token constant">M</span><span class="token punctuation">.</span>round<span class="token punctuation">;</span>

oW <span class="token operator">=</span> canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>
oH <span class="token operator">=</span> canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>

<span class="token comment">// \u7EBF\u5BBD</span>
lineWidth <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">// \u5927\u534A\u5F84</span>
r <span class="token operator">=</span> oW <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
cR <span class="token operator">=</span> r <span class="token operator">-</span> <span class="token number">8</span> <span class="token operator">*</span> lineWidth<span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> lineWidth<span class="token punctuation">;</span>

<span class="token comment">// \u6C34\u6CE2\u52A8\u753B\u521D\u59CB\u53C2\u6570</span>
axisLength <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> r <span class="token operator">-</span> <span class="token number">16</span> <span class="token operator">*</span> lineWidth<span class="token punctuation">;</span> <span class="token comment">// Sin \u56FE\u5F62\u957F\u5EA6</span>
unit <span class="token operator">=</span> axisLength <span class="token operator">/</span> <span class="token number">8</span><span class="token punctuation">;</span> <span class="token comment">// \u6CE2\u6D6A\u5BBD</span>
range <span class="token operator">=</span> <span class="token number">0.2</span><span class="token punctuation">;</span> <span class="token comment">// \u6D6A\u5E45</span>
nowrange <span class="token operator">=</span> range<span class="token punctuation">;</span>
xoffset <span class="token operator">=</span> <span class="token number">8</span> <span class="token operator">*</span> lineWidth<span class="token punctuation">;</span> <span class="token comment">// x \u8F74\u504F\u79FB\u91CF</span>
data <span class="token operator">=</span> <span class="token operator">~</span><span class="token operator">~</span>oRange<span class="token punctuation">.</span>value <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// \u6570\u636E\u91CF</span>
sp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u5468\u671F\u504F\u79FB\u91CF</span>
nowdata <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
waveupsp <span class="token operator">=</span> <span class="token number">0.002</span><span class="token punctuation">;</span> <span class="token comment">// \u6C34\u6CE2\u4E0A\u6DA8\u901F\u5EA6</span>

<span class="token comment">// \u5706\u52A8\u753B\u521D\u59CB\u53C2\u6570</span>
arcStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u5706\u6808</span>
bR <span class="token operator">=</span> r <span class="token operator">-</span> <span class="token number">8</span> <span class="token operator">*</span> lineWidth<span class="token punctuation">;</span>
soffset <span class="token operator">=</span> <span class="token operator">-</span><span class="token punctuation">(</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5706\u52A8\u753B\u8D77\u59CB\u4F4D\u7F6E</span>
circleLock <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// \u8D77\u59CB\u52A8\u753B\u9501</span>

<span class="token comment">// \u83B7\u53D6\u5706\u52A8\u753B\u8F68\u8FF9\u70B9\u96C6</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> soffset<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> soffset <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token constant">PI</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">8</span> <span class="token operator">*</span> <span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  arcStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>r <span class="token operator">+</span> bR <span class="token operator">*</span> <span class="token function">Cos</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> r <span class="token operator">+</span> bR <span class="token operator">*</span> <span class="token function">Sin</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

cStartPoint <span class="token operator">=</span> arcStack<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5706\u8D77\u59CB\u70B9</span>

ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">&#39;#1c86d1&#39;</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>cStartPoint<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> cStartPoint<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5F00\u59CB\u6E32\u67D3</span>

<span class="token keyword">function</span> <span class="token function">drawSine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> Stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u8BB0\u5F55\u8D77\u59CB\u70B9\u548C\u7EC8\u70B9\u5750\u6807</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> xoffset<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> xoffset <span class="token operator">+</span> axisLength<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">20</span> <span class="token operator">/</span> axisLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> x <span class="token operator">=</span> sp <span class="token operator">+</span> <span class="token punctuation">(</span>xoffset <span class="token operator">+</span> i<span class="token punctuation">)</span> <span class="token operator">/</span> unit<span class="token punctuation">;</span>
    <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token function">Sin</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">*</span> nowrange<span class="token punctuation">;</span>

    <span class="token keyword">var</span> dx <span class="token operator">=</span> i<span class="token punctuation">;</span>

    <span class="token keyword">var</span> dy <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> cR <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> nowdata<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> cR<span class="token punctuation">)</span> <span class="token operator">-</span> unit <span class="token operator">*</span> y<span class="token punctuation">;</span>

    ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>dx<span class="token punctuation">,</span> dy<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>dx<span class="token punctuation">,</span> dy<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u83B7\u53D6\u521D\u59CB\u70B9\u548C\u7ED3\u675F\u70B9</span>
  <span class="token keyword">var</span> startP <span class="token operator">=</span> Stack<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> endP <span class="token operator">=</span> Stack<span class="token punctuation">[</span>Stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>xoffset <span class="token operator">+</span> axisLength<span class="token punctuation">,</span> oW<span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>xoffset<span class="token punctuation">,</span> oW<span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>startP<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> startP<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;#1c86d1&#39;</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">drawText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span>globalCompositeOperation <span class="token operator">=</span> <span class="token string">&#39;source-over&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> size <span class="token operator">=</span> <span class="token number">0.4</span> <span class="token operator">*</span> cR<span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">&#39;bold &#39;</span> <span class="token operator">+</span> size <span class="token operator">+</span> <span class="token string">&#39;px Microsoft Yahei&#39;</span><span class="token punctuation">;</span>

  txt <span class="token operator">=</span> <span class="token punctuation">(</span>nowdata<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> fonty <span class="token operator">=</span> r <span class="token operator">+</span> size <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> fontx <span class="token operator">=</span> r <span class="token operator">-</span> size <span class="token operator">*</span> <span class="token number">0.8</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;rgba(06, 85, 128, 0.8)&#39;</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>txt<span class="token punctuation">,</span> fontx<span class="token punctuation">,</span> fonty<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> oW<span class="token punctuation">,</span> oH<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>circleLock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arcStack<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> temp <span class="token operator">=</span> arcStack<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>temp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> temp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      circleLock <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>cStartPoint<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> cStartPoint<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      arcStack <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

      ctx<span class="token punctuation">.</span>globalCompositeOperation <span class="token operator">=</span> <span class="token string">&#39;destination-over&#39;</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> lineWidth<span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> r<span class="token punctuation">,</span> bR<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token constant">PI</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> r<span class="token punctuation">,</span> r <span class="token operator">-</span> <span class="token number">16</span> <span class="token operator">*</span> lineWidth<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token constant">PI</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span><span class="token function">clip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;#1c86d1&#39;</span><span class="token punctuation">;</span>

      <span class="token comment">// \u521D\u59CB\u62D6\u62FD\u63A7\u4EF6</span>
      oRange<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
        <span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span>
        <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          data <span class="token operator">=</span> <span class="token operator">~</span><span class="token operator">~</span>oRange<span class="token punctuation">.</span>value <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">;</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;data=&#39;</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5F00\u59CB\u6C34\u6CE2\u52A8\u753B</span>
    <span class="token comment">// \u63A7\u5236\u6CE2\u5E45</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&gt;=</span> <span class="token number">0.85</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nowrange <span class="token operator">&gt;</span> range <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> t <span class="token operator">=</span> range <span class="token operator">*</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
        nowrange <span class="token operator">-=</span> t<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&lt;=</span> <span class="token number">0.1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nowrange <span class="token operator">&lt;</span> range <span class="token operator">*</span> <span class="token number">1.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> t <span class="token operator">=</span> range <span class="token operator">*</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
        nowrange <span class="token operator">+=</span> t<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>nowrange <span class="token operator">&lt;=</span> range<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> t <span class="token operator">=</span> range <span class="token operator">*</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
        nowrange <span class="token operator">+=</span> t<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>nowrange <span class="token operator">&gt;=</span> range<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> t <span class="token operator">=</span> range <span class="token operator">*</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
        nowrange <span class="token operator">-=</span> t<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">-</span> nowdata <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nowdata <span class="token operator">+=</span> waveupsp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">-</span> nowdata <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nowdata <span class="token operator">-=</span> waveupsp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    sp <span class="token operator">+=</span> <span class="token number">0.07</span><span class="token punctuation">;</span>
    <span class="token function">drawSine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">drawText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br></div></div>`,2),d=s("\u66F4\u591A\u5B9E\u73B0\u7EC6\u8282\u539F\u7406\uFF0C\u53C2\u8003 "),f={href:"http://www.w3cplus.com/animations/water-bubble.html",target:"_blank",rel:"noopener noreferrer"},g=s("\u5982\u4F55\u5236\u4F5C\u6C34\u7403\u52A8\u753B\u56FE\uFF1F");function w(x,h){const a=t("ExternalLinkIcon");return o(),e(c,null,[k,n("p",null,[n("a",i,[b,p(a)])]),m,n("p",null,[d,n("a",f,[g,p(a)])])],64)}var _=u(r,[["render",w]]);export{_ as default};
