// Определение функции для проверки пути страницы
function JS006checkPagePath () {
  return window.location.pathname.includes('/user/control/user/update/')
}

// Определение функции для поиска и скрытия элементов
function JS006hideSystemicLinks () {
  const links = document.querySelectorAll('a')
  links.forEach((link) => {
    if (link.textContent.startsWith('systemic')) {
      let parent = link.parentElement
      while (parent && !parent.classList.contains('deal-row')) {
        parent = parent.parentElement
      }
      if (parent) parent.style.display = 'none'
    }
  })
}

// Определение функции для наблюдения за изменениями в DOM
function JS006observeMutations () {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1 && node.matches('a') && node.textContent.startsWith('systemic')) {
          let parent = node.parentElement
          while (parent && !parent.classList.contains('deal-row')) {
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
function JS006handle () {
  if (!JS006checkPagePath()) return
  JS006hideSystemicLinks()
  JS006observeMutations()
}

// Вызов главной функции в конце скрипта
JS006handle()
