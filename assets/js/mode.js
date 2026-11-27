/*
 * mode.js — 디자인 고르기: 클라이밍(기본) / 심플(흑백, 사무적인 CV)
 * <head>에서 읽혀서 그리기 전에 정합니다.
 *   1) 주소에 ?style=simple 또는 ?style=climb 이 있으면 그 디자인 (기억해 둠)
 *   2) 전에 오른쪽 위 토글로 고른 디자인
 *   3) 처음 온 사람은 클라이밍
 */
(function () {
  const KEY = 'yunmin.cvstyle';
  const ok = (s) => s === 'climb' || s === 'simple';
  let style = null;
  try {
    const q = new URLSearchParams(location.search).get('style');
    if (ok(q)) { style = q; localStorage.setItem(KEY, q); }
    if (!style) { const s = localStorage.getItem(KEY); if (ok(s)) style = s; }
  } catch (e) { /* 저장소를 못 쓰는 브라우저 */ }
  if (!style) style = 'climb';

  window.STYLE = style;
  // 디자인은 새로고침 없이 바로 바꿔요 (CSS만 달라짐)
  window.setStyle = function (s) {
    if (!ok(s)) return;
    try { localStorage.setItem(KEY, s); } catch (e) { /* 무시 */ }
    window.STYLE = s;
    document.documentElement.classList.toggle('style-simple', s === 'simple');
    const u = new URL(location.href);
    if (u.searchParams.has('style')) { u.searchParams.set('style', s); history.replaceState(null, '', u.href); }
    document.dispatchEvent(new CustomEvent('stylechange'));
  };
  document.documentElement.classList.toggle('style-simple', style === 'simple');
})();
