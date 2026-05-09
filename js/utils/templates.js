/**
 *
 * @param {string} template
 * @param {Record<string, string>} data
 */
export function populate(template, data) {
  return Object.entries(data).reduce(
    (result, [key, value]) => result.replaceAll(`{{${key}}}`, value),
    template,
  )
}

/**
 *
 * @param {string} template
 * @param {{[key]: value}} data
 */
export function populateList(template, data) {
  return template.replace(
    `{{${Object.keys(data)[0]}}}`,
    Object.values(data)[0].join(""),
  )
}
