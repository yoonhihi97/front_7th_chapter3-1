import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DwBS1izW.js";import{c as l,a as b}from"./utils-BkFMFD6b.js";import{B as i}from"./button-DHrb8x4L.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bbdl2d1h.js";const j=b("bg-(--card-bg) text-(--color-text-primary) flex flex-col gap-6 rounded-xl py-6 shadow-sm",{variants:{border:{true:"border border-(--card-border)",false:""},stat:{info:"bg-blue-50 border border-blue-300 rounded-[var(--radius)] shadow-none gap-0 py-0",success:"bg-green-50 border border-green-400 rounded-[var(--radius)] shadow-none gap-0 py-0",warning:"bg-orange-50 border border-orange-300 rounded-[var(--radius)] shadow-none gap-0 py-0",error:"bg-red-50 border border-red-300 rounded-[var(--radius)] shadow-none gap-0 py-0",neutral:"bg-gray-100 border border-gray-400 rounded-[var(--radius)] shadow-none gap-0 py-0"}},defaultVariants:{border:!1}});function a({className:d,stat:n,border:f,...g}){return e.jsx("div",{"data-slot":"card",className:l(j({stat:n,border:f}),d),...g})}function r({className:d,...n}){return e.jsx("div",{"data-slot":"card-header",className:l("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",d),...n})}function s({className:d,...n}){return e.jsx("div",{"data-slot":"card-title",className:l("leading-none font-semibold",d),...n})}function o({className:d,...n}){return e.jsx("div",{"data-slot":"card-description",className:l("text-muted-foreground text-sm",d),...n})}function N({className:d,...n}){return e.jsx("div",{"data-slot":"card-action",className:l("col-start-2 row-span-2 row-start-1 self-start justify-self-end",d),...n})}function t({className:d,...n}){return e.jsx("div",{"data-slot":"card-content",className:l("px-6",d),...n})}function u({className:d,...n}){return e.jsx("div",{"data-slot":"card-footer",className:l("flex items-center px-6 [.border-t]:pt-6",d),...n})}a.__docgenInfo={description:"",methods:[],displayName:"Card",composes:["VariantProps"]};r.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};u.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};s.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};N.__docgenInfo={description:"",methods:[],displayName:"CardAction"};o.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};t.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const S={title:"UI/Card",component:a,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>e.jsxs(a,{className:"w-[350px]",children:[e.jsxs(r,{children:[e.jsx(s,{children:"Card Title"}),e.jsx(o,{children:"Card description goes here"})]}),e.jsx(t,{children:e.jsx("p",{children:"This is the card content area where you can place any information."})}),e.jsx(u,{children:e.jsx(i,{children:"Action"})})]})},x={name:"With Header Action",render:()=>e.jsxs(a,{className:"w-[350px]",children:[e.jsxs(r,{children:[e.jsx(s,{children:"Notifications"}),e.jsx(o,{children:"You have 3 unread messages"}),e.jsx(N,{children:e.jsx(i,{variant:"ghost",size:"sm",children:"View All"})})]}),e.jsx(t,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm",children:"New message from John"}),e.jsx("div",{className:"text-sm",children:"Your report is ready"}),e.jsx("div",{className:"text-sm",children:"Meeting starts in 10 minutes"})]})})]})},m={name:"Stat Variants",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 w-[500px]",children:[e.jsxs(a,{stat:"info",children:[e.jsx(r,{className:"py-0 pt-3 px-[15px] pb-1",children:e.jsx(s,{className:"text-xs text-gray-600 font-normal",children:"Total Users"})}),e.jsx(t,{className:"py-0 px-[15px] pb-3",children:e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:"1,234"})})]}),e.jsxs(a,{stat:"success",children:[e.jsx(r,{className:"py-0 pt-3 px-[15px] pb-1",children:e.jsx(s,{className:"text-xs text-gray-600 font-normal",children:"Active"})}),e.jsx(t,{className:"py-0 px-[15px] pb-3",children:e.jsx("div",{className:"text-2xl font-bold text-green-700",children:"856"})})]}),e.jsxs(a,{stat:"warning",children:[e.jsx(r,{className:"py-0 pt-3 px-[15px] pb-1",children:e.jsx(s,{className:"text-xs text-gray-600 font-normal",children:"Pending"})}),e.jsx(t,{className:"py-0 px-[15px] pb-3",children:e.jsx("div",{className:"text-2xl font-bold text-orange-600",children:"42"})})]}),e.jsxs(a,{stat:"error",children:[e.jsx(r,{className:"py-0 pt-3 px-[15px] pb-1",children:e.jsx(s,{className:"text-xs text-gray-600 font-normal",children:"Inactive"})}),e.jsx(t,{className:"py-0 px-[15px] pb-3",children:e.jsx("div",{className:"text-2xl font-bold text-red-600",children:"23"})})]}),e.jsxs(a,{stat:"neutral",children:[e.jsx(r,{className:"py-0 pt-3 px-[15px] pb-1",children:e.jsx(s,{className:"text-xs text-gray-600 font-normal",children:"Archived"})}),e.jsx(t,{className:"py-0 px-[15px] pb-3",children:e.jsx("div",{className:"text-2xl font-bold text-gray-700",children:"313"})})]})]})},p={name:"Login Form Example",render:()=>e.jsxs(a,{className:"w-full max-w-sm",children:[e.jsxs(r,{children:[e.jsx(s,{children:"Login to your account"}),e.jsx(o,{children:"Enter your email below to login to your account"})]}),e.jsx(t,{children:e.jsx("form",{children:e.jsxs("div",{className:"grid w-full items-center gap-4",children:[e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),e.jsx("input",{id:"email",type:"email",placeholder:"name@example.com",className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"})]}),e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx("label",{htmlFor:"password",className:"text-sm font-medium",children:"Password"}),e.jsx("input",{id:"password",type:"password",className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"})]})]})})}),e.jsxs(u,{className:"flex justify-between",children:[e.jsx(i,{variant:"ghost",children:"Cancel"}),e.jsx(i,{children:"Login"})]})]})},C={name:"Product Card Example",render:()=>e.jsxs(a,{className:"w-[300px]",children:[e.jsxs(r,{children:[e.jsx("div",{className:"aspect-video bg-gray-200 rounded-md mb-2"}),e.jsx(s,{children:"Premium Headphones"}),e.jsx(o,{children:"High-quality wireless headphones with noise cancellation"})]}),e.jsx(t,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-2xl font-bold",children:"$299"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"In Stock"})]})}),e.jsx(u,{className:"flex gap-2",children:e.jsx(i,{className:"w-full",children:"Add to Cart"})})]})},h={name:"Before/After Style Comparison",render:()=>e.jsxs("div",{className:"space-y-6 w-[600px]",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold mb-3",children:"After (shadcn Card + CVA variants)"}),e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsxs(a,{stat:"info",children:[e.jsx(r,{className:"py-0 pt-3 px-[15px] pb-1",children:e.jsx(s,{className:"text-xs text-gray-600 font-normal",children:"Info"})}),e.jsx(t,{className:"py-0 px-[15px] pb-3",children:e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:"123"})})]}),e.jsxs(a,{stat:"success",children:[e.jsx(r,{className:"py-0 pt-3 px-[15px] pb-1",children:e.jsx(s,{className:"text-xs text-gray-600 font-normal",children:"Success"})}),e.jsx(t,{className:"py-0 px-[15px] pb-3",children:e.jsx("div",{className:"text-2xl font-bold text-green-700",children:"456"})})]}),e.jsxs(a,{stat:"error",children:[e.jsx(r,{className:"py-0 pt-3 px-[15px] pb-1",children:e.jsx(s,{className:"text-xs text-gray-600 font-normal",children:"Error"})}),e.jsx(t,{className:"py-0 px-[15px] pb-3",children:e.jsx("div",{className:"text-2xl font-bold text-red-600",children:"789"})})]})]})]}),e.jsxs("div",{className:"border-t pt-6",children:[e.jsx("p",{className:"text-xs text-text-muted mb-2",children:e.jsx("strong",{children:"개선 사항:"})}),e.jsxs("ul",{className:"text-xs text-text-muted space-y-1",children:[e.jsx("li",{children:"✓ CVA variant로 색상 관리 (타입 안전성)"}),e.jsx("li",{children:"✓ className 반복 제거"}),e.jsx("li",{children:"✓ CardHeader + CardTitle로 의미적 구조"}),e.jsx("li",{children:"✓ Tailwind 유틸리티 클래스 사용"}),e.jsx("li",{children:"✓ Before 스타일 완벽 재현 (padding, border-radius, 색상)"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold mb-3",children:"Default Card"}),e.jsxs(a,{className:"w-[350px]",children:[e.jsxs(r,{children:[e.jsx(s,{children:"일반 카드"}),e.jsx(o,{children:"shadcn 기본 스타일"})]}),e.jsx(t,{children:e.jsx("p",{children:"rounded-xl, shadow-sm, gap-6 적용"})})]})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area where you can place any information.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
}`,...c.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With Header Action',
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-sm">New message from John</div>
          <div className="text-sm">Your report is ready</div>
          <div className="text-sm">Meeting starts in 10 minutes</div>
        </div>
      </CardContent>
    </Card>
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Stat Variants',
  render: () => <div className="grid grid-cols-2 gap-4 w-[500px]">
      <Card stat="info">
        <CardHeader className="py-0 pt-3 px-[15px] pb-1">
          <CardTitle className="text-xs text-gray-600 font-normal">
            Total Users
          </CardTitle>
        </CardHeader>
        <CardContent className="py-0 px-[15px] pb-3">
          <div className="text-2xl font-bold text-blue-600">1,234</div>
        </CardContent>
      </Card>

      <Card stat="success">
        <CardHeader className="py-0 pt-3 px-[15px] pb-1">
          <CardTitle className="text-xs text-gray-600 font-normal">
            Active
          </CardTitle>
        </CardHeader>
        <CardContent className="py-0 px-[15px] pb-3">
          <div className="text-2xl font-bold text-green-700">856</div>
        </CardContent>
      </Card>

      <Card stat="warning">
        <CardHeader className="py-0 pt-3 px-[15px] pb-1">
          <CardTitle className="text-xs text-gray-600 font-normal">
            Pending
          </CardTitle>
        </CardHeader>
        <CardContent className="py-0 px-[15px] pb-3">
          <div className="text-2xl font-bold text-orange-600">42</div>
        </CardContent>
      </Card>

      <Card stat="error">
        <CardHeader className="py-0 pt-3 px-[15px] pb-1">
          <CardTitle className="text-xs text-gray-600 font-normal">
            Inactive
          </CardTitle>
        </CardHeader>
        <CardContent className="py-0 px-[15px] pb-3">
          <div className="text-2xl font-bold text-red-600">23</div>
        </CardContent>
      </Card>

      <Card stat="neutral">
        <CardHeader className="py-0 pt-3 px-[15px] pb-1">
          <CardTitle className="text-xs text-gray-600 font-normal">
            Archived
          </CardTitle>
        </CardHeader>
        <CardContent className="py-0 px-[15px] pb-3">
          <div className="text-2xl font-bold text-gray-700">313</div>
        </CardContent>
      </Card>
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Login Form Example',
  render: () => <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input id="email" type="email" placeholder="name@example.com" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input id="password" type="password" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Cancel</Button>
        <Button>Login</Button>
      </CardFooter>
    </Card>
}`,...p.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Product Card Example',
  render: () => <Card className="w-[300px]">
      <CardHeader>
        <div className="aspect-video bg-gray-200 rounded-md mb-2" />
        <CardTitle>Premium Headphones</CardTitle>
        <CardDescription>High-quality wireless headphones with noise cancellation</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">$299</span>
          <span className="text-sm text-muted-foreground">In Stock</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
}`,...C.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Before/After Style Comparison',
  render: () => <div className="space-y-6 w-[600px]">
      <div>
        <h3 className="text-sm font-bold mb-3">
          After (shadcn Card + CVA variants)
        </h3>
        <div className="grid grid-cols-3 gap-2">
          <Card stat="info">
            <CardHeader className="py-0 pt-3 px-[15px] pb-1">
              <CardTitle className="text-xs text-gray-600 font-normal">
                Info
              </CardTitle>
            </CardHeader>
            <CardContent className="py-0 px-[15px] pb-3">
              <div className="text-2xl font-bold text-blue-600">123</div>
            </CardContent>
          </Card>

          <Card stat="success">
            <CardHeader className="py-0 pt-3 px-[15px] pb-1">
              <CardTitle className="text-xs text-gray-600 font-normal">
                Success
              </CardTitle>
            </CardHeader>
            <CardContent className="py-0 px-[15px] pb-3">
              <div className="text-2xl font-bold text-green-700">456</div>
            </CardContent>
          </Card>

          <Card stat="error">
            <CardHeader className="py-0 pt-3 px-[15px] pb-1">
              <CardTitle className="text-xs text-gray-600 font-normal">
                Error
              </CardTitle>
            </CardHeader>
            <CardContent className="py-0 px-[15px] pb-3">
              <div className="text-2xl font-bold text-red-600">789</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="border-t pt-6">
        <p className="text-xs text-text-muted mb-2">
          <strong>개선 사항:</strong>
        </p>
        <ul className="text-xs text-text-muted space-y-1">
          <li>✓ CVA variant로 색상 관리 (타입 안전성)</li>
          <li>✓ className 반복 제거</li>
          <li>✓ CardHeader + CardTitle로 의미적 구조</li>
          <li>✓ Tailwind 유틸리티 클래스 사용</li>
          <li>✓ Before 스타일 완벽 재현 (padding, border-radius, 색상)</li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-bold mb-3">Default Card</h4>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>일반 카드</CardTitle>
            <CardDescription>shadcn 기본 스타일</CardDescription>
          </CardHeader>
          <CardContent>
            <p>rounded-xl, shadow-sm, gap-6 적용</p>
          </CardContent>
        </Card>
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};const _=["Default","WithAction","StatVariants","LoginForm","ProductCard","StyleComparison"];export{c as Default,p as LoginForm,C as ProductCard,m as StatVariants,h as StyleComparison,x as WithAction,_ as __namedExportsOrder,S as default};
