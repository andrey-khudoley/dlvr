/**
 * Устанавливает значение custom_pay_value для сделки и обновляет URL.
 * @param {number} [DEAL_CUSTOM_PAY_VALUE=990] - Значение оплаты по умолчанию.
 */
// eslint-disable-next-line no-unused-vars
const setCustomPayInDeal = (DEAL_CUSTOM_PAY_VALUE = 990) => {
  /// //////////////////////////////////////////////////////
  // Основные настройки функции

  // Параметр URL, который будет содержать значение оплаты
  const PARAM_NAME_FOR_CUSTOM_PAY = 'custom_pay_value'
  // Флаг, указывающий, нужно ли записывать значение оплаты в скрытое поле
  const NEED_WRITE_CUSTOM_PAY_VALUE_IN_FIELD = 0
  // Селектор блока скрытых полей
  const HIDDEN_FIELDS_BLOCK_SELECTOR = '.hidden-fields-block'
  // ID поля для записи значения оплаты
  const ID_FIELD_DEAL_CUSTOM_PAY = '1146169'
  // Тип объекта для поля (deal или user)
  const TYPE_FIELD_DEAL_CUSTOM_PAY = 'deal'

  // Конец основных настроек функции
  /// //////////////////////////////////////////////////////

  /**
     * Добавляет параметры поиска в URL.
     * @param {string} name - Имя параметра.
     * @param {string} value - Значение параметра.
     */
  function addSearchParamsInURL (name, value) {
    const currentURLPage = decodeURIComponent(window.location.href)
    const url = new URL(currentURLPage)
    url.searchParams.set(name, value)
    window.history.pushState({}, '', url)
  }

  /**
     * Создает скрытое поле ввода.
     * @param {string} objectType - Тип объекта (deal или user).
     * @param {string} id - ID поля.
     * @returns {HTMLInputElement} - Скрытое поле ввода.
     */
  function createHiddenInput (objectType, id) {
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

  const customPayValue = DEAL_CUSTOM_PAY_VALUE
  addSearchParamsInURL(PARAM_NAME_FOR_CUSTOM_PAY, customPayValue)

  if (NEED_WRITE_CUSTOM_PAY_VALUE_IN_FIELD === 1) {
    const hiddenFieldsBlock = document.querySelectorAll(HIDDEN_FIELDS_BLOCK_SELECTOR)

    if (hiddenFieldsBlock.length) {
      const inputCustomPay = createHiddenInput(TYPE_FIELD_DEAL_CUSTOM_PAY, ID_FIELD_DEAL_CUSTOM_PAY)

      hiddenFieldsBlock.forEach((item) => {
        item.append(inputCustomPay)
      })
    }
  }
}

/**
 * Перенаправляет на URL с параметром paymentValue из custom_pay_value.
 */
const redirectToCustomPayInDeal = () => {
  if (!document.referrer) return

  const url = new URL(decodeURIComponent(document.referrer))
  const customPayValue = url.searchParams.get('custom_pay_value')

  if (!customPayValue) return

  const redirectURL = new URL(decodeURIComponent(window.location.href))
  redirectURL.searchParams.set('paymentValue', customPayValue)
  window.location.href = redirectURL
}

window.addEventListener('DOMContentLoaded', redirectToCustomPayInDeal)
