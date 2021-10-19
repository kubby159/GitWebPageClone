(function(window, document){
'use strict';

const toggles = document.querySelectorAll('.toggle'); //Nodelist: 유사배열
const toggleBtn = document.querySelector('#toggle-btn');
//유사배열은 array가 아니므로 forEach를 직접 쓸 수 없음.
//하지만 빌려와서 쓸 수 있다. [].forEach.call

toggleBtn.addEventListener('click',function() {
  toggleElements();
});

window.addEventListener('resize', function(){
  if(window.innerWidth > 1024) {
    //off toggle el
    offElements();

  };
}) //Resize: 브라우저가 크기가 줄어들거나 늘어갈 때의 이벤트

function toggleElements() {
  [].forEach.call(toggles,function(toggle) {
    toggle.classList.toggle('on'); //클래스가 존재한다면 제거, 없으면 추가
  });
}
  function offElements() {
    [].forEach.call(toggles,function(toggle) {
      toggle.classList.remove('on'); //클래스가 존재한다면 제거, 없으면 추가
    });
  }


})(window, document) //즉시 실행함수




