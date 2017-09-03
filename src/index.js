// examples so it can be tested right away

export const example = (value) => {
  let exists = value
  return exists
}
export const promiseExample = () => {
  return new Promise((resolve, reject) => {
    // reject should be covered
    setTimeout(() => resolve(true), 1000)
  })
}