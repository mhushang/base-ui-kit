import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as r,a as i}from"./Container-CAx-nXod.js";import"./index-yRop1keA.js";import"./cn-BaF2GUMg.js";const m={title:"Layout/Card",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outlined","elevated"],table:{defaultValue:{summary:"default"}}},padding:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},hoverable:{control:"boolean",description:"Adds a subtle hover affordance (shadow + border)"}},args:{variant:"default",padding:"md",hoverable:!1,children:e.jsxs("div",{style:{display:"grid",gap:"0.5rem"},children:[e.jsx("div",{style:{fontWeight:600},children:"Card title"}),e.jsx("div",{style:{color:"var(--color-gray-700)"},children:"A simple surface for grouping content."})]})}},a={},n={args:{variant:"outlined"}},t={args:{variant:"elevated"}},d={args:{hoverable:!0,variant:"elevated"}},o={render:()=>e.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"outlined",children:"Outlined"}),e.jsx(r,{variant:"elevated",children:"Elevated"})]})},s={render:()=>e.jsx("div",{style:{background:"var(--color-gray-50)",padding:"1.5rem"},children:e.jsx(i,{maxWidth:"md",children:e.jsx(r,{variant:"elevated",hoverable:!0,children:e.jsxs("div",{style:{display:"grid",gap:"0.75rem"},children:[e.jsx("div",{style:{fontWeight:600},children:"Within a Container"}),e.jsxs("div",{style:{color:"var(--color-gray-700)"},children:["Pair ",e.jsx("code",{children:"Container"})," + ",e.jsx("code",{children:"Card"})," for page layouts."]})]})})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outlined"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "elevated"
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    hoverable: true,
    variant: "elevated"
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "1rem"
  }}>
      <Card variant="default">Default</Card>
      <Card variant="outlined">Outlined</Card>
      <Card variant="elevated">Elevated</Card>
    </div>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: "var(--color-gray-50)",
    padding: "1.5rem"
  }}>
      <Container maxWidth="md">
        <Card variant="elevated" hoverable>
          <div style={{
          display: "grid",
          gap: "0.75rem"
        }}>
            <div style={{
            fontWeight: 600
          }}>Within a Container</div>
            <div style={{
            color: "var(--color-gray-700)"
          }}>
              Pair <code>Container</code> + <code>Card</code> for page layouts.
            </div>
          </div>
        </Card>
      </Container>
    </div>
}`,...s.parameters?.docs?.source}}};const p=["Default","Outlined","Elevated","Hoverable","AllVariants","InContainer"];export{o as AllVariants,a as Default,t as Elevated,d as Hoverable,s as InContainer,n as Outlined,p as __namedExportsOrder,m as default};
