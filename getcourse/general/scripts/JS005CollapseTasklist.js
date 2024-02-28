/**
 * Сворачивает задачи при просмотре страницы пользователя или заказа.
 */
function JS005handle () {
  const currentPagePath = window.location.pathname
  const pathsToUpdate = [
    '/user/control/user/update/',
    '/sales/control/deal/update/'
  ]

  const shouldUpdate = pathsToUpdate.some(path => currentPagePath.includes(path))

  if (shouldUpdate) {
    setTimeout(function () {
      $('.task-form').addClass('task-form-closed')
    }, 1000)
  }
}

JS005handle()
