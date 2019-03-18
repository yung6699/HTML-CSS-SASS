function sdrag(el) {
  var startX = 0;
  var startY = 0;
  var el = el;
  var dragging = false;

  function move(e) {
      el.style.left = (e.pageX - startX ) + 'px';
      el.style.top = (e.pageY - startY ) + 'px';

      // onDrag && onDrag(el, e.pageX, startX, e.pageY, startY);
  }

  function startDragging(e) {
      if (e.currentTarget instanceof HTMLElement || e.currentTarget instanceof SVGElement) {
          dragging = true;
          var left = el.style.left ? parseInt(el.style.left) : 0;
          var top = el.style.top ? parseInt(el.style.top) : 0;
          e.target.classList.add('active');
          startX = e.pageX - left;
          startY = e.pageY - top;
          window.addEventListener('mousemove', move);
      }
      else {
          throw new Error("Your target must be an html element");
      }
  }

  el.addEventListener('mousedown', startDragging);
  window.addEventListener('mouseup', function (e) {
      if (true === dragging) {
          dragging = false;
          e.target.classList.remove('active')
          window.removeEventListener('mousemove', move);
          onStop && onStop(e);
      }
  });

  function onStop(e){
    var dropX = 500
    var dropY = 300
    
    var x = parseInt(e.target.style.left);
    var y = parseInt(e.target.style.top);
    console.log(x,y);
    if(x > dropX - 100 && x < dropX + 100 && y > dropY - 100 && y < dropY + 100){
      e.target.classList.add('complete');
      e.target.style.left = '500px';
      e.target.style.top = '300px';
    } else {
      e.target.classList.remove('complete');
    }
  }
}

// Element.prototype.sdrag = sdrag;
sdrag(document.getElementById('target'));
sdrag(document.getElementById('target01'));
