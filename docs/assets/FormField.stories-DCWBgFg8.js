import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./index-yRop1keA.js";import{c as q}from"./cn-BaF2GUMg.js";import{I as l}from"./Input--G547OLY.js";import{C as f}from"./Checkbox-CJU0XUTm.js";const j="FormField-module__field___UseSO",v="FormField-module__label___iH42H",I="FormField-module__required___EN-JZ",E="FormField-module__hint___-dey3",N="FormField-module__error___w5Ff1",o={field:j,label:v,required:I,hint:E,error:N},a=({label:F,hint:u,error:r,required:x,children:s,className:_})=>{const t=h.useId(),b=`${t}-error`,y=`${t}-hint`,g=h.isValidElement(s)?h.cloneElement(s,{id:t,"aria-describedby":[r&&b,!r&&u&&y].filter(Boolean).join(" ")||void 0,"aria-invalid":!!r||void 0,"aria-required":x||void 0,error:!!r,...s.props}):s;return e.jsxs("div",{className:q(o.field,_),children:[F&&e.jsxs("label",{htmlFor:t,className:o.label,children:[F,x&&e.jsx("span",{className:o.required,"aria-hidden":"true",children:"*"})]}),g,u&&!r&&e.jsx("span",{id:y,className:o.hint,children:u}),r&&e.jsx("span",{id:b,role:"alert",className:o.error,children:r})]})};a.displayName="FormField";a.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"Composite/FormField",component:a,tags:["autodocs"],argTypes:{label:{control:"text"},hint:{control:"text"},error:{control:"text"},required:{control:"boolean"}},args:{label:"Email address",hint:"",error:"",required:!1,children:e.jsx(l,{placeholder:"you@example.com",type:"email"})}},i={},n={args:{hint:"We'll never share your email with anyone."}},d={args:{error:"Please enter a valid email address.",children:e.jsx(l,{placeholder:"you@example.com",type:"email",defaultValue:"not-an-email"})}},c={args:{required:!0,label:"Full name",children:e.jsx(l,{placeholder:"John Doe"})}},m={args:{label:"",children:e.jsx(f,{label:"I agree to the terms and conditions"})}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem",width:"360px"},children:[e.jsx(a,{label:"Full name",required:!0,children:e.jsx(l,{placeholder:"John Doe"})}),e.jsx(a,{label:"Email",required:!0,error:"Please enter a valid email address.",children:e.jsx(l,{placeholder:"you@example.com",type:"email",defaultValue:"not-valid"})}),e.jsx(a,{label:"Password",required:!0,hint:"Must be at least 8 characters.",children:e.jsx(l,{placeholder:"••••••••",type:"password"})}),e.jsx(a,{label:"",children:e.jsx(f,{label:"I agree to the terms and conditions"})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    hint: "We'll never share your email with anyone."
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Please enter a valid email address.",
    children: <Input placeholder="you@example.com" type="email" defaultValue="not-an-email" />
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    label: "Full name",
    children: <Input placeholder="John Doe" />
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "",
    children: <Checkbox label="I agree to the terms and conditions" />
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    width: "360px"
  }}>
      <FormField label="Full name" required>
        <Input placeholder="John Doe" />
      </FormField>
      <FormField label="Email" required error="Please enter a valid email address.">
        <Input placeholder="you@example.com" type="email" defaultValue="not-valid" />
      </FormField>
      <FormField label="Password" required hint="Must be at least 8 characters.">
        <Input placeholder="••••••••" type="password" />
      </FormField>
      <FormField label="">
        <Checkbox label="I agree to the terms and conditions" />
      </FormField>
    </div>
}`,...p.parameters?.docs?.source}}};const T=["Default","WithHint","WithError","Required","WithCheckbox","FullForm"];export{i as Default,p as FullForm,c as Required,m as WithCheckbox,d as WithError,n as WithHint,T as __namedExportsOrder,S as default};
