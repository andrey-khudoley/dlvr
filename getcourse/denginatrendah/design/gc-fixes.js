// Добавляем стили для страницы с тренингами и уроками

function page_settings() {
  $('head').append('<link rel="stylesheet" href="https://fs.getcourse.ru/fileservice/file/download/a/63650/sc/127/h/72630cd34e48011e0ca1ce448153e1ef.css" type="text/css" />');
}

// Исправление наплывающего меню

$(() => {
  // Ищем элемент с классом resp-screen
  var respScreen = document.querySelector('.resp-screen');
  console.log('success');

  // Проверяем, что элемент существует
  if (respScreen) {
    // Используем setInterval, чтобы ждать появления элемента на странице
    var interval = setInterval(function() {
      if (respScreen.offsetParent !== null) {
        // Элемент появился на странице, устанавливаем css свойство left
        respScreen.style.left = '88px';
        clearInterval(interval);
      }
    }, 100);
  }
});

// js-fix-header-noleftrightbuttons

$(function() {
	if ($('.aliot-nld .lesson-header-block .col-md-12').text().length > 0) {
		let a = $('.aliot-nld .lesson-header-block .lesson-navigation tr td:nth-child(1)').text().length;
		let b = $('.aliot-nld .lesson-header-block .lesson-navigation tr td:nth-child(3)').text().length;
		
		if ((a < 30) && (b < 30)) { 
			$('.aliot-nld .lesson-header-block .col-md-12').toggleClass('changed');
		}
	}
})