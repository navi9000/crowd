/**
 *
 * @param {string} querySelector
 * @param {Window | Document | HTMLElement} element
 */
export function qs(querySelector, parent = document) {
  return parent.querySelector(querySelector)
}

/**
 *
 * @param {string} querySelector
 * @param {Window | Document | HTMLElement} target
 */
export function qsa(querySelector, target = document) {
  return target.querySelectorAll(querySelector)
}

/**
 *
 * @param {Window | Document | HTMLElement} target
 * @param {string} event
 * @param {function} callback
 */
export function on(target, event, callback) {
  target.addEventListener(event, callback)
}

/**
 *
 * @param {Window | Document | HTMLElement} target
 * @param {string} event
 * @param {function} callback
 */
export function off(target, event, callback) {
  target.removeEventListener(event, callback)
}

/**
 *
 * @param {Window | Document | HTMLElement} target
 * @param {string} selector
 * @param {string} event
 * @param {function} callback
 */
export function delegate(target, selector, event, callback) {
  function dispatchEvent(e) {
    const targetElement = e.target.closest(selector)
    const elementList = qsa(selector, target)
    const hasMatch = [...elementList].includes(targetElement)
    if (hasMatch) {
      callback.call(targetElement, e)
    }
  }
  on(target, event, dispatchEvent)

  return () => {
    console.log("called")
    off(target, event, dispatchEvent)
  }
}
