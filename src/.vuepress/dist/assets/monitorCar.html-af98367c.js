import{_ as t,o,c as r,a as n,d as e,e as a}from"./app-f52ef360.js";const s={},d=e("h1",{id:"无线监控小车",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#无线监控小车","aria-hidden":"true"},"#"),a(" 无线监控小车")],-1),c=e("h2",{id:"_1-1-esp32-cam",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-1-esp32-cam","aria-hidden":"true"},"#"),a(" 1.1 ESP32-CAM")],-1),i=e("p",null,"ESP32-CAM是一款基于ESP32芯片的集成式开发板，搭载了高性能的摄像头，并支持WiFi无线传输，可以实时传输监控画面到远程设备，实现远程监控功能。功能强大且灵活，可以轻松连接其他传感器和执行器，添加更多的智能功能，如红外传感器、超声波传感器等。ESP32-CAM采用低功耗设计，可以长时间运行，适用于电池供电的移动监控小车。具有丰富的IO接口，可以简单地扩展其他硬件模块，如电机驱动器、舵机等，以实现如自动避障、追踪等功能。ESP32-CAM的电路如图2所示。",-1),_=e("h2",{id:"_1-2-ov2640摄像头",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-2-ov2640摄像头","aria-hidden":"true"},"#"),a(" 1.2 OV2640摄像头")],-1),h=e("p",null,"OV2640摄像头具有200万像素的高分辨率，能够提供清晰、细节丰富的图像，确保捕捉到准确的画面细节，提供高质量的监控和录像。摄像头模块集成了图像处理功能，包括自动曝光、自动白平衡、自动对焦等。这些功能可以自动优化图像质量，使图像在不同的光线条件下保持清晰和准确，获得最佳的图像效果。支持多种输出格式，包括JPEG、YUV、RGB565等，可以选择最合适的图像格式，以便进行进一步的分析和处理。摄像头可以以15帧/秒的速度拍摄2 Megapixels的图像，或以30帧/秒的速度拍摄较低分辨率的图像，这使得无线监控小车能够实时捕捉和传输图像，提供实时监控和响应能力。模块采用了低功耗设计，适用于需要长时间运行的应用场景，提高电池寿命，延长设备的工作时间。",-1),l=e("h2",{id:"_1-3-l298n电机驱动",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-3-l298n电机驱动","aria-hidden":"true"},"#"),a(" 1.3 L298N电机驱动")],-1),m=e("p",null,"L298N电机驱动芯片提供最大2A的电流输出，可以驱动各种类型和大小的直流电机，包括驱动力较大的电机，非常适合用于运行较重载荷的无线监控小车项目。可以实现直流电机的双向控制，即控制小车的前进、后退和转向。这使得无线监控小车能够在不同的场景中灵活移动和导航，提供更好的监控覆盖范围。通过使用PWM信号来控制电机驱动的输入引脚，可以实现对电机的精确速度控制，调整小车移动速度。L298N电机驱动支持5V至35V的电源电压范围，可以适应不同类型的电源配置，包括使用电池供电的情况，小车在不同的供电环境中都能正常运行。驱动具有过热保护功能，可在电机或芯片过热时自动停止工作，以保护设备的安全性。这在长时间运行或高负载条件下尤为重要，可以延长设备的使用寿命。L298N电机驱动控制逻辑关系如表1所示",-1);function u(f,p){return o(),r("div",null,[d,c,i,n(" more "),_,h,l,m])}const V=t(s,[["render",u],["__file","monitorCar.html.vue"]]);export{V as default};
