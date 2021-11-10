"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[52665],{7637:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-4b0fe092",path:"/advanced/support-new-devices/02_support_new_tuya_devices.html",title:"Support new Tuya devices",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Instructions",slug:"instructions",children:[{level:3,title:"1. Standard part of the setup",slug:"_1-standard-part-of-the-setup",children:[]},{level:3,title:"2. Adding your device",slug:"_2-adding-your-device",children:[]},{level:3,title:"3. Understanding Tuya data points",slug:"_3-understanding-tuya-data-points",children:[]},{level:3,title:"4. Deciphering the data points",slug:"_4-deciphering-the-data-points",children:[]},{level:3,title:"5. Adding your first data point",slug:"_5-adding-your-first-data-point",children:[]},{level:3,title:"6. BONUS: Contacting the manufacturer",slug:"_6-bonus-contacting-the-manufacturer",children:[]},{level:3,title:"7. BONUS 2: Further reading",slug:"_7-bonus-2-further-reading",children:[]}]}],filePathRelative:"advanced/support-new-devices/02_support_new_tuya_devices.md",git:{updatedTime:1636570383e3}}},69892:(n,s,a)=>{a.r(s),a.d(s,{default:()=>U});var t=a(66252);const e=(0,t.uE)('<h1 id="support-new-tuya-devices" tabindex="-1"><a class="header-anchor" href="#support-new-tuya-devices" aria-hidden="true">#</a> Support new Tuya devices</h1><p>Tuya devices use a custom <code>manuSpecificTuya</code> cluster, the instructions below will help you understand it better and provide some tools to ease discovery of their functions</p><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h2><h3 id="_1-standard-part-of-the-setup" tabindex="-1"><a class="header-anchor" href="#_1-standard-part-of-the-setup" aria-hidden="true">#</a> 1. Standard part of the setup</h3>',4),p=(0,t.Uk)("Read through basic "),o=(0,t.Uk)("howto"),c=(0,t.Uk)(" for instructions on how to setup an external converter"),i=(0,t.uE)('<h3 id="_2-adding-your-device" tabindex="-1"><a class="header-anchor" href="#_2-adding-your-device" aria-hidden="true">#</a> 2. Adding your device</h3><p>Adding support for TuYa devices is a bit different. In order to provide support for E.G. the <code>TS0601</code> model ID you would create the following external converter:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/fromZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> tz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/toZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> exposes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/exposes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> reporting <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/reporting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> extend <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/extend&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> e <span class="token operator">=</span> exposes<span class="token punctuation">.</span>presets<span class="token punctuation">;</span>\n<span class="token keyword">const</span> ea <span class="token operator">=</span> exposes<span class="token punctuation">.</span>access<span class="token punctuation">;</span>\n<span class="token keyword">const</span> tuya <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;zigbee-herdsman-converters/lib/tuya&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> definition <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Since a lot of Tuya devices use the same modelID, but use different data points</span>\n    <span class="token comment">// it&#39;s usually necessary to provide a fingerprint instead of a zigbeeModel</span>\n    fingerprint<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            <span class="token comment">// The model ID from: Device with modelID &#39;TS0601&#39; is not supported</span>\n            <span class="token comment">// You may need to add \\u0000 at the end of the name in some cases</span>\n            modelID<span class="token operator">:</span> <span class="token string">&#39;TS0601&#39;</span><span class="token punctuation">,</span>\n            <span class="token comment">// The manufacturer name from: Device with modelID &#39;TS0601&#39; is not supported.</span>\n            manufacturerName<span class="token operator">:</span> <span class="token string">&#39;_TZE200_c88teujp&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    model<span class="token operator">:</span> <span class="token string">&#39;SEA802-Zigbee&#39;</span><span class="token punctuation">,</span>\n    vendor<span class="token operator">:</span> <span class="token string">&#39;Saswell&#39;</span><span class="token punctuation">,</span>\n    description<span class="token operator">:</span> <span class="token string">&#39;Thermostatic radiator valve&#39;</span><span class="token punctuation">,</span>\n    supports<span class="token operator">:</span> <span class="token string">&#39;thermostat, temperature&#39;</span><span class="token punctuation">,</span>\n    fromZigbee<span class="token operator">:</span> <span class="token punctuation">[</span>\n        fz<span class="token punctuation">.</span>ignore_basic_report<span class="token punctuation">,</span> <span class="token comment">// Add this if you are getting no converter for &#39;genBasic&#39;</span>\n        fz<span class="token punctuation">.</span>tuya_data_point_dump<span class="token punctuation">,</span> <span class="token comment">// This is a debug converter, it will be described in the next part</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    toZigbee<span class="token operator">:</span> <span class="token punctuation">[</span>\n        tz<span class="token punctuation">.</span>tuya_data_point_test<span class="token punctuation">,</span> <span class="token comment">// Another debug converter</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    onEvent<span class="token operator">:</span> tuya<span class="token punctuation">.</span>setTime<span class="token punctuation">,</span> <span class="token comment">// Add this if you are getting no converter for &#39;commandSetTimeRequest&#39;</span>\n    <span class="token function-variable function">configure</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">device<span class="token punctuation">,</span> coordinatorEndpoint<span class="token punctuation">,</span> logger</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> endpoint <span class="token operator">=</span> device<span class="token punctuation">.</span><span class="token function">getEndpoint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">await</span> <span class="token function">reporting</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> coordinatorEndpoint<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;genBasic&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    exposes<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token comment">// Here you should put all functionality that your device exposes</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> definition<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p>Once finished, restart Zigbee2MQTT and trigger some actions on the device.</p><h3 id="_3-understanding-tuya-data-points" tabindex="-1"><a class="header-anchor" href="#_3-understanding-tuya-data-points" aria-hidden="true">#</a> 3. Understanding Tuya data points</h3><p>The <code>commandGetData</code> and <code>commandSetDataResponse</code> types of the <code>manuSpecificTuya</code> cluster have it&#39;s own format:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;status&#39;</span><span class="token punctuation">,</span> type<span class="token operator">:</span> DataType<span class="token punctuation">.</span>uint8<span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;transid&#39;</span><span class="token punctuation">,</span> type<span class="token operator">:</span> DataType<span class="token punctuation">.</span>uint8<span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;dp&#39;</span><span class="token punctuation">,</span> type<span class="token operator">:</span> DataType<span class="token punctuation">.</span>uint8<span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;datatype&#39;</span><span class="token punctuation">,</span> type<span class="token operator">:</span> DataType<span class="token punctuation">.</span>uint8<span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;fn&#39;</span><span class="token punctuation">,</span> type<span class="token operator">:</span> DataType<span class="token punctuation">.</span>uint8<span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> type<span class="token operator">:</span> DataType<span class="token punctuation">.</span>octetStr<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><code>status</code> and <code>transid</code> are just a header information.</li><li><code>dp</code> is so called &quot;Data Point ID&quot; which is at the core of Tuya devices. From the point of view of a device the DPIDs are the functions that the device provides.</li><li><code>datatype</code> is the type of data contained in the <code>data</code> field, see <code>dataTypes</code> in <code>node_modules/zigbee-herdsman-converters/lib/tuya.js</code></li></ul>',8),u=(0,t.Uk)("Some data points are 'report only' (they report changes that happen within the device) others are 'issue and report' (they can report by themselves, but also respond with a report when set). The list of currently known data points can be found in "),r=(0,t._)("code",null,"dataPoints",-1),l=(0,t.Uk)(" in "),d={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/lib/tuya.js",target:"_blank",rel:"noopener noreferrer"},k=(0,t.Uk)("node_modules/zigbee-herdsman-converters/lib/tuya.js"),b=(0,t.Uk)("."),m=(0,t._)("p",null,[(0,t.Uk)("For example on Saswell thermostat data point number "),(0,t._)("code",null,"103"),(0,t.Uk)(" is heating setpoint, it has "),(0,t._)("code",null,"value"),(0,t.Uk)(" type and is 'issue and report', we will use that information later in examples.")],-1),h=(0,t.Uk)("If you have a Tuya gateway, you can find what the function is of data point number by following "),g=(0,t.Uk)("this how-to guide"),f=(0,t.uE)('<h3 id="_4-deciphering-the-data-points" tabindex="-1"><a class="header-anchor" href="#_4-deciphering-the-data-points" aria-hidden="true">#</a> 4. Deciphering the data points</h3><p>By adding the two debug converters mentioned earlier, we have the tools to decipher Tuya data points.</p><h4 id="fz-tuya-data-point-dump" tabindex="-1"><a class="header-anchor" href="#fz-tuya-data-point-dump" aria-hidden="true">#</a> fz.tuya_data_point_dump</h4><p>This converter will append a line in <code>data/tuya.dump.txt</code> file whenever it receives a Tuya specific message from the device, format of the file is:</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>current_time device_ieee_address status transid dp datatype fn data_as_hex_octets\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',5),y=(0,t.Uk)("A python script "),v={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/scripts/read_tuya_dump.py",target:"_blank",rel:"noopener noreferrer"},_=(0,t.Uk)("read_tuya_dump.py"),w=(0,t.Uk)(" can be used to parse this file. It's pre filled with Saswell data points, but should be easy to modify it to work with your device."),T=(0,t.uE)('<h4 id="tz-tuya-data-point-test" tabindex="-1"><a class="header-anchor" href="#tz-tuya-data-point-test" aria-hidden="true">#</a> tz.tuya_data_point_test</h4><p>This converter will allow you to send arbitrary data point to Tuya device, you only need to publish a message in the format <code>datatype,dp,data</code> to <code>zigbee2mqtt/{device_friendly_name}/set/tuya_data_point_test</code> MQTT topic</p><h4 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h4><p>On a linux computer/Raspberry Pi you can do <code>tail -f -n +0 data/tuya.dump.txt | read_tuya_dump.py</code> to get real time view of what your device is sending.</p><h3 id="_5-adding-your-first-data-point" tabindex="-1"><a class="header-anchor" href="#_5-adding-your-first-data-point" aria-hidden="true">#</a> 5. Adding your first data point</h3><p>Let&#39;s assume we want to add the heating setpoint of the Saswell thermostat first.</p><p>First add the <code>saswellHeatingSetpoint</code> data point to <code>dataPoints</code> in <code>node_modules/zigbee-herdsman-converters/lib/tuya.js</code> with value <code>103</code>.</p><p>Then add to <code>node_modules/zigbee-herdsman-converters/converters/fromZigbee.js</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>saswell_thermostat<span class="token operator">:</span> <span class="token punctuation">{</span>\n    cluster<span class="token operator">:</span> <span class="token string">&#39;manuSpecificTuya&#39;</span><span class="token punctuation">,</span>\n    type<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;commandGetData&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;commandSetDataResponse&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">convert</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">model<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> publish<span class="token punctuation">,</span> options<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> dp <span class="token operator">=</span> msg<span class="token punctuation">.</span>data<span class="token punctuation">.</span>dp<span class="token punctuation">;</span> <span class="token comment">// First we get the data point ID</span>\n        <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">tuyaGetDataValue</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>data<span class="token punctuation">.</span>datatype<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// This function will take care of converting the data to proper JS type</span>\n\n        <span class="token keyword">switch</span> <span class="token punctuation">(</span>dp<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">case</span> tuya<span class="token punctuation">.</span>dataPoints<span class="token punctuation">.</span>saswellHeatingSetpoint<span class="token operator">:</span> <span class="token comment">// DPID that we added to common</span>\n            <span class="token keyword">return</span> <span class="token punctuation">{</span>current_heating_setpoint<span class="token operator">:</span> <span class="token punctuation">(</span>value <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// value is already converted to a number in JS, and we deduced that it needs to be divided by 10</span>\n        <span class="token keyword">default</span><span class="token operator">:</span>\n            meta<span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">zigbee-herdsman-converters:SaswellThermostat: NOT RECOGNIZED DP #</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>\n                dp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> with data </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// This will cause zigbee2mqtt to print similar data to what is dumped in tuya.dump.txt</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Then add to <code>node_modules/zigbee-herdsman-converters/converters/toZigbee.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>saswell_thermostat_current_heating_setpoint<span class="token operator">:</span> <span class="token punctuation">{</span>\n    key<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;current_heating_setpoint&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">convertSet</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">entity<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> meta</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> temp <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>value <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">await</span> <span class="token function">sendTuyaDataPointValue</span><span class="token punctuation">(</span>entity<span class="token punctuation">,</span> tuya<span class="token punctuation">.</span>dataPoints<span class="token punctuation">.</span>saswellHeatingSetpoint<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// sendTuyaDataPoint* functions take care of converting the data to proper format</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Now update your external converter:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/fromZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> tz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/toZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> exposes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/exposes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> reporting <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/reporting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> extend <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/extend&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> e <span class="token operator">=</span> exposes<span class="token punctuation">.</span>presets<span class="token punctuation">;</span>\n<span class="token keyword">const</span> ea <span class="token operator">=</span> exposes<span class="token punctuation">.</span>access<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> definition <span class="token operator">=</span> <span class="token punctuation">{</span>\n    fingerprint<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>modelID<span class="token operator">:</span> <span class="token string">&#39;TS0601&#39;</span><span class="token punctuation">,</span> manufacturerName<span class="token operator">:</span> <span class="token string">&#39;_TZE200_c88teujp&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    model<span class="token operator">:</span> <span class="token string">&#39;SEA802-Zigbee&#39;</span><span class="token punctuation">,</span>\n    vendor<span class="token operator">:</span> <span class="token string">&#39;Saswell&#39;</span><span class="token punctuation">,</span>\n    description<span class="token operator">:</span> <span class="token string">&#39;Thermostatic radiator valve&#39;</span><span class="token punctuation">,</span>\n    fromZigbee<span class="token operator">:</span> <span class="token punctuation">[</span>\n        fz<span class="token punctuation">.</span>ignore_basic_report<span class="token punctuation">,</span>\n        fz<span class="token punctuation">.</span>tuya_data_point_dump<span class="token punctuation">,</span>\n        fz<span class="token punctuation">.</span>saswell_thermostat<span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    toZigbee<span class="token operator">:</span> <span class="token punctuation">[</span>\n        tz<span class="token punctuation">.</span>tuya_data_point_test<span class="token punctuation">,</span>\n        tz<span class="token punctuation">.</span>saswell_thermostat_current_heating_setpoint<span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    onEvent<span class="token operator">:</span> tuya<span class="token punctuation">.</span>setTime<span class="token punctuation">,</span>\n    <span class="token function-variable function">configure</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">device<span class="token punctuation">,</span> coordinatorEndpoint<span class="token punctuation">,</span> logger</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> endpoint <span class="token operator">=</span> device<span class="token punctuation">.</span><span class="token function">getEndpoint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">await</span> <span class="token function">bind</span><span class="token punctuation">(</span>endpoint<span class="token punctuation">,</span> coordinatorEndpoint<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;genBasic&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    exposes<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token comment">// Here you should put all functionality that your device exposes</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> definition<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>Repeat for all data points.</p><h3 id="_6-bonus-contacting-the-manufacturer" tabindex="-1"><a class="header-anchor" href="#_6-bonus-contacting-the-manufacturer" aria-hidden="true">#</a> 6. BONUS: Contacting the manufacturer</h3><p>When contacting a manufacturer of Tuya compatible device DO NOT ask for Zigbee protocol of the device, they usually have no idea how the Tuya radio that they bought communicates over Zigbee. Instead ask for the UART protocol for their device, this should give you a better cooperation. You can also ask them about DPIDs and data formats for their functions.</p><h3 id="_7-bonus-2-further-reading" tabindex="-1"><a class="header-anchor" href="#_7-bonus-2-further-reading" aria-hidden="true">#</a> 7. BONUS 2: Further reading</h3>',17),x=(0,t.Uk)("You can read more about how the device communicates with Tuya Zigbee radio module "),z={href:"https://developer.tuya.com/en/docs/iot/device-development/access-mode-mcu/zigbee-general-solution/tuya-zigbee-module-uart-communication-protocol/tuya-zigbee-module-uart-communication-protocol?id=K9ear5khsqoty",target:"_blank",rel:"noopener noreferrer"},S=(0,t.Uk)("here"),D={},U=(0,a(83744).Z)(D,[["render",function(n,s){const a=(0,t.up)("RouterLink"),D=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("p",null,[p,(0,t.Wm)(a,{to:"/advanced/support-new-devices/01_support_new_devices.html"},{default:(0,t.w5)((()=>[o])),_:1}),c]),i,(0,t._)("p",null,[u,r,l,(0,t._)("a",d,[k,(0,t.Wm)(D)]),b]),m,(0,t._)("p",null,[h,(0,t.Wm)(a,{to:"/advanced/support-new-devices/03_find_tuya_data_points.html"},{default:(0,t.w5)((()=>[g])),_:1})]),f,(0,t._)("p",null,[y,(0,t._)("a",v,[_,(0,t.Wm)(D)]),w]),T,(0,t._)("p",null,[x,(0,t._)("a",z,[S,(0,t.Wm)(D)])])],64)}]])},83744:(n,s)=>{s.Z=(n,s)=>{for(const[a,t]of s)n[a]=t;return n}}}]);