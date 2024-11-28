import{S as I,i as J,s as N,W as O,h as t,j as c,z as i,c as P,k as Q,n as R,o as e,m as W,H as A,t as D,a as G,v as K,d as U}from"./index-C5HjUo48.js";function V(f){let n,o,u,d,v,s,p,y,g,F,r,S,_,w,b,E,C,a,$,H,L,q,M,T,m,j,k,z,x;return r=new O({props:{content:"?fields=*,"+f[0]+"expand.relField.name"}}),{c(){n=t("tr"),o=t("td"),o.textContent="fields",u=c(),d=t("td"),d.innerHTML='<span class="label">String</span>',v=c(),s=t("td"),p=t("p"),y=i(`Comma separated string of the fields to return in the JSON response
            `),g=t("em"),g.textContent="(by default returns all fields)",F=i(`. Ex.:
            `),P(r.$$.fragment),S=c(),_=t("p"),_.innerHTML="<code>*</code> targets all keys from the specific depth level.",w=c(),b=t("p"),b.textContent="In addition, the following field modifiers are also supported:",E=c(),C=t("ul"),a=t("li"),$=t("code"),$.textContent=":excerpt(maxLength, withEllipsis?)",H=c(),L=t("br"),q=i(`
                Returns a short plain text version of the field string value.
                `),M=t("br"),T=i(`
                Ex.:
                `),m=t("code"),j=i("?fields=*,"),k=i(f[0]),z=i("description:excerpt(200,true)"),Q(o,"id","query-page")},m(l,h){R(l,n,h),e(n,o),e(n,u),e(n,d),e(n,v),e(n,s),e(s,p),e(p,y),e(p,g),e(p,F),W(r,p,null),e(s,S),e(s,_),e(s,w),e(s,b),e(s,E),e(s,C),e(C,a),e(a,$),e(a,H),e(a,L),e(a,q),e(a,M),e(a,T),e(a,m),e(m,j),e(m,k),e(m,z),x=!0},p(l,[h]){const B={};h&1&&(B.content="?fields=*,"+l[0]+"expand.relField.name"),r.$set(B),(!x||h&1)&&A(k,l[0])},i(l){x||(D(r.$$.fragment,l),x=!0)},o(l){G(r.$$.fragment,l),x=!1},d(l){l&&K(n),U(r)}}}function X(f,n,o){let{prefix:u=""}=n;return f.$$set=d=>{"prefix"in d&&o(0,u=d.prefix)},[u]}class Z extends I{constructor(n){super(),J(this,n,X,V,N,{prefix:0})}}export{Z as F};
