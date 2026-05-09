/**
 *
 * @param {string} querySelector
 * @param {Window | Document | HTMLElement} element
 */
export function qs(querySelector, parent = document) {
  return parent.querySelector(querySelector)
}
