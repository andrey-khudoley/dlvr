// Control panel for the script configuration
const BLOCK_SELECTOR_ANALYTICS_INFO = '.analytics_info'
const BLOCK_SELECTOR_SERVICE = '.service_info'
const USER_LASTREG_ID = '1764632'
const DEAL_EDID = '1551887'
const DEAL_EDID_BKP = '10097754'
const DEAL_SERVICE = '1635812'
const DEBUG = true

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
 * Обрабатывает добавление скрытых полей ввода на основе конфигурации.
 */
function akhJS004AddFields () {
  const analyticsElements = document.querySelectorAll(BLOCK_SELECTOR_ANALYTICS_INFO)
  const serviceElements = document.querySelectorAll(BLOCK_SELECTOR_SERVICE)

  // Обработка элементов с классом .analytics_info
  analyticsElements.forEach((item) => {
    const value = item.getAttribute('value')
    const dealInput = akhJS004CreateHiddenInput('dealCustomFields', DEAL_EDID, value)
    const bkpInput = akhJS004CreateHiddenInput('dealCustomFields', DEAL_EDID_BKP, value)
    const userInput = akhJS004CreateHiddenInput('userCustomFields', USER_LASTREG_ID, value)

    const parent = item.parentElement
    parent.insertBefore(dealInput, item)
    parent.insertBefore(bkpInput, item)
    parent.insertBefore(userInput, item)
    parent.removeChild(item)

    if (DEBUG) {
      console.log(`Processed .analytics_info element. Deal Input: ${DEAL_EDID}=${value}, User Input: ${USER_LASTREG_ID}=${value}`)
    }
  })

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

window.addEventListener('DOMContentLoaded', akhJS004AddFields)
