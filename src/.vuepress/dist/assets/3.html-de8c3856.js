import{_ as s,o as n,c as a,a as l,f as o}from"./app-96ea5953.js";const e={},p=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">.</span><span style="color:#ABB2BF;">                               </span><span style="color:#7F848E;font-style:italic;">#在自己的分支下暂存修改后的代码</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">commit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-m</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;提交&quot;</span><span style="color:#ABB2BF;">                    </span><span style="color:#7F848E;font-style:italic;">#提交到本地暂存区</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">pull</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--rebase</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> [branch-name]  </span><span style="color:#7F848E;font-style:italic;">#变基远程主分支如：master</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;">                                </span><span style="color:#7F848E;font-style:italic;">#提交到本地仓库</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">checkout</span><span style="color:#ABB2BF;"> [branch-name]              </span><span style="color:#7F848E;font-style:italic;">#切换到本地主分支如：master</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">branch</span><span style="color:#ABB2BF;">                              </span><span style="color:#7F848E;font-style:italic;">#查询当前分支-确实切换到主分支</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">merge</span><span style="color:#ABB2BF;"> [my-branch-name]              </span><span style="color:#7F848E;font-style:italic;">#把本地自己的分支和主分支合并</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-u</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> [branch-name]        </span><span style="color:#7F848E;font-style:italic;">#push到远程主分支下如：master</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">checkout</span><span style="color:#ABB2BF;"> [my-branch-name]           </span><span style="color:#7F848E;font-style:italic;">#切回自己的分支继续编写代码</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function t(c,r){return n(),a("div",null,[l(" more "),p])}const B=s(e,[["render",t],["__file","3.html.vue"]]);export{B as default};
