<<<<<<<< HEAD:ui/dist/assets/AuthWithOAuth2Docs-BMmL2-rQ.js
import{S as xe,i as Ee,s as Je,N as Le,O as z,e as o,w as k,b as h,c as I,f as p,g as r,h as a,m as K,x as pe,P as Ue,Q as Ne,k as Qe,R as ze,n as Ie,t as L,a as x,o as c,d as G,C as Be,p as Ke,r as X,u as Ge}from"./index-DmCU9ByA.js";import{S as Xe}from"./SdkTabs-jU9Bl1pP.js";import{F as Ye}from"./FieldsQueryParam-DBwRPc43.js";function Fe(s,l,n){const i=s.slice();return i[5]=l[n],i}function He(s,l,n){const i=s.slice();return i[5]=l[n],i}function je(s,l){let n,i=l[5].code+"",f,g,d,b;function _(){return l[4](l[5])}return{key:s,first:null,c(){n=o("button"),f=k(i),g=h(),p(n,"class","tab-item"),X(n,"active",l[1]===l[5].code),this.first=n},m(v,O){r(v,n,O),a(n,f),a(n,g),d||(b=Ge(n,"click",_),d=!0)},p(v,O){l=v,O&4&&i!==(i=l[5].code+"")&&pe(f,i),O&6&&X(n,"active",l[1]===l[5].code)},d(v){v&&c(n),d=!1,b()}}}function Ve(s,l){let n,i,f,g;return i=new Le({props:{content:l[5].body}}),{key:s,first:null,c(){n=o("div"),I(i.$$.fragment),f=h(),p(n,"class","tab-item"),X(n,"active",l[1]===l[5].code),this.first=n},m(d,b){r(d,n,b),K(i,n,null),a(n,f),g=!0},p(d,b){l=d;const _={};b&4&&(_.content=l[5].body),i.$set(_),(!g||b&6)&&X(n,"active",l[1]===l[5].code)},i(d){g||(L(i.$$.fragment,d),g=!0)},o(d){x(i.$$.fragment,d),g=!1},d(d){d&&c(n),G(i)}}}function Ze(s){let l,n,i=s[0].name+"",f,g,d,b,_,v,O,P,Y,A,E,be,J,R,me,Z,N=s[0].name+"",ee,fe,te,M,ae,W,le,U,ne,S,oe,ge,B,y,se,ke,ie,_e,m,ve,C,we,$e,Oe,re,Ae,ce,Se,ye,Te,de,Ce,qe,q,ue,F,he,T,H,$=[],De=new Map,Pe,j,w=[],Re=new Map,D;v=new Xe({props:{js:`
========
import{S as Ee,i as Je,s as xe,V as ze,W as Ve,X as Q,h as o,z as _,j as h,c as G,k as p,n as r,o as a,m as I,H as pe,Y as Ue,Z as Ne,E as Qe,_ as Ge,G as Ie,t as V,a as E,v as c,d as K,J as Be,p as Ke,l as X,q as Xe}from"./index-C5HjUo48.js";import{F as Ye}from"./FieldsQueryParam-DCTtI9gQ.js";function Fe(s,l,n){const i=s.slice();return i[5]=l[n],i}function He(s,l,n){const i=s.slice();return i[5]=l[n],i}function Le(s,l){let n,i=l[5].code+"",f,g,d,b;function k(){return l[4](l[5])}return{key:s,first:null,c(){n=o("button"),f=_(i),g=h(),p(n,"class","tab-item"),X(n,"active",l[1]===l[5].code),this.first=n},m(v,O){r(v,n,O),a(n,f),a(n,g),d||(b=Xe(n,"click",k),d=!0)},p(v,O){l=v,O&4&&i!==(i=l[5].code+"")&&pe(f,i),O&6&&X(n,"active",l[1]===l[5].code)},d(v){v&&c(n),d=!1,b()}}}function je(s,l){let n,i,f,g;return i=new Ve({props:{content:l[5].body}}),{key:s,first:null,c(){n=o("div"),G(i.$$.fragment),f=h(),p(n,"class","tab-item"),X(n,"active",l[1]===l[5].code),this.first=n},m(d,b){r(d,n,b),I(i,n,null),a(n,f),g=!0},p(d,b){l=d;const k={};b&4&&(k.content=l[5].body),i.$set(k),(!g||b&6)&&X(n,"active",l[1]===l[5].code)},i(d){g||(V(i.$$.fragment,d),g=!0)},o(d){E(i.$$.fragment,d),g=!1},d(d){d&&c(n),K(i)}}}function Ze(s){let l,n,i=s[0].name+"",f,g,d,b,k,v,O,D,Y,A,J,be,x,P,me,Z,z=s[0].name+"",ee,fe,te,M,ae,W,le,U,ne,y,oe,ge,B,S,se,_e,ie,ke,m,ve,C,we,$e,Oe,re,Ae,ce,ye,Se,Te,de,Ce,qe,q,ue,F,he,T,H,$=[],Re=new Map,De,L,w=[],Pe=new Map,R;v=new ze({props:{js:`
>>>>>>>> upstream/master:ui/dist/assets/AuthWithOAuth2Docs-Br-P3Pga.js
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${s[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${s[3]}/api/oauth2-redirect as redirect url.
        const authData = await pb.collection('${s[0].name}').authWithOAuth2({ provider: 'google' });

        // OR authenticate with manual OAuth2 code exchange
        // const authData = await pb.collection('${s[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';
        import 'package:url_launcher/url_launcher.dart';

        final pb = PocketBase('${s[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${s[3]}/api/oauth2-redirect as redirect url.
        final authData = await pb.collection('${s[0].name}').authWithOAuth2('google', (url) async {
          await launchUrl(url);
        });

        // OR authenticate with manual OAuth2 code exchange
        // final authData = await pb.collection('${s[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
<<<<<<<< HEAD:ui/dist/assets/AuthWithOAuth2Docs-BMmL2-rQ.js
    `}}),C=new Le({props:{content:"?expand=relField1,relField2.subRelField"}}),q=new Ye({props:{prefix:"record."}});let Q=z(s[2]);const Me=e=>e[5].code;for(let e=0;e<Q.length;e+=1){let t=He(s,Q,e),u=Me(t);De.set(u,$[e]=je(u,t))}let V=z(s[2]);const We=e=>e[5].code;for(let e=0;e<V.length;e+=1){let t=Fe(s,V,e),u=We(t);Re.set(u,w[e]=Ve(u,t))}return{c(){l=o("h3"),n=k("Auth with OAuth2 ("),f=k(i),g=k(")"),d=h(),b=o("div"),b.innerHTML=`<p>Authenticate with an OAuth2 provider and returns a new auth token and record data.</p> <p>For more details please check the
        <a href="https://pocketbase.io/docs/authentication/#oauth2-integration" target="_blank" rel="noopener noreferrer">OAuth2 integration documentation
        </a>.</p>`,_=h(),I(v.$$.fragment),O=h(),P=o("h6"),P.textContent="API details",Y=h(),A=o("div"),E=o("strong"),E.textContent="POST",be=h(),J=o("div"),R=o("p"),me=k("/api/collections/"),Z=o("strong"),ee=k(N),fe=k("/auth-with-oauth2"),te=h(),M=o("div"),M.textContent="Body Parameters",ae=h(),W=o("table"),W.innerHTML=`<thead><tr><th>Param</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>provider</span></div></td> <td><span class="label">String</span></td> <td>The name of the OAuth2 client provider (eg. &quot;google&quot;).</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>code</span></div></td> <td><span class="label">String</span></td> <td>The authorization code returned from the initial request.</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>codeVerifier</span></div></td> <td><span class="label">String</span></td> <td>The code verifier sent with the initial request as part of the code_challenge.</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>redirectUrl</span></div></td> <td><span class="label">String</span></td> <td>The redirect url sent with the initial request.</td></tr> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>createData</span></div></td> <td><span class="label">Object</span></td> <td><p>Optional data that will be used when creating the auth record on OAuth2 sign-up.</p> <p>The created auth record must comply with the same requirements and validations in the
                    regular <strong>create</strong> action.
                    <br/> <em>The data can only be in <code>json</code>, aka. <code>multipart/form-data</code> and files
                        upload currently are not supported during OAuth2 sign-ups.</em></p></td></tr></tbody>`,le=h(),U=o("div"),U.textContent="Query parameters",ne=h(),S=o("table"),oe=o("thead"),oe.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',ge=h(),B=o("tbody"),y=o("tr"),se=o("td"),se.textContent="expand",ke=h(),ie=o("td"),ie.innerHTML='<span class="label">String</span>',_e=h(),m=o("td"),ve=k(`Auto expand record relations. Ex.:
                `),I(C.$$.fragment),we=k(`
                Supports up to 6-levels depth nested relations expansion. `),$e=o("br"),Oe=k(`
                The expanded relations will be appended to the record under the
                `),re=o("code"),re.textContent="expand",Ae=k(" property (eg. "),ce=o("code"),ce.textContent='"expand": {"relField1": {...}, ...}',Se=k(`).
                `),ye=o("br"),Te=k(`
                Only the relations to which the request user has permissions to `),de=o("strong"),de.textContent="view",Ce=k(" will be expanded."),qe=h(),I(q.$$.fragment),ue=h(),F=o("div"),F.textContent="Responses",he=h(),T=o("div"),H=o("div");for(let e=0;e<$.length;e+=1)$[e].c();Pe=h(),j=o("div");for(let e=0;e<w.length;e+=1)w[e].c();p(l,"class","m-b-sm"),p(b,"class","content txt-lg m-b-sm"),p(P,"class","m-b-xs"),p(E,"class","label label-primary"),p(J,"class","content"),p(A,"class","alert alert-success"),p(M,"class","section-title"),p(W,"class","table-compact table-border m-b-base"),p(U,"class","section-title"),p(S,"class","table-compact table-border m-b-base"),p(F,"class","section-title"),p(H,"class","tabs-header compact combined left"),p(j,"class","tabs-content"),p(T,"class","tabs")},m(e,t){r(e,l,t),a(l,n),a(l,f),a(l,g),r(e,d,t),r(e,b,t),r(e,_,t),K(v,e,t),r(e,O,t),r(e,P,t),r(e,Y,t),r(e,A,t),a(A,E),a(A,be),a(A,J),a(J,R),a(R,me),a(R,Z),a(Z,ee),a(R,fe),r(e,te,t),r(e,M,t),r(e,ae,t),r(e,W,t),r(e,le,t),r(e,U,t),r(e,ne,t),r(e,S,t),a(S,oe),a(S,ge),a(S,B),a(B,y),a(y,se),a(y,ke),a(y,ie),a(y,_e),a(y,m),a(m,ve),K(C,m,null),a(m,we),a(m,$e),a(m,Oe),a(m,re),a(m,Ae),a(m,ce),a(m,Se),a(m,ye),a(m,Te),a(m,de),a(m,Ce),a(B,qe),K(q,B,null),r(e,ue,t),r(e,F,t),r(e,he,t),r(e,T,t),a(T,H);for(let u=0;u<$.length;u+=1)$[u]&&$[u].m(H,null);a(T,Pe),a(T,j);for(let u=0;u<w.length;u+=1)w[u]&&w[u].m(j,null);D=!0},p(e,[t]){(!D||t&1)&&i!==(i=e[0].name+"")&&pe(f,i);const u={};t&9&&(u.js=`
========
    `}}),C=new Ve({props:{content:"?expand=relField1,relField2.subRelField"}}),q=new Ye({props:{prefix:"record."}});let N=Q(s[2]);const Me=e=>e[5].code;for(let e=0;e<N.length;e+=1){let t=He(s,N,e),u=Me(t);Re.set(u,$[e]=Le(u,t))}let j=Q(s[2]);const We=e=>e[5].code;for(let e=0;e<j.length;e+=1){let t=Fe(s,j,e),u=We(t);Pe.set(u,w[e]=je(u,t))}return{c(){l=o("h3"),n=_("Auth with OAuth2 ("),f=_(i),g=_(")"),d=h(),b=o("div"),b.innerHTML=`<p>Authenticate with an OAuth2 provider and returns a new auth token and record data.</p> <p>For more details please check the
        <a href="https://pocketbase.io/docs/authentication/#authenticate-with-oauth2" target="_blank" rel="noopener noreferrer">OAuth2 integration documentation
        </a>.</p>`,k=h(),G(v.$$.fragment),O=h(),D=o("h6"),D.textContent="API details",Y=h(),A=o("div"),J=o("strong"),J.textContent="POST",be=h(),x=o("div"),P=o("p"),me=_("/api/collections/"),Z=o("strong"),ee=_(z),fe=_("/auth-with-oauth2"),te=h(),M=o("div"),M.textContent="Body Parameters",ae=h(),W=o("table"),W.innerHTML=`<thead><tr><th>Param</th> <th>Type</th> <th width="50%">Description</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>provider</span></div></td> <td><span class="label">String</span></td> <td>The name of the OAuth2 client provider (eg. &quot;google&quot;).</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>code</span></div></td> <td><span class="label">String</span></td> <td>The authorization code returned from the initial request.</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>codeVerifier</span></div></td> <td><span class="label">String</span></td> <td>The code verifier sent with the initial request as part of the code_challenge.</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>redirectURL</span></div></td> <td><span class="label">String</span></td> <td>The redirect url sent with the initial request.</td></tr> <tr><td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>createData</span></div></td> <td><span class="label">Object</span></td> <td><p>Optional data that will be used when creating the auth record on OAuth2 sign-up.</p> <p>The created auth record must comply with the same requirements and validations in the
                    regular <strong>create</strong> action.
                    <br/> <em>The data can only be in <code>json</code>, aka. <code>multipart/form-data</code> and files
                        upload currently are not supported during OAuth2 sign-ups.</em></p></td></tr></tbody>`,le=h(),U=o("div"),U.textContent="Query parameters",ne=h(),y=o("table"),oe=o("thead"),oe.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',ge=h(),B=o("tbody"),S=o("tr"),se=o("td"),se.textContent="expand",_e=h(),ie=o("td"),ie.innerHTML='<span class="label">String</span>',ke=h(),m=o("td"),ve=_(`Auto expand record relations. Ex.:
                `),G(C.$$.fragment),we=_(`
                Supports up to 6-levels depth nested relations expansion. `),$e=o("br"),Oe=_(`
                The expanded relations will be appended to the record under the
                `),re=o("code"),re.textContent="expand",Ae=_(" property (eg. "),ce=o("code"),ce.textContent='"expand": {"relField1": {...}, ...}',ye=_(`).
                `),Se=o("br"),Te=_(`
                Only the relations to which the request user has permissions to `),de=o("strong"),de.textContent="view",Ce=_(" will be expanded."),qe=h(),G(q.$$.fragment),ue=h(),F=o("div"),F.textContent="Responses",he=h(),T=o("div"),H=o("div");for(let e=0;e<$.length;e+=1)$[e].c();De=h(),L=o("div");for(let e=0;e<w.length;e+=1)w[e].c();p(l,"class","m-b-sm"),p(b,"class","content txt-lg m-b-sm"),p(D,"class","m-b-xs"),p(J,"class","label label-primary"),p(x,"class","content"),p(A,"class","alert alert-success"),p(M,"class","section-title"),p(W,"class","table-compact table-border m-b-base"),p(U,"class","section-title"),p(y,"class","table-compact table-border m-b-base"),p(F,"class","section-title"),p(H,"class","tabs-header compact combined left"),p(L,"class","tabs-content"),p(T,"class","tabs")},m(e,t){r(e,l,t),a(l,n),a(l,f),a(l,g),r(e,d,t),r(e,b,t),r(e,k,t),I(v,e,t),r(e,O,t),r(e,D,t),r(e,Y,t),r(e,A,t),a(A,J),a(A,be),a(A,x),a(x,P),a(P,me),a(P,Z),a(Z,ee),a(P,fe),r(e,te,t),r(e,M,t),r(e,ae,t),r(e,W,t),r(e,le,t),r(e,U,t),r(e,ne,t),r(e,y,t),a(y,oe),a(y,ge),a(y,B),a(B,S),a(S,se),a(S,_e),a(S,ie),a(S,ke),a(S,m),a(m,ve),I(C,m,null),a(m,we),a(m,$e),a(m,Oe),a(m,re),a(m,Ae),a(m,ce),a(m,ye),a(m,Se),a(m,Te),a(m,de),a(m,Ce),a(B,qe),I(q,B,null),r(e,ue,t),r(e,F,t),r(e,he,t),r(e,T,t),a(T,H);for(let u=0;u<$.length;u+=1)$[u]&&$[u].m(H,null);a(T,De),a(T,L);for(let u=0;u<w.length;u+=1)w[u]&&w[u].m(L,null);R=!0},p(e,[t]){(!R||t&1)&&i!==(i=e[0].name+"")&&pe(f,i);const u={};t&9&&(u.js=`
>>>>>>>> upstream/master:ui/dist/assets/AuthWithOAuth2Docs-Br-P3Pga.js
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${e[3]}/api/oauth2-redirect as redirect url.
        const authData = await pb.collection('${e[0].name}').authWithOAuth2({ provider: 'google' });

        // OR authenticate with manual OAuth2 code exchange
        // const authData = await pb.collection('${e[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `),t&9&&(u.dart=`
        import 'package:pocketbase/pocketbase.dart';
        import 'package:url_launcher/url_launcher.dart';

        final pb = PocketBase('${e[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${e[3]}/api/oauth2-redirect as redirect url.
        final authData = await pb.collection('${e[0].name}').authWithOAuth2('google', (url) async {
          await launchUrl(url);
        });

        // OR authenticate with manual OAuth2 code exchange
        // final authData = await pb.collection('${e[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
<<<<<<<< HEAD:ui/dist/assets/AuthWithOAuth2Docs-BMmL2-rQ.js
    `),v.$set(u),(!D||t&1)&&N!==(N=e[0].name+"")&&pe(ee,N),t&6&&(Q=z(e[2]),$=Ue($,t,Me,1,e,Q,De,H,Ne,je,null,He)),t&6&&(V=z(e[2]),Qe(),w=Ue(w,t,We,1,e,V,Re,j,ze,Ve,null,Fe),Ie())},i(e){if(!D){L(v.$$.fragment,e),L(C.$$.fragment,e),L(q.$$.fragment,e);for(let t=0;t<V.length;t+=1)L(w[t]);D=!0}},o(e){x(v.$$.fragment,e),x(C.$$.fragment,e),x(q.$$.fragment,e);for(let t=0;t<w.length;t+=1)x(w[t]);D=!1},d(e){e&&(c(l),c(d),c(b),c(_),c(O),c(P),c(Y),c(A),c(te),c(M),c(ae),c(W),c(le),c(U),c(ne),c(S),c(ue),c(F),c(he),c(T)),G(v,e),G(C),G(q);for(let t=0;t<$.length;t+=1)$[t].d();for(let t=0;t<w.length;t+=1)w[t].d()}}}function et(s,l,n){let i,{collection:f}=l,g=200,d=[];const b=_=>n(1,g=_.code);return s.$$set=_=>{"collection"in _&&n(0,f=_.collection)},s.$$.update=()=>{s.$$.dirty&1&&n(2,d=[{code:200,body:JSON.stringify({token:"JWT_AUTH_TOKEN",record:Be.dummyCollectionRecord(f),meta:{id:"abc123",name:"John Doe",username:"john.doe",email:"test@example.com",avatarUrl:"https://example.com/avatar.png",accessToken:"...",refreshToken:"...",rawUser:{}}},null,2)},{code:400,body:`
========
    `),v.$set(u),(!R||t&1)&&z!==(z=e[0].name+"")&&pe(ee,z),t&6&&(N=Q(e[2]),$=Ue($,t,Me,1,e,N,Re,H,Ne,Le,null,He)),t&6&&(j=Q(e[2]),Qe(),w=Ue(w,t,We,1,e,j,Pe,L,Ge,je,null,Fe),Ie())},i(e){if(!R){V(v.$$.fragment,e),V(C.$$.fragment,e),V(q.$$.fragment,e);for(let t=0;t<j.length;t+=1)V(w[t]);R=!0}},o(e){E(v.$$.fragment,e),E(C.$$.fragment,e),E(q.$$.fragment,e);for(let t=0;t<w.length;t+=1)E(w[t]);R=!1},d(e){e&&(c(l),c(d),c(b),c(k),c(O),c(D),c(Y),c(A),c(te),c(M),c(ae),c(W),c(le),c(U),c(ne),c(y),c(ue),c(F),c(he),c(T)),K(v,e),K(C),K(q);for(let t=0;t<$.length;t+=1)$[t].d();for(let t=0;t<w.length;t+=1)w[t].d()}}}function et(s,l,n){let i,{collection:f}=l,g=200,d=[];const b=k=>n(1,g=k.code);return s.$$set=k=>{"collection"in k&&n(0,f=k.collection)},s.$$.update=()=>{s.$$.dirty&1&&n(2,d=[{code:200,body:JSON.stringify({token:"JWT_AUTH_TOKEN",record:Be.dummyCollectionRecord(f),meta:{id:"abc123",name:"John Doe",username:"john.doe",email:"test@example.com",avatarURL:"https://example.com/avatar.png",accessToken:"...",refreshToken:"...",rawUser:{}}},null,2)},{code:400,body:`
>>>>>>>> upstream/master:ui/dist/assets/AuthWithOAuth2Docs-Br-P3Pga.js
                {
                  "code": 400,
                  "message": "An error occurred while submitting the form.",
                  "data": {
                    "provider": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
<<<<<<<< HEAD:ui/dist/assets/AuthWithOAuth2Docs-BMmL2-rQ.js
            `}])},n(3,i=Be.getApiExampleUrl(Ke.baseUrl)),[f,g,d,i,b]}class nt extends xe{constructor(l){super(),Ee(this,l,et,Ze,Je,{collection:0})}}export{nt as default};
========
            `}])},n(3,i=Be.getApiExampleUrl(Ke.baseURL)),[f,g,d,i,b]}class lt extends Ee{constructor(l){super(),Je(this,l,et,Ze,xe,{collection:0})}}export{lt as default};
>>>>>>>> upstream/master:ui/dist/assets/AuthWithOAuth2Docs-Br-P3Pga.js
