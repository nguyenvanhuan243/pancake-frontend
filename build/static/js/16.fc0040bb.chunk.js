(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[16],{1165:function(e,n,t){"use strict";t.r(n);t(0);var i,c,r,s,a,l,o,d,j=t(7),b=t(184),x=t.n(b),u=t(56),p=t(164),O=t(34),m=t(26),h=t(10),f=t(97),g=t(4),v=h.e.div(i||(i=Object(m.a)(["\n  align-self: stretch;\n  background: ",";\n  flex: none;\n  padding: 16px 0;\n  text-align: center;\n  width: 56px;\n"])),(function(e){return function(e){return e.isDark?"linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)":"linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)"}(e.theme)})),y=h.e.div(c||(c=Object(m.a)(["\n  align-items: start;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 24px;\n\n  "," {\n    align-items: center;\n    flex-direction: row;\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),S=h.e.div(r||(r=Object(m.a)(["\n  flex: 1;\n"]))),w=h.e.img(s||(s=Object(m.a)(["\n  border-radius: 50%;\n"]))),F=Object(h.e)(j.T).attrs({as:"h3"})(a||(a=Object(m.a)(["\n  font-size: 24px;\n\n  "," {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),k=h.e.div(l||(l=Object(m.a)(["\n  flex: none;\n  margin-right: 8px;\n\n  "," {\n    height: 64px;\n    width: 64px;\n  }\n\n  "," {\n    display: none;\n  }\n"])),w,(function(e){return e.theme.mediaQueries.md})),z=h.e.div(o||(o=Object(m.a)(["\n  display: none;\n\n  "," {\n    display: block;\n    margin-left: 24px;\n\n    "," {\n      height: 128px;\n      width: 128px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.md}),w),T=Object(h.e)(j.u)(d||(d=Object(m.a)(["\n  display: flex;\n  margin-bottom: 16px;\n"]))),D=function(e){var n=e.rank,t=e.team,i=Object(O.a)(),c=Object(g.jsx)(w,{src:"/images/teams/".concat(t.images.md),alt:"team avatar"});return Object(g.jsxs)(T,{children:[Object(g.jsx)(v,{children:Object(g.jsx)(j.Ob,{bold:!0,fontSize:"24px",children:n})}),Object(g.jsxs)(y,{children:[Object(g.jsxs)(S,{children:[Object(g.jsxs)(j.S,{alignItems:"center",mb:"16px",children:[Object(g.jsx)(k,{children:c}),Object(g.jsx)(F,{children:t.name})]}),Object(g.jsx)(j.Ob,{as:"p",color:"textSubtle",pr:"24px",mb:"16px",children:t.description}),Object(g.jsxs)(j.S,{children:[Object(g.jsxs)(j.S,{children:[Object(g.jsx)(j.Ab,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.Ob,{fontSize:"24px",bold:!0,children:t.points.toLocaleString()})]}),Object(g.jsxs)(j.S,{ml:"24px",children:[Object(g.jsx)(j.L,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.Ob,{fontSize:"24px",bold:!0,children:t.users.toLocaleString()})]})]})]}),Object(g.jsx)(j.q,{as:f.a,to:"/teams/".concat(null===t||void 0===t?void 0:t.id),variant:"secondary",scale:"sm",children:i(1042,"See More")}),Object(g.jsx)(z,{children:c})]})]})},E=t(941);n.default=function(){var e=Object(O.a)(),n=Object(u.G)(),t=n.teams,i=n.isLoading,c=Object.values(t),r=x()(c,["points","id","name"],["desc","asc","asc"]);return Object(g.jsxs)(p.a,{children:[Object(g.jsx)(E.a,{}),Object(g.jsxs)(j.S,{alignItems:"center",justifyContent:"space-between",mb:"32px",children:[Object(g.jsx)(j.T,{size:"xl",children:e(1040,"Teams")}),i&&Object(g.jsx)(j.g,{spin:!0})]}),r.map((function(e,n){return Object(g.jsx)(D,{rank:n+1,team:e},e.id)}))]})}},908:function(e,n,t){"use strict";var i,c=t(26),r=t(10).e.div(i||(i=Object(c.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle}));n.a=r},941:function(e,n,t){"use strict";t(0);var i=t(7),c=t(56),r=t(34),s=t(908),a=t(97),l=t(4),o=function(){var e=Object(r.a)();return Object(l.jsx)(i.u,{mb:"32px",isActive:!0,children:Object(l.jsx)(i.v,{children:Object(l.jsxs)(i.S,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(i.T,{size:"lg",mb:"8px",children:e(1052,"You haven't set up your profile yet!")}),Object(l.jsx)(i.Ob,{children:e(1054,"You can do this at any time by clicking on your profile picture in the menu")})]}),Object(l.jsx)(i.q,{as:a.a,to:"/profile",mt:["16px",null,0],children:e(1050,"Set up now")})]})})})};n.a=function(){var e=Object(r.a)(),n=Object(c.E)(),t=n.isInitialized,a=n.profile,d=t&&!a;return Object(l.jsxs)(l.Fragment,{children:[d&&Object(l.jsx)(o,{}),Object(l.jsxs)(s.a,{children:[Object(l.jsx)(i.T,{as:"h1",size:"xxl",color:"secondary",children:e(1082,"Teams & Profiles")}),Object(l.jsx)(i.Ob,{bold:!0,children:e(999,"Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}}}]);
//# sourceMappingURL=16.fc0040bb.chunk.js.map