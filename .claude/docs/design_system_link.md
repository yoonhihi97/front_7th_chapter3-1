# 2025년 디자인 시스템 핵심 참고 자료 모음

## 모던 디자인 시스템 핵심 도구 및 라이브러리

> tailwindCSS + shadcn/ui + storybook + figma

### 헤드리스 UI + 유틸리티 CSS 조합

- ~[Tailwind CSS 공식 웹사이트](https://tailwindcss.com/)~ - 유틸리티 퍼스트 CSS 프레임워크
- ~[Radix UI 공식 웹사이트](https://www.radix-ui.com/)~ - 접근성 높은 헤드리스 UI 컴포넌트 라이브러리
- ~[tailwindcss-radix](https://www.npmjs.com/package/tailwindcss-radix)~ - Radix UI와 Tailwind CSS를 함께 사용할 수 있게 해주는 플러그인
- ~[Headless UI 공식 웹사이트](https://headlessui.com/)~ - Tailwind CSS와 통합되는 접근성 높은 무스타일 컴포넌트

### 모듈식 컴포넌트 아키텍처

- ~[shadcn/ui 공식 웹사이트](https://ui.shadcn.com/)~ - 복사-붙여넣기 모델의 유연한 컴포넌트 모음
- ~[Design System POC for shadcn UI](https://github.com/icanbwell/shadcn-ui)~ - shadcn UI를 위한 디자인 시스템 POC

### 문서화 및 테스트

- ~[Storybook 공식 웹사이트](https://storybook.js.org/)~ - UI 컴포넌트 개발, 테스트 및 문서화를 위한 프론트엔드 워크샵
- ~[Tailwind CSS와 Storybook 통합 가이드](https://storybook.js.org/recipes/tailwindcss)~ - Storybook에서 Tailwind CSS 사용하기
- ~[Storybook으로 디자인 시스템 문서화하는 4가지 방법](https://storybook.js.org/blog/4-ways-to-document-your-design-system-with-storybook/)~ - 효과적인 문서화 전략
- ~[Figma 디자인 시스템 문서화](https://help.figma.com/hc/en-us/articles/14552804059927-Lesson-4-Document-and-manage-your-system)~ - 디자인 시스템 문서화 및 관리 방법

## 디자인 토큰 시스템 및 통합

### 디자인 도구 연동

- ~[Figma와 Storybook 연동 가이드](https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma)~ - Figma 공식 헬프센터 가이드
- ~[Storybook 디자인 통합](https://storybook.js.org/docs/sharing/design-integrations)~ - Storybook 공식 문서

### 디자인 토큰 관리

- ~[Figma의 토큰, 변수, 스타일](https://help.figma.com/hc/en-us/articles/18490793776023-Update-1-Tokens-variables-and-styles)~ - Figma의 디자인 토큰 관리
- ~[디자인 토큰 자동화](https://matthewrea.com/blog/design-token-automation-from-figma-to-storybook/)~ - Figma에서 Storybook으로 디자인 토큰 자동화
- ~[디자인 토큰과 Storybook을 통한 협업](https://zure.com/blog/collaboration-with-design-tokens-and-storybook/)~ - 토큰과 Storybook을 활용한 디자인-개발 협업

## 실무 적용 및 튜토리얼

### 실무 사례

- ~[Figma의 내부 디자인 시스템 팀이 Dev Mode를 사용하는 방법](https://www.figma.com/best-practices/how-figma-uses-dev-mode/)~ - Figma의 자체 사례 연구
- ~[도입을 촉진하는 문서화](https://www.figma.com/blog/design-systems-103-documentation-that-drives-adoption/)~ - 효과적인 디자인 시스템 문서화 방법

### 핵심 튜토리얼

- ~[React에서 Tailwind, Shadcn/ui, Storybook으로 디자인 시스템 구축하기](https://dev.to/shaikathaque/design-system-in-react-with-tailwind-shadcnui-and-storybook-17f)~ - 디자인 시스템 설정에 대한 종합 가이드
- ~[ShadCN UI & Tailwind CSS로 확장 가능한 React 컴포넌트 라이브러리 구축하기](https://medium.com/@sonilamohanty26/how-to-build-a-scalable-react-component-library-with-shadcn-ui-tailwind-css-57ce33a296f1)~ - 확장 가능한 컴포넌트 라이브러리 구축 방법

### 프로젝트 템플릿

- ~[디자인 시스템 템플릿](https://github.com/arevalolance/design-system-template)~ - Turborepo + TailwindCSS + Storybook + shadcn-ui 조합의 템플릿
- ~[Tailwind + Shadcn + Storybook 보일러플레이트](https://github.com/nima70/tailwind-shadcn-storybook-boilerplate)~ - 모던 UI 구축을 위한 스타터 템플릿

## 기타

### CSS-in-JS 라이브러리

> 이미 사용하고 있는 곳은 있지만 최근에는 tailwindCSS에 밀려 잘 안쓰이는 방식들입니다.

- ~[Styled Components 공식 웹사이트](https://styled-components.com/)~ - 컴포넌트 시대를 위한 시각적 프리미티브
- ~[Styled Components 기본 문서](https://styled-components.com/docs/basics)~ - 설치부터 기본 사용법까지
- ~[Emotion 공식 웹사이트](https://emotion.sh/)~ - JavaScript로 CSS를 작성하기 위한 라이브러리
- ~[Emotion 모범 사례](https://emotion.sh/docs/best-practices)~ - Emotion 사용에 대한 권장 사항
- ~[Styled Components vs Emotion 비교](https://blog.logrocket.com/styled-components-vs-emotion-for-handling-css/)~ - 두 인기 CSS-in-JS 라이브러리 비교
- ~[Stitches 공식 웹사이트](https://stitches.dev/)~ - 거의 0에 가까운 런타임을 가진 CSS-in-JS 라이브러리

### 읽을거리

- ~[Tailwind CSS + Catalyst UI Kit](https://tailwindcss.com/plus/ui-kit)~ - Tailwind CSS 팀이 만든 모던 애플리케이션 UI 키트
- ~[CSS-in-JS 완벽 가이드](https://medium.com/@gentlend1010/css-in-js-complete-guide-to-styled-components-emotion-and-more-for-cleaner-and-scalable-styling-d619a65f23d5)~ - Styled-Components, Emotion 등에 대한 상세 설명
- ~[CSS 라이브러리 및 프레임워크 30+](https://medium.com/@cat_web_dev/30-css-libraries-and-frameworks-help-you-style-your-applications-efficiently-417aead2343b)~ - 효율적인 스타일링을 위한 다양한 CSS 도구
- ~[Storybook에서 Figma로](https://story.to.design/blog/from-storybook-to-figma)~ - 코드 컴포넌트를 Figma로 가져오는 가이드
- ~[React UI with Shadcn, NextJS, TypeScript, TailwindCSS](https://github.com/stefan22/shadcn-nextjs)~ - 스타터 프로젝트
- ~[Storybook, React, TypeScript, SCSS, Tailwind으로 디자인 시스템 구축하기](https://medium.com/@mujs.dev/building-a-design-system-with-storybook-react-typescript-scss-tailwind-part-1-buttons-71864ac8f230)~ - 버튼 컴포넌트부터 시작하는 디자인 시스템 구축 가이드
- ~[Styled System으로 더 나은 컴포넌트 라이브러리 구축](https://medium.com/styled-components/build-better-component-libraries-with-styled-system-4951653d54ee)~ - 테마 기반 스타일 시스템 활용하기
- ~[Tailwind CSS와 Radix UI 비교](https://www.swhabitation.com/blogs/tailwind-css-vs-radix-ui-which-one-should-you-choose-for-your-next-project)~ - 각 도구의 장단점과 함께 사용하는 방법
- ~[React 개발자를 위한 헤드리스 UI 라이브러리 Top 7](https://dev.to/joodi/top-6-headless-ui-libraries-for-react-developers-3mfi)~ - 주요 헤드리스 UI 라이브러리 비교
- ~[Radix UI와 Tailwind CSS 함께 사용하기](https://github.com/radix-ui/primitives/discussions/1000)~ - Radix UI와 Tailwind CSS 통합에 대한 토론
- ~[Radix UI와 디자인 토큰](https://www.design-tokens.dev/guides/radix-ui/)~ - Radix UI에서 디자인 토큰 활용하기
