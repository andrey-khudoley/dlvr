/**
 * Добавляет значение .
 * @function JS011AddSearchParamsToURL
 * @param {string} name - Имя параметра.
 * @param {string} value - Значение параметра.
 */
function JS011AddSearchParamsToURL (name, value) {
  const currentURLPage = decodeURIComponent(window.location.href)
  const url = new URL(currentURLPage)
  url.searchParams.set(name, value)
  window.history.pushState({}, '', url)
}

/**
 * Создает скрытое доп. поле.
 * @function JS011CreateHiddenInputField
 * @param {string} objectType - Тип объекта (deal или user).
 * @param {string} id - ID поля.
 * @param {number} customPayValue - Значение оплаты.
 * @returns {HTMLInputElement} - Скрытое поле ввода.
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
  return input
}

/**
 * Устанавливает значение custom_pay_value для сделки и обновляет URL.
 * @param {number} [DEAL_CUSTOM_PAY_VALUE=990] - Значение оплаты по умолчанию.
 */
// eslint-disable-next-line no-unused-vars
const JS011SetCustomPayInDeal = (DEAL_CUSTOM_PAY_VALUE = 990) => {
  const config = {
    PARAM_NAME_FOR_CUSTOM_PAY: 'custom_pay_value',
    NEED_WRITE_CUSTOM_PAY_VALUE_IN_FIELD: 0,
    HIDDEN_FIELDS_BLOCK_SELECTOR: '.hidden-fields-block',
    ID_FIELD_DEAL_CUSTOM_PAY: '1146169',
    TYPE_FIELD_DEAL_CUSTOM_PAY: 'deal'
  }

  const customPayValue = DEAL_CUSTOM_PAY_VALUE
  JS011AddSearchParamsToURL(config.PARAM_NAME_FOR_CUSTOM_PAY, customPayValue)

  if (config.NEED_WRITE_CUSTOM_PAY_VALUE_IN_FIELD === 1) {
    const hiddenFieldsBlock = document.querySelectorAll(config.HIDDEN_FIELDS_BLOCK_SELECTOR)

    if (hiddenFieldsBlock.length) {
      const inputCustomPay = JS011CreateHiddenInputField(
        config.TYPE_FIELD_DEAL_CUSTOM_PAY,
        config.ID_FIELD_DEAL_CUSTOM_PAY,
        customPayValue
      )

      hiddenFieldsBlock.forEach((item) => {
        item.append(inputCustomPay)
      })
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
  const customPayValue = url.searchParams.get('custom_pay_value')

  if (!customPayValue) return

  const redirectURL = new URL(decodeURIComponent(window.location.href))
  redirectURL.searchParams.set('paymentValue', customPayValue)
  window.location.href = redirectURL
}

window.addEventListener('DOMContentLoaded', JS011RedirectToCustomPayInDeal)
