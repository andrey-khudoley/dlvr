const akhJS003Config = {
  UTMS_DEAL: true,
  UTMS_USER: true,
  DEBUG: false
}

// Селекторы и данные полей
const akhJS003BlockSelector = '.analytics'
const akhJS003DealFields = [
  ['utm_source', 10476765],
  ['utm_medium', 10476766],
  ['utm_campaign', 10476767],
  ['utm_content', 10476792],
  ['utm_term', 10476791],
  ['utm_group', 10476793],
  ['gcpc', 10476794]
]
const akhJS003UserFields = [
  ['tg_username', 964664],
  ['tg_id', 10087984],
  ['utm_source', 10476835],
  ['utm_medium', 10476836],
  ['utm_campaign', 10476837],
  ['utm_content', 10476839],
  ['utm_term', 10476838],
  ['utm_group', 10476840]
]
const akhJS003UrlField = ['loc', 10476764]

/**
 * Выводит сообщения в консоль.
 * @param {string} message - Сообщение для вывода.
 * @param {boolean} isError - Является ли сообщение ошибкой.
 */
function akhJS003Log (message, isError = false) {
  if (akhJS003Config.DEBUG) {
    const logFunction = isError ? console.error : console.log
    logFunction(`AKh - js003: ${message}`)
  }
}

/**
 * Получает значение параметра из URL.
 * @param {string} name - Название параметра.
 * @returns {string|null} - Значение параметра.
 */
function akhJS003GetParamValue (name) {
  const searchParams = new URLSearchParams(window.location.search)
  return searchParams.get(name)
}

/**
 * Создаёт скрытый элемент ввода.
 * @param {number} fieldId - ID поля.
 * @param {string} value - Значение для элемента ввода.
 * @param {string} type - Тип поля (например, 'dealCustomFields').
 * @returns {Element} - Созданный элемент ввода.
 */
function akhJS003CreateHiddenInput (fieldId, value, type) {
  const input = document.createElement('input')
  input.name = `formParams[${type}][${fieldId}]`
  input.type = 'hidden'
  input.value = value
  return input
}

/**
 * Заполняет пользовательские поля данными.
 * @param {Array} data - Поля и соответствующие значения.
 * @param {Element} parentElement - Родительский элемент для вставки элементов ввода.
 * @param {string} type - Тип поля (например, 'dealCustomFields').
 */
function akhJS003FillFields (data, parentElement, type) {
  data.forEach(([utm, fieldId]) => {
    const utmValue = akhJS003GetParamValue(utm)
    akhJS003Log(`Заполнение ${type} данных для поля с ID ${fieldId} используя UTM-параметр: ${utm} = ${utmValue}`)
    if (utmValue) {
      const inputElement = akhJS003CreateHiddenInput(fieldId, utmValue, type)
      parentElement.appendChild(inputElement)
      akhJS003Log(`Поле с ID ${fieldId} заполнено значением: ${utmValue}`)
    }
  })
}

/**
 * Заполняет данные URL-адреса страницы.
 * @param {Element} parentElement - Родительский элемент для вставки элемента ввода.
 */
function akhJS003FillPageUrl (parentElement) {
  const isInsideIframe = window !== window.top
  let rawUrl

  if (isInsideIframe) {
    const locValue = akhJS003GetParamValue('loc')
    if (locValue) {
      const decodedLoc = decodeURIComponent(locValue)
      const locUrl = new URL(decodedLoc)
      rawUrl = locUrl.origin + locUrl.pathname
    }
  }

  if (!rawUrl) {
    const currentUrl = new URL(window.location.href)
    rawUrl = currentUrl.origin + currentUrl.pathname
  }

  const inputElement = akhJS003CreateHiddenInput(akhJS003UrlField[1], rawUrl, 'dealCustomFields')
  parentElement.appendChild(inputElement)
  akhJS003Log(`Поле с ID ${akhJS003UrlField[1]} заполнено значением: ${rawUrl}`)
}

/**
 * Обрабатывает элементы для заполнения необходимыми данными.
 */
function akhJS003ProcessElements () {
  akhJS003Log('Скрипт запущен. Начало обработки элементов.')

  const forms = document.querySelectorAll('form')
  forms.forEach((form) => {
    const analyticsElement = form.closest(akhJS003BlockSelector)
    if (!analyticsElement) {
      return
    }

    const isDeal = !analyticsElement.classList.contains('no-deal')
    if (isDeal && akhJS003Config.UTMS_DEAL) {
      akhJS003FillPageUrl(form)
      akhJS003FillFields(akhJS003DealFields, form, 'dealCustomFields')
    }
    if (akhJS003Config.UTMS_USER) {
      akhJS003FillFields(akhJS003UserFields, form, 'userCustomFields')
    }
  })

  akhJS003Log('Обработка элементов завершена.')
}

/**
 * Выполняет запрос на проверку доступа и запускает скрипт только в случае успеха.
 */
async function akhJS003CheckAccessAndInitialize () {
  try {
    const { URL, CLIENT, KEY } = window.auth
    const response = await fetch(`https://${URL}/get/access/status?client=${CLIENT}&key=${KEY}`)
    const result = await response.json()

    if (result.status === 'ok') {
      akhJS003Log('Доступ получен, запускаем обработку элементов.')
      akhJS003ProcessElements()
    } else {
      akhJS003Log('Доступ не получен, обработка элементов не будет запущена.', true)
    }
  } catch (error) {
    akhJS003Log('Ошибка при запросе доступа: ' + error.message, true)
  }
}

function akhJS003Initialize () {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', akhJS003CheckAccessAndInitialize)
  } else {
    akhJS003CheckAccessAndInitialize()
  }
}

akhJS003Initialize()
