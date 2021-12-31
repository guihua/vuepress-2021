import{d as n}from"./app.147292e0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="git-\u4FEE\u6539\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#git-\u4FEE\u6539\u65E5\u5FD7" aria-hidden="true">#</a> Git \u4FEE\u6539\u65E5\u5FD7</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> filter-branch --env-filter <span class="token string">&#39;
 
an=&quot;$GIT_AUTHOR_NAME&quot;
am=&quot;$GIT_AUTHOR_EMAIL&quot;
cn=&quot;$GIT_COMMITTER_NAME&quot;
cm=&quot;$GIT_COMMITTER_EMAIL&quot;
 
if [ &quot;$GIT_COMMITTER_EMAIL&quot; = &quot;guihua.pgh@alibaba-inc.com&quot; ]
then
    cn=&quot;guihua&quot;
    cm=&quot;guihuapeng@126.com&quot;
fi
if [ &quot;$GIT_AUTHOR_EMAIL&quot; = &quot;guihua.pgh@alibaba-inc.com&quot; ]
then
    an=&quot;guihua&quot;
    am=&quot;guihuapeng@126.com&quot;
fi
 
export GIT_AUTHOR_NAME=&quot;$an&quot;
export GIT_AUTHOR_EMAIL=&quot;$am&quot;
export GIT_COMMITTER_NAME=&quot;$cn&quot;
export GIT_COMMITTER_EMAIL=&quot;$cm&quot;
&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,2);function r(u,p){return e}var l=s(a,[["render",r]]);export{l as default};
