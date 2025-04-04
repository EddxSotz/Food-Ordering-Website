import{j as e,r,C as j,c as f}from"./index-c8eedec3.js";function l(){return e.jsx("section",{className:classes.error,children:e.jsx("p",{children:"Something went wrong!"})})}const p="/assets/preloader-2221c4bc.svg";function g({isFiltered:d}){const[o,c]=r.useState(!0),[n,i]=r.useState([]),[m,h]=r.useState(null),u=r.useContext(j);switch(r.useEffect(()=>{async function s(){c(!0);try{const a=await fetch("https://food-ordering-website-backend-3mwk.onrender.com/meals"),x=await a.json();if(!a.ok)throw new l("Something went wrong!");i(x)}catch(a){h(a)}c(!1)}s()},[]),d){case"main":n.filter(s=>s.category==="main");break;case"salads":n.filter(s=>s.category==="salads");break;case"desserts":n.filter(s=>s.category==="desserts");break}const t=s=>{console.log(s),u.addItem(s)};return e.jsxs("div",{children:[e.jsx("h2",{children:"All available Meals"}),e.jsxs("ul",{id:"meals",children:[o&&e.jsx("img",{src:p,alt:"Loading...",id:"preloader"}),m&&e.jsx(l,{}),!o&&n.map(s=>e.jsx("li",{className:"meal-item",children:e.jsxs("article",{children:[e.jsx("img",{src:`https://food-ordering-website-backend-3mwk.onrender.com/${s.image}`,alt:s.name}),e.jsx("h3",{children:s.name}),e.jsx("p",{className:"meal-item-description",children:s.description}),e.jsx("p",{className:"meal-item-price",children:f.format(s.price)}),e.jsx("p",{className:"meal-item-actions",children:e.jsx("button",{onClick:()=>t(s),className:"cart-button",children:"Add to Cart"})})]})},s.id))]})]})}function w(){const[d,o]=r.useState([]),c=r.useContext(j),[n,i]=r.useState(!0),[m,h]=r.useState(null);r.useEffect(()=>{async function t(){i(!0);try{const s=await fetch("https://food-ordering-website-backend-3mwk.onrender.com/meals"),a=await s.json();if(!s.ok)throw new l("Something went wrong!");o(a.filter(x=>x.isFavorite===!0))}catch(s){h(s)}i(!1)}t()},[]);const u=t=>{console.log(t),c.addItem(t)};return e.jsxs("div",{children:[e.jsx("h2",{children:"Popular Meals"}),e.jsxs("ul",{id:"favorite-meals",children:[n&&e.jsx("p",{children:"Loading..."}),m&&e.jsx(l,{}),d.map(t=>e.jsx("li",{className:"meal-item",children:e.jsxs("article",{children:[e.jsx("img",{src:`https://food-ordering-website-backend-3mwk.onrender.com/${t.image}`,alt:t.name}),e.jsx("h3",{children:t.name}),e.jsx("p",{className:"meal-item-price",children:f.format(t.price)}),e.jsx("p",{className:"meal-item-actions",children:e.jsx("button",{onClick:()=>u(t),className:"cart-button",children:"Add to Cart"})})]})},t.id))]})]})}function b(){return e.jsxs("div",{className:"hero-section",children:[e.jsx("h1",{children:"Fresh & Tasty Meals"}),e.jsx("p",{children:"Your all-in-one place for your food service needs"}),e.jsx("button",{className:"cta-button",children:"Shop Menu"})]})}function C(){return e.jsxs(e.Fragment,{children:[e.jsx(b,{}),e.jsx(w,{}),e.jsx(g,{})]})}export{C as default};
