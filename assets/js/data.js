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
 *
 * 영어 버전: 항목마다 en: { ... } 에 영어 글자를 적어요. 오른쪽 위 KO / EN 토글을 누르면 그 값으로 바뀝니다.
 *   en에 없는 필드는 한국어 그대로 나와요. 새 항목을 추가하면 en도 같이 적어주세요.
 *   예: { title: '...', org: '...', en: { title: '...', org: '...' } }
 */
window.CV = {
  updated: '2026.11',

  profile: {
    nameKo: '홍윤민',
    nameEn: 'Yunmin Hong',
    role: 'AI Developer',
    location: 'Seoul',
    summary: '모델을 만들고 데이터를 다루는 AI 개발자입니다. 해커톤과 데이터톤에서 실제 문제를 풀며 배우고 있어요.',
    en: { summary: 'An AI developer who builds models and works with data, learning by solving real problems at hackathons and datathons.' },
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
    { value: '1위',     label: 'AIKU 주니어톤',   date: '2026.08', en: { value: '1st place', label: 'AIKU Juniorthon' } },
    { value: '상위 4%', label: 'LG Aimers 9기',   date: '2026.09', en: { value: 'Top 4%', label: 'LG Aimers, 9th cohort' } },
    { value: '우수상',  label: '전국 과학전람회', date: '2023.07', en: { value: 'Excellence Award', label: 'National Science Fair' } },
  ],

  sections: [
    {
      title: 'Education',
      sub: '학력',
      en: { sub: '' },
      items: [
        { date: '2026.09 – Now', title: '고려대학교', org: '수학과 이중전공 · 이학사 (B.S.)',
          en: { title: 'Korea University', org: 'Double Major in Mathematics, Bachelor of Science (B.S.)' } },
        { date: '2025.03 – Now', title: '고려대학교', org: '컴퓨터학과 주전공 · 이학사 (B.S.)',
          en: { title: 'Korea University', org: 'Major in Computer Science and Engineering, Bachelor of Science (B.S.)' } },
        { date: '2022.03 – 2025.01', title: '광주과학고등학교', org: '정보과학 전공',
          en: { title: 'Gwangju Science Academy for the Gifted', org: 'Information Science/Studies' } },
      ],
    },
    {
      title: 'Competitions',
      sub: '해커톤 · 데이터톤',
      en: { sub: 'Hackathons · Datathons' },
      items: [
        {
          date: '2026.11', title: 'HAIKUTHON 2026', org: 'AIKU × HAI 연합 데이터톤 (고려대 AIKU · 한양대 HAI)', type: 'datathon',
          desc: '영문 설명에 맞는 이미지 한 장을 후보 16,000장에서 찾는 Multimodal RAG. FG-CLIP2로 후보를 뽑은 뒤 2단계 재정렬과 "가족" 단위 listwise BLIP 학습을 맡음.',
          en: { org: 'AIKU × HAI Joint Datathon (Korea Univ. AIKU · Hanyang Univ. HAI)', desc: 'Multimodal RAG: find the one image out of 16,000 that matches an English description. After FG-CLIP2 retrieval, owned the stage-2 reranking and the family-listwise BLIP training.' },
        },
        {
          date: '2026.11', title: 'Inthon 2026 데이터톤 트랙', org: '고려대학교 정보대학', type: 'datathon',
          desc: '연속된 이미지 시퀀스를 가장 잘 설명하는 문장을 5개 선지 중에서 고르는 멀티모달 추론 문제. 데이터 증강, 텍스트 중심성(medoid) 신호, 발표를 맡음.',
          en: { title: 'Inthon 2026 Datathon Track', org: 'Korea University College of Informatics', desc: 'Multimodal reasoning: pick the caption that best describes an image sequence out of five. Handled data augmentation, the text-centrality (medoid) signal, and the presentation.' },
        },
        {
          date: '2026.09', title: '연고전 AI 해커톤', org: '연세대학교 인공지능융합대학 학생회 X 고려대학교 정보대학 학생회', type: 'hackathon',
          desc: '"깃발대항전" 게임 Agent 개발.',
          en: { title: 'Yonsei × Korea AI Hackathon', org: 'Student councils of Yonsei College of AI Convergence × Korea University College of Informatics', desc: 'Built a game agent for "Flag Battle", a two-player strategy game.' },
        },
        {
          date: '2026.08', title: 'AIKU 주니어톤', org: '고려대학교 인공지능 학회 AIKU', type: 'datathon', result: '1위',
          desc: '손글씨 필기 사진을 보고 누구의 필기인지 분류하는 이미지 분류 문제.',
          en: { title: 'AIKU Juniorthon', org: 'AIKU, Korea University AI society', result: '1st place', desc: 'Image classification: tell whose handwriting is in a photo of their notes.' },
        },
        {
          date: '2026.06 – 2026.09', title: 'LG Aimers 9기', org: 'LG AI연구원', type: 'datathon', result: '상위 4%',
          desc: '투구 데이터를 바탕으로 제구 성공률을 예측. 야구 도메인 지식을 바탕으로 EDA 수행 및 모델 개발에 참여. 리더보드 상위 4%.',
          en: { title: 'LG Aimers, 9th cohort', org: 'LG AI Research', result: 'Top 4%', desc: 'Predicted pitch command success from pitching data. Ran EDA grounded in baseball knowledge and helped build the model. Top 4% on the leaderboard.' },
        },
        {
          date: '2025.11', title: 'Inthon 2025 데이터톤 트랙', org: '고려대학교 정보대학', type: 'datathon',
          desc: '첫 데이터톤 참가.',
          en: { title: 'Inthon 2025 Datathon Track', org: 'Korea University College of Informatics', desc: 'My first datathon.' },
        },
        {
          date: '2025.10', title: 'NASA Space Apps Challenge', org: 'NASA', type: 'hackathon',
          desc: '첫 해커톤 참가. AI 분야(Tabular data 기반 모델 개발, LLM API 활용) 전담.',
          en: { desc: 'My first hackathon. Owned the AI side: tabular-data models and LLM API integration.' },
        },
      ],
    },
    {
      title: 'Research',
      sub: '연구 활동',
      en: { sub: '' },
      items: [
        {
          date: '2023.07', title: 'CNN 기반 폐렴 진단', org: '전국 과학전람회', result: '우수상',
          desc: 'CNN 기법으로 흉부 X선의 폐렴 여부를 진단하고 정밀도, 재현율, F1 score를 분석.',
          en: { title: 'CNN Pneumonia Diagnosis', org: 'National Science Fair', result: 'Excellence Award', desc: 'Diagnosed pneumonia from chest X-rays with CNNs and analyzed precision, recall and F1 score.' },
        },
        {
          date: '2023.03 – 2023.11', title: '레고 블록 Object Detection', org: 'R&E 경진대회 · 정보과학 분야',
          desc: '레고 블록을 찾아내는 Object Detection 모델 개발.',
          en: { title: 'Lego Brick Object Detection', org: 'R&E Competition · Information Science', desc: 'Built an object detection model that finds Lego bricks.' },
        },
        {
          date: '2022.03 – 2022.11', title: '학교 웹사이트 개발', org: 'R&E 경진대회 · 정보과학 분야',
          en: { title: 'School Website', org: 'R&E Competition · Information Science', desc: 'Built the website for Gwangju Science Academy.' },
        },
      ],
    },
    {
      title: 'Projects',
      sub: '만든 것',
      en: { sub: 'Things I built' },
      items: [
        {
          date: '2026.10', title: '하늘의 별따기', org: '웹 게임',
          desc: '남들이 떠올리지 못한 답일수록 점수가 높은 한국어 낱말 게임. krillion.io를 한국어로 다시 만들었어요.',
          en: { title: 'Starvest', org: 'Web game', desc: 'A Korean word game where the answers nobody else thinks of score highest. A Korean take on krillion.io.' },
        },
        {
          date: '2026.10', title: 'yunmin.dev', org: '개인 웹사이트',
          desc: '클라이밍 홀드를 모티프로 만든 개인 사이트. 정적 HTML/CSS/JS로 만들어 Cloudflare Workers에 배포.',
          en: { org: 'Personal website', desc: 'A personal site themed on climbing holds. Plain HTML/CSS/JS, deployed on Cloudflare Workers.' },
        },
      ],
    },
    {
      title: 'Activities',
      sub: '학생회 · 동아리',
      en: { sub: 'Student council · Clubs' },
      items: [
        { date: '2026.07 – Now', title: 'AIKU', org: '정보대학 인공지능 학회', en: { org: 'AI society, College of Informatics' } },
        { date: '2026.03 – Now', title: 'KUICS', org: '정보대학 보안 동아리', en: { org: 'Security club, College of Informatics' } },
        { date: '2025.11 – Now', title: '컴퓨터학과 부학생회장', org: '고려대학교 컴퓨터학과 제2대 학생회 \'영원\'',
          en: { title: 'Vice President, CS Student Council', org: "Korea University Computer Science, 2nd student council 'Youngone'" } },
        { date: '2025.03 – Now', title: 'Liberty', org: '정보대학 밴드 동아리', en: { org: 'Band club, College of Informatics' } },
        { date: '2025.03 – 2026.01', title: '백구회', org: '중앙동아리 야구부', en: { title: 'Baekguhoe', org: 'Central baseball club' } },
        { date: '2022.03 – 2024.12', title: '!DEA', org: '광주과학고등학교 정보과학 동아리', en: { org: 'Information science club, Gwangju Science Academy' } },
      ],
    },
    {
      title: 'Skills',
      sub: '기술',
      en: { sub: '' },
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
