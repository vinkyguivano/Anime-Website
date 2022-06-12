import slugify from "slugify"

const helper = {
  toSlug: (string) => {
    return slugify(string, { lower: true})
  },
  normalizeSlug: (slug) => {
    return slug.replace(/-/g, " ")
  },
  checkSpecialCharacter: (string) => {
    const checkString = string.match(/^[A-Za-z0-9\ ]+$/)
    return checkString ? true : false 
  }
}

export default helper