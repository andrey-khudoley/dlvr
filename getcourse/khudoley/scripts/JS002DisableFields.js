/**
 * Проверяет, должен ли скрипт быть выполнен.
 * Читает user ID из локального хранилища и сравнивает его с массивом отключенных ID.
 * @returns {boolean} Возвращает `true`, если скрипт должен быть выполнен, иначе `false`.
 */
const akhJS002ShouldExecuteScript = () => {
  const disabledUserIds = [265475720] // ID пользователей, для которых скрипт не активен
  const userId = window.accountUserId
  return !disabledUserIds.includes(userId)
}

/**
 * Отключает ручное редактирование для списка указанных допполей.
 * Использует jQuery для установки свойства `disabled` на элементах формы.
 */
const akhJS002DisableFields = () => {
  if (!akhJS002ShouldExecuteScript()) return

  const fieldIds = [
    // Заказы
    '10101831', '10101835', '10101836', '10101838', '10101839',
    '10101840', '10101841', '10101842', '10101843', '10101844',
    '10101845', '10101846', '10101847', '10101848', '10101849',
    '10101850', '10101851', '10101855', '10102017', '10102018',
    '10102019', '10102020', '10102021', '10102022', '10102023',
    '10102024', '10102025', '10102026', '10102027', '10102028',
    '10102029', '10102030', '10102031',

    // Пользователи
    '10101748', '10101751', '10101754', '10101755', '10101765',
    '10101772', '10101997', '10101775', '10101776', '10101777',
    '10101778', '10101779', '10101780', '10101781', '10101782',
    '10101783', '10101784', '10101785', '10101786', '10101787',
    '10101788', '10101789', '10101790', '10101791', '10101792'
  ]

  fieldIds.forEach(id => {
    $(`#field-input-${id}`).prop('disabled', true)
  })
}

document.addEventListener('DOMContentLoaded', akhJS002DisableFields)
