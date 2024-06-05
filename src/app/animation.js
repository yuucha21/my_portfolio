import $ from 'jquery';

export const initializeScrollAnimations = () => {
  $(document).ready(function () {
    // ウィンドウをスクロールしたら…
    $(window).scroll(function () {
      // ウィンドウの高さを取得
      const wHeight = $(window).height();
      // スクロールした量を取得
      const wScroll = $(window).scrollTop();

      // それぞれのbox2クラスに対して…
      $(".box4").each(function () {
        // それぞれのbox2クラスのウィンドウからの高さを取得
        const bPosition = $(this).offset().top;

        // スクロールした量が要素の高さを上回ったら
        // その数値にウィンドウの高さを引き、最後に200pxを足す
        if (wScroll > bPosition - wHeight + 200) {
          $(this).addClass("fadeIn"); // フェードインアニメーションを追加
        }
      });
    });

    // 初回読み込み時にスクロールイベントをトリガー
    $(window).trigger('scroll');
  });
};
