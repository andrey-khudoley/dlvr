// Ожидаем события load, чтобы убедиться, что все ресурсы загружены
window.addEventListener('load', function () {
  var preloader = document.querySelector('.kht-preloader');
  if (!preloader) return;

  // Проверка поддержки анимаций
  var animationsSupported = 
    'animation' in document.documentElement.style || 
    'WebkitAnimation' in document.documentElement.style || 
    'MozAnimation' in document.documentElement.style || 
    'OAnimation' in document.documentElement.style;

  if (!animationsSupported) {
      // Если анимации не поддерживаются, добавляем класс для старых браузеров
      preloader.classList.add('old-browser');
  }

  // Добавляем класс для запуска анимации fadeOut
  preloader.classList.add('kht-disabled');

  // Ожидаем завершения анимации для скрытия прелоадера
  preloader.addEventListener('animationend', function () {
      preloader.style.display = 'none';
  });

  preloader.addEventListener('webkitAnimationEnd', function () {
      preloader.style.display = 'none';
  });

  preloader.addEventListener('mozAnimationEnd', function () {
      preloader.style.display = 'none';
  });

  preloader.addEventListener('oAnimationEnd', function () {
      preloader.style.display = 'none';
  });
});
