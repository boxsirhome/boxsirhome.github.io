import{_ as n,o as a,c as l,a as p,e as s,d as e}from"./app-5b5685cb.js";const o="/assets/weizhi-482b41bf.png",c={},t=s("div",{class:"hint-container info"},[s("p",{class:"hint-container-title"},"相关信息"),s("p",null,"java项目启动 建表和填充数据")],-1),r=e(`<p>本例适用版本：</p><p>SpringBoot：2.7.4</p><p>Kingbase：8.6.0</p><p>不保证本例在其它版本依然适用</p><p>先决条件：</p><p>SpringBoot工程能与目标DB顺畅连接。</p><p>下面正文开始：</p><p>1.在application.properties中加入以下文字：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">spring</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">datasource</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">driver-class-name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">com.kingbase8.Driver</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">url</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">jdbc:kingbase8://127.0.0.1:54321/test</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">username</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">system</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">password</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">123456</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">#建表和填充数据</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">sql</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">init</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">mode</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">always</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">schema-locations</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">classpath:db/schema-kingbase.sql</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">data-locations</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">classpath:db/data-kingbase.sql</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sql.init.mode有always、embedded、never三个选项，一般再需要建表时填always，如果表已经建立完毕须改成never；</p><p>schema-locations是建表语句文件所在，本例中的schema.sql是这样书写的：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">DROP</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">TABLE</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">IF</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">EXISTS</span><span style="color:#ABB2BF;"> user_test;</span></span>
<span class="line"><span style="color:#C678DD;">CREATE</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">TABLE</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">user_test</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">	id </span><span style="color:#C678DD;">bigint</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">NOT NULL</span><span style="color:#ABB2BF;"> ,</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">VARCHAR</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">30</span><span style="color:#ABB2BF;">)  ,</span></span>
<span class="line"><span style="color:#ABB2BF;">	age </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">NULL</span><span style="color:#ABB2BF;">  ,</span></span>
<span class="line"><span style="color:#ABB2BF;">	email </span><span style="color:#C678DD;">VARCHAR</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">50</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">PRIMARY KEY</span><span style="color:#ABB2BF;"> (id)</span></span>
<span class="line"><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>data-locations是给表充值文件所在，本例中data.sql是这样书写的：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">INSERT INTO</span><span style="color:#ABB2BF;"> user_test (id, </span><span style="color:#C678DD;">name</span><span style="color:#ABB2BF;">, age, email) </span><span style="color:#C678DD;">VALUES</span></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;Jone&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">18</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;test1@baomidou.com&#39;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;Jack&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;test2@baomidou.com&#39;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;Tom&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">28</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;test3@baomidou.com&#39;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;Sandy&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">21</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;test4@baomidou.com&#39;</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;Billie&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">24</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;test5@baomidou.com&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上文件的物理位置见下图：<br><img src="`+o+'" alt="weizhi" loading="lazy"></p><p>2.以上三处就绪后运行程序，如果报错就检查sql语句有没有纰漏，如果不报错就表示建表成功了</p>',16);function B(i,y){return a(),l("div",null,[t,p(" more "),r])}const A=n(c,[["render",B],["__file","createDatabase.html.vue"]]);export{A as default};
