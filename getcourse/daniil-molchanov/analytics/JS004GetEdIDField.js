// Control panel for the script configuration
const BLOCK_SELECTOR_ED_ID = '.ed_id'
const USER_LASTREG_ID = '10101802'
const DEAL_EDID = '10101862'
const DEAL_EDID_BKP = '10101863'
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
 * Обрабатывает добавление скрытых полей ввода на основе конфигурации.
 */
function akhJS004AddFieldsEdId () {
  const edIdElements = document.querySelectorAll(BLOCK_SELECTOR_ED_ID)

  // Обработка элементов с классом .ed_id
  edIdElements.forEach((item) => {
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
      console.log(`Processed .ed_id element. Deal Input: ${DEAL_EDID}=${value}, User Input: ${USER_LASTREG_ID}=${value}`)
    }
  })
}

window.addEventListener('DOMContentLoaded', akhJS004AddFieldsEdId)
