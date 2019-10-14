export const capitalize = str => {
  const str_list = str.split(" ")
  let ret_str = ""
  str_list.forEach((subStr) => {
    ret_str += subStr.charAt(0).toUpperCase() + subStr.slice(1) + " "
  })
  return ret_str
}

export const toLink = ele => {
  if (ele in ["Playground", `Portfolio`, "About"]) {
    return ele.toLowerCase()
  } else {
    return `/${ele.toLowerCase()}/`
  }
}