import{r as e,o as t,c as o,a,e as p,F as c,b as s,d as l}from"./app.147292e0.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=a("h1",{id:"audio-js",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#audio-js","aria-hidden":"true"},"#"),s(" audio.js")],-1),d={href:"https://kolber.github.io/audiojs/",target:"_blank",rel:"noopener noreferrer"},k=s("audio.js"),m=s(" is a drop-in JavaScript library that allows HTML5\u2019s "),h=a("code",null,"<audio>",-1),_=s(" tag to be used anywhere."),b=l(`<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><ol><li>Put <code>audio.js</code>, <code>player-graphics.gif</code> &amp; <code>audiojs.swf</code> in the same folder.</li><li>Include the <code>audio.js</code> file:</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;/audiojs/audio.min.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>Initialise audio.js:</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  audiojs<span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token keyword">as</span> <span class="token operator">=</span> audiojs<span class="token punctuation">.</span><span class="token function">createAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="4"><li>Then you can use <code>&lt;audio&gt;</code> wherever you like in your HTML:</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/mp3/juicy.mp3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">preload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>auto<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,7);function g(v,j){const n=e("ExternalLinkIcon");return t(),o(c,null,[u,a("p",null,[a("a",d,[k,p(n)]),m,h,_]),b],64)}var y=r(i,[["render",g]]);export{y as default};