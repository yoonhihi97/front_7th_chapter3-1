import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./iframe-DwBS1izW.js";import{c as g,a as v}from"./utils-BkFMFD6b.js";import{F as s,L as l,a,b as h}from"./field-eLnlr9vQ.js";import"./preload-helper-PPVm8Dsz.js";const L=v(["flex w-full","px-2.5 py-2","text-base font-sans","text-(--input-fg)","rounded-[var(--radius)]","border border-solid border-(--input-border)","bg-(--input-bg)","transition-colors","placeholder:text-(--input-placeholder)","focus-visible:outline-none focus-visible:border-(--input-border-focus)","disabled:cursor-not-allowed disabled:bg-(--input-disabled-bg) disabled:opacity-60"],{variants:{error:{true:"border-(--color-feedback-error) focus-visible:border-(--color-feedback-error)",false:""}},defaultVariants:{error:!1}}),r=y.forwardRef(({className:b,type:u="text",error:F,...j},f)=>e.jsx("input",{type:u,className:g(L({error:F,className:b})),ref:f,...j}));r.displayName="Input";r.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1}},composes:["VariantProps"]};const T={title:"UI/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","url"],description:"Input 타입"},error:{control:"boolean",description:"에러 상태"},disabled:{control:"boolean",description:"비활성화 상태"},placeholder:{control:"text",description:"Placeholder 텍스트"}}},t={args:{placeholder:"Enter text..."}},i={name:"With Label",render:()=>e.jsxs(s,{className:"w-80",children:[e.jsx(l,{htmlFor:"email",children:"이메일"}),e.jsx(r,{id:"email",type:"email",placeholder:"name@example.com"})]})},d={name:"With Helper Text",render:()=>e.jsxs(s,{className:"w-80",children:[e.jsx(l,{htmlFor:"username",children:"사용자명"}),e.jsx(r,{id:"username",placeholder:"사용자명 입력"}),e.jsx(a,{children:"3자 이상 입력하세요"})]})},o={name:"With Error",render:()=>e.jsxs(s,{className:"w-80",children:[e.jsx(l,{htmlFor:"password",children:"비밀번호"}),e.jsx(r,{id:"password",type:"password",error:!0}),e.jsx(h,{children:"비밀번호는 8자 이상이어야 합니다"})]})},c={args:{disabled:!0,value:"Disabled input"}},n={name:"Input Types",render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsxs(s,{children:[e.jsx(l,{htmlFor:"text",children:"Text"}),e.jsx(r,{id:"text",type:"text",placeholder:"Text input"})]}),e.jsxs(s,{children:[e.jsx(l,{htmlFor:"email-type",children:"Email"}),e.jsx(r,{id:"email-type",type:"email",placeholder:"email@example.com"})]}),e.jsxs(s,{children:[e.jsx(l,{htmlFor:"password-type",children:"Password"}),e.jsx(r,{id:"password-type",type:"password",placeholder:"Enter password"})]}),e.jsxs(s,{children:[e.jsx(l,{htmlFor:"number",children:"Number"}),e.jsx(r,{id:"number",type:"number",placeholder:"Enter number"})]}),e.jsxs(s,{children:[e.jsx(l,{htmlFor:"url",children:"URL"}),e.jsx(r,{id:"url",type:"url",placeholder:"https://example.com"})]})]})},p={name:"Full Form Example",render:()=>e.jsxs("div",{className:"space-y-4 w-96",children:[e.jsxs(s,{children:[e.jsxs(l,{htmlFor:"name",children:["이름 ",e.jsx("span",{className:"text-feedback-error",children:"*"})]}),e.jsx(r,{id:"name",placeholder:"홍길동"})]}),e.jsxs(s,{children:[e.jsxs(l,{htmlFor:"email-form",children:["이메일 ",e.jsx("span",{className:"text-feedback-error",children:"*"})]}),e.jsx(r,{id:"email-form",type:"email",placeholder:"name@example.com"}),e.jsx(a,{children:"회사 이메일을 입력하세요"})]}),e.jsxs(s,{children:[e.jsx(l,{htmlFor:"bio",children:"소개"}),e.jsx(r,{id:"bio",placeholder:"간단한 자기소개"}),e.jsx(a,{children:"선택 사항입니다"})]}),e.jsxs(s,{children:[e.jsx(l,{htmlFor:"error-example",children:"사용자명"}),e.jsx(r,{id:"error-example",placeholder:"사용자명 입력",error:!0}),e.jsx(h,{children:"이미 사용 중인 사용자명입니다"})]})]})},m={name:"Before/After Style Comparison",render:()=>e.jsxs("div",{className:"space-y-6 w-96",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold mb-3",children:"After (TailwindCSS + 디자인 토큰)"}),e.jsxs(s,{children:[e.jsx(l,{htmlFor:"test1",children:"사용자명"}),e.jsx(r,{id:"test1",placeholder:"사용자명 입력"}),e.jsx(a,{children:"3자 이상 입력하세요"})]})]}),e.jsxs("div",{className:"border-t pt-6",children:[e.jsx("p",{className:"text-xs text-text-muted mb-2",children:e.jsx("strong",{children:"스타일 재현 확인:"})}),e.jsxs("ul",{className:"text-xs text-text-muted space-y-1",children:[e.jsx("li",{children:"• padding: 8px 10px (py-2 px-2.5)"}),e.jsx("li",{children:"• font-size: 14px (text-base)"}),e.jsx("li",{children:"• label font-size: 13px (text-sm)"}),e.jsx("li",{children:"• helper font-size: 12px (text-xs)"}),e.jsx("li",{children:"• border-radius: 3px"}),e.jsx("li",{children:"• focus: #1976d2 (border-focus)"}),e.jsx("li",{children:"• error: #d32f2f (feedback-error)"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold mb-3",children:"Error 상태"}),e.jsxs(s,{children:[e.jsx(l,{htmlFor:"error-state",children:"비밀번호"}),e.jsx(r,{id:"error-state",type:"password",error:!0}),e.jsx(h,{children:"비밀번호는 8자 이상이어야 합니다"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold mb-3",children:"Disabled 상태"}),e.jsxs(s,{children:[e.jsx(l,{htmlFor:"disabled-state",children:"비활성화 입력"}),e.jsx(r,{id:"disabled-state",value:"Disabled",disabled:!0}),e.jsx(a,{children:"이 필드는 비활성화되었습니다"})]})]})]})},x={name:"Accessibility Test",render:()=>e.jsxs("div",{className:"space-y-4 w-96",children:[e.jsxs(s,{children:[e.jsx(l,{htmlFor:"accessible-input",children:"접근성 테스트 입력"}),e.jsx(r,{id:"accessible-input",placeholder:"입력하세요","aria-describedby":"help-text"}),e.jsx(a,{id:"help-text",children:"이 필드는 필수 입력 항목입니다"})]}),e.jsxs(s,{children:[e.jsx(l,{htmlFor:"error-accessible",children:"에러 메시지 접근성"}),e.jsx(r,{id:"error-accessible",error:!0,"aria-invalid":"true","aria-describedby":"error-message"}),e.jsx(h,{id:"error-message",children:"유효하지 않은 입력입니다"})]}),e.jsxs("div",{className:"border-t pt-4 mt-4",children:[e.jsx("p",{className:"text-xs text-text-muted",children:e.jsx("strong",{children:"접근성 체크리스트:"})}),e.jsxs("ul",{className:"text-xs text-text-muted space-y-1 mt-2",children:[e.jsx("li",{children:"✓ Label htmlFor와 Input id 연결"}),e.jsx("li",{children:'✓ Error 메시지에 role="alert"'}),e.jsx("li",{children:"✓ aria-describedby로 도움말 연결"}),e.jsx("li",{children:"✓ aria-invalid for error state"}),e.jsx("li",{children:"✓ focus-visible로 키보드 네비게이션"})]})]})]}),parameters:{a11y:{config:{rules:[{id:"label",enabled:!0},{id:"color-contrast",enabled:!0}]}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Label',
  render: () => <Field className="w-80">
      <Label htmlFor="email">이메일</Label>
      <Input id="email" type="email" placeholder="name@example.com" />
    </Field>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Helper Text',
  render: () => <Field className="w-80">
      <Label htmlFor="username">사용자명</Label>
      <Input id="username" placeholder="사용자명 입력" />
      <FieldDescription>3자 이상 입력하세요</FieldDescription>
    </Field>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Error',
  render: () => <Field className="w-80">
      <Label htmlFor="password">비밀번호</Label>
      <Input id="password" type="password" error />
      <FieldMessage>비밀번호는 8자 이상이어야 합니다</FieldMessage>
    </Field>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Disabled input'
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Input Types',
  render: () => <div className="space-y-4 w-80">
      <Field>
        <Label htmlFor="text">Text</Label>
        <Input id="text" type="text" placeholder="Text input" />
      </Field>

      <Field>
        <Label htmlFor="email-type">Email</Label>
        <Input id="email-type" type="email" placeholder="email@example.com" />
      </Field>

      <Field>
        <Label htmlFor="password-type">Password</Label>
        <Input id="password-type" type="password" placeholder="Enter password" />
      </Field>

      <Field>
        <Label htmlFor="number">Number</Label>
        <Input id="number" type="number" placeholder="Enter number" />
      </Field>

      <Field>
        <Label htmlFor="url">URL</Label>
        <Input id="url" type="url" placeholder="https://example.com" />
      </Field>
    </div>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Full Form Example',
  render: () => <div className="space-y-4 w-96">
      <Field>
        <Label htmlFor="name">
          이름 <span className="text-feedback-error">*</span>
        </Label>
        <Input id="name" placeholder="홍길동" />
      </Field>

      <Field>
        <Label htmlFor="email-form">
          이메일 <span className="text-feedback-error">*</span>
        </Label>
        <Input id="email-form" type="email" placeholder="name@example.com" />
        <FieldDescription>회사 이메일을 입력하세요</FieldDescription>
      </Field>

      <Field>
        <Label htmlFor="bio">소개</Label>
        <Input id="bio" placeholder="간단한 자기소개" />
        <FieldDescription>선택 사항입니다</FieldDescription>
      </Field>

      <Field>
        <Label htmlFor="error-example">사용자명</Label>
        <Input id="error-example" placeholder="사용자명 입력" error />
        <FieldMessage>이미 사용 중인 사용자명입니다</FieldMessage>
      </Field>
    </div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Before/After Style Comparison',
  render: () => <div className="space-y-6 w-96">
      <div>
        <h3 className="text-sm font-bold mb-3">After (TailwindCSS + 디자인 토큰)</h3>
        <Field>
          <Label htmlFor="test1">사용자명</Label>
          <Input id="test1" placeholder="사용자명 입력" />
          <FieldDescription>3자 이상 입력하세요</FieldDescription>
        </Field>
      </div>

      <div className="border-t pt-6">
        <p className="text-xs text-text-muted mb-2">
          <strong>스타일 재현 확인:</strong>
        </p>
        <ul className="text-xs text-text-muted space-y-1">
          <li>• padding: 8px 10px (py-2 px-2.5)</li>
          <li>• font-size: 14px (text-base)</li>
          <li>• label font-size: 13px (text-sm)</li>
          <li>• helper font-size: 12px (text-xs)</li>
          <li>• border-radius: 3px</li>
          <li>• focus: #1976d2 (border-focus)</li>
          <li>• error: #d32f2f (feedback-error)</li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-bold mb-3">Error 상태</h4>
        <Field>
          <Label htmlFor="error-state">비밀번호</Label>
          <Input id="error-state" type="password" error />
          <FieldMessage>비밀번호는 8자 이상이어야 합니다</FieldMessage>
        </Field>
      </div>

      <div>
        <h4 className="text-sm font-bold mb-3">Disabled 상태</h4>
        <Field>
          <Label htmlFor="disabled-state">비활성화 입력</Label>
          <Input id="disabled-state" value="Disabled" disabled />
          <FieldDescription>이 필드는 비활성화되었습니다</FieldDescription>
        </Field>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility Test',
  render: () => <div className="space-y-4 w-96">
      <Field>
        <Label htmlFor="accessible-input">접근성 테스트 입력</Label>
        <Input id="accessible-input" placeholder="입력하세요" aria-describedby="help-text" />
        <FieldDescription id="help-text">이 필드는 필수 입력 항목입니다</FieldDescription>
      </Field>

      <Field>
        <Label htmlFor="error-accessible">에러 메시지 접근성</Label>
        <Input id="error-accessible" error aria-invalid="true" aria-describedby="error-message" />
        <FieldMessage id="error-message">유효하지 않은 입력입니다</FieldMessage>
      </Field>

      <div className="border-t pt-4 mt-4">
        <p className="text-xs text-text-muted">
          <strong>접근성 체크리스트:</strong>
        </p>
        <ul className="text-xs text-text-muted space-y-1 mt-2">
          <li>✓ Label htmlFor와 Input id 연결</li>
          <li>✓ Error 메시지에 role="alert"</li>
          <li>✓ aria-describedby로 도움말 연결</li>
          <li>✓ aria-invalid for error state</li>
          <li>✓ focus-visible로 키보드 네비게이션</li>
        </ul>
      </div>
    </div>,
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'label',
          enabled: true
        }, {
          id: 'color-contrast',
          enabled: true
        }]
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const S=["Default","WithLabel","WithHelperText","WithError","Disabled","InputTypes","FullFormExample","StyleComparison","AccessibilityTest"];export{x as AccessibilityTest,t as Default,c as Disabled,p as FullFormExample,n as InputTypes,m as StyleComparison,o as WithError,d as WithHelperText,i as WithLabel,S as __namedExportsOrder,T as default};
