var lozad = require('lozad')

      const observer = lozad()

  window.addEventListener('load', () => {
      observer.observe()

    let share = document.getElementById('web-share')
    let url = window.location.href
    let title = document.title
    if (share) {
      if (!navigator.share) return share.remove()
      share.addEventListener('click', event => {
        // event.preventDefault()
        if (!navigator.share) return share.remove()
        navigator.share({"url": url, "title": title})
          .then(console.log)
          .catch(console.log)
      })
    }
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '');
})

