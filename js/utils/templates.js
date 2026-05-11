/**
 *
 * @param {string} template
 * @param {Record<string, string | [string]>} data
 */
export function populate(template, data) {
  return Object.entries(data).reduce(
    (result, [key, value]) =>
      result.replaceAll(
        `{{${key}}}`,
        typeof value === "string" ? value : value.join(""),
      ),
    template,
  )
}
