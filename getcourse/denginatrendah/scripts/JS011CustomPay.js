const js011Config = {
  PARAM_NAME_FOR_CUSTOM_PAY: 'custom_pay_value',
  NEED_WRITE_CUSTOM_PAY_VALUE_IN_FIELD: 1,
  ID_FIELD_DEAL_CUSTOM_PAY: '10397166',
  TYPE_FIELD_DEAL_CUSTOM_PAY: 'deal',
  DEBUG: false
}

/**
 * Логирует сообщения в консоль при включенном режиме отладки.
 * @function JS011Log
 * @param {string} message - Сообщение для логирования.
 * @param {boolean} isError - Является ли сообщение ошибкой.
 */
function JS011Log (message, isError = false) {
  if (js011Config.DEBUG) {
    const logFunction = isError ? console.error : console.log
    logFunction(`JS011: ${message}`)
  }
}

/**
 * Добавляет параметр с частичной оплатой в URL.
 * @function JS011AddSearchParamsToURL
 * @param {string} name - Имя параметра.
 * @param {string} value - Значение параметра.
 */
function JS011AddSearchParamsToURL (name, value) {
  const currentURLPage = decodeURIComponent(window.location.href)
  const url = new URL(currentURLPage)
  url.searchParams.set(name, value)
  window.history.pushState({}, '', url)
  JS011Log(`Added search param ${name}=${value} to URL`)
}

/**
 * Создает скрытый инпут.
 * @function JS011CreateHiddenInputField
 * @param {string} objectType - Тип объекта (deal или user).
 * @param {string} id - ID поля.
 * @param {number} customPayValue - Значение оплаты.
 * @returns {HTMLInputElement} - Скрытый инпут.
 */
function JS011CreateHiddenInputField (objectType, id, customPayValue) {
  const input = document.createElement('input')
  let name = ''
  if (objectType === 'user') {
    name = `formParams[userCustomFields][${id}]`
  } else if (objectType === 'deal') {
    name = `formParams[dealCustomFields][${id}]`
  }
  input.setAttribute('name', name)
  input.setAttribute('type', 'hidden')
  input.setAttribute('value', customPayValue)
  JS011Log(`Created hidden input field for ${objectType} with ID ${id} and value ${customPayValue}`)
  return input
}

/**
 * Устанавливает значение custom_pay_value для заказа и обновляет URL.
 * Основная функция для вызова из формы.
 * @param {number} [DEAL_CUSTOM_PAY_VALUE=990] - Значение оплаты по умолчанию.
 */
// eslint-disable-next-line no-unused-vars
const JS011SetCustomPayInDeal = (DEAL_CUSTOM_PAY_VALUE = 990) => {
  const customPayValue = DEAL_CUSTOM_PAY_VALUE
  JS011AddSearchParamsToURL(js011Config.PARAM_NAME_FOR_CUSTOM_PAY, customPayValue)

  if (js011Config.NEED_WRITE_CUSTOM_PAY_VALUE_IN_FIELD === 1) {
    const hiddenFieldsBlock = document.querySelectorAll('form')

    if (hiddenFieldsBlock.length) {
      const inputCustomPay = JS011CreateHiddenInputField(
        js011Config.TYPE_FIELD_DEAL_CUSTOM_PAY,
        js011Config.ID_FIELD_DEAL_CUSTOM_PAY,
        customPayValue
      )

      hiddenFieldsBlock.forEach((item) => {
        item.appendChild(inputCustomPay)
      })
      JS011Log('Appended hidden input field')
    }
  }
}

/**
 * Перенаправляет на URL с параметром paymentValue из custom_pay_value.
 * @function JS011RedirectToCustomPayInDeal
 */
function JS011RedirectToCustomPayInDeal () {
  if (!document.referrer) return

  const url = new URL(decodeURIComponent(document.referrer))
  const customPayValue = url.searchParams.get(js011Config.PARAM_NAME_FOR_CUSTOM_PAY)

  if (!customPayValue) return

  const redirectURL = new URL(decodeURIComponent(window.location.href))
  redirectURL.searchParams.set('paymentValue', customPayValue)
  window.location.href = redirectURL
  JS011Log(`Redirecting to ${redirectURL.href} with paymentValue=${customPayValue}`)
}

window.addEventListener('DOMContentLoaded', JS011RedirectToCustomPayInDeal)
