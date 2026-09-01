(function(){
  var h=document.getElementById('hdr'),b=document.getElementById('burger'),n=document.getElementById('nav');
  function s(){ if(h) h.classList.toggle('solid', window.scrollY>10); }
  s(); window.addEventListener('scroll',s,{passive:true});
  if(b&&n){ b.addEventListener('click',function(){ n.classList.toggle('open'); }); 
    n.addEventListener('click',function(e){ if(e.target.tagName==='A') n.classList.remove('open'); }); }
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(en){
    if(!en.isIntersecting)return; en.target.classList.add('in'); io.unobserve(en.target);
  })},{threshold:.1,rootMargin:'0px 0px -50px 0px'});
  els.forEach(function(e){io.observe(e)});
})();
