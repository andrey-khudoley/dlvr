t_onReady(function () {
  const search = '?' + window.location.search.split('&').filter(function (val) {
    const value = val.replace(/\?/, '')
    return value.indexOf('s_') === -1 && value.indexOf('tfc_') === -1
  }).join('&').replace(/\?/, '')

  if (search !== '?') {
    const aLinks = document.querySelectorAll('a')
    const arrayLinks = Array.from(aLinks)
    arrayLinks.forEach(function (el) {
      const href = el.getAttribute('href')
      if (href && href.indexOf('roman-kosov.ru') > -1 && href.indexOf('#') === -1) {
        if (href.indexOf('?') === -1) {
          el.setAttribute('href', href + search)
        } else {
          el.setAttribute('href', href + search.replace('?', '&'))
        }
      }
    })
  }
})
