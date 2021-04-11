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

  const actions = {
    birdFlies: function(target, mode) {
      const birdElement = target.querySelector('.bird');
      if(mode) {
        birdElement.style.transform = `translate3d(${window.innerWidth}px, 0, 0)`;
        birdElement.style.transition = `1s 0.5s`;
      }
      else {
        birdElement.style.transform = `translate3d(0, 0, 0)`;
        birdElement.style.transition = `0s 0.5s`;
      }
    },
    birdFlies2: function(target, mode) {
      const birdElement = target.querySelector('.bird');
      if(mode) {
        birdElement.style.transform = `translate3d(${window.innerWidth}px, -${window.innerHeight}px, 0)`;
        birdElement.style.transition = `1s 0.5s`;
      }
      else {
        birdElement.style.transform = `translate3d(0, 0, 0)`;
        birdElement.style.transition = `0s 0.5s`;
      }
    }


  }


  function activate() {
    currentItem.classList.add('on');
    if(!!currentItem.dataset.action) {
      actions[currentItem.dataset.action](currentItem, true);
    }
  }

  function inactivate() {
    currentItem.classList.remove('on');
    if(!!currentItem.dataset.action) {
      actions[currentItem.dataset.action](currentItem, false);
    }
  }




  let currentItem = imgs[0];
  window.addEventListener('scroll', () => {
    // console.log('============');
    let temp = 0;
    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      if(!txts[i]) continue;
      const itemBounding = txts[i].getBoundingClientRect();
      const itemBoundingTop = itemBounding.top;
      if(window.innerHeight * 0.1 < itemBoundingTop && itemBoundingTop < window.innerHeight * 0.8) {
        if(currentItem !== imgs[i]) {
          inactivate();
          currentItem = imgs[i];
          activate();
        }
      }
    }


    // console.log('============', );
  });
  activate();


  window.addEventListener('load', () => {
    setTimeout(() => {
      scrollTo(0, 0);
    }, 100);
  });

})();