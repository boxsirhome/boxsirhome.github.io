import{_ as e,o as p,c as a,f as i}from"./app-4bcd1db1.js";const r={},o=i('<h1 id="esp8266-wifi空调遥控器" tabindex="-1"><a class="header-anchor" href="#esp8266-wifi空调遥控器" aria-hidden="true">#</a> ESP8266 WIFI空调遥控器</h1><h2 id="空调遥控器是怎么运作的" tabindex="-1"><a class="header-anchor" href="#空调遥控器是怎么运作的" aria-hidden="true">#</a> 空调遥控器是怎么运作的？</h2><p>空调（AC）通常由遥控器控制，当按下按钮时，该遥控器会向其发送红外信号。 空调解释信号并将其转换为指令，以提高其温度或降低其强度，关闭或开启等。因此，为了能够使用我们自己的设备进行控制，该设备必须能够模仿并发送遥控器发送到AC的信号相同，因此，通过按应用程序上的“ ON”按钮，我们的WiFi遥控器会发送遥控器发出的相同IR信号。</p><p>ESP8266将通过MQTT连接到家庭桥接器，通过它，Siri可用于提供控制AC的指令。一旦通过MQTT接收到指令（例如“打开”指令），NodeMCU便将其与相应的IR信号进行匹配，然后信号通过IR指示灯发送至AC。 OLED显示器用于向用户提供有关当前状态的视觉反馈。对于非iPhone用户，该设备还可以连接到Amazon Alexa。除了可以通过Siri或Apple的家用套件控制空调外，还配备了控制开关。</p><p>为了将本项目做的比较完整，该项目添加了以下功能：</p><p>√ 待机时显示NTP时钟。</p><p>√ 简单的按钮控制。电源、温度升高/降低。</p><p>√ 可以使用HomeKit控制温度、摆幅、风扇速度和模式。</p><p>√ 根据环境光自动亮度</p><p>√ OTA固件升级。</p><p>√ 使用HeaterCooler Service（iOS 11+）通过HomeKit进行控制，</p><p>√ 使用风扇服务与Amazon Alexa配合使用</p><p>在本文的最后，您将了解构建物联网解决方案和家庭自动化的基础知识。您还将学习如何拦截基于IR的遥控器发送的信号，创建一个IR发射器，该发射器可用于控制家庭或家庭中所有基于IR遥控器的设备，并构建可以通过Apple的Home工具包控制的设备。</p><h2 id="所需的组件" tabindex="-1"><a class="header-anchor" href="#所需的组件" aria-hidden="true">#</a> 所需的组件</h2><p>● ESP8266 NodeMCU</p><p>● 带有WiFi加密狗的Raspberry Pi 4，Raspberry Pi 3或Raspberry Pi 2</p><p>● Raspberry Pi的键盘，显示器和HDMI电缆或LAN电缆</p><p>● Raspberry Pi的2A电源</p><p>● SSD1332 OLED显示屏（256×64）</p><p>● 按钮</p><p>● 红外灯</p><p>● 发光二极管</p><p>● 跳线</p><p>● 面包板</p>',24),t=[o];function s(n,c){return p(),a("div",null,t)}const h=e(r,[["render",s],["__file","2.html.vue"]]);export{h as default};
