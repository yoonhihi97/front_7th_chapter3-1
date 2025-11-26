import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DwBS1izW.js";import{c as i,a as p}from"./utils-BkFMFD6b.js";import{B as r}from"./badge-D9-kZilF.js";import"./preload-helper-PPVm8Dsz.js";function b({className:d,...s}){return e.jsx("div",{"data-slot":"table-container",className:"overflow-x-auto",children:e.jsx("table",{"data-slot":"table",className:i("w-full border-collapse font-sans text-sm bg-(--table-bg)",d),...s})})}function T({className:d,...s}){return e.jsx("thead",{"data-slot":"table-header",className:i("bg-(--table-header-bg)",d),...s})}const m=p("",{variants:{striped:{true:"[&>tr:nth-child(even)]:bg-(--table-stripe-bg)",false:""}},defaultVariants:{striped:!1}});function c({className:d,striped:s,...C}){return e.jsx("tbody",{"data-slot":"table-body",className:i(m({striped:s}),d),...C})}function n({className:d,...s}){return e.jsx("tr",{"data-slot":"table-row",className:i("hover:bg-(--table-row-hover-bg)",d),...s})}function a({className:d,...s}){return e.jsx("th",{"data-slot":"table-head",className:i("p-4 text-left font-medium text-xs text-(--table-header-fg) uppercase tracking-[0.03em] border-b-2 border-(--table-border-strong)",d),...s})}function l({className:d,...s}){return e.jsx("td",{"data-slot":"table-cell",className:i("p-4 text-(--table-cell-fg) border-b border-(--table-border) [tr:last-child_&]:border-b-0",d),...s})}b.__docgenInfo={description:"",methods:[],displayName:"Table"};T.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};c.__docgenInfo={description:"",methods:[],displayName:"TableBody",composes:["VariantProps"]};a.__docgenInfo={description:"",methods:[],displayName:"TableHead"};n.__docgenInfo={description:"",methods:[],displayName:"TableRow"};l.__docgenInfo={description:"",methods:[],displayName:"TableCell"};const R={title:"UI/Table",component:b,tags:["autodocs"],parameters:{layout:"padded"}},t={render:()=>e.jsxs(b,{children:[e.jsx(T,{children:e.jsxs(n,{children:[e.jsx(a,{children:"ID"}),e.jsx(a,{children:"이름"}),e.jsx(a,{children:"이메일"}),e.jsx(a,{children:"역할"})]})}),e.jsxs(c,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"1"}),e.jsx(l,{children:"홍길동"}),e.jsx(l,{children:"hong@example.com"}),e.jsx(l,{children:"사용자"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"2"}),e.jsx(l,{children:"김철수"}),e.jsx(l,{children:"kim@example.com"}),e.jsx(l,{children:"관리자"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"3"}),e.jsx(l,{children:"이영희"}),e.jsx(l,{children:"lee@example.com"}),e.jsx(l,{children:"운영자"})]})]})]})},o={render:()=>e.jsxs(b,{children:[e.jsx(T,{children:e.jsxs(n,{children:[e.jsx(a,{children:"ID"}),e.jsx(a,{children:"제목"}),e.jsx(a,{children:"작성자"}),e.jsx(a,{children:"조회수"})]})}),e.jsxs(c,{striped:!0,children:[e.jsxs(n,{children:[e.jsx(l,{children:"1"}),e.jsx(l,{children:"첫 번째 게시글"}),e.jsx(l,{children:"홍길동"}),e.jsx(l,{children:"150"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"2"}),e.jsx(l,{children:"두 번째 게시글"}),e.jsx(l,{children:"김철수"}),e.jsx(l,{children:"230"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"3"}),e.jsx(l,{children:"세 번째 게시글"}),e.jsx(l,{children:"이영희"}),e.jsx(l,{children:"180"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"4"}),e.jsx(l,{children:"네 번째 게시글"}),e.jsx(l,{children:"박민수"}),e.jsx(l,{children:"95"})]})]})]})},x={render:()=>e.jsxs(b,{children:[e.jsx(T,{children:e.jsxs(n,{children:[e.jsx(a,{children:"사용자명"}),e.jsx(a,{children:"이메일"}),e.jsx(a,{children:"역할"}),e.jsx(a,{children:"상태"})]})}),e.jsxs(c,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"홍길동"}),e.jsx(l,{children:"hong@example.com"}),e.jsx(l,{children:e.jsx(r,{variant:"destructive",children:"관리자"})}),e.jsx(l,{children:e.jsx(r,{variant:"success",children:"활성"})})]}),e.jsxs(n,{children:[e.jsx(l,{children:"김철수"}),e.jsx(l,{children:"kim@example.com"}),e.jsx(l,{children:e.jsx(r,{variant:"warning",children:"운영자"})}),e.jsx(l,{children:e.jsx(r,{variant:"success",children:"활성"})})]}),e.jsxs(n,{children:[e.jsx(l,{children:"이영희"}),e.jsx(l,{children:"lee@example.com"}),e.jsx(l,{children:e.jsx(r,{variant:"primary",children:"사용자"})}),e.jsx(l,{children:e.jsx(r,{variant:"secondary",children:"비활성"})})]}),e.jsxs(n,{children:[e.jsx(l,{children:"박민수"}),e.jsx(l,{children:"park@example.com"}),e.jsx(l,{children:e.jsx(r,{variant:"secondary",children:"게스트"})}),e.jsx(l,{children:e.jsx(r,{variant:"warning",children:"대기중"})})]})]})]})},h={render:()=>e.jsxs(b,{children:[e.jsx(T,{children:e.jsxs(n,{children:[e.jsx(a,{style:{width:"60px"},children:"ID"}),e.jsx(a,{children:"제목"}),e.jsx(a,{style:{width:"120px"},children:"카테고리"}),e.jsx(a,{style:{width:"100px"},children:"작성자"}),e.jsx(a,{style:{width:"100px"},children:"상태"}),e.jsx(a,{style:{width:"80px"},children:"조회수"})]})}),e.jsxs(c,{striped:!0,children:[e.jsxs(n,{children:[e.jsx(l,{children:"1"}),e.jsx(l,{children:"React 시작하기"}),e.jsx(l,{children:e.jsx(r,{variant:"primary",pill:!0,children:"기술"})}),e.jsx(l,{children:"홍길동"}),e.jsx(l,{children:e.jsx(r,{variant:"success",children:"게시됨"})}),e.jsx(l,{children:"234"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"2"}),e.jsx(l,{children:"디자인 시스템 구축"}),e.jsx(l,{children:e.jsx(r,{variant:"info",pill:!0,children:"디자인"})}),e.jsx(l,{children:"김철수"}),e.jsx(l,{children:e.jsx(r,{variant:"warning",children:"임시저장"})}),e.jsx(l,{children:"89"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"3"}),e.jsx(l,{children:"팀 협업 방법론"}),e.jsx(l,{children:e.jsx(r,{variant:"secondary",pill:!0,children:"업무"})}),e.jsx(l,{children:"이영희"}),e.jsx(l,{children:e.jsx(r,{variant:"success",children:"게시됨"})}),e.jsx(l,{children:"412"})]}),e.jsxs(n,{children:[e.jsx(l,{children:"4"}),e.jsx(l,{children:"새해 맞이 이벤트"}),e.jsx(l,{children:e.jsx(r,{variant:"warning",pill:!0,children:"공지"})}),e.jsx(l,{children:"박민수"}),e.jsx(l,{children:e.jsx(r,{variant:"info",children:"대기중"})}),e.jsx(l,{children:"1520"})]})]})]})},j={render:()=>e.jsxs(b,{children:[e.jsx(T,{children:e.jsxs(n,{children:[e.jsx(a,{children:"ID"}),e.jsx(a,{children:"이름"}),e.jsx(a,{children:"이메일"}),e.jsx(a,{children:"역할"})]})}),e.jsx(c,{children:e.jsx(n,{children:e.jsx(l,{colSpan:4,style:{textAlign:"center",padding:"40px"},children:"데이터가 없습니다"})})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>이름</TableHead>
          <TableHead>이메일</TableHead>
          <TableHead>역할</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>홍길동</TableCell>
          <TableCell>hong@example.com</TableCell>
          <TableCell>사용자</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>김철수</TableCell>
          <TableCell>kim@example.com</TableCell>
          <TableCell>관리자</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>이영희</TableCell>
          <TableCell>lee@example.com</TableCell>
          <TableCell>운영자</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>제목</TableHead>
          <TableHead>작성자</TableHead>
          <TableHead>조회수</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody striped>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>첫 번째 게시글</TableCell>
          <TableCell>홍길동</TableCell>
          <TableCell>150</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>두 번째 게시글</TableCell>
          <TableCell>김철수</TableCell>
          <TableCell>230</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>세 번째 게시글</TableCell>
          <TableCell>이영희</TableCell>
          <TableCell>180</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>네 번째 게시글</TableCell>
          <TableCell>박민수</TableCell>
          <TableCell>95</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...o.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>사용자명</TableHead>
          <TableHead>이메일</TableHead>
          <TableHead>역할</TableHead>
          <TableHead>상태</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>홍길동</TableCell>
          <TableCell>hong@example.com</TableCell>
          <TableCell>
            <Badge variant="destructive">관리자</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="success">활성</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>김철수</TableCell>
          <TableCell>kim@example.com</TableCell>
          <TableCell>
            <Badge variant="warning">운영자</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="success">활성</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>이영희</TableCell>
          <TableCell>lee@example.com</TableCell>
          <TableCell>
            <Badge variant="primary">사용자</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="secondary">비활성</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>박민수</TableCell>
          <TableCell>park@example.com</TableCell>
          <TableCell>
            <Badge variant="secondary">게스트</Badge>
          </TableCell>
          <TableCell>
            <Badge variant="warning">대기중</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead style={{
          width: '60px'
        }}>ID</TableHead>
          <TableHead>제목</TableHead>
          <TableHead style={{
          width: '120px'
        }}>카테고리</TableHead>
          <TableHead style={{
          width: '100px'
        }}>작성자</TableHead>
          <TableHead style={{
          width: '100px'
        }}>상태</TableHead>
          <TableHead style={{
          width: '80px'
        }}>조회수</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody striped>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>React 시작하기</TableCell>
          <TableCell>
            <Badge variant="primary" pill>
              기술
            </Badge>
          </TableCell>
          <TableCell>홍길동</TableCell>
          <TableCell>
            <Badge variant="success">게시됨</Badge>
          </TableCell>
          <TableCell>234</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>디자인 시스템 구축</TableCell>
          <TableCell>
            <Badge variant="info" pill>
              디자인
            </Badge>
          </TableCell>
          <TableCell>김철수</TableCell>
          <TableCell>
            <Badge variant="warning">임시저장</Badge>
          </TableCell>
          <TableCell>89</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>팀 협업 방법론</TableCell>
          <TableCell>
            <Badge variant="secondary" pill>
              업무
            </Badge>
          </TableCell>
          <TableCell>이영희</TableCell>
          <TableCell>
            <Badge variant="success">게시됨</Badge>
          </TableCell>
          <TableCell>412</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>새해 맞이 이벤트</TableCell>
          <TableCell>
            <Badge variant="warning" pill>
              공지
            </Badge>
          </TableCell>
          <TableCell>박민수</TableCell>
          <TableCell>
            <Badge variant="info">대기중</Badge>
          </TableCell>
          <TableCell>1520</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...h.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>이름</TableHead>
          <TableHead>이메일</TableHead>
          <TableHead>역할</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4} style={{
          textAlign: 'center',
          padding: '40px'
        }}>
            데이터가 없습니다
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...j.parameters?.docs?.source}}};const y=["Default","Striped","WithBadges","PostsWithCategories","Empty"];export{t as Default,j as Empty,h as PostsWithCategories,o as Striped,x as WithBadges,y as __namedExportsOrder,R as default};
