// Plain JavaScript replacement for the WordPress navigation module.
document.querySelectorAll('.wp-block-navigation').forEach(nav=>{
 const panel=nav.querySelector('.wp-block-navigation__responsive-container');
 const open=nav.querySelector('.wp-block-navigation__responsive-container-open');
 const close=nav.querySelector('.wp-block-navigation__responsive-container-close');
 if(!panel||!open||!close)return;
 let previous;
 const hide=()=>{panel.classList.remove('is-menu-open','has-modal-open');document.documentElement.classList.remove('has-modal-open');open.setAttribute('aria-expanded','false');panel.removeAttribute('aria-modal');previous?.focus()};
 open.setAttribute('aria-expanded','false');
 open.addEventListener('click',()=>{previous=document.activeElement;panel.classList.add('is-menu-open','has-modal-open');document.documentElement.classList.add('has-modal-open');open.setAttribute('aria-expanded','true');panel.setAttribute('aria-modal','true');close.focus()});
 close.addEventListener('click',hide);
 panel.addEventListener('keydown',e=>{
 if(e.key==='Escape')hide();
 if(e.key==='Tab'){
 const items=[...panel.querySelectorAll('a[href],button')].filter(el=>el.getClientRects().length);
 if(e.shiftKey&&document.activeElement===items[0]){e.preventDefault();items.at(-1).focus()}
 else if(!e.shiftKey&&document.activeElement===items.at(-1)){e.preventDefault();items[0].focus()}
 }
 });
 nav.querySelectorAll('.wp-block-navigation-submenu__toggle').forEach(toggle=>toggle.addEventListener('click',()=>toggle.setAttribute('aria-expanded',toggle.getAttribute('aria-expanded')!=='true')));
});
