# me.yunmin.dev

[me.yunmin.dev](https://me.yunmin.dev) — 홍윤민 CV. [yunmin.dev](https://yunmin.dev)와 같은 디자인으로, Cloudflare Workers 정적 에셋으로 배포됩니다.

## 내용 고치기

보이는 글은 전부 `assets/js/data.js` 한 파일에 있어요. HTML은 건드리지 않아도 됩니다.

- `profile` 이름, 한 줄 소개, 연락처
- `highlights` 이름 아래 큰 숫자 카드 3개
- `sections` 학력, 대회, 연구, 프로젝트, 활동, 기술. 적힌 순서대로 01, 02, ... 번호와 색이 붙어요.
- 시작 날짜가 이번 달보다 뒤인 항목은 '예정' 배지가 자동으로 붙어요.
- `placeholder: true` 항목은 화면에 '예시' 배지가 뜹니다(인쇄할 땐 숨김).

## PDF

오른쪽 위 'PDF로 저장' 버튼(또는 Ctrl/Cmd + P)으로 A4 한두 장짜리 PDF가 나와요. 인쇄용 스타일이 따로 있어서 배경 점무늬와 버튼은 빠지고, 링크는 주소로 바뀝니다.

## 구조

```
index.html            CV 페이지
404.html              없는 주소일 때
assets/js/data.js     CV 내용
assets/js/cv.js       렌더링
assets/js/holds.js    클라이밍 홀드 SVG 생성기 (my-site와 같은 파일)
assets/css/cv.css     스타일 (화면 + 인쇄)
wrangler.jsonc        Cloudflare Workers 설정
```

## 로컬에서 보기

```
python3 -m http.server 8788
```
그리고 http://localhost:8788 접속.
