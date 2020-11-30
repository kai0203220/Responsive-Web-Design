$(document).ready(function () {
  $('.header-content').hover(function () {
    $('.header-content').toggleClass('animate__animated animate__tada')
  })
  $('.ham').on('click', function () {
    $('.menu-list').toggleClass('menuDown')
  })
  $('.goTop').click(function (e) {
    $('html, body').animate({
      scrollTop: 0
    }, 1000)
  })
})
