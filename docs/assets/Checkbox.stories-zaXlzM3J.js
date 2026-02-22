import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./index-yRop1keA.js";import{C as u}from"./Checkbox-CJU0XUTm.js";import"./cn-BaF2GUMg.js";const y={title:"Primitives/Checkbox",component:u,tags:["autodocs"],argTypes:{label:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean",description:"Partial selection state — set via JS DOM property, not HTML attribute"},onChange:{action:"changed"}},args:{label:"Accept terms and conditions",disabled:!1,indeterminate:!1}},o={},l={args:{checked:!0}},n={args:{disabled:!0,label:"Disabled checkbox"}},d={args:{disabled:!0,checked:!0,label:"Disabled checked"}},i={args:{indeterminate:!0,label:"Select all (partial)"}},x=()=>{const[r,t]=h.useState(!1);return a.jsx(u,{label:`Checkbox is ${r?"checked":"unchecked"}`,checked:r,onChange:s=>t(s.target.checked)})},m={render:()=>a.jsx(x,{})},C=()=>{const[r,t]=h.useState([{id:1,label:"Item one",checked:!1},{id:2,label:"Item two",checked:!1},{id:3,label:"Item three",checked:!1}]),s=r.every(e=>e.checked),b=r.some(e=>e.checked),k=()=>{t(r.map(e=>({...e,checked:!s})))},g=e=>{t(r.map(c=>c.id===e?{...c,checked:!c.checked}:c))};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[a.jsx(u,{label:"Select all",checked:s,indeterminate:b&&!s,onChange:k}),a.jsx("hr",{style:{margin:"0.5rem 0"}}),r.map(e=>a.jsx(u,{label:e.label,checked:e.checked,onChange:()=>g(e.id),style:{marginLeft:"1.5rem"}},e.id))]})},p={render:()=>a.jsx(C,{})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: "Disabled checkbox"
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true,
    label: "Disabled checked"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: "Select all (partial)"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <SelectAllExample />
}`,...p.parameters?.docs?.source}}};const E=["Default","Checked","Disabled","DisabledChecked","Indeterminate","Controlled","SelectAll"];export{l as Checked,m as Controlled,o as Default,n as Disabled,d as DisabledChecked,i as Indeterminate,p as SelectAll,E as __namedExportsOrder,y as default};
