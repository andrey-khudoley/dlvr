// Определение функции для проверки пути страницы
function JS007checkPagePath () {
  return window.location.pathname.includes('/user/control/user/update/')
}

// Определение функции для поиска и скрытия элементов
function JS007hideSystemicLinks () {
  const links = document.querySelectorAll('a')
  links.forEach((link) => {
    if (link.textContent.includes('systemic')) {
      let parent = link.parentElement
      while (parent && !parent.classList.contains('user-product-item')) {
        parent = parent.parentElement
      }
      if (parent) parent.style.display = 'none'
    }
  })
}

// Определение функции для наблюдения за изменениями в DOM
function JS007observeMutations () {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1 && node.matches('a') && node.textContent.includes('systemic')) {
          let parent = node.parentElement
          while (parent && !parent.classList.contains('user-product-item')) {
            parent = parent.parentElement
          }
          if (parent) parent.style.display = 'none'
        }
      })
    })
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
}

// Определение главной функции для управления логикой скрипта
function JS007handle () {
  if (!JS007checkPagePath()) return
  JS007hideSystemicLinks()
  JS007observeMutations()
}

// Вызов главной функции в конце скрипта
document.addEventListener('load', function () {
  JS007handle()
})
