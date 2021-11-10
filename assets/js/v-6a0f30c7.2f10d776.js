"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[54067],{7478:(e,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-6a0f30c7",path:"/devices/J1.html",title:"Ubisys J1 control via MQTT",lang:"en-US",frontmatter:{title:"Ubisys J1 control via MQTT",description:"Integrate your Ubisys J1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-09-08T21:16:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Configuring Inputs",slug:"configuring-inputs",children:[]},{level:3,title:"Configuration of device attributes",slug:"configuration-of-device-attributes",children:[]},{level:3,title:"Calibration",slug:"calibration",children:[]},{level:3,title:"Home Assistant cover features when using MQTT discovery",slug:"home-assistant-cover-features-when-using-mqtt-discovery",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Power (numeric, meter endpoint)",slug:"power-numeric-meter-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/J1.md",git:{updatedTime:1636570383e3}}},87917:(e,n,s)=>{s.r(n),s.d(n,{default:()=>L});var t=s(66252);const a=(0,t.uE)('<h1 id="ubisys-j1" tabindex="-1"><a class="header-anchor" href="#ubisys-j1" aria-hidden="true">#</a> Ubisys J1</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>J1</td></tr><tr><td>Vendor</td><td>Ubisys</td></tr><tr><td>Description</td><td>Shutter control J1</td></tr><tr><td>Exposes</td><td>cover (state, position, tilt), power, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/J1.jpg" alt="Ubisys J1"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="configuring-inputs" tabindex="-1"><a class="header-anchor" href="#configuring-inputs" aria-hidden="true">#</a> Configuring Inputs</h3>',4),o=(0,t.Uk)("In case the inputs need to be reconfigured (e.g. to use stationary switches instead of momentary ones or vice versa) this can be done in the same way as "),i=(0,t.Uk)("it is being done for the ubisys C4"),p=(0,t.Uk)("."),l=(0,t.uE)('<h3 id="configuration-of-device-attributes" tabindex="-1"><a class="header-anchor" href="#configuration-of-device-attributes" aria-hidden="true">#</a> Configuration of device attributes</h3><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> various device attributes can be configured:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;configure_j1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;windowCoveringType&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;configStatus&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;installedOpenLimitLiftCm&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;installedClosedLimitLiftCm&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;installedOpenLimitTiltDdegree&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;installedClosedLimitTiltDdegree&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;turnaroundGuardTime&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;liftToTiltTransitionSteps&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;totalSteps&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;liftToTiltTransitionSteps2&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;totalSteps2&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;additionalSteps&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;inactivePowerThreshold&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;startupSteps&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;totalSteps&quot;</span><span class="token operator">:</span> xxx<span class="token punctuation">,</span>\n        <span class="token property">&quot;totalSteps2&quot;</span><span class="token operator">:</span> xxx\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>',3),r=(0,t.Uk)("For further details on these attributes please take a look at the "),c={href:"https://www.ubisys.de/wp-content/uploads/ubisys-j1-technical-reference.pdf",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("ubisys J1 technical reference manual"),d=(0,t.Uk)(', chapter "7.2.5. Window Covering Cluster (Server)".'),b=(0,t.uE)('<p>As an alternative to the attributes listed above, the following properties may be used for convenience:</p><ul><li><code>open_to_closed_s</code>: corresponds to <code>totalSteps</code>, but takes value in seconds instead of in full AC waves</li><li><code>closed_to_open_s</code>: ditto for <code>totalSteps2</code>,</li><li><code>lift_to_tilt_transition_ms</code>: sets both <code>liftToTiltTransitionSteps</code> and <code>liftToTiltTransitionSteps2</code> (they shall both be equal according to ubisys manual), but takes value in <em>milli</em>seconds instead of in full AC waves</li><li><code>steps_per_second</code>: factor to be used for conversion, defaults to 50 full AC waves per second if not provided</li></ul><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/get/configure_j1</code> the values of the configuration attributes can also be read back from the device and be printed to the normal Zigbee2MQTT log.</p><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration" aria-hidden="true">#</a> Calibration</h3><p>By publishing <code>{&quot;configure_j1&quot;: {&quot;calibrate&quot;: 1}}</code> to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> the device can also be calibrated after installation to support more advanced positioning features (i.e. go to lift percentage / go to tilt percentage). This can be combined with setting attributes as shown above, for example:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;configure_j1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;calibrate&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;windowCoveringType&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;lift_to_tilt_transition_ms&quot;</span><span class="token operator">:</span> <span class="token number">1600</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',6),h=(0,t.Uk)("The calibration procedure will move the shutter up and down several times and the current stage of the calibration process will again be logged to the normal Zigbee2MQTT log for the user to get some feedback. For details on the calibration procedure please again take a look at the "),m={href:"https://www.ubisys.de/wp-content/uploads/ubisys-j1-technical-reference.pdf",target:"_blank",rel:"noopener noreferrer"},k=(0,t.Uk)("ubisys J1 technical reference manual"),g=(0,t.Uk)(', chapter "7.2.5.1. Calibration". Please note that tilt transition steps cannot be determined automatically and must therefore be configured manually for the device to also support "go to tilt percentage". One possibility to determine the correct value is to take a video of the blinds moving from 0 to 100 percent tilt and then getting the exact timing from the video by playing it slow motion.'),f={id:"home-assistant-cover-features-when-using-mqtt-discovery",tabindex:"-1"},v=(0,t._)("a",{class:"header-anchor",href:"#home-assistant-cover-features-when-using-mqtt-discovery","aria-hidden":"true"},"#",-1),y=(0,t.Uk)(" Home Assistant cover features when using "),q=(0,t.Uk)("MQTT discovery"),x=(0,t.uE)('<p>The cover will be offered to Home Assistant as supporting lift and tilt by default, but for covers with reduced functionality this can be passed along to Home Assistant by disabling some of the topics in <code>configuration.yaml</code>, for example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">&#39;0x001fee0000001234&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> cover_not_supporting_tilt\n    <span class="token key atrule">homeassistant</span><span class="token punctuation">:</span>\n        <span class="token key atrule">tilt_command_topic</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">tilt_status_topic</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">tilt_status_template</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n<span class="token key atrule">&#39;0x001fee0000001234&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> cover_supporting_neither_lift_nor_tilt\n    <span class="token key atrule">homeassistant</span><span class="token punctuation">:</span>\n        <span class="token key atrule">set_position_topic</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">set_position_template</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">position_topic</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">position_template</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">tilt_command_topic</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">tilt_status_topic</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n        <span class="token key atrule">tilt_status_template</span><span class="token punctuation">:</span> <span class="token null important">null</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),_=(0,t.Uk)("This device supports OTA updates, for more information see "),w=(0,t.Uk)("OTA updates"),T=(0,t.Uk)("."),E=(0,t._)("h2",{id:"options",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,t.Uk)(" Options")],-1),C=(0,t.Uk)("How to use device type specific configuration"),U=(0,t.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>. To change the tilt publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tilt&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="power-numeric-meter-endpoint" tabindex="-1"><a class="header-anchor" href="#power-numeric-meter-endpoint" aria-hidden="true">#</a> Power (numeric, meter endpoint)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),A={},L=(0,s(83744).Z)(A,[["render",function(e,n){const s=(0,t.up)("RouterLink"),A=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[a,(0,t._)("p",null,[o,(0,t.Wm)(s,{to:"/devices/C4.html#configuring-inputs"},{default:(0,t.w5)((()=>[i])),_:1}),p]),l,(0,t._)("p",null,[r,(0,t._)("a",c,[u,(0,t.Wm)(A)]),d]),b,(0,t._)("p",null,[h,(0,t._)("a",m,[k,(0,t.Wm)(A)]),g]),(0,t._)("h3",f,[v,y,(0,t.Wm)(s,{to:"/guide/usage/integrations/home_assistant.html"},{default:(0,t.w5)((()=>[q])),_:1})]),x,(0,t._)("p",null,[_,(0,t.Wm)(s,{to:"/guide/usage/ota_updates.html"},{default:(0,t.w5)((()=>[w])),_:1}),T]),E,(0,t._)("p",null,[(0,t._)("em",null,[(0,t.Wm)(s,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.w5)((()=>[C])),_:1})])]),U],64)}]])},83744:(e,n)=>{n.Z=(e,n)=>{for(const[s,t]of n)e[s]=t;return e}}}]);