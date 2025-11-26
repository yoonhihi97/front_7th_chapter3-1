import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./iframe-DwBS1izW.js";import{c as f,a as w}from"./utils-BkFMFD6b.js";import{F as s,L as a,a as l,b as h}from"./field-eLnlr9vQ.js";import"./preload-helper-PPVm8Dsz.js";const v=w(["flex w-full","min-h-[6em]","px-[var(--spacing-textarea-x)] py-[var(--spacing-textarea-y)]","text-lg font-sans font-normal","leading-[var(--line-height-textarea)]","text-(--input-fg)","rounded-[var(--radius-textarea)]","border border-solid border-(--input-border)","bg-(--input-bg)","resize-y","transition-colors duration-200","outline-none","focus-visible:border-2 focus-visible:border-(--input-border-focus)","focus-visible:px-[var(--spacing-textarea-x-focus)] focus-visible:py-[var(--spacing-textarea-y-focus)]","disabled:cursor-not-allowed disabled:bg-(--input-disabled-bg)"],{variants:{error:{true:"border-(--color-feedback-error) focus-visible:border-(--color-feedback-error)",false:""}},defaultVariants:{error:!1}}),r=g.forwardRef(({className:b,error:u,...F},j)=>e.jsx("textarea",{className:f(v({error:u,className:b})),ref:j,...F}));r.displayName="Textarea";r.__docgenInfo={description:"",methods:[],displayName:"Textarea",composes:["VariantProps"]};const S={title:"UI/Textarea",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{error:{control:"boolean",description:"에러 상태"},disabled:{control:"boolean",description:"비활성화 상태"},placeholder:{control:"text",description:"Placeholder 텍스트"},rows:{control:"number",description:"텍스트 영역 높이 (행 수)"}}},i={args:{placeholder:"Enter text...",rows:4}},t={name:"With Label",render:()=>e.jsxs(s,{className:"w-[500px]",children:[e.jsx(a,{htmlFor:"content",children:"내용"}),e.jsx(r,{id:"content",placeholder:"내용을 입력하세요...",rows:5})]})},d={name:"With Helper Text",render:()=>e.jsxs(s,{className:"w-[500px]",children:[e.jsx(a,{htmlFor:"description",children:"설명"}),e.jsx(r,{id:"description",placeholder:"상세 설명을 입력하세요",rows:4}),e.jsx(l,{children:"최소 10자 이상 입력하세요"})]})},o={name:"With Error",render:()=>e.jsxs(s,{className:"w-[500px]",children:[e.jsx(a,{htmlFor:"message",children:"메시지"}),e.jsx(r,{id:"message",error:!0,rows:4}),e.jsx(h,{children:"메시지는 필수 입력 항목입니다"})]})},c={args:{disabled:!0,value:"This textarea is disabled",rows:4}},n={name:"Different Sizes (Rows)",render:()=>e.jsxs("div",{className:"space-y-4 w-[500px]",children:[e.jsxs(s,{children:[e.jsx(a,{htmlFor:"small",children:"Small (3 rows)"}),e.jsx(r,{id:"small",placeholder:"작은 텍스트 영역",rows:3})]}),e.jsxs(s,{children:[e.jsx(a,{htmlFor:"medium",children:"Medium (5 rows)"}),e.jsx(r,{id:"medium",placeholder:"중간 텍스트 영역",rows:5})]}),e.jsxs(s,{children:[e.jsx(a,{htmlFor:"large",children:"Large (8 rows)"}),e.jsx(r,{id:"large",placeholder:"큰 텍스트 영역",rows:8})]})]})},x={name:"Full Form Example",render:()=>e.jsxs("div",{className:"space-y-4 w-[600px]",children:[e.jsxs(s,{children:[e.jsxs(a,{htmlFor:"post-title",children:["게시글 제목 ",e.jsx("span",{className:"text-feedback-error",children:"*"})]}),e.jsx(r,{id:"post-title",placeholder:"제목을 입력하세요",rows:2})]}),e.jsxs(s,{children:[e.jsxs(a,{htmlFor:"post-content",children:["게시글 내용 ",e.jsx("span",{className:"text-feedback-error",children:"*"})]}),e.jsx(r,{id:"post-content",placeholder:"내용을 입력하세요...",rows:6}),e.jsx(l,{children:"최소 100자 이상 작성해주세요"})]}),e.jsxs(s,{children:[e.jsx(a,{htmlFor:"note",children:"추가 노트"}),e.jsx(r,{id:"note",placeholder:"선택 사항입니다",rows:3}),e.jsx(l,{children:"추가 정보가 있으면 입력하세요"})]}),e.jsxs(s,{children:[e.jsx(a,{htmlFor:"error-example",children:"피드백"}),e.jsx(r,{id:"error-example",placeholder:"피드백 입력",rows:4,error:!0}),e.jsx(h,{children:"피드백 내용이 너무 짧습니다 (최소 10자)"})]})]})},m={name:"Before/After Style Comparison",render:()=>e.jsxs("div",{className:"space-y-6 w-[600px]",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold mb-3",children:"After (TailwindCSS + 디자인 토큰)"}),e.jsxs(s,{children:[e.jsx(a,{htmlFor:"test1",children:"게시글 내용"}),e.jsx(r,{id:"test1",placeholder:"내용을 입력하세요...",rows:6}),e.jsx(l,{children:"최소 100자 이상 작성해주세요"})]})]}),e.jsxs("div",{className:"border-t pt-6",children:[e.jsx("p",{className:"text-xs text-text-muted mb-2",children:e.jsx("strong",{children:"스타일 재현 확인:"})}),e.jsxs("ul",{className:"text-xs text-text-muted space-y-1",children:[e.jsx("li",{children:"• padding: 16.5px 14px (디자인 토큰)"}),e.jsx("li",{children:"• font-size: 16px (text-lg)"}),e.jsx("li",{children:"• line-height: 1.1876"}),e.jsx("li",{children:"• min-height: 6em"}),e.jsx("li",{children:"• border-radius: 4px"}),e.jsx("li",{children:"• resize: vertical"}),e.jsx("li",{children:"• focus: border-width 2px + padding 조정"}),e.jsx("li",{children:"• focus border-color: #1976d2"}),e.jsx("li",{children:"• error border-color: #d32f2f"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold mb-3",children:"Error 상태"}),e.jsxs(s,{children:[e.jsx(a,{htmlFor:"error-state",children:"내용"}),e.jsx(r,{id:"error-state",rows:4,error:!0}),e.jsx(h,{children:"내용은 필수 입력 항목입니다"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold mb-3",children:"Disabled 상태"}),e.jsxs(s,{children:[e.jsx(a,{htmlFor:"disabled-state",children:"비활성화 텍스트 영역"}),e.jsx(r,{id:"disabled-state",value:"This textarea is disabled",rows:3,disabled:!0}),e.jsx(l,{children:"이 필드는 비활성화되었습니다"})]})]})]})},p={name:"Accessibility Test",render:()=>e.jsxs("div",{className:"space-y-4 w-[600px]",children:[e.jsxs(s,{children:[e.jsx(a,{htmlFor:"accessible-textarea",children:"접근성 테스트 텍스트 영역"}),e.jsx(r,{id:"accessible-textarea",placeholder:"내용을 입력하세요",rows:5,"aria-describedby":"help-text"}),e.jsx(l,{id:"help-text",children:"이 필드는 필수 입력 항목입니다"})]}),e.jsxs(s,{children:[e.jsx(a,{htmlFor:"error-accessible",children:"에러 메시지 접근성"}),e.jsx(r,{id:"error-accessible",rows:4,error:!0,"aria-invalid":"true","aria-describedby":"error-message"}),e.jsx(h,{id:"error-message",children:"유효하지 않은 입력입니다"})]}),e.jsxs("div",{className:"border-t pt-4 mt-4",children:[e.jsx("p",{className:"text-xs text-text-muted",children:e.jsx("strong",{children:"접근성 체크리스트:"})}),e.jsxs("ul",{className:"text-xs text-text-muted space-y-1 mt-2",children:[e.jsx("li",{children:"✓ Label htmlFor와 Textarea id 연결"}),e.jsx("li",{children:'✓ Error 메시지에 role="alert"'}),e.jsx("li",{children:"✓ aria-describedby로 도움말 연결"}),e.jsx("li",{children:"✓ aria-invalid for error state"}),e.jsx("li",{children:"✓ focus-visible로 키보드 네비게이션"}),e.jsx("li",{children:"✓ resize: vertical로 사용자 조정 가능"})]})]})]}),parameters:{a11y:{config:{rules:[{id:"label",enabled:!0},{id:"color-contrast",enabled:!0}]}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    rows: 4
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'With Label',
  render: () => <Field className="w-[500px]">
      <Label htmlFor="content">내용</Label>
      <Textarea id="content" placeholder="내용을 입력하세요..." rows={5} />
    </Field>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Helper Text',
  render: () => <Field className="w-[500px]">
      <Label htmlFor="description">설명</Label>
      <Textarea id="description" placeholder="상세 설명을 입력하세요" rows={4} />
      <FieldDescription>최소 10자 이상 입력하세요</FieldDescription>
    </Field>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Error',
  render: () => <Field className="w-[500px]">
      <Label htmlFor="message">메시지</Label>
      <Textarea id="message" error rows={4} />
      <FieldMessage>메시지는 필수 입력 항목입니다</FieldMessage>
    </Field>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'This textarea is disabled',
    rows: 4
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Different Sizes (Rows)',
  render: () => <div className="space-y-4 w-[500px]">
      <Field>
        <Label htmlFor="small">Small (3 rows)</Label>
        <Textarea id="small" placeholder="작은 텍스트 영역" rows={3} />
      </Field>

      <Field>
        <Label htmlFor="medium">Medium (5 rows)</Label>
        <Textarea id="medium" placeholder="중간 텍스트 영역" rows={5} />
      </Field>

      <Field>
        <Label htmlFor="large">Large (8 rows)</Label>
        <Textarea id="large" placeholder="큰 텍스트 영역" rows={8} />
      </Field>
    </div>
}`,...n.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Full Form Example',
  render: () => <div className="space-y-4 w-[600px]">
      <Field>
        <Label htmlFor="post-title">
          게시글 제목 <span className="text-feedback-error">*</span>
        </Label>
        <Textarea id="post-title" placeholder="제목을 입력하세요" rows={2} />
      </Field>

      <Field>
        <Label htmlFor="post-content">
          게시글 내용 <span className="text-feedback-error">*</span>
        </Label>
        <Textarea id="post-content" placeholder="내용을 입력하세요..." rows={6} />
        <FieldDescription>최소 100자 이상 작성해주세요</FieldDescription>
      </Field>

      <Field>
        <Label htmlFor="note">추가 노트</Label>
        <Textarea id="note" placeholder="선택 사항입니다" rows={3} />
        <FieldDescription>추가 정보가 있으면 입력하세요</FieldDescription>
      </Field>

      <Field>
        <Label htmlFor="error-example">피드백</Label>
        <Textarea id="error-example" placeholder="피드백 입력" rows={4} error />
        <FieldMessage>피드백 내용이 너무 짧습니다 (최소 10자)</FieldMessage>
      </Field>
    </div>
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Before/After Style Comparison',
  render: () => <div className="space-y-6 w-[600px]">
      <div>
        <h3 className="text-sm font-bold mb-3">After (TailwindCSS + 디자인 토큰)</h3>
        <Field>
          <Label htmlFor="test1">게시글 내용</Label>
          <Textarea id="test1" placeholder="내용을 입력하세요..." rows={6} />
          <FieldDescription>최소 100자 이상 작성해주세요</FieldDescription>
        </Field>
      </div>

      <div className="border-t pt-6">
        <p className="text-xs text-text-muted mb-2">
          <strong>스타일 재현 확인:</strong>
        </p>
        <ul className="text-xs text-text-muted space-y-1">
          <li>• padding: 16.5px 14px (디자인 토큰)</li>
          <li>• font-size: 16px (text-lg)</li>
          <li>• line-height: 1.1876</li>
          <li>• min-height: 6em</li>
          <li>• border-radius: 4px</li>
          <li>• resize: vertical</li>
          <li>• focus: border-width 2px + padding 조정</li>
          <li>• focus border-color: #1976d2</li>
          <li>• error border-color: #d32f2f</li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-bold mb-3">Error 상태</h4>
        <Field>
          <Label htmlFor="error-state">내용</Label>
          <Textarea id="error-state" rows={4} error />
          <FieldMessage>내용은 필수 입력 항목입니다</FieldMessage>
        </Field>
      </div>

      <div>
        <h4 className="text-sm font-bold mb-3">Disabled 상태</h4>
        <Field>
          <Label htmlFor="disabled-state">비활성화 텍스트 영역</Label>
          <Textarea id="disabled-state" value="This textarea is disabled" rows={3} disabled />
          <FieldDescription>이 필드는 비활성화되었습니다</FieldDescription>
        </Field>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Accessibility Test',
  render: () => <div className="space-y-4 w-[600px]">
      <Field>
        <Label htmlFor="accessible-textarea">접근성 테스트 텍스트 영역</Label>
        <Textarea id="accessible-textarea" placeholder="내용을 입력하세요" rows={5} aria-describedby="help-text" />
        <FieldDescription id="help-text">이 필드는 필수 입력 항목입니다</FieldDescription>
      </Field>

      <Field>
        <Label htmlFor="error-accessible">에러 메시지 접근성</Label>
        <Textarea id="error-accessible" rows={4} error aria-invalid="true" aria-describedby="error-message" />
        <FieldMessage id="error-message">유효하지 않은 입력입니다</FieldMessage>
      </Field>

      <div className="border-t pt-4 mt-4">
        <p className="text-xs text-text-muted">
          <strong>접근성 체크리스트:</strong>
        </p>
        <ul className="text-xs text-text-muted space-y-1 mt-2">
          <li>✓ Label htmlFor와 Textarea id 연결</li>
          <li>✓ Error 메시지에 role="alert"</li>
          <li>✓ aria-describedby로 도움말 연결</li>
          <li>✓ aria-invalid for error state</li>
          <li>✓ focus-visible로 키보드 네비게이션</li>
          <li>✓ resize: vertical로 사용자 조정 가능</li>
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
}`,...p.parameters?.docs?.source}}};const E=["Default","WithLabel","WithHelperText","WithError","Disabled","DifferentSizes","FullFormExample","StyleComparison","AccessibilityTest"];export{p as AccessibilityTest,i as Default,n as DifferentSizes,c as Disabled,x as FullFormExample,m as StyleComparison,o as WithError,d as WithHelperText,t as WithLabel,E as __namedExportsOrder,S as default};
