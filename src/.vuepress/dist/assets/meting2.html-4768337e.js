import{_ as d,r,o as c,c as u,e as l,f as s,b as n,w as t,d as i}from"./app-2f0500a1.js";const h={},g=l("strong",null,"盒子小屋",-1),B={href:"https://github.com/OrageKK/vuepress-plugin-meting2",target:"_blank",rel:"noopener noreferrer"},y=l("br",null,null,-1),m={href:"https://github.com/u2sb/vuepress-plugin-sbaudio",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/moefyit/vuepress-plugin-meting",target:"_blank",rel:"noopener noreferrer"},v=i('<p align="center"><a href="https://www.npmjs.com/package/vuepress-plugin-meting2" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-meting2.svg"></a><a href="https://github.com/moefyit/vuepress-plugin-meting2/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/oragekk/vuepress-plugin-meting2"></a><a href="https://www.npmjs.com/package/vuepress-plugin-meting2" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-meting2.svg"></a><a href="https://www.npmjs.com/package/vuepress-plugin-meting2" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-meting2.svg"></a><a href="https://github.com/oragekk/vuepress-plugin-meting2/blob/main/LICENSE" target="_blank"><img alt="GitHub license" src="https://img.shields.io/github/license/oragekk/vuepress-plugin-meting2"></a></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>',2),b=l("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[l("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#61AFEF"}},"pnpm"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},"add"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},"vuepress-plugin-meting2"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#D19A66"}},"-D")]),s(`
`),l("span",{class:"line"})])]),l("div",{class:"line-numbers","aria-hidden":"true"},[l("div",{class:"line-number"})])],-1),A=l("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[l("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#61AFEF"}},"yarn"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},"add"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},"vuepress-plugin-meting2"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#D19A66"}},"-D")]),s(`
`),l("span",{class:"line"})])]),l("div",{class:"line-numbers","aria-hidden":"true"},[l("div",{class:"line-number"})])],-1),f=l("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[l("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#61AFEF"}},"npm"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},"i"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#98C379"}},"vuepress-plugin-meting2"),l("span",{style:{color:"#ABB2BF"}}," "),l("span",{style:{color:"#D19A66"}},"-D")]),s(`
`),l("span",{class:"line"})])]),l("div",{class:"line-numbers","aria-hidden":"true"},[l("div",{class:"line-number"})])],-1),F=i(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// .vuepress/config.ts</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">defineUserConfig</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;vuepress&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">metingPlugin</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;vuepress-plugin-meting2&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">defineUserConfig</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">metingPlugin</span><span style="color:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">metingOptions</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#E06C75;">global</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// 全局播放器开关</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#E06C75;">server</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;tencent&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#E06C75;">api</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;https://api.injahow.cn/meting/?server=:server&amp;type=:type&amp;id=:id&amp;auth=:auth&amp;r=:r&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;playlist&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#E06C75;">mid</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;851947617&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          },</span></span>
<span class="line"><span style="color:#ABB2BF;">        }),</span></span>
<span class="line"><span style="color:#ABB2BF;">    ];</span></span>
<span class="line"><span style="color:#ABB2BF;">}),</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用该插件后将自动注册 <code>&lt;Meting/&gt;</code> 组件与 <code>&lt;APlayer/&gt;</code> 组件，你可以在任意位置使用它们</p><ul><li><code>&lt;Meting/&gt;</code> 组件支持 <code>meting</code> Options 和 <code>aplayer</code> Options，其中 <code>aplayer</code> 的 <code>audio</code> 选项将自动通过 metingApi 获取，如果想要额外添加 <code>audio</code> 的话，可以通过 <code>additionalAudios</code> 选项实现</li><li><code>&lt;APlayer/&gt;</code> 组件支持 <code>aplayer</code> Options，当然，你需要自行提供 <code>audio</code> 音乐源</li></ul><h2 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项" aria-hidden="true">#</a> 配置选项</h2><p>配置选项 分为 <code>aplayerOptions</code>、<code>metingOptions</code>、<code>additionalAudios</code> 三部分</p><h3 id="aplayeroptions" tabindex="-1"><a class="header-anchor" href="#aplayeroptions" aria-hidden="true">#</a> aplayerOptions</h3>`,7),k={href:"https://aplayer.js.org/#/zh-Hans/",target:"_blank",rel:"noopener noreferrer"},C=l("h4",{id:"参数",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#参数","aria-hidden":"true"},"#"),s(" 参数")],-1),q=l("thead",null,[l("tr",null,[l("th",null,"名称"),l("th",null,"默认值"),l("th",null,"描述")])],-1),x=l("tr",null,[l("td",null,"container"),l("td",null,"document.querySelector('.aplayer')"),l("td",null,"播放器容器元素")],-1),D=l("td",null,"fixed",-1),E=l("td",null,"false",-1),w={href:"https://aplayer.js.org/#/home?id=fixed-mode",target:"_blank",rel:"noopener noreferrer"},j=l("td",null,"mini",-1),M=l("td",null,"false",-1),N={href:"https://aplayer.js.org/#/home?id=mini-mode",target:"_blank",rel:"noopener noreferrer"},O=l("tr",null,[l("td",null,"autoplay"),l("td",null,"false"),l("td",null,"音频自动播放")],-1),T=l("tr",null,[l("td",null,"theme"),l("td",null,"'#b7daff'"),l("td",null,"主题色")],-1),V=l("tr",null,[l("td",null,"loop"),l("td",null,"'all'"),l("td",null,"音频循环播放, 可选值: 'all', 'one', 'none'")],-1),G=l("tr",null,[l("td",null,"order"),l("td",null,"'list'"),l("td",null,"音频循环顺序, 可选值: 'list', 'random'")],-1),P=l("tr",null,[l("td",null,"preload"),l("td",null,"'auto'"),l("td",null,"预加载，可选值: 'none', 'metadata', 'auto'")],-1),Q=l("tr",null,[l("td",null,"volume"),l("td",null,"0.7"),l("td",null,"默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效")],-1),U=l("tr",null,[l("td",null,"audio"),l("td",null,"-"),l("td",null,"音频信息, 应该是一个对象或对象数组")],-1),I={href:"http://audio.name",target:"_blank",rel:"noopener noreferrer"},H=l("td",null,"-",-1),S=l("td",null,"音频名称",-1),L=l("tr",null,[l("td",null,"audio.artist"),l("td",null,"-"),l("td",null,"音频艺术家")],-1),z=l("tr",null,[l("td",null,"audio.url"),l("td",null,"-"),l("td",null,"音频链接")],-1),K=l("tr",null,[l("td",null,"audio.cover"),l("td",null,"-"),l("td",null,"音频封面")],-1),J=l("td",null,"audio.lrc",-1),R=l("td",null,"-",-1),W={href:"https://aplayer.js.org/#/home?id=lrc",target:"_blank",rel:"noopener noreferrer"},X=l("tr",null,[l("td",null,"audio.theme"),l("td",null,"-"),l("td",null,"切换到此音频时的主题色，比上面的 theme 优先级高")],-1),Y=l("td",null,"audio.type",-1),Z=l("td",null,"'auto'",-1),$={href:"https://aplayer.js.org/#/home?id=mse-support",target:"_blank",rel:"noopener noreferrer"},ll=l("td",null,"customAudioType",-1),sl=l("td",null,"-",-1),nl={href:"https://aplayer.js.org/#/home?id=mse-support",target:"_blank",rel:"noopener noreferrer"},el=l("tr",null,[l("td",null,"mutex"),l("td",null,"true"),l("td",null,"互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器")],-1),tl=l("td",null,"lrcType",-1),al=l("td",null,"0",-1),ol={href:"https://aplayer.js.org/#/home?id=lrc",target:"_blank",rel:"noopener noreferrer"},il=l("tr",null,[l("td",null,"listFolded"),l("td",null,"false"),l("td",null,"列表默认折叠")],-1),rl=l("tr",null,[l("td",null,"listMaxHeight"),l("td",null,"-"),l("td",null,"列表最大高度")],-1),pl=l("tr",null,[l("td",null,"storageName"),l("td",null,"'aplayer-setting'"),l("td",null,"存储播放器设置的 localStorage key")],-1),dl=l("h3",{id:"metingoptions",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#metingoptions","aria-hidden":"true"},"#"),s(" metingOptions")],-1),cl=l("thead",null,[l("tr",null,[l("th",null,"名称"),l("th",null,"默认值"),l("th",null,"描述")])],-1),ul=l("tr",null,[l("td",null,"global"),l("td",null,"false"),l("td",null,"是否启用全局播放器")],-1),hl=l("tr",null,[l("td",null,"mid"),l("td",null,"-"),l("td",null,"MetingApi 中的 id 参数，即资源 ID")],-1),gl=l("tr",null,[l("td",null,"server"),l("td",null,"netease"),l("td",null,"MetingApi 中的 server 参数，即音乐平台")],-1),Bl=l("tr",null,[l("td",null,"type"),l("td",null,"song"),l("td",null,"MetingApi 中的 type 参数，即资源类型（播放列表、单曲、专辑等）")],-1),yl=l("tr",null,[l("td",null,"auto"),l("td"),l("td",null,"资源 url，填写后可通过资源 url 自动解析资源平台、类型、ID，上述三个选项将被覆盖（本参数仅支持 netease、tencent、xiami 三平台）")],-1),ml=l("tr",null,[l("td",null,"auth"),l("td",null,"auth"),l("td")],-1),_l=l("td",null,"api",-1),vl={href:"https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",target:"_blank",rel:"noopener noreferrer"},bl=l("td",null,"Meting APi 服务地址(如不可用自行替换)",-1),Al=l("tr",null,[l("td",null,"list"),l("td",null,"[]"),l("td",null,"数组，除 list 外其他所有项")],-1),fl=l("tr",null,[l("td",null,"aplayerOptions"),l("td",null,"-"),l("td",null,"全局Meting的APlayer配置")],-1),Fl=i(`<h3 id="additionalaudios" tabindex="-1"><a class="header-anchor" href="#additionalaudios" aria-hidden="true">#</a> additionalAudios</h3><ul><li><p>additionalAudios</p><ul><li>类型：<code>Array&lt;Audio&gt;</code></li><li>默认值：<code>[]</code></li><li>描述：除 Meting 解析的 audio 外额外添加的 audio</li></ul></li></ul><h2 id="使用组件" tabindex="-1"><a class="header-anchor" href="#使用组件" aria-hidden="true">#</a> 使用组件 📌</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">Meting</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">mid</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;003UTVCN0QvffG&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">server</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;tencent&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">type</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;song&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">api</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;https://api.injahow.cn/meting/?server=:server&amp;type=:type&amp;id=:id&amp;auth=:auth&amp;r=:r&quot;</span><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- 这样就可以在页面单独引入一个播放器咯～ --&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者像这样</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">Meting</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">auto</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;https://y.qq.com/n/ryqq/songDetail/003UTVCN0QvffG&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">api</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;https://api.injahow.cn/meting/?server=:server&amp;type=:type&amp;id=:id&amp;auth=:auth&amp;r=:r&quot;</span><span style="color:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- 使用网站链接就可以解析成功并引入一个播放器咯~ --&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),kl={href:"https://y.qq.com/n/ryqq/songDetail/003UTVCN0QvffG",target:"_blank",rel:"noopener noreferrer"},Cl={href:"https://music.163.com/#/playlist?id=60198",target:"_blank",rel:"noopener noreferrer"};function ql(xl,Dl){const e=r("ExternalLinkIcon"),p=r("CodeTabs");return c(),u("div",null,[l("blockquote",null,[l("p",null,[g,s(" 的音乐播放器插件来自 "),l("a",B,[s("vuepress-plugin-Meting2"),n(e)]),s("🙏 支持vuepress2. x"),y,s(" 插件作者借鉴 "),l("a",m,[s("vuepress-plugin-sbaudio"),n(e)]),s(" 和 "),l("a",_,[s("vuepress-plugin-meting"),n(e)])])]),v,n(p,{id:"9",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2,"tab-id":"sh"},{title0:t(({value:a,isActive:o})=>[s("pnpm")]),title1:t(({value:a,isActive:o})=>[s("yarn")]),title2:t(({value:a,isActive:o})=>[s("npm")]),tab0:t(({value:a,isActive:o})=>[b]),tab1:t(({value:a,isActive:o})=>[A]),tab2:t(({value:a,isActive:o})=>[f]),_:1}),F,l("blockquote",null,[l("p",null,[s("详情见 "),l("a",k,[s("aplayer 文档"),n(e)])])]),C,l("table",null,[q,l("tbody",null,[x,l("tr",null,[D,E,l("td",null,[s("开启吸底模式, "),l("a",w,[s("详情"),n(e)])])]),l("tr",null,[j,M,l("td",null,[s("开启迷你模式, "),l("a",N,[s("详情"),n(e)])])]),O,T,V,G,P,Q,U,l("tr",null,[l("td",null,[l("a",I,[s("audio.name"),n(e)])]),H,S]),L,z,K,l("tr",null,[J,R,l("td",null,[l("a",W,[s("详情"),n(e)])])]),X,l("tr",null,[Y,Z,l("td",null,[s("可选值: 'auto', 'hls', 'normal' 或其他自定义类型, "),l("a",$,[s("详情"),n(e)])])]),l("tr",null,[ll,sl,l("td",null,[s("自定义类型，"),l("a",nl,[s("详情"),n(e)])])]),el,l("tr",null,[tl,al,l("td",null,[l("a",ol,[s("详情"),n(e)])])]),il,rl,pl])]),dl,l("table",null,[cl,l("tbody",null,[ul,hl,gl,Bl,yl,ml,l("tr",null,[_l,l("td",null,[l("a",vl,[s("https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r"),n(e)])]),bl]),Al,fl])]),Fl,l("ul",null,[l("li",null,[s("QQ音乐的mid不是数字 "),l("ul",null,[l("li",null,[l("a",kl,[s("https://y.qq.com/n/ryqq/songDetail/003UTVCN0QvffG"),n(e)])])])]),l("li",null,[s("网易云 "),l("ul",null,[l("li",null,[l("a",Cl,[s("https://music.163.com/#/playlist?id=60198"),n(e)])])])])])])}const wl=d(h,[["render",ql],["__file","meting2.html.vue"]]);export{wl as default};
