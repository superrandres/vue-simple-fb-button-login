export default () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.onload = () => {
      resolve(true)
    }
    script.onerror = (err) => {
      reject(err)
    }
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/sdk.js'
    document.head.appendChild(script)
  })
}
