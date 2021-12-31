import{d as n}from"./app.147292e0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="git-repository" tabindex="-1"><a class="header-anchor" href="#git-repository" aria-hidden="true">#</a> Git Repository</h1><h2 id="create-a-new-repository-on-the-command-line" tabindex="-1"><a class="header-anchor" href="#create-a-new-repository-on-the-command-line" aria-hidden="true">#</a> create a new repository on the command line</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;# vue-multipages&quot;</span> <span class="token operator">&gt;&gt;</span> README.md
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> README.md
<span class="token function">git</span> commit -m <span class="token string">&quot;first commit&quot;</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/guihua/vue-multipages.git
<span class="token function">git</span> push -u origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="push-an-existing-repository-from-the-command-line" tabindex="-1"><a class="header-anchor" href="#push-an-existing-repository-from-the-command-line" aria-hidden="true">#</a> push an existing repository from the command line</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/guihua/vue-multipages.git
<span class="token function">git</span> push -u origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,5);function t(i,o){return e}var c=s(a,[["render",t]]);export{c as default};
