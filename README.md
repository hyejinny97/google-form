# ✔ 구글 설문조사 만들기

- 목차

  - [💁‍♂️ 프로젝트 설명](#-프로젝트-설명)
  - [✨ 완성 결과물](#-완성-결과물)
  - [⚙ 과제 설치 및 실행 방법](#-과제-설치-및-실행-방법)
  - [📃 기능 명세서](#-기능-명세서)
  - [💥 이슈 및 해결 과정](#-이슈-및-해결-과정)
  - [💡 고민한 점 & 배운 점](#-고민한-점--배운-점)
  - [🛠 기술 스택](#-기술-스택)
  - [🧱 Convention](#-convention)
  - [📂 폴더 구조](#-폴더-구조)

## 💁‍♂️ 프로젝트 설명

- React를 사용해 [구글 설문 조사(Google Form)](https://docs.google.com/forms) 페이지를 구현한다.

  - 1️⃣ 설문지 제작 페이지
  - 2️⃣ 설문지 미리보기 페이지
  - 3️⃣ 설문지 제출 완료 페이지 (자유 형식)

  <img src="./assets/설문지_제작_페이지.png" width="400px" />

  <img src="./assets/설문지_미리보기_페이지.png" width="400px" />

## ✨ 완성 결과물

- 배포 사이트 링크: https://google-form-pkukd77d6-hyejinny97s-projects.vercel.app/

### 1️⃣ 설문지 제작 페이지

<img src="./assets/survey-edit.gif" width="600px" />

### 2️⃣ 설문지 미리보기 페이지

<img src="./assets/survey-preview.gif" width="600px" />

### 3️⃣ 설문지 제출 완료 페이지

<img src="./assets/survey-submit.gif" width="600px" />

## ⚙ 설치 및 실행 방법

- `package.json` 내 모든 패키지 설치하기

  ```bash
  $ cd google-form
  $ yarn install
  ```

- 프로젝트 실행하기

  ```bash
  $ cd google-form
  $ yarn dev
  ```

## 📃 기능 명세서

- [설문지 편집 페이지](./documentation/specification/Survey_Edit_page.md)
- [설문지 미리보기 페이지](./documentation/specification/Survey_Preview_Page.md)
- [설문지 미리보기 페이지](./documentation/specification/Survey_Submit_Page.md)

## 💥 이슈 및 해결 과정

- [SurveyEditPageTitleBox 내 제목 입력창에 값 하나 입력할 때마다 outfocusing 되는 문제](./documentation//troubleshooting/outfocusing.md)
- [Debouncing](./documentation/troubleshooting/debouncing.md)
- [렌더링 성능 개선](./documentation/troubleshooting/performance.md)

## 💡 고민한 점 & 배운 점

- [Single Page Application](./documentation/learned/Single_Page_Application.md)
- [MUI](./documentation/learned/MUI.md)
- [MUI Bundle Size 최소화](./documentation/learned/MUI_Bundle_Size.md)
- [TypeScript 전역 타입 정의](./documentation/learned/TypeScript.md)
- [Drag & Drop](./documentation/learned/Drag_and_Drop.md)
- [새로고침 시, 데이터 유지](./documentation/learned/Web_Storage.md)

## 🛠 기술 스택

- Language: `TypeScript`
- UI: `React`
- Client-side Routing: `React-Router`
- Client-State 관리: `Redux`, `Redux-Toolkit`
- React Component library: `Material UI`
- React 개발 환경: `Vite`
- Package Manager: `yarn`
- Version Control System: `Git`

## 🧱 Convention

### 🔹 Commit Convention

- Commit 은 가급적이면 기능 당 하나의 커밋을 사용한다.

- master 브랜치에 바로 commit 하지 않는다.

- Commit Message 작성 시, 앞부분에 type를 기입한다.

  | type     | 설명                                                  |
  | -------- | ----------------------------------------------------- |
  | Feat     | 새로운 기능을 추가할 경우                             |
  | Fix      | 버그를 고친 경우                                      |
  | Design   | CSS 등 사용자 UI 디자인 변경                          |
  | Style    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
  | Refactor | 코드 리팩터링                                         |
  | Comment  | 필요한 주석 추가 및 변경                              |
  | Docs     | 문서를 수정한 경우                                    |
  | Chore    | 패키지 매니저를 설정하는 경우                         |
  | Env      | 프로젝트 환경 설정                                    |
  | Init     | 프로젝트 첫 설정                                      |
  | Rename   | 파일 혹은 폴더명을 수정했거나 옮기는 작업을 한 경우   |
  | Remove   | 파일을 삭제하는 작업을 한 경우                        |
  | Asset    | asset 관련 파일 업데이트 작업을 수행한 경우           |

### 🔹 Git Branch Convention

- master 브랜치: 항상 최신의 상태를 담고 있는 브랜치

  - 새로운 브랜치는 항상 master 브랜치에서 만든다.
  - docs 작업은 master 브랜치에 바로 commit 한다.

- feature 브랜치: docs를 제외한 모든 작업(기능, 디자인, 버그, 리팩토링 등)을 하는 브랜치

  - feature 브랜치명은 어떤 일을 하고 있는지에 대해서 자세하게 작성한다.

    - `[type 명]/[작업 설명]`
    - ex) Feat/survey-title-box

  - feature 브랜치는 master 브랜치에 merge 후 로컬에서 바로 지운다.

## 📂 폴더 구조

```plain
📦src
 ┣ 📂components
 ┃ ┣ 📂SurveyEditPage
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂SurveyPreviewPage
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂SurveySubmitPage
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂Commons
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂Icons
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂UI
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📜index.ts
 ┣ 📂pages
 ┃ ┣ 📜SurveyEditPage.tsx
 ┃ ┣ 📜SurveyPreviewPage.tsx
 ┃ ┣ 📜SurveySubmitPage.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂hooks
 ┃ ┗ 📜index.ts
 ┣ 📂stores
 ┃ ┣ 📂slices
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📜index.ts
 ┣ 📂constants
 ┃ ┗ 📜index.ts
 ┣ 📂styles
 ┃ ┣ 📜globalStyles.ts
 ┃ ┣ 📜theme.ts
 ┃ ┗ 📜index.ts
 ┗ 📂utils
 ┃ ┗ 📜index.ts
 ┗ 📂assets
```
