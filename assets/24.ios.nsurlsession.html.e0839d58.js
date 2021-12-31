import{d as n}from"./app.147292e0.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="nsurlsession-\u7F51\u7EDC\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#nsurlsession-\u7F51\u7EDC\u8BF7\u6C42" aria-hidden="true">#</a> NSURLSession \u7F51\u7EDC\u8BF7\u6C42</h1><h2 id="get-\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#get-\u8BF7\u6C42" aria-hidden="true">#</a> get \u8BF7\u6C42</h2><p>\u4F7F\u7528 NSURLSession \u53D1\u9001 GET \u8BF7\u6C42\u7684\u65B9\u6CD5\uFF0C\u6574\u4E2A\u8FC7\u7A0B\u5982\u4E0B\uFF1A \u3000\u3000\u3000\u30001\uFF09\u786E\u5B9A\u8BF7\u6C42\u8DEF\u5F84\uFF08\u4E00\u822C\u7531\u516C\u53F8\u7684\u540E\u53F0\u5F00\u53D1\u4EBA\u5458\u4EE5\u63A5\u53E3\u6587\u6863\u7684\u65B9\u5F0F\u63D0\u4F9B\uFF09\uFF0CGET\u8BF7\u6C42\u53C2\u6570\u76F4\u63A5\u8DDF\u5728URL\u540E\u9762 \u3000\u3000\u3000\u30002\uFF09\u521B\u5EFA\u8BF7\u6C42\u5BF9\u8C61\uFF08\u9ED8\u8BA4\u5305\u542B\u4E86\u8BF7\u6C42\u5934\u548C\u8BF7\u6C42\u65B9\u6CD5\u3010GET\u3011\uFF09\uFF0C\u6B64\u6B65\u9AA4\u53EF\u4EE5\u7701\u7565 \u3000\u3000\u3000\u30003\uFF09\u521B\u5EFA\u4F1A\u8BDD\u5BF9\u8C61\uFF08NSURLSession\uFF09 \u3000\u3000\u3000\u30004\uFF09\u6839\u636E\u4F1A\u8BDD\u5BF9\u8C61\u521B\u5EFA\u8BF7\u6C42\u4EFB\u52A1\uFF08NSURLSessionDataTask\uFF09 \u3000\u3000\u3000\u30005\uFF09\u6267\u884CTask \u3000\u3000\u3000\u30006\uFF09\u5F53\u5F97\u5230\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u54CD\u5E94\u540E\uFF0C\u89E3\u6790\u6570\u636E\uFF08XML|JSON|HTTP\uFF09</p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token comment">//NSURLSession</span>
<span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>get<span class="token punctuation">{</span>
    <span class="token comment">//\u8BBF\u95EE\u767E\u5EA6\u9996\u9875</span>
    
    <span class="token comment">//1. \u521B\u5EFA\u4E00\u4E2A\u7F51\u7EDC\u8BF7\u6C42</span>
    NSURL <span class="token operator">*</span>url <span class="token operator">=</span> <span class="token punctuation">[</span>NSURL URLWithString<span class="token punctuation">:</span><span class="token operator">@</span>&quot;http<span class="token punctuation">:</span><span class="token comment">//m.baidu.com&quot;];</span>
    
    <span class="token comment">//2.\u521B\u5EFA\u8BF7\u6C42\u5BF9\u8C61</span>
    NSURLRequest <span class="token operator">*</span>request <span class="token operator">=</span> <span class="token punctuation">[</span>NSURLRequest requestWithURL<span class="token punctuation">:</span>url<span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token comment">//3.\u83B7\u5F97\u4F1A\u8BDD\u5BF9\u8C61</span>
    NSURLSession <span class="token operator">*</span>session<span class="token operator">=</span><span class="token punctuation">[</span>NSURLSession sharedSession<span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token comment">//4.\u6839\u636E\u4F1A\u8BDD\u5BF9\u8C61\u521B\u5EFA\u4E00\u4E2ATask(\u53D1\u9001\u8BF7\u6C42\uFF09</span>
    <span class="token comment">/*
     \u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1A\u8BF7\u6C42\u5BF9\u8C61
     \u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF1AcompletionHandler\u56DE\u8C03\uFF08\u8BF7\u6C42\u5B8C\u6210\u3010\u6210\u529F|\u5931\u8D25\u3011\u7684\u56DE\u8C03\uFF09
     data\uFF1A\u54CD\u5E94\u4F53\u4FE1\u606F\uFF08\u671F\u671B\u7684\u6570\u636E\uFF09
     response\uFF1A\u54CD\u5E94\u5934\u4FE1\u606F\uFF0C\u4E3B\u8981\u662F\u5BF9\u670D\u52A1\u5668\u7AEF\u7684\u63CF\u8FF0
     error\uFF1A\u9519\u8BEF\u4FE1\u606F\uFF0C\u5982\u679C\u8BF7\u6C42\u5931\u8D25\uFF0C\u5219error\u6709\u503C
     */</span>
    NSURLSessionDataTask <span class="token operator">*</span>dataTask<span class="token operator">=</span><span class="token punctuation">[</span>session dataTaskWithRequest<span class="token punctuation">:</span>request completionHandler<span class="token punctuation">:</span><span class="token operator">^</span><span class="token punctuation">(</span>NSData <span class="token operator">*</span> _Nullable data<span class="token punctuation">,</span> NSURLResponse <span class="token operator">*</span> _Nullable response<span class="token punctuation">,</span> NSError <span class="token operator">*</span> _Nullable error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//response \uFF1A \u54CD\u5E94\uFF1A\u670D\u52A1\u5668\u7684\u54CD\u5E94</span>
            <span class="token comment">//data\uFF1A\u4E8C\u8FDB\u5236\u6570\u636E\uFF1A\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u6570\u636E\u3002\uFF08\u5C31\u662F\u6211\u4EEC\u60F3\u8981\u7684\u5185\u5BB9\uFF09</span>
            <span class="token comment">//error\uFF1A\u94FE\u63A5\u9519\u8BEF\u7684\u4FE1\u606F</span>
            <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;\u7F51\u7EDC\u54CD\u5E94\uFF1Aresponse\uFF1A%@&quot;</span><span class="token punctuation">,</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
            <span class="token comment">//\u6839\u636E\u8FD4\u56DE\u7684\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u751F\u6210\u5B57\u7B26\u4E32\uFF01NSUTF8StringEncoding\uFF1A\u7F16\u7801\u65B9\u5F0F</span>
            NSString <span class="token operator">*</span>html <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>NSString alloc<span class="token punctuation">]</span>initWithData<span class="token punctuation">:</span>data encoding<span class="token punctuation">:</span>NSUTF8StringEncoding<span class="token punctuation">]</span><span class="token punctuation">;</span>
            
            <span class="token comment">//\u5728\u5BA2\u6237\u7AEF\u76F4\u63A5\u6253\u5F00\u4E00\u4E2A\u7F51\u9875\uFF01</span>
            <span class="token comment">//\u5BA2\u6237\u7AEF\u670D\u52A1\u5668\uFF1AUIWebView</span>

            <span class="token comment">//\u5C06\u6D4F\u89C8\u5668\u52A0\u8F7D\u5230view\u4E0A</span>
            <span class="token function">dispatch_async</span><span class="token punctuation">(</span><span class="token function">dispatch_get_main_queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">^</span><span class="token punctuation">{</span>
            
            <span class="token comment">//\u5B9E\u4F8B\u5316\u4E00\u4E2A\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668</span>
            UIWebView <span class="token operator">*</span>web <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>UIWebView alloc<span class="token punctuation">]</span>initWithFrame<span class="token punctuation">:</span><span class="token keyword">self</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span>bounds<span class="token punctuation">]</span><span class="token punctuation">;</span>
            
            <span class="token comment">//\u52A0\u8F7Dhtml\u5B57\u7B26\u4E32\uFF1AbaseURL\uFF1A\u57FA\u51C6\u7684\u5730\u5740\uFF1A\u76F8\u5BF9\u8DEF\u5F84/\u7EDD\u5BF9\u8DEF\u5F84</span>
            <span class="token punctuation">[</span>web loadHTMLString<span class="token punctuation">:</span>html baseURL<span class="token punctuation">:</span>nil<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token punctuation">[</span><span class="token keyword">self</span><span class="token punctuation">.</span>view addSubview<span class="token punctuation">:</span>web<span class="token punctuation">]</span><span class="token punctuation">;</span>
            
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
            <span class="token comment">//        //\u5728\u672C\u5730\u4FDD\u5B58\u767E\u5EA6\u9996\u9875</span>
            <span class="token comment">//        [data writeToFile:@&quot;/Users/Liu/Desktop/baidu.html&quot; atomically:YES];</span>
        
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    
    <span class="token comment">//5.\u6267\u884C\u4EFB\u52A1</span>
    <span class="token punctuation">[</span>dataTask resume<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><h2 id="post-\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#post-\u8BF7\u6C42" aria-hidden="true">#</a> post \u8BF7\u6C42</h2><p>\u4F7F\u7528 NSURLSession \u53D1\u9001 POST \u8BF7\u6C42\u7684\u65B9\u6CD5\uFF0C\u6574\u4E2A\u8FC7\u7A0B\u5982\u4E0B\uFF1A \u3000\u3000\u3000\u30001\uFF09\u786E\u5B9A\u8BF7\u6C42\u8DEF\u5F84\uFF08\u4E00\u822C\u7531\u516C\u53F8\u7684\u540E\u53F0\u5F00\u53D1\u4EBA\u5458\u4EE5\u63A5\u53E3\u6587\u6863\u7684\u65B9\u5F0F\u63D0\u4F9B\uFF09 \u3000\u3000\u3000\u30002\uFF09\u521B\u5EFA\u53EF\u53D8\u7684\u8BF7\u6C42\u5BF9\u8C61\uFF08\u56E0\u4E3A\u9700\u8981\u4FEE\u6539\uFF09\uFF0C\u6B64\u6B65\u9AA4\u4E0D\u53EF\u4EE5\u7701\u7565 \u3000\u3000\u3000\u30003\uFF09\u4FEE\u6539\u8BF7\u6C42\u65B9\u6CD5\u4E3APOST \u3000\u3000\u3000\u30004\uFF09\u8BBE\u7F6E\u8BF7\u6C42\u4F53\uFF0C\u628A\u53C2\u6570\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u6570\u636E\u5E76\u8BBE\u7F6E\u8BF7\u6C42\u4F53 \u3000\u3000\u3000\u30005\uFF09\u521B\u5EFA\u4F1A\u8BDD\u5BF9\u8C61\uFF08NSURLSession\uFF09 \u3000\u3000\u3000\u30006\uFF09\u6839\u636E\u4F1A\u8BDD\u5BF9\u8C61\u521B\u5EFA\u8BF7\u6C42\u4EFB\u52A1\uFF08NSURLSessionDataTask\uFF09 \u3000\u3000\u3000\u30007\uFF09\u6267\u884CTask \u3000\u3000\u3000\u30008\uFF09\u5F53\u5F97\u5230\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u54CD\u5E94\u540E\uFF0C\u89E3\u6790\u6570\u636E\uFF08XML|JSON|HTTP\uFF09</p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token comment">//post\u65B9\u6CD5   </span>
<span class="token comment">//1.\u521B\u5EFA\u4F1A\u8BDD\u5BF9\u8C61</span>
NSURLSession <span class="token operator">*</span>session<span class="token operator">=</span><span class="token punctuation">[</span>NSURLSession sharedSession<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//2.\u6839\u636E\u4F1A\u8BDD\u5BF9\u8C61\u521B\u5EFAtask</span>
NSURL <span class="token operator">*</span>url<span class="token operator">=</span><span class="token punctuation">[</span>NSURL URLWithString<span class="token punctuation">:</span><span class="token operator">@</span>&quot;http<span class="token punctuation">:</span><span class="token comment">//123.207.175.144/Test1.php&quot;];</span>

<span class="token comment">//3.\u521B\u5EFA\u53EF\u53D8\u7684\u8BF7\u6C42\u5BF9\u8C61</span>
NSMutableURLRequest <span class="token operator">*</span>request<span class="token operator">=</span><span class="token punctuation">[</span>NSMutableURLRequest requestWithURL<span class="token punctuation">:</span>url<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//4.\u4FEE\u6539\u8BF7\u6C42\u65B9\u6CD5\u4E3APOST</span>
request<span class="token punctuation">.</span>HTTPMethod<span class="token operator">=</span><span class="token string">@&quot;POST&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//5.\u8BBE\u7F6E\u8BF7\u6C42\u4F53</span>
request<span class="token punctuation">.</span>HTTPBody<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">@&quot;Login=1&quot;</span> dataUsingEncoding<span class="token punctuation">:</span>NSUTF8StringEncoding<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//6.\u6839\u636E\u4F1A\u8BDD\u5BF9\u8C61\u521B\u5EFA\u4E00\u4E2ATask(\u53D1\u9001\u8BF7\u6C42\uFF09</span>
        <span class="token comment">/*
                \u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1A\u8BF7\u6C42\u5BF9\u8C61
                \u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF1AcompletionHandler\u56DE\u8C03\uFF08\u8BF7\u6C42\u5B8C\u6210\u3010\u6210\u529F|\u5931\u8D25\u3011\u7684\u56DE\u8C03\uFF09
                            data\uFF1A\u54CD\u5E94\u4F53\u4FE1\u606F\uFF08\u671F\u671B\u7684\u6570\u636E\uFF09
                            response\uFF1A\u54CD\u5E94\u5934\u4FE1\u606F\uFF0C\u4E3B\u8981\u662F\u5BF9\u670D\u52A1\u5668\u7AEF\u7684\u63CF\u8FF0
                            error\uFF1A\u9519\u8BEF\u4FE1\u606F\uFF0C\u5982\u679C\u8BF7\u6C42\u5931\u8D25\uFF0C\u5219error\u6709\u503C
        */</span>
    NSURLSessionDataTask <span class="token operator">*</span>dataTask <span class="token operator">=</span> <span class="token punctuation">[</span>session dataTaskWithRequest<span class="token punctuation">:</span>request completionHandler<span class="token punctuation">:</span><span class="token operator">^</span><span class="token punctuation">(</span>NSData <span class="token operator">*</span> _Nullable data<span class="token punctuation">,</span> NSURLResponse <span class="token operator">*</span> _Nullable response<span class="token punctuation">,</span> NSError <span class="token operator">*</span> _Nullable error<span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">//8.\u89E3\u6790\u6570\u636E</span>
    NSDictionary <span class="token operator">*</span>dict<span class="token operator">=</span><span class="token punctuation">[</span>NSJSONSerialization JSONObjectWithData<span class="token punctuation">:</span>data options<span class="token punctuation">:</span>kNilOptions error<span class="token punctuation">:</span>nil<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span>dict<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">//7.\u6267\u884C\u4EFB\u52A1</span>
<span class="token punctuation">[</span>dataTask resume<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,7);function e(t,o){return p}var u=s(a,[["render",e]]);export{u as default};