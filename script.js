const f=document.getElementById('form'),err=f.querySelector('.err');
f.addEventListener('submit',e=>{e.preventDefault();
 const n=f.elements.name.value.trim(),m=f.elements.email.value.trim(),ok=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m);
 f.elements.name.setAttribute('aria-invalid',!n);f.elements.email.setAttribute('aria-invalid',!ok);
 if(!n||!ok){err.textContent=!n?'Please add your name.':'That email doesn’t look quite right.';err.hidden=false;return}
 document.getElementById('who').textContent=n.split(' ')[0];
 f.hidden=true;document.querySelector('.thanks').hidden=false;});
