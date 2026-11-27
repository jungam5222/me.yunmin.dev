/*
 * cv.js — data.js의 내용을 읽어 CV를 그립니다.
 */
(function () {
  const EN = window.LANG === 'en';
  const T = (ko, en) => (EN ? en : ko);
  const H = window.Holds;

  // data.js 안의 en: { ... } 를 영어일 때 덮어씌우고, 한국어일 땐 그냥 지웁니다
  function localize(v) {
    if (Array.isArray(v)) return v.map(localize);
    if (!v || typeof v !== 'object') return v;
    const out = {};
    Object.keys(v).forEach((k) => { if (k !== 'en') out[k] = localize(v[k]); });
    if (EN && v.en && typeof v.en === 'object') Object.keys(v.en).forEach((k) => { out[k] = localize(v.en[k]); });
    return out;
  }
  const D = localize(window.CV);
  const P = D.profile;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const hex = (c) => H.resolveColor(c);
  const pad = (n) => String(n).padStart(2, '0');
  const ext = (url) => (/^https?:/.test(url) ? ' target="_blank" rel="noopener"' : '');
  const ph = (o) => (o && o.placeholder ? `<span class="ph" title="${T('아직 채우지 않은 내용', 'Not filled in yet')}">${T('예시', 'sample')}</span>` : '');

  // 섹션 번호 색: 빨강 → 주황 → 노랑 → ... → 분홍
  const ORDER = H.COLOR_KEYS;
  const seq = (i) => ORDER[i % ORDER.length];
  const TYPE = {
    hackathon: { label: T('해커톤', 'Hackathon'), color: 'pink' },
    datathon: { label: T('데이터톤', 'Datathon'), color: 'yellow' },
  };

  // 시작 날짜(YYYY.MM)가 이번 달보다 뒤면 '예정'
  const now = new Date();
  const thisMonth = now.getFullYear() * 100 + now.getMonth() + 1;
  const isUpcoming = (date) => {
    const m = /^(\d{4})\.(\d{2})/.exec(date || '');
    return m ? +m[1] * 100 + +m[2] > thisMonth : false;
  };
  const showUrl = (url) => url.replace(/^mailto:/, '').replace(/^https?:\/\//, '').replace(/\/$/, '');

  /* ---------- 상단 ---------- */
  $('logo-hold').innerHTML = H.svg({ seed: 7, type: 'jug', color: 'red', size: 26, rotate: 20 });
  $('updated').textContent = `Updated ${D.updated}`;
  $('name').innerHTML = `${esc(P.nameEn)}<span class="dot">.</span>`;
  $('sub').innerHTML = (EN ? '' : `<span class="name">${esc(P.nameKo)}</span>`) +
    [P.role, P.location].filter(Boolean).map((s) => `<span>${esc(s)}</span>`).join('');
  $('summary').textContent = P.summary || '';
  $('links').innerHTML = (P.links || []).filter((l) => l.url).map((l) =>
    `<li><span class="link-k">${esc(l.label)}</span><a href="${esc(l.url)}"${ext(l.url)}>${esc(l.text || showUrl(l.url))}</a></li>`).join('');
  $('highlights').innerHTML = (D.highlights || []).map((h, i) => `
    <div class="hl" style="--c:${hex(seq(i))}">
      ${H.svg({ seed: 60 + i, color: seq(i), size: 34 })}
      <div><b>${esc(h.value)}</b><span>${esc(h.label)}${h.date ? ` · ${esc(h.date)}` : ''}</span></div>
    </div>`).join('');
  $('foot-name').textContent = `© ${now.getFullYear()} ${P.nameEn}`;
  document.title = EN ? `${P.nameEn} · CV` : `${P.nameKo} ${P.nameEn} · CV`;

  /* ---------- 섹션 ---------- */
  function item(it, color, seed) {
    const type = TYPE[it.type];
    const tags = [
      it.result ? `<span class="result" style="--c:${hex(color)}">${esc(it.result)}</span>` : '',
      type ? `<span class="tag" style="--c:${hex(type.color)}">${type.label}</span>` : '',
      isUpcoming(it.date) ? `<span class="tag soon">${T('예정', 'Upcoming')}</span>` : '',
    ].join('');
    const links = (it.links || []).filter((l) => l.url).map((l) =>
      `<a href="${esc(l.url)}"${ext(l.url)}><span class="l-label">${esc(l.label)} ↗</span><span class="l-url">${esc(showUrl(l.url))}</span></a>`).join('');
    return `
      <li class="item">
        <span class="item-hold">${H.svg({ seed, color, size: 18 })}</span>
        <span class="item-date">${esc(it.date)}</span>
        <div class="item-main">
          <div class="item-head">
            <h3>${esc(it.title)}${ph(it)}</h3>
            ${tags ? `<div class="item-tags">${tags}</div>` : ''}
          </div>
          ${it.org ? `<p class="item-org">${esc(it.org)}</p>` : ''}
          ${it.desc ? `<p class="item-desc">${esc(it.desc)}</p>` : ''}
          ${links ? `<div class="item-links">${links}</div>` : ''}
        </div>
      </li>`;
  }

  function skills(list, color) {
    return `<div class="skills" style="--c:${hex(color)}">${list.map((s) => `
      <div class="skill-row">
        <span class="skill-group">${esc(s.group)}${ph(s)}</span>
        <div class="chips">${s.items.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div>
      </div>`).join('')}</div>`;
  }

  $('sections').innerHTML = D.sections.map((s, i) => {
    const color = seq(i);
    const body = s.skills
      ? skills(s.skills, color)
      : `<ol class="items">${(s.items || []).map((it, j) => item(it, color, 300 + i * 20 + j)).join('')}</ol>`;
    return `
      <section class="cv-sec" style="--c:${hex(color)}">
        <div class="sec-head">
          <span class="tape">${pad(i + 1)}</span>
          <h2>${esc(s.title)}</h2>
          ${s.sub ? `<span class="sec-sub">${esc(s.sub)}</span>` : ''}
        </div>
        ${body}
      </section>`;
  }).join('');

  /* ---------- 상단 버튼 ---------- */
  $('print-btn').innerHTML = `<span class="pdf-long">${T('PDF로 저장', 'Save as PDF')}</span><span class="pdf-short">PDF</span>`;
  $('print-btn').addEventListener('click', () => window.print());
  const toggle = $('lang-toggle');
  toggle.innerHTML = `<span${EN ? '' : ' class="on"'}>KO</span><span class="sep">/</span><span${EN ? ' class="on"' : ''}>EN</span>`;
  toggle.setAttribute('aria-label', T('English로 보기', '한국어로 보기'));
  toggle.title = T('English', '한국어');
  toggle.addEventListener('click', () => window.setLang(EN ? 'ko' : 'en'));

  // 디자인 토글: 클라이밍 ↔ 심플. 지금 디자인 쪽이 진하게 보여요
  const styleBtn = $('style-toggle');
  const docIcon = '<svg class="doc-icon" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><rect x="2.5" y="1.5" width="11" height="13" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M5 5.5h6M5 8h6M5 10.5h4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>';
  function paintStyle() {
    const simple = window.STYLE === 'simple';
    styleBtn.innerHTML = `<span class="opt${simple ? '' : ' on'}">${H.svg({ seed: 7, type: 'jug', color: 'red', size: 15, rotate: 20 })}</span><span class="sep">/</span><span class="opt${simple ? ' on' : ''}">${docIcon}</span>`;
    const label = simple ? T('클라이밍 디자인으로 보기', 'Switch to the climbing design') : T('심플한 CV로 보기', 'Switch to a plain CV');
    styleBtn.setAttribute('aria-label', label);
    styleBtn.title = label;
  }
  paintStyle();
  styleBtn.addEventListener('click', () => window.setStyle(window.STYLE === 'simple' ? 'climb' : 'simple'));
  document.addEventListener('stylechange', paintStyle);

  // yunmin.dev로 가는 링크는 같은 언어로 열리게
  if (EN) document.querySelectorAll('a[href="https://yunmin.dev"]').forEach((a) => { a.href = 'https://yunmin.dev/?lang=en'; });

  /* ---------- HTML에 직접 적힌 글자 (영어) ---------- */
  if (EN) {
    document.querySelectorAll('[data-en]').forEach((el) => {
      if (el.tagName === 'META') el.setAttribute('content', el.dataset.en);
      else el.innerHTML = el.dataset.en;
    });
  }
  document.documentElement.classList.add('i18n-ready');
})();
