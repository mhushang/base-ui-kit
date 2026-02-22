import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./index-yRop1keA.js";import{c as j}from"./cn-BaF2GUMg.js";const z="Button-module__button___A6UOF",W="Button-module__primary___S7NpW",w="Button-module__secondary___-cx5-",V="Button-module__ghost___X1GXh",D="Button-module__destructive___weEBi",G="Button-module__sm___3m6F-",L="Button-module__md___xFE2U",T="Button-module__lg___qklHd",q="Button-module__fullWidth___av1jG",A="Button-module__loading___y1lw1",E="Button-module__spinner___42sYG",F="Button-module__spin___-Z1T5",a={button:z,primary:W,secondary:w,ghost:V,destructive:D,sm:G,md:L,lg:T,fullWidth:q,loading:A,spinner:E,spin:F},r=b.forwardRef(({variant:_="primary",size:y="md",loading:t=!1,fullWidth:v=!1,disabled:h,className:f,children:B,...x},S)=>e.jsxs("button",{ref:S,disabled:h||t,"aria-busy":t,className:j(a.button,a[_],a[y],t&&a.loading,v&&a.fullWidth,f),...x,children:[t&&e.jsx("span",{className:a.spinner,"aria-hidden":"true"}),B]}));r.displayName="Button";r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "ghost" | "destructive"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"destructive"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const I={title:"Primitives/Button",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost","destructive"],description:"Visual style of the button",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md","lg"],description:"Size of the button",table:{defaultValue:{summary:"md"}}},loading:{control:"boolean",description:"Shows spinner and disables interaction"},fullWidth:{control:"boolean",description:"Stretches to full container width"},disabled:{control:"boolean"},onClick:{action:"clicked"}},args:{children:"Button",variant:"primary",size:"md",loading:!1,fullWidth:!1,disabled:!1}},s={args:{variant:"primary"}},n={args:{variant:"secondary"}},o={args:{variant:"ghost"}},i={args:{variant:"destructive",children:"Delete account"}},l={args:{size:"sm"}},d={args:{size:"lg"}},c={args:{loading:!0}},u={args:{disabled:!0}},m={args:{fullWidth:!0},decorators:[_=>e.jsx("div",{style:{width:"400px"},children:e.jsx(_,{})})]},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"destructive",children:"Destructive"})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Delete account"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  // Story-level decorator for full width context
  decorators: [Story => <div style={{
    width: "400px"
  }}>
        <Story />
      </div>]
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap"
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "1rem",
    alignItems: "center"
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...g.parameters?.docs?.source}}};const M=["Primary","Secondary","Ghost","Destructive","Small","Large","Loading","Disabled","FullWidth","AllVariants","AllSizes"];export{g as AllSizes,p as AllVariants,i as Destructive,u as Disabled,m as FullWidth,o as Ghost,d as Large,c as Loading,s as Primary,n as Secondary,l as Small,M as __namedExportsOrder,I as default};
