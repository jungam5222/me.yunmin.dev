/*
 * data.js — CV에 보이는 내용은 전부 여기서 고칩니다.
 * HTML은 건드리지 않고 이 파일만 수정하면 페이지에 반영돼요.
 *
 * 섹션은 적힌 순서대로 01, 02, ... 번호와 색(빨강 → 주황 → 노랑 → 연두 → 초록 → 청록 → 파랑 → 보라 → 분홍)을 받습니다.
 * 항목 필드 (전부 선택):
 *   date     '2026.08' 또는 '2026.06 – 2026.09' 또는 '2025.03 – Now'
 *            시작 날짜가 이번 달보다 뒤면 '예정' 배지가 자동으로 붙어요.
 *   title    굵은 제목
 *   org      제목 옆/아래 회색 글씨 (기관, 전공 등)
 *   desc     설명 한두 줄
 *   result   오른쪽 강조 배지 (예: '1위', '우수상')
 *   type     'hackathon' | 'datathon' 이면 종류 태그가 붙어요
 *   links    [{ label, url }] — 화면에서는 버튼, 인쇄하면 주소로 나와요
 *   placeholder: true 면 '예시' 배지가 붙습니다 (인쇄할 땐 숨김). 실제 내용으로 바꾸면 지워주세요.
 */
window.CV = {
  updated: '2026.10',

  profile: {
    nameKo: '홍윤민',
    nameEn: 'Yunmin Hong',
    role: 'AI Developer',
    location: 'Seoul',
    summary: '모델을 만들고 데이터를 다루는 AI 개발자입니다. 해커톤과 데이터톤에서 실제 문제를 풀며 배우고 있어요.',
    // url을 채운 것만 나와요. 이메일은 'mailto:주소'
    links: [
      { label: 'Email',    url: 'mailto:hym1029384756@gmail.com', text: 'hym1029384756@gmail.com' },
      { label: 'GitHub',   url: 'https://github.com/jungam5222', text: 'github.com/jungam5222' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/윤민-홍-829857381', text: 'linkedin.com/in/윤민-홍' },
      { label: 'Website',  url: 'https://yunmin.dev', text: 'yunmin.dev' },
    ],
  },

  // 이름 아래 큰 숫자 카드
  highlights: [
    { value: '1위',     label: 'AIKU 주니어톤',   date: '2026.08' },
    { value: '상위 4%', label: 'LG Aimers 9기',   date: '2026.09' },
    { value: '우수상',  label: '전국 과학전람회', date: '2023.07' },
  ],

  sections: [
    {
      title: 'Education',
      sub: '학력',
      items: [
        { date: '2026.09 – Now', title: 'Korea University', org: 'Double Major in Mathematics, Bachelor of Science (B.S.)' },
        { date: '2025.03 – Now', title: 'Korea University', org: 'Major in Computer Science and Engineering, Bachelor of Science (B.S.)' },
        { date: '2022.03 – 2025.01', title: 'Gwangju Science Academy for the Gifted (광주과학고등학교)', org: 'Information Science/Studies' },
      ],
    },
    {
      title: 'Competitions',
      sub: '해커톤 · 데이터톤',
      items: [
        {
          date: '2026.09', title: '연고전 AI 해커톤', org: '연세대학교 인공지능융합대학 학생회 X 고려대학교 정보대학 학생회', type: 'hackathon',
          desc: '"깃발대항전" 게임 Agent 개발.',
        },
        {
          date: '2026.08', title: 'AIKU 주니어톤', org: '고려대학교 인공지능 학회 AIKU', type: 'datathon', result: '1위',
          desc: '손글씨 필기 사진을 보고 누구의 필기인지 분류하는 이미지 분류 문제.',
          links: [{ label: '자세히', url: 'https://yunmin.dev/projects/aiku-juniorthon/' }],
        },
        {
          date: '2026.06 – 2026.09', title: 'LG Aimers 9기', org: 'LG AI연구원', type: 'datathon', result: '상위 4%',
          desc: '투구 데이터를 바탕으로 제구 성공률을 예측. 야구 도메인 지식을 바탕으로 EDA 수행 및 모델 개발에 참여. 리더보드 상위 4%.',
          links: [{ label: '자세히', url: 'https://yunmin.dev/projects/lg-aimers-9/' }],
        },
        {
          date: '2025.11', title: 'Inthon 데이터톤 트랙', org: '고려대학교 정보대학', type: 'datathon',
          desc: '첫 데이터톤 참가.',
          links: [{ label: '자세히', url: 'https://yunmin.dev/projects/inthon-2025/' }],
        },
        {
          date: '2025.10', title: 'NASA Space Apps Challenge', org: 'NASA', type: 'hackathon',
          desc: '첫 해커톤 참가. AI 분야(Tabular data 기반 모델 개발, LLM API 활용) 전담.',
          links: [{ label: '자세히', url: 'https://yunmin.dev/projects/nasa-space-apps-2025/' }],
        },
      ],
    },
    {
      title: 'Research',
      sub: '연구 활동',
      items: [
        {
          date: '2023.07', title: 'CNN 기반 폐렴 진단', org: '전국 과학전람회', result: '우수상',
          desc: 'CNN 기법으로 흉부 X선의 폐렴 여부를 진단하고 정밀도, 재현율, F1 score를 분석.',
          links: [{ label: '자세히', url: 'https://yunmin.dev/projects/science-fair-pneumonia/' }],
        },
        {
          date: '2023.03 – 2023.11', title: '레고 블록 Object Detection', org: 'R&E 경진대회 · 정보과학 분야',
          desc: '레고 블록을 찾아내는 Object Detection 모델 개발.',
          links: [{ label: '자세히', url: 'https://yunmin.dev/projects/rne-lego-detection/' }],
        },
        {
          date: '2022.03 – 2022.11', title: '학교 웹사이트 개발', org: 'R&E 경진대회 · 정보과학 분야',
        },
      ],
    },
    {
      title: 'Projects',
      sub: '만든 것',
      items: [
        {
          date: '2026.10', title: '하늘의 별따기', org: '웹 게임',
          desc: '남들이 떠올리지 못한 답일수록 점수가 높은 한국어 낱말 게임. krillion.io를 한국어로 다시 만들었어요.',
          links: [
            { label: '게임', url: 'https://game.yunmin.dev/starvest/' },
            { label: 'GitHub', url: 'https://github.com/jungam5222/game-dev' },
          ],
        },
        {
          date: '2026.10', title: 'yunmin.dev', org: '개인 웹사이트',
          desc: '클라이밍 홀드를 모티프로 만든 개인 사이트. 정적 HTML/CSS/JS로 만들어 Cloudflare Workers에 배포.',
          links: [
            { label: '사이트', url: 'https://yunmin.dev' },
            { label: 'GitHub', url: 'https://github.com/jungam5222/my-site' },
          ],
        },
      ],
    },
    {
      title: 'Activities',
      sub: '학생회 · 동아리',
      items: [
        { date: '2026.07 – Now', title: 'AIKU', org: '정보대학 인공지능 학회' },
        { date: '2026.03 – Now', title: 'KUICS', org: '정보대학 보안 동아리' },
        { date: '2025.11 – Now', title: '컴퓨터학과 부학생회장', org: '고려대학교 컴퓨터학과 제2대 학생회 \'영원\'' },
        { date: '2025.03 – Now', title: 'Liberty', org: '정보대학 밴드 동아리' },
        { date: '2025.03 – 2026.01', title: '백구회', org: '중앙동아리 야구부' },
        { date: '2022.03 - 2024.12', title: '!DEA', org: '광주과학고등학교 정보과학 동아리' }
      ],
    },
    {
      title: 'Skills',
      sub: '기술',
      // 스킬은 줄 단위로: group 이름 + items
      skills: [
        { group: 'AI / ML', items: ['Python', 'PyTorch', 'scikit-learn'] },
        { group: 'Data',    items: ['pandas', 'SQL'] },
        { group: 'Web',     items: ['HTML/CSS/JS', 'Cloudflare Workers'] },
        { group: 'Tools',   items: ['Git', 'Claude'] },
      ],
    },
  ],
};
