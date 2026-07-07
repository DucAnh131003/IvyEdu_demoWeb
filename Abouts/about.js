 const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle && toggle.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.cssText += open ? '' : 'position:absolute;top:76px;left:0;right:0;flex-direction:column;background:#F5F6FA;padding:24px 32px;border-bottom:1px solid rgba(20,27,61,0.12);';
  });

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!prefersReduced && 'IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
    }, {threshold:0.12});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));
  }

  const vine = document.getElementById('vinePath');
  if(vine && !prefersReduced){
    const len = vine.getTotalLength();
    vine.style.strokeDasharray = len;
    vine.style.strokeDashoffset = len;
    vine.animate([{strokeDashoffset:len},{strokeDashoffset:0}], {duration:1800, easing:'ease-out', fill:'forwards'});
  }