import{C as s,D as f,E as y,F as g,G as S,I as q,J as x,K as B}from"./runtime.DUznui3C.js";function D(r){var a=y,i=g;s(null),f(null);try{return r()}finally{s(a),f(i)}}const C=new Set,F=new Set;function O(r,a,i,n){function e(t){if(n.capture||T.call(a,t),!t.cancelBubble)return D(()=>i.call(this,t))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?q(()=>{a.addEventListener(r,e,n)}):a.addEventListener(r,e,n),e}function G(r,a,i,n,e){var t={capture:n,passive:e},c=O(r,a,i,t);(a===document.body||a===window||a===document)&&S(()=>{a.removeEventListener(r,c,t)})}function T(r){var w;var a=this,i=a.ownerDocument,n=r.type,e=((w=r.composedPath)==null?void 0:w.call(r))||[],t=e[0]||r.target,c=0,p=r.__root;if(p){var _=e.indexOf(p);if(_!==-1&&(a===document||a===window)){r.__root=a;return}var v=e.indexOf(a);if(v===-1)return;_<=v&&(c=_)}if(t=e[c]||r.target,t!==a){x(r,"currentTarget",{configurable:!0,get(){return t||i}});var b=y,E=g;s(null),f(null);try{for(var u,d=[];t!==null;){var h=t.assignedSlot||t.parentNode||t.host||null;try{var o=t["__"+n];if(o!==void 0&&!t.disabled)if(B(o)){var[k,...L]=o;k.apply(t,[r,...L])}else o.call(t,r)}catch(l){u?d.push(l):u=l}if(r.cancelBubble||h===a||h===null)break;t=h}if(u){for(let l of d)queueMicrotask(()=>{throw l});throw u}}finally{r.__root=a,delete r.currentTarget,s(b),f(E)}}}export{C as a,G as e,T as h,F as r};