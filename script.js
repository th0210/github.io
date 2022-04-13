    const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    //スライドの左右余白
    spaceBetween: 40,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // レスポンシブ
    breakpoints: {//breakpoints
      0: {
        slidesPerView: 1.237,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

    //topへ戻るボタン　スクロール表示
    $(window).on("scroll", function() {
    if( 100 < jQuery(this).scrollTop()) {
      $('.to-top').addClass('is-show');
    } else {
      $('.to-top').removeClass('is-show');
    }
  });

  $('.drawer-icon').on('click', function() {
    
  });

  $('.drawer-icon').on('click', function() {
    $('.drawer').toggleClass('is-active');
    $('.drawer-bg').toggleClass('is-active');
    $('.drawer-icon').toggleClass('is-active');

  });

  $('.faq-btn').on('click', function() {
    $(this).toggleClass('is-open');
    $(this).next().slideToggle();
  });