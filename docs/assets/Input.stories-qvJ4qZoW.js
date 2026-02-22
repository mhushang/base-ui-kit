import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as l}from"./Input--G547OLY.js";import"./index-yRop1keA.js";import"./cn-BaF2GUMg.js";const c={title:"Primitives/Input",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},error:{control:"boolean",description:"Shows error styling and sets aria-invalid"},disabled:{control:"boolean"},placeholder:{control:"text"},type:{control:"select",options:["text","email","password","number","tel"]}},args:{placeholder:"Enter text...",size:"md",error:!1,disabled:!1,type:"text"}},r={},s={args:{error:!0,placeholder:"Invalid input",defaultValue:"wrong@"}},a={args:{disabled:!0,placeholder:"Disabled input"}},o={args:{type:"password",placeholder:"Enter password..."}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(l,{size:"sm",placeholder:"Small input"}),e.jsx(l,{size:"md",placeholder:"Medium input"}),e.jsx(l,{size:"lg",placeholder:"Large input"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    placeholder: "Invalid input",
    defaultValue: "wrong@"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: "Disabled input"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Enter password..."
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "300px"
  }}>
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
}`,...t.parameters?.docs?.source}}};const m=["Default","WithError","Disabled","Password","AllSizes"];export{t as AllSizes,r as Default,a as Disabled,o as Password,s as WithError,m as __namedExportsOrder,c as default};
