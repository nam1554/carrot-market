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

5.2 Auth Part Two
