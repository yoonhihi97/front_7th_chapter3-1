import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./button-DHrb8x4L.js";import{c as g}from"./createLucideIcon-eyH5s_C0.js";import{L as f}from"./loader-circle-B6iSrIli.js";import"./iframe-DwBS1izW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bbdl2d1h.js";import"./utils-BkFMFD6b.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],B=g("plus",j);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],b=g("square-pen",y);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],S=g("trash-2",N),_={title:"UI/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","success","outline","ghost","link"],description:"The visual style variant of the button"},size:{control:"select",options:["sm","md","lg"],description:"The size of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"},asChild:{control:"boolean",description:"Render as a child component (polymorphic)"}}},s={args:{children:"Button",variant:"default"}},r={args:{children:"Secondary",variant:"secondary"}},n={args:{children:"Destructive",variant:"destructive"}},t={args:{children:"Success",variant:"success"}},i={args:{children:"Outline",variant:"outline"}},c={args:{children:"Ghost",variant:"ghost"}},o={args:{children:"Link",variant:"link"}},d={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"default",children:"Default"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"destructive",children:"Destructive"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"outline",children:"Outline"}),e.jsx(a,{variant:"ghost",children:"Ghost"}),e.jsx(a,{variant:"link",children:"Link"})]})},l={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})},u={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(a,{children:[e.jsx(B,{className:"h-4 w-4"}),"Create New"]}),e.jsxs(a,{variant:"destructive",children:[e.jsx(S,{className:"h-4 w-4"}),"Delete"]}),e.jsxs(a,{variant:"secondary",children:[e.jsx(b,{className:"h-4 w-4"}),"Edit"]})]})},m={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{disabled:!0,children:"Default Disabled"}),e.jsx(a,{variant:"secondary",disabled:!0,children:"Secondary Disabled"}),e.jsx(a,{variant:"destructive",disabled:!0,children:"Destructive Disabled"})]})},p={render:()=>e.jsx(a,{asChild:!0,children:e.jsx("a",{href:"https://example.com",target:"_blank",rel:"noopener noreferrer",children:"External Link"})})},h={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(a,{disabled:!0,children:[e.jsx(f,{className:"h-4 w-4 animate-spin"}),"Loading..."]}),e.jsxs(a,{variant:"secondary",disabled:!0,children:[e.jsx(f,{className:"h-4 w-4 animate-spin"}),"Processing"]})]})},v={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex justify-end",children:e.jsxs(a,{children:[e.jsx(B,{className:"h-4 w-4"}),"Create New"]})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{variant:"secondary",children:"Cancel"}),e.jsx(a,{children:"Save"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{variant:"secondary",size:"sm",children:"Edit"}),e.jsx(a,{variant:"destructive",size:"sm",children:"Delete"}),e.jsx(a,{variant:"success",size:"sm",children:"Publish"})]})]})},x={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{"aria-label":"Add new item",children:e.jsx(B,{className:"h-4 w-4"})}),e.jsx(a,{"aria-describedby":"delete-help",variant:"destructive",children:"Delete"}),e.jsx("p",{id:"delete-help",className:"text-sm text-state-muted-foreground",children:"This action cannot be undone"})]}),parameters:{a11y:{config:{rules:[{id:"button-name",enabled:!0}]}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'default'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Destructive',
    variant: 'destructive'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Success',
    variant: 'success'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outline',
    variant: 'outline'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost',
    variant: 'ghost'
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Link',
    variant: 'link'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success">Success</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button>
        <Plus className="h-4 w-4" />
        Create New
      </Button>
      <Button variant="destructive">
        <Trash2 className="h-4 w-4" />
        Delete
      </Button>
      <Button variant="secondary">
        <Edit className="h-4 w-4" />
        Edit
      </Button>
    </div>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button disabled>Default Disabled</Button>
      <Button variant="secondary" disabled>
        Secondary Disabled
      </Button>
      <Button variant="destructive" disabled>
        Destructive Disabled
      </Button>
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Button asChild>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        External Link
      </a>
    </Button>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button disabled>
        <Loader2 className="h-4 w-4 animate-spin" />
        Loading...
      </Button>
      <Button variant="secondary" disabled>
        <Loader2 className="h-4 w-4 animate-spin" />
        Processing
      </Button>
    </div>
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex justify-end">
        <Button>
          <Plus className="h-4 w-4" />
          Create New
        </Button>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary">Cancel</Button>
        <Button>Save</Button>
      </div>
      <div className="flex gap-2">
        <Button variant="secondary" size="sm">
          Edit
        </Button>
        <Button variant="destructive" size="sm">
          Delete
        </Button>
        <Button variant="success" size="sm">
          Publish
        </Button>
      </div>
    </div>
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Button aria-label="Add new item">
        <Plus className="h-4 w-4" />
      </Button>
      <Button aria-describedby="delete-help" variant="destructive">
        Delete
      </Button>
      <p id="delete-help" className="text-sm text-state-muted-foreground">
        This action cannot be undone
      </p>
    </div>,
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'button-name',
          enabled: true
        }]
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const E=["Default","Secondary","Destructive","Success","Outline","Ghost","Link","AllVariants","AllSizes","WithIcons","Disabled","AsLink","Loading","ManagementActions","AccessibilityTest"];export{x as AccessibilityTest,l as AllSizes,d as AllVariants,p as AsLink,s as Default,n as Destructive,m as Disabled,c as Ghost,o as Link,h as Loading,v as ManagementActions,i as Outline,r as Secondary,t as Success,u as WithIcons,E as __namedExportsOrder,_ as default};
