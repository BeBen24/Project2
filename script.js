"use strict";
(() => {
  const byId = id => document.getElementById(id);
  const seasons = { 0: 'כל העונות', 2: 'עונה 2', 3: 'עונה 3', 4: 'עונה 4' };
  const grades = ['כל הכיתות', 'א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ז׳', 'ח׳', 'ט׳', 'י׳', 'י״א', 'י״ב'];
  const data = [...EPISODES].sort((a,b) => b.season-a.season || a.episode-b.episode);
  const state = { season: 0, grade: 0, search: '', id: data[0].id };
  const overrideKey = 'school-episodes-video-overrides-v4';
  let overrides = {};
  try { const parsed = JSON.parse(localStorage.getItem(overrideKey) || '{}'); if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) overrides = parsed; } catch {}
  const icon = id => `<svg class="icon" aria-hidden="true"><use href="#ic-${id}"></use></svg>`;
  const norm = value => String(value ?? '').normalize('NFKC').replace(/[\u0591-\u05C7]/g, '').replace(/[׳״"'\-]/g,' ').toLocaleLowerCase('he').trim();
  function youtubeId(value) {
    if (!value || typeof value !== 'string') return null;
    if (/^[a-zA-Z0-9_-]{11}$/.test(value)) return value;
    try {
      const url = new URL(value.trim());
      const host = url.hostname.toLowerCase();
      if (url.protocol !== 'https:') return null;
      let id = null;
      if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'music.youtube.com', 'www.youtube-nocookie.com'].includes(host)) {
        if (url.pathname === '/watch') id = url.searchParams.get('v');
        else if (/^\/(embed|shorts|live)\//.test(url.pathname)) id = url.pathname.split('/')[2];
      } else if (host === 'youtu.be' || host === 'www.youtu.be') id = url.pathname.split('/')[1];
      return id && /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
    } catch {return null;}
  }
  function videoId(ep) {
    if (Object.hasOwn(overrides, ep.id)) return youtubeId(overrides[ep.id]);
    return youtubeId(ep.videoId);
  }
  const youtubeSearch = ep => 'https://www.youtube.com/results?search_query=' + encodeURIComponent('סליחה על השאלה ילדים ' + ep.title + ' כאן חינוכית פרק מלא');
  function matching() {
    const q=norm(state.search);
    return data.filter(ep => (!state.season || ep.season === state.season) && (!state.grade || state.grade >= ep.grade) && (!q || norm([ep.title, ep.description, ep.topic, ...(ep.warnings || [])].join(' ')).includes(q)));
  }
  function renderList() {
    const list=byId('episodeList'); list.replaceChildren();
    const filtered=matching();
    if (!filtered.some(ep => ep.id === state.id)) state.id=filtered[0]?.id || null;
    if (!filtered.length) {
      const empty=document.createElement('p');empty.className='empty-state';empty.textContent='לא נמצאו פרקים';list.append(empty);
      renderDetail(); return;
    }
    let last=null;
    for (const ep of filtered) {
      if (!state.season && last!==ep.season) {
        const head=document.createElement('div');head.className='season-heading';head.textContent=seasons[ep.season];list.append(head); last=ep.season;
      }
      const btn=document.createElement('button');btn.type='button';btn.className='episode-item';btn.dataset.id=ep.id;
      const selected=state.id === ep.id;
      if (selected) btn.classList.add('active');
      btn.setAttribute('aria-current',String(selected));btn.setAttribute('aria-label',ep.title);
      const span=document.createElement('span');span.className='episode-name';span.textContent=ep.title;btn.append(span);
      btn.insertAdjacentHTML('beforeend',icon('chevron'));
      btn.addEventListener('click',()=>selectEpisode(ep.id,true));list.append(btn);
    }
    renderDetail();
  }
  function selectEpisode(id,openMobile=false) {
    if (!data.some(ep=>ep.id===id)) return;
    state.id=id;
    document.querySelectorAll('.episode-item').forEach(btn=>{
      const active=btn.dataset.id===id;btn.classList.toggle('active',active);btn.setAttribute('aria-current',String(active));
    });
    renderDetail();
    const u=new URL(location.href);u.searchParams.set('ep',id);history.replaceState(null,'',u);
    if (openMobile && matchMedia('(max-width:760px)').matches) showMobile();
  }
  function action(label,href,mode) {
    const a=document.createElement('a');a.href=href;a.target='_blank';a.rel='noopener noreferrer';a.className=mode==='primary'?'primary-action':'secondary-action';a.textContent=label;
    a.insertAdjacentHTML('beforeend',icon('arrow'));
    return a;
  }
  function showPlayer(ep,id) {
    if (!id) return;
    const screen=byId('screen');
    const directUrl='https://www.youtube.com/watch?v='+encodeURIComponent(id);
    if (location.protocol==='file:') {
      const notice=document.createElement('div');notice.className='screen-content';
      const message=document.createElement('p');message.className='screen-message';
      message.textContent='ניגון באתר זמין דרך GitHub Pages';
      const link=document.createElement('a');link.className='player-fallback';
      link.href=directUrl;link.target='_blank';link.rel='noopener noreferrer';
      link.textContent='צפייה ביוטיוב';
      notice.append(message,link);screen.replaceChildren(notice);
      return;
    }
    const frame=document.createElement('iframe');
    frame.title='סליחה על השאלה ילדים: '+ep.title;
    frame.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
    frame.src='https://www.youtube.com/embed/'+encodeURIComponent(id)+'?rel=0&playsinline=1';
    frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen=true;
    screen.replaceChildren(frame);
  }
  function renderDetail() {
    const ep=data.find(ep=>ep.id===state.id);const screen=byId('screen');screen.replaceChildren();
    byId('linkEditor').hidden=true;byId('linkFeedback').textContent='';
    if (!ep) {
      byId('detailTitle').textContent='לא נמצאו פרקים';byId('detailDescription').textContent='';byId('detailQuestions').hidden=true;byId('questionsText').textContent='';byId('seasonContext').textContent='';byId('episodeMeta').replaceChildren();byId('viewerActions').replaceChildren();
      screen.innerHTML='<div class="screen-content"><p class="screen-message">לא נמצאו פרקים</p></div>';return;
    }
    byId('seasonContext').textContent=seasons[ep.season];
    byId('detailTitle').textContent=ep.title;
    byId('detailDescription').textContent=ep.description;
    byId('questionsText').textContent=ep.questions || '';
    byId('detailQuestions').hidden=!ep.questions;
    const meta=byId('episodeMeta');meta.replaceChildren();
    const gradeText=document.createElement('span');gradeText.textContent='מכיתה '+grades[ep.grade]+' (המלצה)';meta.append(gradeText);
    if (ep.level>=3 && ep.warnings?.length) {
      const sensitive=document.createElement('span');sensitive.className='sensitive';sensitive.textContent=ep.warnings.join('  ');meta.append(sensitive);
    }
    const id=videoId(ep);
    if (id) {
      const img=document.createElement('img');img.className='artwork';img.loading='lazy';img.alt='';img.referrerPolicy='no-referrer';img.src=`https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
      img.addEventListener('error',()=>img.remove(),{once:true});
      const shade=document.createElement('div');shade.className='shade';
      const inside=document.createElement('div');inside.className='screen-content';
      const play=document.createElement('button');play.type='button';play.className='play-button';play.setAttribute('aria-label','נגן באתר');play.innerHTML=icon('play');play.addEventListener('click',()=>showPlayer(ep,id));
      inside.append(play);screen.append(img,shade,inside);
    } else {
      const inside=document.createElement('div');inside.className='screen-content';
      const msg=document.createElement('p');msg.className='screen-message';msg.textContent='אין כרגע סרטון זמין';
      inside.append(msg);
      screen.append(inside);
    }
    const actions=byId('viewerActions');actions.replaceChildren();
    actions.append(action(id?'פתיחה ביוטיוב':'חיפוש הפרק',id?'https://www.youtube.com/watch?v='+encodeURIComponent(id):youtubeSearch(ep),'primary'));
    if (id) {
      const player=document.createElement('button');player.className='secondary-action';player.type='button';player.textContent='ניגון באתר';
      player.insertAdjacentHTML('beforeend',icon('play'));player.addEventListener('click',()=>showPlayer(ep,id));actions.append(player);
    }
    const edit=document.createElement('button');edit.className='quiet-action';edit.type='button';edit.textContent='קישור אחר';
    edit.addEventListener('click',()=>{const form=byId('linkEditor');form.hidden=!form.hidden;if(!form.hidden){byId('linkInput').value=Object.hasOwn(overrides,ep.id)?overrides[ep.id]:(ep.videoId?`https://www.youtube.com/watch?v=${ep.videoId}`:'');byId('linkInput').focus();}});
    actions.append(edit);
    const source=document.createElement('a');source.className='quiet-action source-link';source.href=ep.catalogSource;source.target='_blank';source.rel='noopener noreferrer';source.textContent='מקור התקציר';actions.append(source);
  }
  function showMobile(){const v=byId('viewer');v.classList.add('open');document.body.style.overflow='hidden';byId('mobileBack').focus({preventScroll:true});}
  function hideMobile(){byId('viewer').classList.remove('open');document.body.style.overflow='';const active=document.querySelector('.episode-item.active');active?.focus({preventScroll:true});}
  const trigger=byId('seasonTrigger'),panel=byId('seasonOptions'),shell=byId('seasonShell');
  function closeSelect(focus=false){panel.hidden=true;trigger.setAttribute('aria-expanded','false');if(focus)trigger.focus();}
  function openSelect(){panel.hidden=false;trigger.setAttribute('aria-expanded','true');const selected=panel.querySelector('[aria-selected=true]');selected?.focus();}
  function chooseSeason(num){state.season=num;byId('seasonLabel').textContent=seasons[num];panel.querySelectorAll('[role=option]').forEach(el=>el.setAttribute('aria-selected',String(Number(el.dataset.season)===num)));closeSelect(true);renderList();byId('episodeScroll').scrollTop=0;}
  trigger.addEventListener('click',()=>panel.hidden?openSelect():closeSelect());
  panel.querySelectorAll('[role=option]').forEach(el=>el.addEventListener('click',()=>chooseSeason(Number(el.dataset.season))));
  panel.addEventListener('keydown',event=>{
    const options=[...panel.querySelectorAll('[role=option]')];const index=options.indexOf(document.activeElement);
    let next=index;
    if(event.key==='ArrowDown')next=(index+1)%options.length;
    else if(event.key==='ArrowUp')next=(index-1+options.length)%options.length;
    else if(event.key==='Home')next=0;
    else if(event.key==='End')next=options.length-1;
    else if(event.key==='Escape'){event.preventDefault();closeSelect(true);return;}
    else if(event.key==='Enter'||event.key===' '){event.preventDefault();if(index>=0)chooseSeason(Number(options[index].dataset.season));return;}
    else return;
    event.preventDefault();options[next]?.focus();
  });
  document.addEventListener('pointerdown',event=>{if(!shell.contains(event.target))closeSelect();});
  const slider=byId('gradeSlider');
  slider.addEventListener('input',()=>{
    const grade=Number(slider.value);state.grade=grade;slider.style.setProperty('--progress',Math.round(grade/12*100)+'%');
    byId('gradeOutput').textContent=grade===0?'כל הכיתות':'כיתה '+grades[grade];renderList();
  });
  byId('searchInput').addEventListener('input',event=>{state.search=event.target.value;renderList();});
  byId('mobileBack').addEventListener('click',hideMobile);
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){if(!panel.hidden)closeSelect(true);else if(matchMedia('(max-width:760px)').matches && byId('viewer').classList.contains('open'))hideMobile();}});
  byId('linkEditor').addEventListener('submit',event=>{
    event.preventDefault();const raw=byId('linkInput').value.trim(),id=youtubeId(raw);const ep=data.find(x=>x.id===state.id);
    if(!ep)return;
    if(!id){byId('linkFeedback').textContent='נדרש קישור לסרטון YouTube';return;}
    overrides[ep.id]='https://www.youtube.com/watch?v='+id;
    try{localStorage.setItem(overrideKey,JSON.stringify(overrides));}catch{}
    renderDetail();byId('announcer').textContent='הקישור נשמר בדפדפן';
  });
  byId('cancelLink').addEventListener('click',()=>{byId('linkEditor').hidden=true;byId('linkFeedback').textContent='';});
  const initial=new URL(location.href).searchParams.get('ep');
  if(initial && data.some(ep=>ep.id===initial)) state.id=initial;
  else if(initial) {const url=new URL(location.href);url.searchParams.delete('ep');history.replaceState(null,'',url);}
  renderList();
})();
