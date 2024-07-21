// Control panel for the script configuration
const BLOCK_SELECTOR_ANALYTICS_INFO = '.analytics_info'
const BLOCK_SELECTOR_SERVICE = '.service_info'
const USER_LASTREG_ID = '1764632'
const DEAL_ANALYTICS_INFO = '1551887'
const DEAL_ANALYTICS_INFO_BKP = '10097754'
const DEAL_SERVICE = '1635812'
const DEBUG = false

/**
 * Создает скрытые поля для передачи данных в форму.
 *
 * @param {string} name - Имя поля.
 * @param {string} id - ID для поля.
 * @param {string} value - Значение для поля.
 * @returns {Element} - Возвращает созданный скрытый элемент ввода.
 */
function akhJS004CreateHiddenInput (name, id, value) {
  const input = document.createElement('input')
  input.name = `formParams[${name}][${id}]`
  input.type = 'hidden'
  input.value = value
  return input
}

/**
 * Обрабатывает добавление скрытых полей ввода на основе конфигурации для analytics_info.
 */
function akhJS004AddFieldsAnalyticsInfo () {
  const analyticsInfoElements = document.querySelectorAll(BLOCK_SELECTOR_ANALYTICS_INFO)

  // Обработка элементов с классом .analytics_info
  analyticsInfoElements.forEach((item) => {
    const value = item.getAttribute('value')
    const dealInput = akhJS004CreateHiddenInput('dealCustomFields', DEAL_ANALYTICS_INFO, value)
    const bkpInput = akhJS004CreateHiddenInput('dealCustomFields', DEAL_ANALYTICS_INFO_BKP, value)
    const userInput = akhJS004CreateHiddenInput('userCustomFields', USER_LASTREG_ID, value)

    const parent = item.parentElement
    parent.insertBefore(dealInput, item)
    parent.insertBefore(bkpInput, item)
    parent.insertBefore(userInput, item)
    parent.removeChild(item)

    if (DEBUG) {
      console.log(`Processed .analytics_info element. Deal Input: ${DEAL_ANALYTICS_INFO}=${value}, User Input: ${USER_LASTREG_ID}=${value}`)
    }
  })
}

/**
 * Обрабатывает добавление скрытых полей ввода на основе конфигурации для service.
 */
function akhJS004AddFieldsService () {
  const serviceElements = document.querySelectorAll(BLOCK_SELECTOR_SERVICE)

  // Обработка элементов с классом .service_info
  serviceElements.forEach((item) => {
    const value = item.getAttribute('value')
    const dealInput = akhJS004CreateHiddenInput('dealCustomFields', DEAL_SERVICE, value)

    const parent = item.parentElement
    parent.insertBefore(dealInput, item)
    parent.removeChild(item)

    if (DEBUG) {
      console.log(`Processed .service_info element. Deal Input: ${DEAL_SERVICE}=${value}, User Input: ${USER_LASTREG_ID}=${value}`)
    }
  })
}

window.addEventListener('DOMContentLoaded', () => {
  akhJS004AddFieldsAnalyticsInfo()
  akhJS004AddFieldsService()
})
