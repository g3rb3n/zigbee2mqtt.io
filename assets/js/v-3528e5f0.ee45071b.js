"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[40683],{43183:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-3528e5f0",path:"/devices/324131092621.html",title:"Philips 324131092621 control via MQTT",lang:"en-US",frontmatter:{title:"Philips 324131092621 control via MQTT",description:"Integrate your Philips 324131092621 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Binding",slug:"binding",children:[]},{level:3,title:"Troubleshooting",slug:"troubleshooting",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/324131092621.md",git:{updatedTime:1636570383e3}}},97849:(e,t,i)=>{i.r(t),i.d(t,{default:()=>x});var o=i(66252);const a=(0,o.uE)('<h1 id="philips-324131092621" tabindex="-1"><a class="header-anchor" href="#philips-324131092621" aria-hidden="true">#</a> Philips 324131092621</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>324131092621</td></tr><tr><td>Vendor</td><td>Philips</td></tr><tr><td>Description</td><td>Hue dimmer switch</td></tr><tr><td>Exposes</td><td>battery, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/324131092621.jpg" alt="Philips 324131092621"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory reset the Hue dimmer switch by pressing and holding the setup button on the back for 10 seconds.</p><p>Restart the Hue dimmer switch by holding all 4 buttons of the Hue dimmer switch. You can let go when the light on the front flashes red/green briefly.</p><h4 id="using-the-dimmer-to-reset-a-hue-light-bulb" tabindex="-1"><a class="header-anchor" href="#using-the-dimmer-to-reset-a-hue-light-bulb" aria-hidden="true">#</a> Using the dimmer to reset a Hue light bulb</h4>',7),d=(0,o.Uk)("To use the Hue dimmer switch to factory reset a Hue light bulb see "),r={href:"https://www.youtube.com/watch?v=qvlEAELiJKs",target:"_blank",rel:"noopener noreferrer"},n=(0,o.Uk)("HOWTO: Factory reset a Hue bulb"),s=(0,o.Uk)(". After resetting the bulb will automatically connect. This method also works for Philips Hue Lightstrips. Hue dimmer switch can also be used to factory reset Ikea Trådfri light bulbs using the same method described above."),l=(0,o._)("h3",{id:"binding",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#binding","aria-hidden":"true"},"#"),(0,o.Uk)(" Binding")],-1),h=(0,o.Uk)("If you want to bind the dimmer to a (Hue) lamp you'll have to "),c=(0,o.Uk)("bind it to the lamp through MQTT"),u=(0,o.Uk)(" and unbind it from the coordinator. Use the dimmer as source and a literal "),p=(0,o._)("code",null,"coordinator",-1),g=(0,o.Uk)(" as target for that."),b=(0,o.uE)('<h3 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h3><h4 id="resetting-the-device" tabindex="-1"><a class="header-anchor" href="#resetting-the-device" aria-hidden="true">#</a> Resetting the device</h4><ul><li>Method 1: Press all four buttons for 4 seconds. When the light turns green, release the buttons. The device will flash green and red alternatively after which it will reconnect to the network.</li><li>Method 2: Use a needle or paperclip to press the reset button on the back for 10 seconds. The behavior is similar to method 1</li></ul><h4 id="device-refuses-actions" tabindex="-1"><a class="header-anchor" href="#device-refuses-actions" aria-hidden="true">#</a> Device refuses actions</h4><p>If actions (e.g. applying zigbee2mqtt/bridge/request/device/remove to a dimmer) result in timeouts, perform a reset (see above) and apply the action right after the device announced itself in the network.</p><h4 id="device-announces-itself-but-the-buttons-don-t-work" tabindex="-1"><a class="header-anchor" href="#device-announces-itself-but-the-buttons-don-t-work" aria-hidden="true">#</a> Device announces itself but the buttons don&#39;t work</h4><p>The dimmer appears to be working normally and the logs in Zigbee2MQTT look good. However, nothing happens when a button is pressed (no light, no log message in Zigbee2MQTT). In this case:</p><ul><li>Reset the device</li><li>Use zigbee2mqtt/bridge/request/device/remove to remove the device from the network (this should result in a &quot;left the network&quot; log message)</li><li>Allow joining of new devices in Zigbee2MQTT</li><li>Reset the device again</li><li>Wait for it to pair again. The device should now be operational.</li></ul><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',9),m=(0,o.Uk)("This device supports OTA updates, for more information see "),f=(0,o.Uk)("OTA updates"),v=(0,o.Uk)("."),w=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),y=(0,o.Uk)("How to use device type specific configuration"),k=(0,o.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on-press</code>, <code>on-hold</code>, <code>on-hold-release</code>, <code>up-press</code>, <code>up-hold</code>, <code>up-hold-release</code>, <code>down-press</code>, <code>down-hold</code>, <code>down-hold-release</code>, <code>off-press</code>, <code>off-hold</code>, <code>off-hold-release</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),T={},x=(0,i(83744).Z)(T,[["render",function(e,t){const i=(0,o.up)("OutboundLink"),T=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("p",null,[d,(0,o._)("a",r,[n,(0,o.Wm)(i)]),s]),l,(0,o._)("p",null,[h,(0,o._)("em",null,[(0,o.Wm)(T,{to:"/guide/usage/binding.html"},{default:(0,o.w5)((()=>[c])),_:1})]),u,p,g]),b,(0,o._)("p",null,[m,(0,o.Wm)(T,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[f])),_:1}),v]),w,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(T,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[y])),_:1})])]),k],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);