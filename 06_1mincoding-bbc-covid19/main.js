(()=>{
  const imgs = document.querySelectorAll('.graphic-item');
  const txts = document.querySelectorAll('.step');

  let ioIndex;
  const io = new IntersectionObserver((entries, observer) => {
    // 숫자로 형변환 중요!
    ioIndex = entries[0].target.dataset.index * 1;
  });

  for (let i = 0; i < imgs.length; i++) {
    io.observe(txts[i]);
    imgs[i].dataset.index = i;
    txts[i].dataset.index = i;
  }

  function activate() {
    currentItem.classList.add('on');
  }

  function inactivate() {
    currentItem.classList.remove('on');
  }


  let currentItem = imgs[0];
  window.addEventListener('scroll', () => {
    // console.log('============');
    let temp = 0;
    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      if(!txts[i]) continue;
      temp += 1;
      const itemBounding = txts[i].getBoundingClientRect();
      const itemBoundingTop = itemBounding.top;
      if(window.innerHeight * 0.1 < itemBoundingTop && itemBoundingTop < window.innerHeight * 0.8) {
        inactivate();
        currentItem = imgs[i];
        activate();
      }
    }


    // console.log('============', );
  });
  activate();
})();