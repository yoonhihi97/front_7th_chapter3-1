import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./badge-DTyliYr4.js";import"./iframe-BpjeVuLf.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BkFMFD6b.js";const B={title:"UI/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","success","destructive","warning","info"],description:"The visual style variant of the badge"},size:{control:"select",options:["sm","md","lg"],description:"The size of the badge"}}},r={args:{children:"Badge"}},s={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"destructive",children:"Destructive"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"info",children:"Info"})]})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})},c={name:"Status Badges (Domain Example)",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"success",children:"게시됨"}),e.jsx(a,{variant:"warning",children:"임시저장"}),e.jsx(a,{variant:"secondary",children:"보관됨"}),e.jsx(a,{variant:"info",children:"대기중"}),e.jsx(a,{variant:"destructive",children:"거부됨"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"success",children:"활성"}),e.jsx(a,{variant:"warning",children:"비활성"}),e.jsx(a,{variant:"destructive",children:"정지"})]})]})},n={name:"User Role Badges (Domain Example)",render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{variant:"destructive",children:"관리자"}),e.jsx(a,{variant:"warning",children:"운영자"}),e.jsx(a,{variant:"primary",children:"사용자"}),e.jsx(a,{variant:"secondary",children:"게스트"})]})},t={name:"Category Badges (Domain Example)",render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{variant:"primary",children:"Development"}),e.jsx(a,{variant:"info",children:"Design"}),e.jsx(a,{variant:"destructive",children:"Accessibility"}),e.jsx(a,{variant:"success",children:"Performance"})]})},d={name:"Variant × Size Combinations",render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{variant:"primary",size:"sm",children:"Small Primary"}),e.jsx(a,{variant:"primary",size:"md",children:"Medium Primary"}),e.jsx(a,{variant:"primary",size:"lg",children:"Large Primary"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{variant:"success",size:"sm",children:"Small Success"}),e.jsx(a,{variant:"success",size:"md",children:"Medium Success"}),e.jsx(a,{variant:"success",size:"lg",children:"Large Success"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{variant:"destructive",size:"sm",children:"Small Error"}),e.jsx(a,{variant:"destructive",size:"md",children:"Medium Error"}),e.jsx(a,{variant:"destructive",size:"lg",children:"Large Error"})]})]})},l={name:"Badge in Inline Text",render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-sm",children:["게시글 상태: ",e.jsx(a,{variant:"success",children:"게시됨"})]}),e.jsxs("p",{className:"text-sm",children:["사용자 역할: ",e.jsx(a,{variant:"destructive",children:"관리자"})]}),e.jsxs("p",{className:"text-sm",children:["알림 ",e.jsx(a,{variant:"info",size:"sm",children:"3"}),"개가 있습니다."]})]})},o={name:"Clickable Badges",render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{variant:"primary",className:"cursor-pointer hover:opacity-80 transition-opacity",onClick:()=>alert("Primary badge clicked"),children:"Clickable"}),e.jsx(a,{variant:"success",className:"cursor-pointer hover:opacity-80 transition-opacity",onClick:()=>alert("Success badge clicked"),children:"Clickable Success"})]})},m={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"success","aria-label":"게시 완료됨",children:"게시됨"}),e.jsx(a,{variant:"destructive",role:"status","aria-live":"polite",children:"에러 발생"}),e.jsx("p",{className:"text-sm text-state-muted-foreground",children:"Screen reader will announce badge content and ARIA attributes"})]}),parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!0}]}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Status Badges (Domain Example)',
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Badge variant="success">게시됨</Badge>
        <Badge variant="warning">임시저장</Badge>
        <Badge variant="secondary">보관됨</Badge>
        <Badge variant="info">대기중</Badge>
        <Badge variant="destructive">거부됨</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="success">활성</Badge>
        <Badge variant="warning">비활성</Badge>
        <Badge variant="destructive">정지</Badge>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'User Role Badges (Domain Example)',
  render: () => <div className="flex gap-2">
      <Badge variant="destructive">관리자</Badge>
      <Badge variant="warning">운영자</Badge>
      <Badge variant="primary">사용자</Badge>
      <Badge variant="secondary">게스트</Badge>
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Category Badges (Domain Example)',
  render: () => <div className="flex gap-2">
      <Badge variant="primary">Development</Badge>
      <Badge variant="info">Design</Badge>
      <Badge variant="destructive">Accessibility</Badge>
      <Badge variant="success">Performance</Badge>
    </div>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Variant × Size Combinations',
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Badge variant="primary" size="sm">Small Primary</Badge>
        <Badge variant="primary" size="md">Medium Primary</Badge>
        <Badge variant="primary" size="lg">Large Primary</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="success" size="sm">Small Success</Badge>
        <Badge variant="success" size="md">Medium Success</Badge>
        <Badge variant="success" size="lg">Large Success</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="destructive" size="sm">Small Error</Badge>
        <Badge variant="destructive" size="md">Medium Error</Badge>
        <Badge variant="destructive" size="lg">Large Error</Badge>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Badge in Inline Text',
  render: () => <div className="space-y-2">
      <p className="text-sm">
        게시글 상태: <Badge variant="success">게시됨</Badge>
      </p>
      <p className="text-sm">
        사용자 역할: <Badge variant="destructive">관리자</Badge>
      </p>
      <p className="text-sm">
        알림 <Badge variant="info" size="sm">3</Badge>개가 있습니다.
      </p>
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Clickable Badges',
  render: () => <div className="flex gap-2">
      <Badge variant="primary" className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => alert('Primary badge clicked')}>
        Clickable
      </Badge>
      <Badge variant="success" className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => alert('Success badge clicked')}>
        Clickable Success
      </Badge>
    </div>
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Badge variant="success" aria-label="게시 완료됨">
        게시됨
      </Badge>
      <Badge variant="destructive" role="status" aria-live="polite">
        에러 발생
      </Badge>
      <p className="text-sm text-state-muted-foreground">
        Screen reader will announce badge content and ARIA attributes
      </p>
    </div>,
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: true
        }]
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const h=["Default","AllVariants","AllSizes","StatusExamples","UserRoleExamples","CategoryExamples","SizeCombinations","InlineText","InteractiveBadges","AccessibilityTest"];export{m as AccessibilityTest,i as AllSizes,s as AllVariants,t as CategoryExamples,r as Default,l as InlineText,o as InteractiveBadges,d as SizeCombinations,c as StatusExamples,n as UserRoleExamples,h as __namedExportsOrder,B as default};
