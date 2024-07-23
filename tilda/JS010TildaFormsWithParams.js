/**
 * Инициализирует обновление URL формы с учетом текущих параметров поиска и введенных данных.
 */
function JS010InitializeFormUrlUpdate () {
  const currentUrl = new URL(window.location.href)
  const searchParams = new URLSearchParams(currentUrl.search)

  // Обновляем URL формы первоначально с учетом всех текущих параметров поиска
  $('form[data-success-url]').each(function () {
    JS010UpdateFormUrl($(this), searchParams)
  })

  // Инициализируем обработчики для телефона и email
  JS010InitializeInputHandlers()
}

/**
 * Обновляет URL, добавляя или изменяя параметры поиска.
 * @param {jQuery} formElement Элемент формы, для которого обновляется URL.
 * @param {URLSearchParams} newParams Новые параметры для добавления или обновления.
 */
function JS010UpdateFormUrl (formElement, newParams) {
  const currentUrl = new URL(window.location.href)
  const baseSuccessUrl = formElement.attr('data-success-url')
  const url = new URL(baseSuccessUrl, currentUrl.origin)

  // Добавляем или обновляем параметры
  newParams.forEach((value, key) => {
    url.searchParams.set(key, value)
  })

  // Обновляем атрибут data-success-url у формы
  formElement.attr('data-success-url', url.pathname + url.search)
}

/**
 * Инициализирует обработчики ввода для полей телефона и электронной почты.
 */
function JS010InitializeInputHandlers () {
  $('input[type="tel"]').on('input', function () {
    const phoneNumber = '+7' + $(this).val().replace(/[^0-9]/g, '').slice(-10)
    const phoneParams = new URLSearchParams()
    phoneParams.set('phone', phoneNumber)

    $('form[data-success-url]').each(function () {
      JS010UpdateFormUrl($(this), phoneParams)
    })
  })

  $('input[data-tilda-rule="email"]').on('input', function () {
    const email = $(this).val()
    const emailParams = new URLSearchParams()
    emailParams.set('email', email)

    $('form[data-success-url]').each(function () {
      JS010UpdateFormUrl($(this), emailParams)
    })
  })
}

window.addEventListener('load', JS010InitializeFormUrlUpdate)
