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

##### 4.8 More Modifiers

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

##### 4.9 Responsive Modifiers

반응형을 위한 modifiers
sm:
md:
lg:

##### 4.10 Responsive Modifiers Part Two

landscape: 디바이스 가로 방향
portrait: 디바이스 세로 방향

##### 4.11 Dark Mode

dark:

tailwind.config.js 내 darkMode: "media" or "class"

##### 4.12 Just In Time Compiler

tailwind 3.0 이전 버전에서는 큰 css 파일에서 className을 사용하고
배포할때 사용하지 않는 클래스명을 제거하는 프로세스가 있었음.

3.0 부터 JIT 컴파일러가 className 을 사용하면 css 파일에 사용한 className 을 추가함
그래서 className 중첩, 제공하는 text 크기 이외 지정한 px, background-image 지정 등이 가능해졌음

text-[97851px] text-[#000]
bg-[url('/vercel.svg')]

### 5 TAILWIND PRACTICE

##### 5.0 Introdution

##### 5.1 Auth Part One

    function cls(...classNames: string[]) {
        return classNames.join(" ");
    }

2022.07.03

##### 5.2 Auth Part Two

Tailwind Forms 라 불리는 플러그인 설치

npm i @tailwindcss/forms

하단 form, button에 className 추가

##### 5.3 Home Screen

https://heroicons.dev/ 아이콘 소스

##### 5.4 Item Detail

[id].tsx 파일 생성

2022.07.04

##### 5.5 Upload Item

label 태그 안에 input file 을 넣으면 label 영역 클릭할 경우 파일 선택 열림
input 태그를 숨기는간단한 테크닉이라고함

##### 5.6 Community

className 들이 반복됨.. 컴포넌트로 만들어야할지도..

2022.07.05

##### 5.7 Community Detail

다른 페이지에 className 복사붙여넣기 해서 금방 구현
명확하게 컴포넌트로 만들어야할 반복되는 요소들이 보임

##### 5.8 Write

##### 5.9 Chats

제일 마지막 border 를 없애야하는 경우 last: modifier 를 사용할수 있고
다른 방법은 divide 클래스를 사용할 수 있음
divide : 자식 요소들 사이에 border 넣어줌

##### 5.10 Chats Detail

inset-x-0 -> left-0 rigth-0 과 동일

요소가 absolute 이면 부모요소는 relative 여야한다

##### 5.11 Profile

profile.tsx 파일 생성, UI 만듬

##### 5.12 Bought, Loved and Sold

##### 5.13 Edit Profile

##### 5.14 Streams

aspect-video 비디오의 비율을 자동으로 줌
aspect-square 사각형 비율 -> rounded-full 주면 원을 만들 수 있음

##### 5.15 Stream

##### 5.16 Add Stream

##### 5.17 Layout part One

##### 5.18 Layout part Two

##### 5.19 Conclusions

### 6 DATABASE SETUP

6.0 Before We Start

##### 6.1 What is Prisma

https://www.prisma.io/

##### 6.2 Prisma Setup

vscode Extension: Prisma 설치

schema.prisma model 작성

##### 6.3 What is PlanetScale

https://planetscale.com/

Vitess : https://planetscale.com/vitess

##### 6.4 Connecting to PlanetScale

PlanetScale CLI 설치
https://github.com/planetscale/cli#installation 에 설명 보고 설치

pscale region list
pscale database create carrot-market --region ap-northeast

터미널에서 아래와 같이 cli 명령어 실행 -> secure tunnel 로 데이터베이스와 연결
pscale connect carrot-market

127.0.0.1:3386 과 같은 형태 url 나오면 .env 내 DATABASE_URL 에 입력 (mysql://127.0.0.1:3306/carrot-market)

디비 비밀번호를 생성하고 로컬에 설치하는 등의 일을 하지 않아도됨

##### 6.5 Push To PlanetScale

PlanetScale 에서 사용하는 Vitess 는 foreign key 개념?이 없음
-> prisma referentialIntegrity 설정으로 도움을 받을 수 있음

npx prisma db push 실행

##### 6.6 Prisma Client

npx prisma studio

npm i @prisma/client 설치

npx prisma generate

prisma 가 스키마를 확인하여 타입스크립트로 타입을 만들어줌
..../node_modules/.prisma/client/index.d.ts

const client = new PrismaClient(); 는 브라우저단에서 실행될 수 없음(당연히 디비client니까..)

##### 6.7 API Routes

### 7 REACT HOOK FORM

##### 7.0 Introduction

React Hook Form
https://react-hook-form.com/

##### 7.1 Making Forms Alone

##### 7.2 The Register Function

const { register } = useForm();
{...register("username")}

##### 7.3 Validation

handleSubmit
1번째 인자는 form이 유효할때 실행되는 함수
2번째 인자는 form이 유효하지 않을때 실행되는 함수

##### 7.4 Validation part Two

register option
{...register("username", option객체)}

##### 7.5 Errors

formState: { errors },
useForm mode 옵션 onBlur, onChange 등

##### 7.6 Extras

watch,
setError,
setValue,
reset,
resetField,

### 8 REFACTORING

##### 8.0 Enter Form

Input 컴포넌트 리팩토링
Enter 페이지 수정

##### 8.1 Form Submission

##### 8.2 Clean Code part One

##### 8.3 Clean Code part Two

##### 8.4 withHandler

##### 8.5 Paths

tsconfig.json

"paths": {
"@libs/_": ["libs/_"],
"@components/_": ["components/_"]
}

### 9 AUTHENTICATION

##### 9.0 Introduction

---> phone # ----> User 확인
---> Token---User #42394823904
---> #42394823904 --> SMS ---> phone # (Twilio)
---> #42394823904 ---> Token---User ---> 로그인

##### 9.1 Accounts Logic

enter.tsx 에서 phone, email 값 전달받아 데이터 존재여부 체크, 입력 로직 구현
findUnique, create, upsert 함수 사용

##### 9.2 Token Logic

Token 모델 생성 - user User @relation(fields: [userId], references: [id])
Token 모델에 user 컬럼에 connectOrCreate 속성 사용

upsert 사용하는 로직에서 connectOrCreate 사용하여
유저 있을 경우 토큰 연결, 없을 경우 유저 생성 후 토큰 연결까지 한번에 처리 가능

##### 9.3 Twilio Setup

twilio.com
-> sms, email 등

##### 9.4 Sending SMS

npm i twilio

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
-> nextjs 가 env 파일을 자동을 처리해줌

문자전송
const message = await twilioClient.messages.create({
from: "+15076167708",
body: `Your login token is ${payload}`,
to: process.env.MY_PHONE!,
});

9.5 Sending Email

메일전송
SendGrid
가입하고 Sender 인증

npm install --save @sendgrid/mail

mail.setApiKey(process.env.SENDGRID_API_KEY!);

const email = await mail.send({
from: "gisubsub@gmail.com",
to: "gisubsub@gmail.com",
subject: "Your Carrot Market Verification Email",
text: `Your token is ${payload}`,
html: `<strong>Your token is ${payload}</strong>`,
});

##### 9.6 Token UI

user/confirm api 생성
토큰값 입력 후 confirm UI 수정

##### 9.7 Serverless Sessions

iron session 서명, 암호화된 쿠키를 사용하는 NodeJS 무상태 세션 도구
npm install iron-session

handler 를 withIronSessionApiRouter 로 감싸줘서 사용
req.session.user

findUnique > include user -> realation을 같는 user 정보를 같이 가져올수 있음

토큰에 payload 확인 후 쿠키 저장
req.session.user = {
id: exists?.userId,
};
await req.session.save();

##### 9.8 Profile Handler

me.tsx -> withIronSessionApiRoute 로 감싸서 req.session.user 확인
user 정보를 찾을 수 있음

##### 9.9 Cleaning Code

withSession.ts 생성 -> withIronSessionApiRoute 부분 withApiSession 함수로 변경

##### 9.10 NextAuth

next-auth.js.org
NextAuth 는 설정만 하면 끝남

### 10 AUTHORIZATION

##### 10.0 Introduction

##### 10.1 Protected Handlers

withHandler 에 ConfigType으로 isPrivate 추가
isPrivate 과 req.session.user 로 페이지 접근 제어

##### 10.2 useUser Hook

useUser Hook 같은 패턴으로 데이터를 불러오는 hook을 만들어서 사용
router.push 브라우저 히스토리 남음
router.replace 브라우저 히스토리 안남음

##### 10.3 SWR

stale-while-revalidate HTTP 캐시 무효화 전략
npm i swr

##### 10.4 useUser Refactor

SWRConfig 추가
fetcher 를 global로 넘겨줄수 있음

### 11 PRODUCTS

##### 11.0 Product Model

prisma-client 연결 수 제한
client.ts 수정

model Product 생성

##### 11.1 Upload Form

upload.tsx 수정
textarea.tsx 수정

##### 11.2 Upload API

prisma 에서 model 데이터에 대한 타입 제공
import { Product } from "@prisma/client";

##### 11.3 See Products

withHandler.ts method -> methods 로 수정

##### 11.4 Product Detail

상품 상세조회 구현

##### 11.5 Related Products

prisma Search API
OR, AND, contains, not 등등

##### 11.6 Favorite Products

좋아요 기능 구현
model Fav 추가
fav api 추가

##### 11.7 Favorite Products part Two

Optimistic UI Update
-> 백엔드의 응답을 기다리지 않고 변경사항을 반영

##### 11.8 Bound Mutations

좋아요를 누를 경우 유저에게 즉시 보여주고, 유저에게 변화를 반영해야할때 SWR 캐시를 mutate함
Bound Mutations 현재화면의 상태를 변경함

##### 11.9 Unbound Mutations

mutate("/api/user/me");
mutate("/api/users/me", (prev: any) => ({ ok: !prev.ok }), false);

##### 11.10 Counting Relationships

prisma include, \_count 로 상품 좋아요 수 조회

### 12 동네생활

##### 12.0 Models

Post, Answer, Wondering model 추가

##### 12.1 Forms and Handlers

Write 화면 기능 구현

##### 12.2 Post Detail

Post 상세화면 구현

##### 12.3 궁금해요

궁금해요 기능 구현

##### 12.4 Answer

답변 기능 구현

##### 12.5 All Posts

게시글 리스트 페이지 구현

##### 12.6 useCoords

useCoords 추가
navigator.geolocation.getCurrentPosition(onSuccess);
geolocation api 사용하여 게시글에 위치정보 저장

##### 12.7 Geo Search

prisma where -> lte, gte
위치정보가 근처인 게시글만 조회하는 로직 추가

##### 12.8 Geo Bug

위치정보값 null 예외처리

### 13 PROFILE

##### 13.0 Models

Profile 화면 기능 model 추가
prisma enum -> 같은 형태의 모델들은 enum을 사용하여 구현할 수 있음

##### 13.1 Reviews

prisma model에 새로운 컬럼 추가하여 db push 할때 기존 데이터 있을 경우
경고 알림과 함께 어떻게 처리할지 선택해야함

##### 13.2 Handlers

##### 13.3 Profile Page

프로필화면 프론트엔드 구현

##### 13.4 Sales, Purchases, Favorites

product-list 컴포넌트 추가
판매내역, 구매내역, 관심목록 화면에서 product-list 컴포넌트 사용

##### 13.5 Edit Profile part One

##### 13.6 Edit Profile part Two

### 14 STREAMS

##### 14.0 Upload Form

##### 14.1 Detail Page

react-hook-form valueAsNumber 옵션 -> number로 변환

##### 14.2 Send Message

##### 14.3 See Messages

##### 14.4 Mutations and Refresh

useSWR refreshInterval 옵션

##### 14.5 Seeding

seed.ts 대량 데이터 만들기
npx prisma db seed

##### 14.6 Pagination

prisma take, skip 옵션 -> 페이징처리

new PrismaClient({ log: ["query"] }); 해당 옵션을 주면 서버콘솔에 모든 쿼리 출력

### 15 CLOUDFLARE IMAGES

##### 15.0 Introduction

https://www.cloudflare.com/ko-kr/ 소개

##### 15.1 Image Preview

useForm watch 함수 사용하여 파일 변경을 감지
URL.createObjectURL()

##### 15.2 Direct Creator Uploads

Cloudflare Direct Creator Upload 이용
Direct Creator Upload를 사용하면 API 키 또는 토큰을 클라이언트에 노출하지 않고 업로드를 수락할 수 있음
또한 중간 스토리지 버킷 및 이와 관련된 스토리지/송신 비용이 필요하지 않음

https://developers.cloudflare.com/images/cloudflare-images/upload-images/direct-creator-upload/

##### 15.3 Cloudflare Setup

env 파일에 계정ID, API TOKEN 추가

##### 15.4 Direct Upload URL

/api/files 구현
계정ID, 토큰 이용하여 Direct Upload URL 응답받아 리턴

##### 15.5 Cloudflare Upload

응답받은 Direct Upload URL과 함께 file 데이터 포함한 form 데이터 생성하여 request 요청

##### 15.6 Serving Images

Direct Upload URL 요청 후 응답받은 이미지 id 저장
프로필 이미지 로직 수정

##### 15.7 Resizing Images

Cloudflare 이미지는 다양한 사용을 고려하여 이미지 크기를 조정하는 방법을 지정하는 variants을 지원
최대 20개의 variants
https://developers.cloudflare.com/images/cloudflare-images/resize-images/

##### 15.8 Product Images

### 16 NEXTJS IMAGES

##### 16.0 Introduction

Image Component and Image Optimization
(이미지 컴포넌트 및 이미지 최적화)

##### 16.1 Local Images

import Image from "next/image";
placeholder, quality

##### 16.2 Remote Images

next.config.js images > domains 추가

##### 16.3 Layout Fill

css object-fit
nextjs Image태그 props layout or height, width

##### 16.4 Conclusions

Remote 이미지에 블러 적용하기
placeholder를 blur로 지정하면 blurDataURL이 placeholder로 사용됩니다.

```
< Image
alt=""
src={`이미지 URL`}
placeholder="blur"
blurDataURL="https://i.ibb.co/ByhpsFY/blur.png"
/>
```

### 17 LIVE STREAMING

##### 17.0 Introduction

https://developers.cloudflare.com/stream/

OBS Studio
영상 녹화와 실시간 방송을 할 수 있는 무료 및 공개 소프트웨어
윈도우, 맥 혹은 리눅스 환경에서 빠르고 쉽게 방송 할 수 있음
https://obsproject.com/ko

Live Now - Live Stream
https://play.google.com/store/apps/details?id=com.nabiapp.livenow&hl=en_US&gl=US

...17 챕터 생략

### NEXTJS DEEP DIVE

##### 19.0 Middlewares

middleware.ts 생성

##### 19.1 Responses and Redirections

middleware.ts 구현

##### 19.2 Dynamic Imports

##### 19.3 Lazy-load Imports

##### 19.4 \_document and Fonts

##### 19.5 Script Component

nextjs Script 태그 strategy 옵션
구글애널리틱스 등 외부 스크립트 최적화해줌

##### 19.6 getServerSideProps

##### 19.7 SSR + SWR

SWRConfig fallback 옵션
-> SWR 캐시에 상품 정보를 먼저 전달

##### 19.8 SSR + Authentication

withSsrSession 함수 추가 (import withIronSessionSsr)
getServerSideProps 를 withSsrSession 로 감싸서 req?.session.user 정보를 얻을 수 있음

##### 19.9 Blog Section

##### 19.10 getStaticProps

https://www.npmjs.com/package/gray-matter
blog.tsx 파일을 읽어서 노출

##### 19.11 getStaticPaths part One

##### 19.12 getStaticPaths part Two

##### 19.13 Dynamic getStaticProps

https://github.com/remarkjs/remark/tree/main

npm i unified remark-parse remark-html

##### 19.14 Inner HTML

##### 19.15 Recap

### 20 INCREMENTAL SITE REGENERATION

##### 20.0 Introduction

##### 20.1 ISR part One

Incremental Static Regeneration
revalidate: 20 속성 추가

##### 20.2 ISR part Two

##### 20.3 On Demand Revalidation

##### 20.4 Blocking SSG

getStaticPaths > fallback: "blocking",

##### 20.5 Fallback

getStaticPaths > fallback: "true",
if (router.isFallback)

##### 20.6 Recap

##### 20.7 Code Challenge

/community/[id] 페이지를 SSR, SSG, ISR 등 모두 사용해서 구현해보기
