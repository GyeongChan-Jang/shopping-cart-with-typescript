# 쇼핑 장바구니 만들기 with TypeScript

![shopping-cart](https://user-images.githubusercontent.com/90392240/178251826-7ef2ce9e-fee5-400a-8efb-dec64d3de9a3.gif)

> 스타일링

- react-bootstrap

> 데이터 저장

- localStorage

> 상태 관리

- context API

> src 폴더 구조

📦src
┣ 📂components
┃ ┣ 📜CartItems.tsx
┃ ┣ 📜Navbar.tsx
┃ ┣ 📜ShoppingCart.tsx
┃ ┗ 📜StoreItem.tsx
┣ 📂context
┃ ┗ 📜ShoppingCartContext.tsx
┣ 📂data
┃ ┗ 📜items.json
┣ 📂hooks
┃ ┗ 📜useLocalStorage.tsx
┣ 📂pages
┃ ┣ 📜About.tsx
┃ ┣ 📜Home.tsx
┃ ┗ 📜Store.tsx
┣ 📂utilities
┃ ┗ 📜formatCurrency.ts
┣ 📜App.tsx
┣ 📜main.tsx
┗ 📜vite-env.d.ts

# 배운 것

## TypeScript

- props로 데이터 전달시 props를 받는 컴포넌트에서는 props의 타입을 정의해야한다.

- context API의 자식 컴포넌트의 구조도 ReactNode라고 타입 정의가 필요하다.
  ![쇼핑카트프로파이더프롬스](https://user-images.githubusercontent.com/90392240/178254125-74dcfdda-576e-4769-bffa-bdfc6b8bdb2b.png)

3. 컨텍스트 생성시 컨텍스트 내부 데이터 하나하나 타입 지정

## context API

- useContext 훅을 통해 함수형 컴포넌트에서 간편하게 Context 사용

- Context API 사용법의 이해

  1. Context 생성

     ![context1](https://user-images.githubusercontent.com/90392240/178257690-fba7544b-b8e3-42be-9024-9f08eea87972.png)

  2. Context Provider 컴포넌트 생성

  3. App.tsx에서 데이터를 전달해줄 컴포넌트들을 <ContextProvider> 컴포넌트로 감싼다.

  4. useContext를 통해 원하는 값만 간단하게 사용 가능하다.

     ![usecontext](https://user-images.githubusercontent.com/90392240/178263236-c799bf2b-2a13-4b4b-8ad4-715ea11bb046.png)

  5. ContextProvider 컴포넌트에서 Provider를 렌더링하고 자식 컴포넌트에 props 전달 가능

     ![provider](https://user-images.githubusercontent.com/90392240/178263733-cef35c8c-1334-43ef-8d67-d9b83cecede3.png)

## react-bootstrap

> Offcanvas

- 사이드바 구현을 간단하게 만들 수 있다.

  ![offcanvas](https://user-images.githubusercontent.com/90392240/178264297-afb423be-b928-4232-b1f6-3adeb54e674a.png)

## utilities

> formatCurrency

- Intl.NumberFormat

  - 숫자형식을 특정 국가의 통화에 맞게 바꿔준다.

    ![numberformat](https://user-images.githubusercontent.com/90392240/178264829-da8fe98a-b3ab-440f-a476-643245117323.png)
