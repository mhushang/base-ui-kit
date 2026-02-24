import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./index-yRop1keA.js";import{c as p}from"./cn-BaF2GUMg.js";const S="Select-module__select___44Pep",v="Select-module__error___XutaM",g="Select-module__sm___ihHZK",f="Select-module__md___9PfyU",_="Select-module__lg___BH7UL",o={select:S,error:v,sm:g,md:f,lg:_},a=m.forwardRef(({size:n="md",error:i=!1,className:d,...c},u)=>e.jsx("select",{ref:u,"aria-invalid":i||void 0,className:p(o.select,o[n],i&&o.error,d),...c}));a.displayName="Select";a.__docgenInfo={description:"",methods:[],displayName:"Select",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const j={title:"Primitives/Select",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},error:{control:"boolean",description:"Shows error styling and sets aria-invalid"},disabled:{control:"boolean"}},args:{size:"md",error:!1,disabled:!1,defaultValue:""}},r={render:n=>e.jsxs(a,{"aria-label":"Country",...n,children:[e.jsx("option",{value:"",disabled:!0,children:"Select a country…"}),e.jsx("option",{value:"us",children:"United States"}),e.jsx("option",{value:"ca",children:"Canada"}),e.jsx("option",{value:"uk",children:"United Kingdom"})]})},t={args:{error:!0},render:r.render},s={args:{disabled:!0},render:r.render},l={render:()=>e.jsxs("div",{style:{display:"grid",gap:"1rem",width:"320px"},children:[e.jsxs(a,{"aria-label":"Small",size:"sm",defaultValue:"us",children:[e.jsx("option",{value:"us",children:"United States"}),e.jsx("option",{value:"ca",children:"Canada"})]}),e.jsxs(a,{"aria-label":"Medium",size:"md",defaultValue:"us",children:[e.jsx("option",{value:"us",children:"United States"}),e.jsx("option",{value:"ca",children:"Canada"})]}),e.jsxs(a,{"aria-label":"Large",size:"lg",defaultValue:"us",children:[e.jsx("option",{value:"us",children:"United States"}),e.jsx("option",{value:"ca",children:"Canada"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <Select aria-label="Country" {...args}>
      <option value="" disabled>
        Select a country…
      </option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
    </Select>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    error: true
  },
  render: Default.render
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: Default.render
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "1rem",
    width: "320px"
  }}>
      <Select aria-label="Small" size="sm" defaultValue="us">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
      </Select>
      <Select aria-label="Medium" size="md" defaultValue="us">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
      </Select>
      <Select aria-label="Large" size="lg" defaultValue="us">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
      </Select>
    </div>
}`,...l.parameters?.docs?.source}}};const y=["Default","WithError","Disabled","AllSizes"];export{l as AllSizes,r as Default,s as Disabled,t as WithError,y as __namedExportsOrder,j as default};
