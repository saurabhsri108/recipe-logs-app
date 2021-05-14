var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,c=(e,c)=>{for(var i in c||(c={}))n.call(c,i)&&r(e,i,c[i]);if(t)for(var i of t(c))a.call(c,i)&&r(e,i,c[i]);return e};import{R as i,r as s,v as l,a as m}from"./vendor.f8f285a4.js";const o=({name:e,amount:t})=>i.createElement(i.Fragment,null,i.createElement("span",null,e),i.createElement("span",null,t)),p=({ingredients:e})=>i.createElement("div",{className:"ingredient-grid"},e.map((e=>i.createElement(o,c({key:e.id},e))))),d=({id:e,name:t,cookTime:n,servings:a,instructions:r,ingredients:c})=>{const{deleteRecipe:l}=s.exports.useContext(E);return i.createElement("div",{className:"recipe"},i.createElement("div",{className:"recipe__header"},i.createElement("h3",{className:"recipe__title"},t),i.createElement("div",null,i.createElement("button",{className:"btn btn--success"},"Edit"),i.createElement("button",{className:"btn btn--danger mr-1",onClick:()=>l(e)},"Delete"))),i.createElement("div",{className:"recipe__row"},i.createElement("span",{className:"recipe__label"},"Cook Time:"),i.createElement("span",{className:"recipe__value"},n)),i.createElement("div",{className:"recipe__row"},i.createElement("span",{className:"recipe__label"},"Servings:"),i.createElement("span",{className:"recipe__value"},a)),i.createElement("div",{className:"recipe__row"},i.createElement("span",{className:"recipe__label"},"Instructions:"),i.createElement("div",{className:"recipe__value recipe__value--intended recipe__instructions"},r)),i.createElement("div",{className:"recipe__row"},i.createElement("span",{className:"recipe__label"},"Ingredients:"),i.createElement("div",{className:"recipe__value recipe__value--intended"},i.createElement(p,{ingredients:c}))))};const u=({recipes:e})=>{const{addRecipe:t}=s.exports.useContext(E);return i.createElement("div",{className:"recipe-list"},i.createElement("div",{className:"recipe-list__recipes"},e.map((e=>i.createElement(d,c({key:e.id},e))))),i.createElement("div",{className:"recipe-list__add-btn-recipe-container"},i.createElement("button",{className:"btn btn--primary btn--large",onClick:t},"Add Recipe")))};const E=s.exports.createContext(),_=()=>{const[e,t]=s.exports.useState(v);s.exports.useEffect((()=>{const e=localStorage.getItem("recipelogs.recipes");null!==e&&t(JSON.parse(e))}),[]),s.exports.useEffect((()=>{localStorage.setItem("recipelogs.recipes",JSON.stringify(e))}),[e]);const n={addRecipe:()=>{const n={id:l(),name:"Plain Sandwich",servings:3,cookTime:"1:45",instructions:"1. Put salt on bread\n2. Put bread in oven\n3. Eat sandwich.",ingredients:[{id:l(),name:"Bread Slice",amount:"2"},{id:l(),name:"Salt",amount:"2 Tbs"}]};t([...e,n])},deleteRecipe:n=>{t(e.filter((e=>e.id!==n)))}};return i.createElement(E.Provider,{value:n},i.createElement("div",{className:"container__recipe"},i.createElement(u,{recipes:e})),i.createElement("div",{className:"container__recipe-edit"},"Recipe Edit Form"))},v=[{id:l(),name:"Plain Chicken",servings:3,cookTime:"1:45",instructions:"1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken.",ingredients:[{id:l(),name:"Chicken",amount:"2 kg"},{id:l(),name:"Salt",amount:"1 Tbs"}]},{id:l(),name:"Plain Pork",servings:3,cookTime:"1:45",instructions:"1. Put salt on pork\n2. Put pork in oven\n3. Eat pork.",ingredients:[{id:l(),name:"Pork",amount:"1 kg"},{id:l(),name:"Salt",amount:"2 Tbs"}]}];m.render(i.createElement(_,null),document.getElementById("root"));