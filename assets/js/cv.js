/*
 * cv.js — data.js의 내용을 읽어 CV를 그립니다.
 */
(function () {
  const D = window.CV;
  const H = window.Holds;
  const P = D.profile;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const hex = (c) => H.resolveColor(c);
  const pad = (n) => String(n).padStart(2, '0');
  const ext = (url) => (/^https?:/.test(url) ? ' target="_blank" rel="noopener"' : '');
  const ph = (o) => (o && o.placeholder ? '<span class="ph" title="아직 채우지 않은 내용">예시</span>' : '');

  // 섹션 번호 색: 빨강 → 주황 → 노랑 → ... → 분홍
  const ORDER = H.COLOR_KEYS;
  const seq = (i) => ORDER[i % ORDER.length];
  // 밝은 색 위에는 흰 글씨 대신 진한 글씨
  const LIGHT = ['yellow', 'lime'];
  const TYPE = { hackathon: { label: '해커톤', color: 'pink' }, datathon: { label: '데이터톤', color: 'yellow' } };

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
  $('sub').innerHTML = [P.nameKo, P.role, P.location].filter(Boolean).map((s) => `<span>${esc(s)}</span>`).join('');
  $('summary').textContent = P.summary || '';
  $('links').innerHTML = (P.links || []).filter((l) => l.url).map((l) =>
    `<li><span class="link-k">${esc(l.label)}</span><a href="${esc(l.url)}"${ext(l.url)}>${esc(l.text || showUrl(l.url))}</a></li>`).join('');
  $('highlights').innerHTML = (D.highlights || []).map((h, i) => `
    <div class="hl" style="--c:${hex(seq(i))}">
      ${H.svg({ seed: 60 + i, color: seq(i), size: 34 })}
      <div><b>${esc(h.value)}</b><span>${esc(h.label)}${h.date ? ` · ${esc(h.date)}` : ''}</span></div>
    </div>`).join('');
  $('foot-name').textContent = `© ${now.getFullYear()} ${P.nameEn}`;
  document.title = `${P.nameKo} ${P.nameEn} · CV`;

  /* ---------- 섹션 ---------- */
  function item(it, color, seed) {
    const type = TYPE[it.type];
    const tags = [
      it.result ? `<span class="result${LIGHT.includes(color) ? ' light' : ''}" style="--c:${hex(color)}">${esc(it.result)}</span>` : '',
      type ? `<span class="tag" style="--c:${hex(type.color)}">${type.label}</span>` : '',
      isUpcoming(it.date) ? '<span class="tag soon">예정</span>' : '',
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

  $('print-btn').addEventListener('click', () => window.print());
})();
