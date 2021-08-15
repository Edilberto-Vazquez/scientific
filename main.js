(()=>{"use strict";var e={378:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._observer=new MutationObserver((e=>this.onDomChanged(e)))}get characterid(){return this._characterid}set characterid(e){this._characterid=e}get image(){return this._image}set image(e){this._image=e}get name(){return this._name}set name(e){this._name=e}get species(){return this._species}set species(e){this._species=e}getStyles(){return"\n      <style>\n        * {\n          box-sizing: border-box;\n          margin: 0;\n          padding: 0;\n        }\n        :host {\n          width: 300px;\n          display: inline-grid;\n        }\n        .character-card {\n          width: 300px;\n          height: 380px;\n          background: #fcfcfc;\n          border-radius: 10px;\n          box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n          animation: fade 2s linear;\n        }\n        .character-card a {\n          width: 100%\n          height: 100%;\n          display: grid;\n          grid-template-rows: 300px 80px;\n          text-decoration: none;\n          color: black;\n        }\n        .character-card a img {\n          width: 300px;\n          height: auto;\n          border-top-left-radius: 10px;\n          border-top-right-radius: 10px;\n        }\n        .character-card a div {\n          width: 100%;\n          height: 100%;\n          padding: 0 14px;\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n        .character-card a div span {\n          font-size: 2.4rem;\n        }\n        @keyframes fade {\n          from {\n            opacity: 0;\n          }\n          to {\n            opacity: 1;\n          }\n        }\n      </style>\n    "}getTemplate(){const e=document.createElement("template");return e.innerHTML=`\n      <article class="character-card">\n        <a href="#/${this.characterid||void 0}/">\n          <img src=${this.image||void 0} alt="">\n          <div>\n            <span>${this.name||void 0}</span>\n            <span>${this.species||void 0}</span>\n          </div>\n        </a>\n      </article>\n      ${this.getStyles()}\n    `,e}render(){this.shadowRoot?.appendChild(this.getTemplate().content.cloneNode(!0))}onDomChanged(e){this.shadowRoot}connectedCallback(){this._observer.observe(this,{attributes:!0,characterData:!0,subtree:!0,childList:!0}),this.render()}static get observedAttributes(){return["characterid","image","name","species"]}attributeChangedCallback(e,t,n){"characterid"===e&&(this.characterid=n),"image"===e&&(this.image=n),"name"===e&&(this.name=n),"species"===e&&(this.species=n)}disconnectedCallback(){this._observer.disconnect(),this.characterid=0,this.image="",this.name="",this.species=""}}customElements.define("character-card",e)},705:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._observer=new MutationObserver((e=>{this.onDomChanged(e)}))}get episodes(){return this._episodes}set episodes(e){this._episodes=e}get status(){return this._status}set status(e){this._status=e}get species(){return this._species}set species(e){this._species=e}get gender(){return this._gender}set gender(e){this._gender=e}get origin(){return this._origin}set origin(e){this._origin=e}get location(){return this._location}set location(e){this._location=e}getStyles(){return"\n      <style>\n        * {\n          box-sizing: border-box;\n          margin: 0;\n          padding: 0;\n        }\n        :host {\n          max-width: 500px;\n        }\n        .character-description{\n          display: grid;\n          row-gap: 24px;\n          animation: fade 2s linear;\n        }\n        .character-description span {\n          font-size: 2.4rem;\n          font-weight: 400;\n          text-align: left;\n        }\n        @keyframes fade {\n          from {\n            opacity: 0;\n          }\n          to {\n            opacity: 1;\n          }\n        }\n      </style>\n    "}getTemplate(){const e=document.createElement("template");return e.innerHTML=`\n      <article class="character-description">\n        <span>Episodes:${this.episodes}</span>\n        <span>Status:${this.status}</span>\n        <span>Species:${this.species}</span>\n        <span>Gender:${this.gender}</span>\n        <span>Origin:${this.origin}</span>\n        <span>Last Location:${this.location}</span>\n      </article>\n      ${this.getStyles()}\n    `,e}render(){this.shadowRoot?.appendChild(this.getTemplate().content.cloneNode(!0))}onDomChanged(e){this.shadowRoot}connectedCallback(){this._observer.observe(this,{attributes:!0,characterData:!0,subtree:!0,childList:!0}),this.render()}static get observedAttributes(){return["episodes","status","species","gender","origin","location"]}attributeChangedCallback(e,t,n){"episodes"===e&&(this.episodes=n),"status"===e&&(this.status=n),"species"===e&&(this.species=n),"gender"===e&&(this.gender=n),"origin"===e&&(this.origin=n),"location"===e&&(this.location=n)}disconnectedCallback(){this._observer.disconnect(),this.episodes=0,this.status="",this.species="",this.gender="",this.origin="",this.location=""}}customElements.define("character-description",e)},743:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._observer=new MutationObserver((e=>{this.onDomChanged(e)}))}getTemplate(){const e=document.createElement("template");return e.innerHTML='\n      <div class="Error404">\n        <h2>Error 404</h2>\n      </div>\n    ',e}render(){this.shadowRoot?.appendChild(this.getTemplate().content.cloneNode(!0))}onDomChanged(e){this.shadowRoot}connectedCallback(){this.render()}disconnectedCallback(){this._observer.disconnect()}}customElements.define("error-404",e)},655:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._observer=new MutationObserver((e=>this.onDomChanged(e)))}getStyles(){return"\n      <style>\n        :host {\n          --header-width: 0;\n          width: 100%;\n          height: 68px;\n          display: grid;\n        }\n        .header-main {\n          width: var(--header-width);\n          height: auto;\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          position: fixed;\n          background: white;\n        }\n        .header-logo a, .header-nav a {\n          font-size: 3.6rem;\n          text-decoration: none;\n          color: #15302c;\n        }\n      </style>\n    "}getTemplate(){const e=document.createElement("template");return e.innerHTML=`\n      <header class="header-main">\n        <div class="header-logo">\n          <h1>\n            <a href="/">\n              100tifi.co\n            </a>\n          </h1>\n        </div>\n        <div class="header-nav">\n          <a href="#/about/">\n            About\n          </a>\n        </div>\n      </header>\n      ${this.getStyles()}\n    `,e}render(){this.shadowRoot?.appendChild(this.getTemplate().content.cloneNode(!0))}onDomChanged(e){this.shadowRoot}connectedCallback(){this.render()}disconnectedCallback(){this._observer.disconnect()}}customElements.define("header-main",e)},820:function(e,t,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=s(n(133));window.addEventListener("load",a.default),window.addEventListener("hashchange",a.default)},355:function(e,t,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(378),n(705);const a=s(n(179)),i=s(n(175));t.default=async()=>{const e=a.default(),t=await i.default(e),n=document.createElement("div");return n.classList.add("character-page"),n.innerHTML=`\n    <character-card characterid=${t.id} image=${t.image} name=${t.name} species=${t.species}>\n    </character-card>\n    <character-description episodes=${t.episode.length} status=${t.status} species=${t.species} gender=${t.gender} origin=${t.origin.name} loaction=${t.location.name}>\n    </character-description>\n  `,n}},752:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),n(743),t.default=async()=>{const e=document.createElement("div");return e.innerHTML="<error-404></error-404>",e}},411:function(e,t,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(378);const a=s(n(175));t.default=async()=>{const e=await a.default(),t=document.createElement("div");return t.classList.add("home-page"),t.innerHTML=`${e.results.map((e=>`<character-card characterid=${e.id} image=${e.image} name=${e.name} species=${e.species}>\n        </character-card>`)).join("")}`,t}},133:function(e,t,n){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(655);const a=s(n(411)),i=s(n(355)),r=s(n(752)),o=s(n(179)),c=s(n(584)),d={"/":a.default,"/:id":i.default,"/contac":"Contact"};t.default=async()=>{const e=o.default(),t=await c.default(e),n=d[t]?d[t]:r.default,s=document.getElementById("main"),a=document.createElement("header-main");for(;s?.firstChild;)s.removeChild(s.firstChild);await(s?.appendChild(a)),n().then((e=>s?.appendChild(e)))}},175:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n="https://rickandmortyapi.com/api/character";t.default=async e=>{const t=e?`${n}/${e}`:n;try{const e=await fetch(t);return await e.json()}catch(e){console.log("Fetch Error",e)}}},179:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/"},584:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>e.length<=3?"/"===e?e:"/:id":`/${e}`}},t={};!function n(s){var a=t[s];if(void 0!==a)return a.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,n),i.exports}(820)})();