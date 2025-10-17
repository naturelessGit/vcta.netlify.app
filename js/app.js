(function(){
  'use strict';

  // Copy text helper with UI feedback
  function copyText(text, btn){
    if(!navigator.clipboard){
      // fallback
      var ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      try{ document.execCommand('copy'); }catch(e){}
      ta.remove();
      flash(btn, 'Copied');
      return;
    }
    navigator.clipboard.writeText(text).then(function(){ flash(btn, 'Copied') }, function(){ flash(btn, 'Copy failed') });
  }

  function flash(btn, msg){
    if(!btn) return;
    var orig = btn.textContent;
    btn.textContent = msg;
    btn.disabled = true;
    setTimeout(function(){ btn.textContent = orig; btn.disabled = false }, 1500);
  }

  // wire copy buttons for assets
  document.addEventListener('click', function(e){
    var el = e.target;
    var copy = el.getAttribute && el.getAttribute('data-copy');
    if(copy){
      copyText(copy, el);
    }
    var asset = el.getAttribute && el.getAttribute('data-asset');
    if(asset){
      // default behavior: navigate to the asset path (placeholder)
      e.preventDefault();
      var url = location.origin + '/' + asset; // user should replace with real URLs
      window.open(url, '_blank');
    }
  });

  // Quick install copy
  var copyInstall = document.getElementById('copyInstall');
  if(copyInstall){
    copyInstall.addEventListener('click', function(){
      var txt = document.getElementById('installCmd').textContent;
      copyText(txt, copyInstall);
    });
  }

  // Simple accessibility: focus outlines for keyboard users
  function handleFirstTab(e){
    if(e.key === 'Tab') document.body.classList.add('show-focus');
  }
  window.addEventListener('keydown', handleFirstTab);

  // Placeholder for analytics hook if the user wants to add one later
  window.vcta = window.vcta || {};
  window.vcta.trackEvent = function(name, props){
    // no-op; override in page if desired
    console.log('vcta.trackEvent', name, props || {});
  };
})();
