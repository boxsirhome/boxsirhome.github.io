import{_ as l,r as c,o as t,c as r,e as o,f as e,b as a,d as n}from"./app-2f0500a1.js";const i="/assets/1-2f454f26.png",d="/assets/2-5af375bc.png",p="/assets/3-c73009dc.png",h="/assets/4-81af5750.png",u="/assets/5-93af8a89.png",B="/assets/6-ce72b899.png",_="/assets/7-d0c76f64.png",g={},f=o("p",null,"整个主题在多处都添加了 FontClass / 图片 格式图标的支持。",-1),m=o("p",null,"目前可以使用 iconfont、iconify 和 fontawesome 为你的项目添加图标，可以设置自己的图标资源。",-1),y=o("p",null,"同时，png/svg 格式的图标也是支持的。可以使用完整 URL 或路径名来添加图标。",-1),b={href:"https://theme-hope.vuejs.press/zh/guide/interface/icon.html",target:"_blank",rel:"noopener noreferrer"},A=n(`<h2 id="图标设置" tabindex="-1"><a class="header-anchor" href="#图标设置" aria-hidden="true">#</a> 图标设置</h2><p>可以在多个地方使用图标。</p><ul><li><p>页面: 在 frontmatter 中设置 <code>icon</code></p><p>此图标将用于路径导航、页面标题、导航栏生成项、侧边栏生成项、页面导航等。</p></li><li><p>导航栏: 在 NavbarItemConfig 中设置 <code>icon</code> 选项</p></li><li><p>侧边栏: 在 SidebarItemConfig 中设置 <code>icon</code> 选项</p></li><li><p>主页: 在功能项中设置 <code>icon</code> 选项</p></li></ul><h2 id="在-markdown-中添加图标" tabindex="-1"><a class="header-anchor" href="#在-markdown-中添加图标" aria-hidden="true">#</a> 在 Markdown 中添加图标</h2><p>你可以使用 <code>&lt;HopeIcon /&gt;</code> 组件在 markdown 中添加图标。</p><ul><li><code>icon</code> 属性接受与其他 <code>icon</code> 选项相同的内容，即：字体类名和图像 url</li><li><code>color</code> 属性接受一个 css 颜色值，它将用作图标颜色（可选）</li><li><code>size</code> 属性接受一个 css 大小值，该值将用作图标大小（可选）</li></ul><p>例如：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">HopeIcon</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">icon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;home&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">color</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;red&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">HopeIcon</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">icon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;/logo.svg&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">size</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;4rem&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="首次使用" tabindex="-1"><a class="header-anchor" href="#首次使用" aria-hidden="true">#</a> 首次使用</h2><h3 id="新建项目" tabindex="-1"><a class="header-anchor" href="#新建项目" aria-hidden="true">#</a> 新建项目</h3><p>需要新建一个项目，对你网站的图标进行设置与管理:</p>`,11),v={href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"},F=n('<li>在网站上方找到 “资源管理 → 我的项目”，点击右上角的 “新建项目” 图标。</li><li>设置可以辨识的项目名称</li><li><code>FontClass/Symbol 前缀</code> 填入 <code>icon-</code> (可以根据自己喜好填写，但需要将此值设置额外前缀 <code>iconfont</code> 并设置到在主题选项中的 <code>iconPrefix</code> ，如果填入的就是 <code>icon-</code> 则不需要设置主题选项中的 <code>iconPrefix</code> ，因为主题已经自动把 <code>iconPrefix</code> 设置成 <code>icon-</code> ，填了反而可能出现问题)</li><li>Font Family 请保持 <code>iconfont</code><br><img src="'+i+'" alt="1" loading="lazy"></li>',4),E=n('<h3 id="导入图标" tabindex="-1"><a class="header-anchor" href="#导入图标" aria-hidden="true">#</a> 导入图标</h3><ol><li><p>在 iconfont 自由搜索寻找你想要使用的图标，并点击图标上的 “添加入库” 按钮<br><img src="'+d+'" alt="2" loading="lazy"></p></li><li><p>在寻找完所有图标后，请点击右上角的 “添加入库” 图标，点击下方的 “添加至项目” 并选择你刚刚创建好的项目进行确定。<br><img src="'+p+'" alt="3" loading="lazy"></p></li><li><p>请点击项目上方的 “Font Class” 按钮，并点击生成。<br><img src="'+h+'" alt="4" loading="lazy"></p></li><li><p>生成链接<br><img src="'+u+'" alt="5" loading="lazy"></p></li><li><p>将 css 地址设置到主题选项的 <code>iconAssets</code> 中<br><img src="'+B+'" alt="6" loading="lazy"></p></li></ol><h3 id="使用图标" tabindex="-1"><a class="header-anchor" href="#使用图标" aria-hidden="true">#</a> 使用图标</h3>',3),x=o("li",null,[o("p",null,[e("复制代码"),o("br"),o("img",{src:_,alt:"7",loading:"lazy"})]),o("p",null,[e("例如："),o("code",null,"icon-bangbangtang-01")])],-1),k=n(`<p>可以使用 <code>&lt;HopeIcon /&gt;</code> 组件在 markdown 中添加图标。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">HopeIcon</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">icon</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;bangbangtang-01&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">size</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;3rem&quot;</span><span style="color:#ABB2BF;">/&gt;   //去除掉&quot;icon-&quot;前缀，主题已经在theme.ts的&quot;iconPrefix&quot;中默认配置了</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),C={href:"https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87",target:"_blank",rel:"noopener noreferrer"},q=o("h2",{id:"添加新图标",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#添加新图标","aria-hidden":"true"},"#"),e(" 添加新图标 📌")],-1),I=n('<li>如果需要在Iconfont 平台 <strong>添加新项目和新图标</strong>，重复<a href="#%E9%A6%96%E6%AC%A1%E4%BD%BF%E7%94%A8">首次使用</a>的操作，将生成的CSS地址增加到<code>iconAssets</code>方法中。</li><li>如果需要在Iconfont 平台<code>navbar</code>项目中 <strong>添加新图标</strong>，重复 <a href="#%E5%AF%BC%E5%85%A5%E5%9B%BE%E6%A0%87">导入图标</a> 的操作，将重新生成的新 CSS 地址替换 掉<code>iconAssets</code>方法中<code>navbar</code>项目图标。</li>',2),z={href:"https://blog.csdn.net/AdminGuan/article/details/121691426",target:"_blank",rel:"noopener noreferrer"};function w(D,S){const s=c("ExternalLinkIcon");return t(),r("div",null,[f,m,y,o("p",null,[e("具体 "),o("strong",null,[e("参考主题>指南>界面>"),o("a",b,[e("图标支持"),a(s)])])]),A,o("ol",null,[o("li",null,[e("使用 GitHub 或微博登录 "),o("a",v,[e("Iconfont"),a(s)]),e("。")]),F]),E,o("ol",null,[x,o("li",null,[k,o("p",null,[e("其它位置图标支持，参考"),o("strong",null,[e("主题文档>图标支持>"),o("a",C,[e("设置图标"),a(s)])])])])]),q,o("ul",null,[I,o("li",null,[e("如果需要在Iconfont 平台上传自己的图标，参考 "),o("a",z,[e("svg制作上传"),a(s)])])])])}const N=l(g,[["render",w],["__file","addIcon.html.vue"]]);export{N as default};