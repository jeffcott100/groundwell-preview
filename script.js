const re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const q=document.getElementById('quick'),qn=document.querySelector('.qnote');
q.addEventListener('submit',e=>{e.preventDefault();const m=q.elements.email.value.trim(),ok=re.test(m);
 q.elements.email.setAttribute('aria-invalid',!ok);
 if(!ok){qn.textContent='That email doesn’t look quite right.';return}
 q.hidden=true;qn.textContent='Thank you. We’ll write when the doors open.';});
const f=document.getElementById('form'),err=f.querySelector('.err');
f.addEventListener('submit',e=>{e.preventDefault();
 const n=f.elements.name.value.trim(),m=f.elements.email.value.trim(),ok=re.test(m);
 f.elements.name.setAttribute('aria-invalid',!n);f.elements.email.setAttribute('aria-invalid',!ok);
 if(!n||!ok){err.textContent=!n?'Please add your name.':'That email doesn’t look quite right.';err.hidden=false;return}
 document.getElementById('who').textContent=n.split(' ')[0];
 f.hidden=true;document.querySelector('.thanks').hidden=false;});
