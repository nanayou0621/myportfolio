
'use strict';
{
// フェードイン
$(function () {
  $(".js-fade").on("inview", function () {
      $(this).addClass("inview");
  });
});

// ローディング画面
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText =document.querySelector('#loading p');

window.addEventListener('load',()=> {
  loadingAreaGrey.animate(
    {
    opacity:[1,0],
    visibility:'hidden',
  },
  {
    duration:2000,
    delay:1200,
    easing:'ease',
    fill:'forwards',
  }
);
  loadingAreaGreen.animate(
    {
      translate:['0 100vh','0 0','0 -100vh']
    },
  {
    duration:2000,
    delay:800,
    easing:'ease',
    fill:'forwards',
  }
);
  loadingText.animate(
    [
      {
        opacity:1,
      },
      {
        opacity:0,
      },
    ],
    {
      duration:1200,
      easing:'ease',
      fill:'forwards',
    }
  );
});
// ハンバーガーメニュー
const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close= document.getElementById('close');

open.addEventListener('click',() =>{
  overlay.classList.add('show');
  open.classList.add('hide');
});
close.addEventListener('click',() =>{
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

// カルーセル

$('.slider').bxSlider({
  minSlides: 1,
  maxSlides: 2,
  slideWidth: 500,
  slideMargin: 10
});

//------ ページトップへ------
const pagetop = document.getElementById("pagetop");

// .pagetopをクリックしたら
pagetop.addEventListener("click",()=>{
// ページ上部へスムーズに移動
    window.scroll({
      top:0,
      behavior:"smooth"
  });
});



// 画像要素を取得
const img = document.querySelector('.paper');

// toggle関数の定義
function toggle() {
  // 現在の画像のパスが元の画像なら、新しい画像に切り替える
  if (img.src.includes('images/paper1.png')) {
    img.src = 'images/big_paper2.png'; // 新しい画像のパスに変更
  } else {
    // それ以外の場合は、元の画像に戻す
    img.src = 'images/paper1.png'; // 元の画像のパスに変更
  }
}

// img要素にクリックイベントリスナーを追加
img.addEventListener('click', toggle);
}
