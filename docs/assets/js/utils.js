export const debounce = (fn, delay = 300 ) => {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

export const setScrollTop = (top) => {
  document.documentElement.scrollTop = document.body.scrollTop = top
}
