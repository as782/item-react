export function formatDate(time, fmt) {
    let date = new Date(time)
  
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1 ? str : padLeftZero(str)
        )
      }
    }
    return fmt
  }
  
  function padLeftZero(str) {
    return ('00' + str).substr(str.length)
  }

  // 获取音乐url (使用/song/url/v1?id=31654343&level=higher 接口返回的url会有不可用的情况)
  export function getPlayUrl(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
  }