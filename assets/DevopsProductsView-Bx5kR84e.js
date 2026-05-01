import{e as we,j as et,n as nt,o as P,c as j,a as A,t as J,d as fe,F as he,h as ve,f as Ve,k as tt,_ as st,i as it,u as rt,b as ot}from"./index-6WvSj7E2.js";const at=[{id:1,title:"Portfolio CI/CD & Automation",description:"Automatiseret dependency management, build checks og deployment.",purpose:"Sikrer stabil kode, automatiseret build-test og kontinuerlig deployment til GitHub Pages.",trigger:"Dependabot kører månedligt. Build-check trigges ved PR/push. Deploy trigges ved push til master.",repository:"https://github.com/Gatherer4466/gatherer4466.github.io/tree/master/.github",stack:["GitHub Actions","Node.js 22.12","Dependabot","GitHub Pages"],files:[{filename:"dependabot.yaml",language:"yaml",content:`# To get started with Dependabot version updates, you'll need to specify which
# package ecosystems to update and where the package manifests are located.

version: 2
updates:
- package-ecosystem: "npm" # See documentation for possible values
  directory: "/" # Location of package manifests
  schedule:
    interval: "monthly"

  target-branch: "dev"`},{filename:"workflows/.build-check.yaml",language:"yaml",content:`name: Build Check

on:
  workflow_dispatch:
    inputs:
      branch:
        description: 'Branch to test build'
        required: true
        default: 'dependabot/npm_and_yarn/...'
  push:
    branches:
      - 'dependabot/**'
      - 'dev'
  pull_request:
    branches:
      - master

jobs:
  build-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout branch
        uses: actions/checkout@v4
        with:
          ref: \${{ github.event.inputs.branch || github.head_ref || github.ref_name }}

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 22.12

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build`},{filename:"workflows/.deploy.yaml",language:"yaml",content:`name: Deploy to GitHub Pages

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 22.12

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: dist
          clean: true
          token: \${{ secrets.GH_TOKEN }}`}]},{id:2,title:"Automatiseret test af både typescript logik, men også vue komponenter",description:"Automatiseret testopsætning med Vitest, der dækker både TypeScript-logik og Vue-komponenter, og som eksekveres kontinuerligt via GitHub Actions for at sikre kodekvalitet.",purpose:"Kør tests automatisk, hver gang der bliver pushet eller oprettet et pull request på github.",trigger:"Hvert push til det tilhørende repository",repository:"https://github.com/Gatherer4466/automatedTesting/blob/main/.github/workflows/DetailedTesting.yml",stack:["GitHub Actions","Node.js 22.12","vitest"],files:[{filename:"workflows/AutomateTests.yml",language:"yaml",content:`name: Run Tests

on:
  push:
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22.12

      - name: Install dependencies
        run: npm install

      - name: Run Tests
        run: npm run test:run`}]},{id:3,title:"Dockerized Node.js API",description:"Containerisering af en Express API skrevet i TypeScript, bygget og kørt via Docker.",purpose:"Gør applikationen nem at deploye og køre konsistent på tværs af miljøer.",trigger:"Bygges og køres manuelt eller via CI/CD pipeline.",repository:"https://github.com/Gatherer4466/docker-imaging/blob/main/dockerfile",stack:["Docker","Node.js 20","Express","TypeScript"],files:[{filename:"Dockerfile",language:"dockerfile",content:`FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]`}]},{id:4,title:"Docker compose guide produkt",description:"Produktet af, at følge den officielle quickstart guide til docker compose, denne guide består af en ekstrem simpel Flask web server i python, hvor vi gør brug af redis, til at gemme en cache med hvor mange gange hjemmesiden er blevet 'hittet' for at både fremvise backend samt frontend der kører på samme tid vha docker compose.",purpose:"Fremvisning af hvordan man kunne få frontend og backend til at køre parralelt",repository:"https://github.com/Gatherer4466/dockerCompose",stack:["Docker","Flask","Python"],files:[{filename:"dockerfile",language:"docker",content:`# syntax=docker/dockerfile:1
FROM python:3.12-alpine  
WORKDIR /code 
ENV FLASK_APP=app.py  
ENV FLASK_RUN_HOST=0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers 
COPY requirements.txt . 
RUN pip install -r requirements.txt  
COPY . . 
EXPOSE 5000
CMD ["flask", "run", "--debug"]`},{filename:"compose.yaml",language:"yaml",content:`include: 
  - path: ./infra.yaml
services:
  web:
    build: .
    ports:
      - "\${APP_PORT}:5000"
    environment: 
      - REDIS_HOST=\${REDIS_HOST}
      - REDIS_PORT=\${REDIS_PORT}
    depends_on:
      redis:
        condition: service_healthy
    develop:
      watch:
        - action: sync+restart
          path: .
          target: /code
        - action: rebuild
          path: requirements.txt`},{filename:"infra.yaml",language:"yaml",content:`services:
  redis:
    image: redis:alpine
    volumes:
      - redis-data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 5s
      timeout: 3s
      retries: 5
      start_period: 10s

volumes:
  redis-data:`},{filename:"app.py",language:"python",content:`import os
import redis
from flask import Flask

app = Flask(__name__)
cache = redis.Redis(
    host=os.getenv("REDIS_HOST", "redis"),
    port=int(os.getenv("REDIS_PORT", "6379")),
)

@app.route("/")
def hello():
    count = cache.incr("hits")
    return f"Hello from Docker! I have been seen {count} time(s).\\n"`}]},{id:5,title:"Dockerized .NET API med MSSQL",description:"Containerisering af en ASP.NET Core applikation med tilhørende Microsoft SQL Server database via Docker Compose. Dog, kunne man udvide dette med for eksempel, at sætte database password i en .env fil, så man også har secret håndtering, men det en anden sag.",purpose:"Muliggør nem opsætning af både backend og database i isolerede containere, hvilket sikrer konsistent udviklings- og kørselsmiljø.",trigger:"Bygges og startes via docker compose up, enten manuelt eller som en del af CI/CD pipeline.",repository:"https://github.com/Gatherer4466/LystfiskerPortalen",stack:["Docker",".NET 8","ASP.NET Core","MSSQL","Docker Compose"],files:[{filename:"Dockerfile",language:"dockerfile",content:`FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY *.sln .
COPY LystfiskerPortalen/*.csproj LystfiskerPortalen/
COPY FiskerTest/*.csproj FiskerTest/
COPY FeedIntegrationsTest/*.csproj FeedIntegrationsTest/
RUN dotnet restore

COPY . .
WORKDIR /src/LystfiskerPortalen
RUN dotnet publish -c Release -o /app/out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

COPY --from=build /app/out .

EXPOSE 8080
ENTRYPOINT ["dotnet", "LystfiskerPortalen.dll"]`},{filename:"docker-compose.yml",language:"yaml",content:`version: "3.9"

services:
  db:
    image: mcr.microsoft.com/mssql/server:2022-latest
    container_name: fisker_db
    environment:
      - ACCEPT_EULA=Y
      - SA_PASSWORD=YourStrong!Passw0rd
    ports:
      - "1433:1433"
    volumes:
      - db-data:/var/opt/mssql

  app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: fisker_app
    depends_on:
      - db
    environment:
      - ConnectionStrings__Data=Server=db;Database=FiskerDb;User=sa;Password=YourStrong!Passw0rd;TrustServerCertificate=True
    ports:
      - "5000:8080"

volumes:
  db-data:`}]}],ct={products:at};function lt(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Ne,qe;function ut(){if(qe)return Ne;qe=1;function u(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const s=e[n],g=typeof s;(g==="object"||g==="function")&&!Object.isFrozen(s)&&u(s)}),e}class w{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function _(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function m(e,...n){const s=Object.create(null);for(const g in e)s[g]=e[g];return n.forEach(function(g){for(const y in g)s[y]=g[y]}),s}const z="</span>",ne=e=>!!e.scope,te=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const s=e.split(".");return[`${n}${s.shift()}`,...s.map((g,y)=>`${g}${"_".repeat(y+1)}`)].join(" ")}return`${n}${e}`};class G{constructor(n,s){this.buffer="",this.classPrefix=s.classPrefix,n.walk(this)}addText(n){this.buffer+=_(n)}openNode(n){if(!ne(n))return;const s=te(n.scope,{prefix:this.classPrefix});this.span(s)}closeNode(n){ne(n)&&(this.buffer+=z)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const x=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class B{constructor(){this.rootNode=x(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const s=x({scope:n});this.add(s),this.stack.push(s)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,s){return typeof s=="string"?n.addText(s):s.children&&(n.openNode(s),s.children.forEach(g=>this._walk(n,g)),n.closeNode(s)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(s=>typeof s=="string")?n.children=[n.children.join("")]:n.children.forEach(s=>{B._collapse(s)}))}}class X extends B{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,s){const g=n.root;s&&(g.scope=`language:${s}`),this.add(g)}toHTML(){return new G(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function D(e){return e?typeof e=="string"?e:e.source:null}function C(e){return M("(?=",e,")")}function K(e){return M("(?:",e,")*")}function L(e){return M("(?:",e,")?")}function M(...e){return e.map(s=>D(s)).join("")}function Z(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function H(...e){return"("+(Z(e).capture?"":"?:")+e.map(g=>D(g)).join("|")+")"}function Me(e){return new RegExp(e.toString()+"|").exec("").length-1}function Je(e,n){const s=e&&e.exec(n);return s&&s.index===0}const Ze=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function be(e,{joinWith:n}){let s=0;return e.map(g=>{s+=1;const y=s;let k=D(g),o="";for(;k.length>0;){const r=Ze.exec(k);if(!r){o+=k;break}o+=k.substring(0,r.index),k=k.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?o+="\\"+String(Number(r[1])+y):(o+=r[0],r[0]==="("&&s++)}return o}).map(g=>`(${g})`).join(n)}const Qe=/\b\B/,Ae="[a-zA-Z]\\w*",Ee="[a-zA-Z_]\\w*",Te="\\b\\d+(\\.\\d+)?",xe="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",De="\\b(0b[01]+)",en="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",nn=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=M(n,/.*\b/,e.binary,/\b.*/)),m({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(s,g)=>{s.index!==0&&g.ignoreMatch()}},e)},se={begin:"\\\\[\\s\\S]",relevance:0},tn={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[se]},sn={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[se]},rn={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},re=function(e,n,s={}){const g=m({scope:"comment",begin:e,end:n,contains:[]},s);g.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const y=H("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return g.contains.push({begin:M(/[ ]+/,"(",y,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),g},on=re("//","$"),an=re("/\\*","\\*/"),cn=re("#","$"),ln={scope:"number",begin:Te,relevance:0},un={scope:"number",begin:xe,relevance:0},gn={scope:"number",begin:De,relevance:0},dn={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[se,{begin:/\[/,end:/\]/,relevance:0,contains:[se]}]},fn={scope:"title",begin:Ae,relevance:0},pn={scope:"title",begin:Ee,relevance:0},hn={begin:"\\.\\s*"+Ee,relevance:0};var oe=Object.freeze({__proto__:null,APOS_STRING_MODE:tn,BACKSLASH_ESCAPE:se,BINARY_NUMBER_MODE:gn,BINARY_NUMBER_RE:De,COMMENT:re,C_BLOCK_COMMENT_MODE:an,C_LINE_COMMENT_MODE:on,C_NUMBER_MODE:un,C_NUMBER_RE:xe,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(n,s)=>{s.data._beginMatch=n[1]},"on:end":(n,s)=>{s.data._beginMatch!==n[1]&&s.ignoreMatch()}})},HASH_COMMENT_MODE:cn,IDENT_RE:Ae,MATCH_NOTHING_RE:Qe,METHOD_GUARD:hn,NUMBER_MODE:ln,NUMBER_RE:Te,PHRASAL_WORDS_MODE:rn,QUOTE_STRING_MODE:sn,REGEXP_MODE:dn,RE_STARTERS_RE:en,SHEBANG:nn,TITLE_MODE:fn,UNDERSCORE_IDENT_RE:Ee,UNDERSCORE_TITLE_MODE:pn});function bn(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function En(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function _n(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=bn,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function mn(e,n){Array.isArray(e.illegal)&&(e.illegal=H(...e.illegal))}function yn(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function kn(e,n){e.relevance===void 0&&(e.relevance=1)}const Rn=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const s=Object.assign({},e);Object.keys(e).forEach(g=>{delete e[g]}),e.keywords=s.keywords,e.begin=M(s.beforeMatch,C(s.begin)),e.starts={relevance:0,contains:[Object.assign(s,{endsParent:!0})]},e.relevance=0,delete s.beforeMatch},Sn=["of","and","for","in","not","or","if","then","parent","list","value"],On="keyword";function Ce(e,n,s=On){const g=Object.create(null);return typeof e=="string"?y(s,e.split(" ")):Array.isArray(e)?y(s,e):Object.keys(e).forEach(function(k){Object.assign(g,Ce(e[k],n,k))}),g;function y(k,o){n&&(o=o.map(r=>r.toLowerCase())),o.forEach(function(r){const l=r.split("|");g[l[0]]=[k,Nn(l[0],l[1])]})}}function Nn(e,n){return n?Number(n):vn(e)?0:1}function vn(e){return Sn.includes(e.toLowerCase())}const Ie={},V=e=>{console.error(e)},Pe=(e,...n)=>{console.log(`WARN: ${e}`,...n)},Q=(e,n)=>{Ie[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),Ie[`${e}/${n}`]=!0)},ae=new Error;function Be(e,n,{key:s}){let g=0;const y=e[s],k={},o={};for(let r=1;r<=n.length;r++)o[r+g]=y[r],k[r+g]=!0,g+=Me(n[r-1]);e[s]=o,e[s]._emit=k,e[s]._multi=!0}function wn(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw V("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ae;if(typeof e.beginScope!="object"||e.beginScope===null)throw V("beginScope must be object"),ae;Be(e,e.begin,{key:"beginScope"}),e.begin=be(e.begin,{joinWith:""})}}function Mn(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw V("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ae;if(typeof e.endScope!="object"||e.endScope===null)throw V("endScope must be object"),ae;Be(e,e.end,{key:"endScope"}),e.end=be(e.end,{joinWith:""})}}function An(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Tn(e){An(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),wn(e),Mn(e)}function xn(e){function n(o,r){return new RegExp(D(o),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class s{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,r]),this.matchAt+=Me(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(l=>l[1]);this.matcherRe=n(be(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(r);if(!l)return null;const O=l.findIndex((ie,me)=>me>0&&ie!==void 0),R=this.matchIndexes[O];return l.splice(0,O),Object.assign(l,R)}}class g{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const l=new s;return this.rules.slice(r).forEach(([O,R])=>l.addRule(O,R)),l.compile(),this.multiRegexes[r]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,l){this.rules.push([r,l]),l.type==="begin"&&this.count++}exec(r){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let O=l.exec(r);if(this.resumingScanAtSamePosition()&&!(O&&O.index===this.lastIndex)){const R=this.getMatcher(0);R.lastIndex=this.lastIndex+1,O=R.exec(r)}return O&&(this.regexIndex+=O.position+1,this.regexIndex===this.count&&this.considerAll()),O}}function y(o){const r=new g;return o.contains.forEach(l=>r.addRule(l.begin,{rule:l,type:"begin"})),o.terminatorEnd&&r.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&r.addRule(o.illegal,{type:"illegal"}),r}function k(o,r){const l=o;if(o.isCompiled)return l;[En,yn,Tn,Rn].forEach(R=>R(o,r)),e.compilerExtensions.forEach(R=>R(o,r)),o.__beforeBegin=null,[_n,mn,kn].forEach(R=>R(o,r)),o.isCompiled=!0;let O=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),O=o.keywords.$pattern,delete o.keywords.$pattern),O=O||/\w+/,o.keywords&&(o.keywords=Ce(o.keywords,e.case_insensitive)),l.keywordPatternRe=n(O,!0),r&&(o.begin||(o.begin=/\B|\b/),l.beginRe=n(l.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(l.endRe=n(l.end)),l.terminatorEnd=D(l.end)||"",o.endsWithParent&&r.terminatorEnd&&(l.terminatorEnd+=(o.end?"|":"")+r.terminatorEnd)),o.illegal&&(l.illegalRe=n(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(R){return Dn(R==="self"?o:R)})),o.contains.forEach(function(R){k(R,l)}),o.starts&&k(o.starts,r),l.matcher=y(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=m(e.classNameAliases||{}),k(e)}function Le(e){return e?e.endsWithParent||Le(e.starts):!1}function Dn(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return m(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:Le(e)?m(e,{starts:e.starts?m(e.starts):null}):Object.isFrozen(e)?m(e):e}var Cn="11.11.1";class In extends Error{constructor(n,s){super(n),this.name="HTMLInjectionError",this.html=s}}const _e=_,He=m,$e=Symbol("nomatch"),Pn=7,Ue=function(e){const n=Object.create(null),s=Object.create(null),g=[];let y=!0;const k="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:X};function l(t){return r.noHighlightRe.test(t)}function O(t){let c=t.className+" ";c+=t.parentNode?t.parentNode.className:"";const p=r.languageDetectRe.exec(c);if(p){const b=W(p[1]);return b||(Pe(k.replace("{}",p[1])),Pe("Falling back to no-highlight mode for this block.",t)),b?p[1]:"no-highlight"}return c.split(/\s+/).find(b=>l(b)||W(b))}function R(t,c,p){let b="",S="";typeof c=="object"?(b=t,p=c.ignoreIllegals,S=c.language):(Q("10.7.0","highlight(lang, code, ...args) has been deprecated."),Q("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),S=t,b=c),p===void 0&&(p=!0);const I={code:b,language:S};le("before:highlight",I);const Y=I.result?I.result:ie(I.language,I.code,p);return Y.code=I.code,le("after:highlight",Y),Y}function ie(t,c,p,b){const S=Object.create(null);function I(i,a){return i.keywords[a]}function Y(){if(!d.keywords){N.addText(E);return}let i=0;d.keywordPatternRe.lastIndex=0;let a=d.keywordPatternRe.exec(E),f="";for(;a;){f+=E.substring(i,a.index);const h=U.case_insensitive?a[0].toLowerCase():a[0],v=I(d,h);if(v){const[F,Zn]=v;if(N.addText(f),f="",S[h]=(S[h]||0)+1,S[h]<=Pn&&(de+=Zn),F.startsWith("_"))f+=a[0];else{const Qn=U.classNameAliases[F]||F;$(a[0],Qn)}}else f+=a[0];i=d.keywordPatternRe.lastIndex,a=d.keywordPatternRe.exec(E)}f+=E.substring(i),N.addText(f)}function ue(){if(E==="")return;let i=null;if(typeof d.subLanguage=="string"){if(!n[d.subLanguage]){N.addText(E);return}i=ie(d.subLanguage,E,!0,Xe[d.subLanguage]),Xe[d.subLanguage]=i._top}else i=ye(E,d.subLanguage.length?d.subLanguage:null);d.relevance>0&&(de+=i.relevance),N.__addSublanguage(i._emitter,i.language)}function T(){d.subLanguage!=null?ue():Y(),E=""}function $(i,a){i!==""&&(N.startScope(a),N.addText(i),N.endScope())}function Ke(i,a){let f=1;const h=a.length-1;for(;f<=h;){if(!i._emit[f]){f++;continue}const v=U.classNameAliases[i[f]]||i[f],F=a[f];v?$(F,v):(E=F,Y(),E=""),f++}}function We(i,a){return i.scope&&typeof i.scope=="string"&&N.openNode(U.classNameAliases[i.scope]||i.scope),i.beginScope&&(i.beginScope._wrap?($(E,U.classNameAliases[i.beginScope._wrap]||i.beginScope._wrap),E=""):i.beginScope._multi&&(Ke(i.beginScope,a),E="")),d=Object.create(i,{parent:{value:d}}),d}function Ye(i,a,f){let h=Je(i.endRe,f);if(h){if(i["on:end"]){const v=new w(i);i["on:end"](a,v),v.isMatchIgnored&&(h=!1)}if(h){for(;i.endsParent&&i.parent;)i=i.parent;return i}}if(i.endsWithParent)return Ye(i.parent,a,f)}function zn(i){return d.matcher.regexIndex===0?(E+=i[0],1):(Oe=!0,0)}function Xn(i){const a=i[0],f=i.rule,h=new w(f),v=[f.__beforeBegin,f["on:begin"]];for(const F of v)if(F&&(F(i,h),h.isMatchIgnored))return zn(a);return f.skip?E+=a:(f.excludeBegin&&(E+=a),T(),!f.returnBegin&&!f.excludeBegin&&(E=a)),We(f,i),f.returnBegin?0:a.length}function Vn(i){const a=i[0],f=c.substring(i.index),h=Ye(d,i,f);if(!h)return $e;const v=d;d.endScope&&d.endScope._wrap?(T(),$(a,d.endScope._wrap)):d.endScope&&d.endScope._multi?(T(),Ke(d.endScope,i)):v.skip?E+=a:(v.returnEnd||v.excludeEnd||(E+=a),T(),v.excludeEnd&&(E=a));do d.scope&&N.closeNode(),!d.skip&&!d.subLanguage&&(de+=d.relevance),d=d.parent;while(d!==h.parent);return h.starts&&We(h.starts,i),v.returnEnd?0:a.length}function qn(){const i=[];for(let a=d;a!==U;a=a.parent)a.scope&&i.unshift(a.scope);i.forEach(a=>N.openNode(a))}let ge={};function ze(i,a){const f=a&&a[0];if(E+=i,f==null)return T(),0;if(ge.type==="begin"&&a.type==="end"&&ge.index===a.index&&f===""){if(E+=c.slice(a.index,a.index+1),!y){const h=new Error(`0 width match regex (${t})`);throw h.languageName=t,h.badRule=ge.rule,h}return 1}if(ge=a,a.type==="begin")return Xn(a);if(a.type==="illegal"&&!p){const h=new Error('Illegal lexeme "'+f+'" for mode "'+(d.scope||"<unnamed>")+'"');throw h.mode=d,h}else if(a.type==="end"){const h=Vn(a);if(h!==$e)return h}if(a.type==="illegal"&&f==="")return E+=`
`,1;if(Se>1e5&&Se>a.index*3)throw new Error("potential infinite loop, way more iterations than matches");return E+=f,f.length}const U=W(t);if(!U)throw V(k.replace("{}",t)),new Error('Unknown language: "'+t+'"');const Jn=xn(U);let Re="",d=b||Jn;const Xe={},N=new r.__emitter(r);qn();let E="",de=0,q=0,Se=0,Oe=!1;try{if(U.__emitTokens)U.__emitTokens(c,N);else{for(d.matcher.considerAll();;){Se++,Oe?Oe=!1:d.matcher.considerAll(),d.matcher.lastIndex=q;const i=d.matcher.exec(c);if(!i)break;const a=c.substring(q,i.index),f=ze(a,i);q=i.index+f}ze(c.substring(q))}return N.finalize(),Re=N.toHTML(),{language:t,value:Re,relevance:de,illegal:!1,_emitter:N,_top:d}}catch(i){if(i.message&&i.message.includes("Illegal"))return{language:t,value:_e(c),illegal:!0,relevance:0,_illegalBy:{message:i.message,index:q,context:c.slice(q-100,q+100),mode:i.mode,resultSoFar:Re},_emitter:N};if(y)return{language:t,value:_e(c),illegal:!1,relevance:0,errorRaised:i,_emitter:N,_top:d};throw i}}function me(t){const c={value:_e(t),illegal:!1,relevance:0,_top:o,_emitter:new r.__emitter(r)};return c._emitter.addText(t),c}function ye(t,c){c=c||r.languages||Object.keys(n);const p=me(t),b=c.filter(W).filter(Ge).map(T=>ie(T,t,!1));b.unshift(p);const S=b.sort((T,$)=>{if(T.relevance!==$.relevance)return $.relevance-T.relevance;if(T.language&&$.language){if(W(T.language).supersetOf===$.language)return 1;if(W($.language).supersetOf===T.language)return-1}return 0}),[I,Y]=S,ue=I;return ue.secondBest=Y,ue}function Bn(t,c,p){const b=c&&s[c]||p;t.classList.add("hljs"),t.classList.add(`language-${b}`)}function ke(t){let c=null;const p=O(t);if(l(p))return;if(le("before:highlightElement",{el:t,language:p}),t.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",t);return}if(t.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(t)),r.throwUnescapedHTML))throw new In("One of your code blocks includes unescaped HTML.",t.innerHTML);c=t;const b=c.textContent,S=p?R(b,{language:p,ignoreIllegals:!0}):ye(b);t.innerHTML=S.value,t.dataset.highlighted="yes",Bn(t,p,S.language),t.result={language:S.language,re:S.relevance,relevance:S.relevance},S.secondBest&&(t.secondBest={language:S.secondBest.language,relevance:S.secondBest.relevance}),le("after:highlightElement",{el:t,result:S,text:b})}function Ln(t){r=He(r,t)}const Hn=()=>{ce(),Q("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function $n(){ce(),Q("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let je=!1;function ce(){function t(){ce()}if(document.readyState==="loading"){je||window.addEventListener("DOMContentLoaded",t,!1),je=!0;return}document.querySelectorAll(r.cssSelector).forEach(ke)}function Un(t,c){let p=null;try{p=c(e)}catch(b){if(V("Language definition for '{}' could not be registered.".replace("{}",t)),y)V(b);else throw b;p=o}p.name||(p.name=t),n[t]=p,p.rawDefinition=c.bind(null,e),p.aliases&&Fe(p.aliases,{languageName:t})}function jn(t){delete n[t];for(const c of Object.keys(s))s[c]===t&&delete s[c]}function Fn(){return Object.keys(n)}function W(t){return t=(t||"").toLowerCase(),n[t]||n[s[t]]}function Fe(t,{languageName:c}){typeof t=="string"&&(t=[t]),t.forEach(p=>{s[p.toLowerCase()]=c})}function Ge(t){const c=W(t);return c&&!c.disableAutodetect}function Gn(t){t["before:highlightBlock"]&&!t["before:highlightElement"]&&(t["before:highlightElement"]=c=>{t["before:highlightBlock"](Object.assign({block:c.el},c))}),t["after:highlightBlock"]&&!t["after:highlightElement"]&&(t["after:highlightElement"]=c=>{t["after:highlightBlock"](Object.assign({block:c.el},c))})}function Kn(t){Gn(t),g.push(t)}function Wn(t){const c=g.indexOf(t);c!==-1&&g.splice(c,1)}function le(t,c){const p=t;g.forEach(function(b){b[p]&&b[p](c)})}function Yn(t){return Q("10.7.0","highlightBlock will be removed entirely in v12.0"),Q("10.7.0","Please use highlightElement now."),ke(t)}Object.assign(e,{highlight:R,highlightAuto:ye,highlightAll:ce,highlightElement:ke,highlightBlock:Yn,configure:Ln,initHighlighting:Hn,initHighlightingOnLoad:$n,registerLanguage:Un,unregisterLanguage:jn,listLanguages:Fn,getLanguage:W,registerAliases:Fe,autoDetection:Ge,inherit:He,addPlugin:Kn,removePlugin:Wn}),e.debugMode=function(){y=!1},e.safeMode=function(){y=!0},e.versionString=Cn,e.regex={concat:M,lookahead:C,either:H,optional:L,anyNumberOfTimes:K};for(const t in oe)typeof oe[t]=="object"&&u(oe[t]);return Object.assign(e,oe),e},ee=Ue({});return ee.newInstance=()=>Ue({}),Ne=ee,ee.HighlightJS=ee,ee.default=ee,Ne}var gt=ut();const pe=lt(gt);function dt(u){const w="true false yes no null",_="[\\w#;/?:@&=+$,.~*'()[\\]]+",m={className:"attr",variants:[{begin:/[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/},{begin:/"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/},{begin:/'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/}]},z={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},ne={className:"string",relevance:0,begin:/'/,end:/'/,contains:[{match:/''/,scope:"char.escape",relevance:0}]},te={className:"string",relevance:0,variants:[{begin:/"/,end:/"/},{begin:/\S+/}],contains:[u.BACKSLASH_ESCAPE,z]},G=u.inherit(te,{variants:[{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),C={className:"number",begin:"\\b"+"[0-9]{4}(-[0-9][0-9]){0,2}"+"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?"+"(\\.[0-9]*)?"+"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?"+"\\b"},K={end:",",endsWithParent:!0,excludeEnd:!0,keywords:w,relevance:0},L={begin:/\{/,end:/\}/,contains:[K],illegal:"\\n",relevance:0},M={begin:"\\[",end:"\\]",contains:[K],illegal:"\\n",relevance:0},Z=[m,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+_},{className:"type",begin:"!<"+_+">"},{className:"type",begin:"!"+_},{className:"type",begin:"!!"+_},{className:"meta",begin:"&"+u.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+u.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},u.HASH_COMMENT_MODE,{beginKeywords:w,keywords:{literal:w}},C,{className:"number",begin:u.C_NUMBER_RE+"\\b",relevance:0},L,M,ne,te],H=[...Z];return H.pop(),H.push(G),K.contains=H,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:Z}}function ft(u){return{name:"Dockerfile",aliases:["docker"],case_insensitive:!0,keywords:["from","maintainer","expose","env","arg","user","onbuild","stopsignal"],contains:[u.HASH_COMMENT_MODE,u.APOS_STRING_MODE,u.QUOTE_STRING_MODE,u.NUMBER_MODE,{beginKeywords:"run cmd entrypoint volume add copy workdir label healthcheck shell",starts:{end:/[^\\]$/,subLanguage:"bash"}}],illegal:"</"}}function pt(u){const w=u.regex,_=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),m=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],G={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:m,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},x={className:"meta",begin:/^(>>>|\.\.\.) /},B={className:"subst",begin:/\{/,end:/\}/,keywords:G,illegal:/#/},X={begin:/\{\{/,relevance:0},D={className:"string",contains:[u.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[u.BACKSLASH_ESCAPE,x],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[u.BACKSLASH_ESCAPE,x],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[u.BACKSLASH_ESCAPE,x,X,B]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[u.BACKSLASH_ESCAPE,x,X,B]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[u.BACKSLASH_ESCAPE,X,B]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[u.BACKSLASH_ESCAPE,X,B]},u.APOS_STRING_MODE,u.QUOTE_STRING_MODE]},C="[0-9](_?[0-9])*",K=`(\\b(${C}))?\\.(${C})|\\b(${C})\\.`,L=`\\b|${m.join("|")}`,M={className:"number",relevance:0,variants:[{begin:`(\\b(${C})|(${K}))[eE][+-]?(${C})[jJ]?(?=${L})`},{begin:`(${K})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${L})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${L})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${L})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${L})`},{begin:`\\b(${C})[jJ](?=${L})`}]},Z={className:"comment",begin:w.lookahead(/# type:/),end:/$/,keywords:G,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},H={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:G,contains:["self",x,M,D,u.HASH_COMMENT_MODE]}]};return B.contains=[D,M,x],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:G,illegal:/(<\/|\?)|=>/,contains:[x,M,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},D,Z,u.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,_],scope:{1:"keyword",3:"title.function"},contains:[H]},{variants:[{match:[/\bclass/,/\s+/,_,/\s*/,/\(\s*/,_,/\s*\)/]},{match:[/\bclass/,/\s+/,_]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[M,H,D]}]}}const ht={class:"card"},bt={class:"title"},Et={class:"productDescription"},_t={class:"extraInfo"},mt={key:0,class:"stack"},yt={class:"filename"},kt={style:{color:"cadetblue"}},Rt={class:"fileContent"},St={key:1,class:"subText"},Ot=["href"],Nt=we({__name:"DevOpsProductItem",props:{product:{}},setup(u){return pe.registerLanguage("yaml",dt),pe.registerLanguage("dockerfile",ft),pe.registerLanguage("python",pt),et(async()=>{await nt(),document.querySelectorAll("pre code").forEach(w=>{pe.highlightElement(w)})}),(w,_)=>(P(),j("div",ht,[A("h3",bt,J(u.product.title),1),A("p",Et,J(u.product.description),1),A("div",_t,[A("p",null,[_[0]||(_[0]=A("strong",null,"Formål:",-1)),fe(" "+J(u.product.purpose),1)]),A("p",null,[_[1]||(_[1]=A("strong",null,"Trigger:",-1)),fe(" "+J(u.product.trigger),1)])]),u.product.stack?.length?(P(),j("div",mt,[(P(!0),j(he,null,ve(u.product.stack,m=>(P(),j("span",{key:m},J(m),1))),128))])):Ve("",!0),(P(!0),j(he,null,ve(u.product.files,m=>(P(),j("div",{key:m.filename,class:"fileBlock"},[A("p",yt,[A("strong",kt,J(m.filename),1)]),A("pre",Rt,[_[2]||(_[2]=fe("        ",-1)),A("code",{class:tt(m.language)},J(m.content),3),_[3]||(_[3]=fe(`
      `,-1))])]))),128)),u.product.repository?(P(),j("div",St,[A("a",{href:u.product.repository,target:"_blank",rel:"noopener",class:"tryButton"}," [Se filer] ",8,Ot)])):Ve("",!0)]))}}),vt=st(Nt,[["__scopeId","data-v-169c94fd"]]),wt={class:"scrollable-content"},Mt=we({__name:"DevOpsProductList",setup(u){const w=ct.products;return(_,m)=>(P(),j("div",wt,[(P(!0),j(he,null,ve(rt(w),z=>(P(),it(vt,{key:z.id,product:z},null,8,["product"]))),128))]))}}),xt=we({__name:"DevopsProductsView",setup(u){return(w,_)=>(P(),j(he,null,[_[0]||(_[0]=A("h2",{id:"infoTitle",class:"titleMargin"},[A("b",{style:{color:"slateblue"}},"DevOps underprodukter:")],-1)),ot(Mt)],64))}});export{xt as default};
