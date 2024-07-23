const JS009RedirectGETParams = function JS009RedirectGETParams () {
  const currentURLPage = decodeURIComponent(window.location.href)
  if (currentURLPage.indexOf('?') === -1) return
  const URLParams = currentURLPage.substring(currentURLPage.indexOf('?'))
  const links = document.querySelectorAll('a')
  links.forEach(function (link) {
    if (link.href.indexOf('#') !== -1 || link.href.trim() === '') return

    if (link.href.indexOf('&') !== -1 || link.href.indexOf('?') !== -1) {
      link.href = link.href + '&' + URLParams.replace('?', '')
    } else {
      link.href = link.href + URLParams
    }
  })
}
window.addEventListener('DOMContentLoaded', JS009RedirectGETParams)
