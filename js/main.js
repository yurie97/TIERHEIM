$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".toggle-btn").on("click" , function(){
    $("header").toggleClass("open");

  });

  $(".mask").on("click", function () {

    $("header").removeClass("open");
  });

  $("nav a").on("click", function () {
    $("header").removeClass("open");
  });

  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop:position  },600 , "swing");
    // urlが変化しないようにfalseを返す
    return false;
  });

  
  $("#slide-items1").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,              // ← 少し遅くしておくと安定
    cssEase: "linear",
    infinite: true,           // ← 無限ループON（これ大事！）
    slidesToShow: 1,          // ← autoは使わず、代わりに variableWidth:true
    variableWidth: true,      // ← 固定幅スライドに必要
    swipe: false,
    arrows: false,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });


  $('.slick-items2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    

    responsive: [{
      breakpoint: 960, // ブレイクポイントを指定
        settings: {
        slidesToShow: 2
        },
      },
      {
      breakpoint: 767,
        settings: {
        slidesToShow: 1 , 
        centerMode: true ,
        centerPadding: '20%',
      },
      },
    ]
    
  });



 

  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 150) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });



  $(".accordion .acc-title").on("click", function() {
    // labelクラスの次の要素（detailクラス）の表示・非表示を切り替える
    $(this).next().slideToggle();
    // labelクラスにopenクラスを追加したり削除したりする
    // openクラスの追加、削除を行うことでラベルの「－」と「＋」の切り替えを行う
    $(this).toggleClass("open");
    $(this).find(".plus-minus").toggleClass("open");
  });


  // クリックしたモーダルを開く
  $(".modal-open").on("click", function() {
    const modalId = $(this).data("modal"); // data-modal の番号を取得
    const modal = $(`#modal-${modalId}`); // 対応するIDのモーダルを取得
    const overlay = modal.siblings(".overlay"); // 同じanimal-item内のoverlayを取得

    modal.addClass("open");
    overlay.addClass("open");
  });

  // ×ボタンを押したときに閉じる
  $(".modal-close").on("click", function() {
    const modalId = $(this).data("modal");
    const modal = $(`#modal-${modalId}`);
    const overlay = modal.siblings(".overlay");

    modal.removeClass("open");
    overlay.removeClass("open");
  });

  // グレー背景クリックでも閉じる
  $(".overlay").on("click", function() {
    $(this).removeClass("open");
    $(this).siblings(".modal").removeClass("open");
  });
});


