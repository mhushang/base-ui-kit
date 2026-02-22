import{j as e}from"./jsx-runtime-u17CrQMm.js";import{a as s,C as t}from"./Container-CAx-nXod.js";import"./index-yRop1keA.js";import"./cn-BaF2GUMg.js";const g={title:"Layout/Container",component:s,tags:["autodocs"],argTypes:{maxWidth:{control:"select",options:["sm","md","lg","xl","2xl","full"],table:{defaultValue:{summary:"lg"}}},padding:{control:"select",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}}},args:{maxWidth:"lg",padding:"md",children:e.jsx("div",{style:{padding:"1rem",background:"var(--color-gray-100)"},children:"Container content"})}},r={},n={args:{maxWidth:"full"}},a={render:()=>e.jsx("div",{style:{display:"grid",gap:"1rem"},children:["sm","md","lg","xl","2xl","full"].map(i=>e.jsx("div",{style:{border:"1px dashed var(--color-gray-300)",background:"white"},children:e.jsx(s,{maxWidth:i,padding:"md",children:e.jsxs("div",{style:{padding:"0.75rem"},children:[e.jsxs("div",{style:{fontWeight:600},children:["maxWidth: ",i]}),e.jsx("div",{style:{color:"var(--color-gray-700)"},children:"Resize the Storybook canvas to see it respond."})]})})},i))})},d={render:()=>e.jsx("div",{style:{background:"var(--color-gray-50)",padding:"2rem 0"},children:e.jsx(s,{maxWidth:"lg",padding:"md",children:e.jsxs("div",{style:{display:"grid",gap:"1rem"},children:[e.jsx("div",{style:{fontWeight:700,fontSize:"1.125rem"},children:"Page section"}),e.jsx(t,{variant:"elevated",children:e.jsxs("div",{style:{display:"grid",gap:"0.25rem"},children:[e.jsx("div",{style:{fontWeight:600},children:"Card inside Container"}),e.jsx("div",{style:{color:"var(--color-gray-700)"},children:"Typical layout building blocks."})]})})]})})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    maxWidth: "full"
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: "1rem"
  }}>
      {(["sm", "md", "lg", "xl", "2xl", "full"] as const).map(mw => <div key={mw} style={{
      border: "1px dashed var(--color-gray-300)",
      background: "white"
    }}>
          <Container maxWidth={mw} padding="md">
            <div style={{
          padding: "0.75rem"
        }}>
              <div style={{
            fontWeight: 600
          }}>maxWidth: {mw}</div>
              <div style={{
            color: "var(--color-gray-700)"
          }}>
                Resize the Storybook canvas to see it respond.
              </div>
            </div>
          </Container>
        </div>)}
    </div>
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: "var(--color-gray-50)",
    padding: "2rem 0"
  }}>
      <Container maxWidth="lg" padding="md">
        <div style={{
        display: "grid",
        gap: "1rem"
      }}>
          <div style={{
          fontWeight: 700,
          fontSize: "1.125rem"
        }}>
            Page section
          </div>
          <Card variant="elevated">
            <div style={{
            display: "grid",
            gap: "0.25rem"
          }}>
              <div style={{
              fontWeight: 600
            }}>Card inside Container</div>
              <div style={{
              color: "var(--color-gray-700)"
            }}>
                Typical layout building blocks.
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
}`,...d.parameters?.docs?.source}}};const p=["Default","FullWidth","AllMaxWidths","PageSectionExample"];export{a as AllMaxWidths,r as Default,n as FullWidth,d as PageSectionExample,p as __namedExportsOrder,g as default};
