# Carrot Market

22.06.21
nextjs 앱 setup
타입스크립트 사용하지 않고 프로젝트 생성
npx create-next-app@latest

타입스크립트 사용한다면
npx create-next-app@latest --typescript

styles/Home.module.css 삭제
pages/api 폴더 삭제

22.06.23
tailwind setup

설치
npm install -D tailwindcss postcss autoprefixer

초기화
npx tailwindcss init -p

기본 설정 세팅
tailwind.config.js 수정
content 에 tailwindcss 가 어떤 디렉토리, 폴더, 확장자에서 사용될지 정의함

```
** - 모든폴더
*.{} - 확장자
```

globals.css 내 @tailwind 작성

2022.06.28

tailwind className
flex flex-col space-y-5
grid gap-10

2022.06.28
modifiers : hover, active, focus 등 다음 className 줄수있음

ring utillity

tailwind className 에 마우스오버하면 어떤 variable 들을 modify 할수 있는지 나와있음
해당 variable로 tailwind className 을 찾을 수 있음

transition

modifiers for Lists
first:
last:
only:
odd:
even:
empty:

css :empty 기능으로 empty:hidden 으로 map에서 빈값을 노출시키지 않게하는 방법이 있음

modifiers for Forms
group
group-hover
className group을 가진 영역에 hover상태일때 modifiy 할 수 있음

form 에서 사용해보는 className
required
invaild

2022.07.02

4.8 More Modifiers
html 태그 details
summary : details 태그의 제목을 쓰는 부분
아래 내용

modifiers
select:
marker:
file:

modifiers 는 중첩가능
file:hover:bg ...

first-letter:

4.9 Responsive Modifiers
반응형을 위한 modifiers
sm:
md:
lg:

4.10 Responsive Modifiers Part Two
landscape: 디바이스 가로 방향
portrait: 디바이스 세로 방향

4.11 Dark Mode
dark:

tailwind.config.js 내 darkMode: "media" or "class"

4.12 Just In Time Compiler
tailwind 3.0 이전 버전에서는 큰 css 파일에서 className을 사용하고
배포할때 사용하지 않는 클래스명을 제거하는 프로세스가 있었음.

3.0 부터 JIT 컴파일러가 className 을 사용하면 css 파일에 사용한 className 을 추가함
그래서 className 중첩, 제공하는 text 크기 이외 지정한 px, background-image 지정 등이 가능해졌음

text-[97851px] text-[#000]
bg-[url('/vercel.svg')]

5.0 Introdution

5.1 Auth Part One

    function cls(...classNames: string[]) {
        return classNames.join(" ");
    }

2022.07.03

5.2 Auth Part Two

Tailwind Forms 라 불리는 플러그인 설치

npm i @tailwindcss/forms

하단 form, button에 className 추가

5.3 Home Screen

https://heroicons.dev/ 아이콘 소스

5.4 Item Detail

[id].tsx 파일 생성

2022.07.04

5.5 Upload Item

label 태그 안에 input file 을 넣으면 label 영역 클릭할 경우 파일 선택 열림
input 태그를 숨기는간단한 테크닉이라고함

5.6 Community

className 들이 반복됨.. 컴포넌트로 만들어야할지도..

2022.07.05

5.7 Community Detail

다른 페이지에 className 복사붙여넣기 해서 금방 구현
명확하게 컴포넌트로 만들어야할 반복되는 요소들이 보임

5.8 Write
5.9 Chats
제일 마지막 border 를 없애야하는 경우 last: modifier 를 사용할수 있고
다른 방법은 divide 클래스를 사용할 수 있음
divide : 자식 요소들 사이에 border 넣어줌

5.10 Chats Detail

inset-x-0 -> left-0 rigth-0 과 동일

요소가 absolute 이면 부모요소는 relative 여야한다

5.11 Profile

profile.tsx 파일 생성, UI 만듬

5.12 Bought, Loved and Sold

5.13 Edit Profile

5.14 Streams

aspect-video 비디오의 비율을 자동으로 줌
aspect-square 사각형 비율 -> rounded-full 주면 원을 만들 수 있음

5.15 Stream

5.16 Add Stream

5.17 Layout part One

5.18 Layout part Two

5.19 Conclusions

6.0 Before We Start

6.1 What is Prisma

https://www.prisma.io/

6.2 Prisma Setup

vscode Extension: Prisma 설치

schema.prisma model 작성

6.3 What is PlanetScale

https://planetscale.com/

Vitess : https://planetscale.com/vitess

6.4 Connecting to PlanetScale

PlanetScale CLI 설치
https://github.com/planetscale/cli#installation 에 설명 보고 설치

pscale region list
pscale database create carrot-market --region ap-northeast

터미널에서 아래와 같이 cli 명령어 실행 -> secure tunnel 로 데이터베이스와 연결
pscale connect carrot-market

127.0.0.1:3386 과 같은 형태 url 나오면 .env 내 DATABASE_URL 에 입력 (mysql://127.0.0.1:3306/carrot-market)

디비 비밀번호를 생성하고 로컬에 설치하는 등의 일을 하지 않아도됨

6.5 Push To PlanetScale

PlanetScale 에서 사용하는 Vitess 는 foreign key 개념?이 없음
-> prisma referentialIntegrity 설정으로 도움을 받을 수 있음

npx prisma db push 실행

6.6 Prisma Client

npx prisma studio

npm i @prisma/client 설치

npx prisma generate

prisma 가 스키마를 확인하여 타입스크립트로 타입을 만들어줌
..../node_modules/.prisma/client/index.d.ts

const client = new PrismaClient(); 는 브라우저단에서 실행될 수 없음(당연히 디비client니까..)

6.7 API Routes

7.0 Introduction

React Hook Form
https://react-hook-form.com/
