import{d as n}from"./app.147292e0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="git-\u6E05\u7406" tabindex="-1"><a class="header-anchor" href="#git-\u6E05\u7406" aria-hidden="true">#</a> Git \u6E05\u7406</h1><h3 id="\u67E5\u770B\u9879\u76EE\u6587\u4EF6\u660E\u7EC6" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u9879\u76EE\u6587\u4EF6\u660E\u7EC6" aria-hidden="true">#</a> \u67E5\u770B\u9879\u76EE\u6587\u4EF6\u660E\u7EC6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">du</span> -d <span class="token number">1</span> -h
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u6E05\u7406\u548C\u56DE\u6536\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u6E05\u7406\u548C\u56DE\u6536\u7A7A\u95F4" aria-hidden="true">#</a> \u6E05\u7406\u548C\u56DE\u6536\u7A7A\u95F4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6E05\u7406</span>
<span class="token comment"># [bfg-repo-cleaner](https://rtyley.github.io/bfg-repo-cleaner/)</span>
java -jar bfg-1.11.7.jar -b 1M myrepo.git
<span class="token comment"># \u538B\u7F29</span>
<span class="token function">rm</span> -rf .git/refs/original/
<span class="token function">git</span> reflog expire --expire<span class="token operator">=</span>now --all
<span class="token function">git</span> gc --prune<span class="token operator">=</span>now
<span class="token comment"># \u63D0\u4EA4</span>
<span class="token function">git</span> push --all --force
<span class="token function">git</span> push --all --tags --force
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,5);function r(p,c){return e}var t=s(a,[["render",r]]);export{t as default};
