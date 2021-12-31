import{r as e,o as t,c as i,a as n,e as o,F as p,d as c,b as s}from"./app.147292e0.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const r={},u=c(`<h1 id="bisheng" tabindex="-1"><a class="header-anchor" href="#bisheng" aria-hidden="true">#</a> BiSheng</h1><p>bisheng is designed to transform Markdown into static websites and blogs using React.</p><h2 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h2><p>We can install bisheng as a cli command and explore what it can do by <code>bisheng -h</code>. However, the recommended way to use bisheng is to install it as <code>devDependencies</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> -g bisheng
$ bisheng -h
  Usage: bisheng <span class="token punctuation">[</span>command<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>

  Commands:

    start <span class="token punctuation">[</span>options<span class="token punctuation">]</span>     to start a server
    build <span class="token punctuation">[</span>options<span class="token punctuation">]</span>     to build and <span class="token function">write</span> static files to <span class="token variable"><span class="token variable">\`</span>config.output<span class="token variable">\`</span></span>
    gh-pages <span class="token punctuation">[</span>options<span class="token punctuation">]</span>  to deploy website to gh-pages
    <span class="token builtin class-name">help</span> <span class="token punctuation">[</span>cmd<span class="token punctuation">]</span>          display <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token punctuation">[</span>cmd<span class="token punctuation">]</span>

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>bisheng will read <code>bisheng.config.js</code> as its config file, but we can set the config file name by <code>--config</code>, something like this bisheng <code>--config another.config.js</code>.</p><p>The content of <code>bisheng.config.js</code> looks like this:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  port: 8000,
  source: &#39;./posts&#39;,
  output: &#39;./_site&#39;,
  theme: &#39;./_theme&#39;,
  htmlTemplate: path.join(__dirname, &#39;../template.html&#39;),
  doraConfig: {},
  webpackConfig(config) {
    return config;
  },

  entryName: &#39;index&#39;,
  root: &#39;/&#39;,
};
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,9),b=s("more config options: "),d={href:"https://github.com/benjycui/bisheng",target:"_blank",rel:"noopener noreferrer"},m=s("GitHub bisheng");function h(g,f){const a=e("ExternalLinkIcon");return t(),i(p,null,[u,n("p",null,[b,n("a",d,[m,o(a)])])],64)}var v=l(r,[["render",h]]);export{v as default};
