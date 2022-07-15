/*
 * @Author: Monve
 * @Date: 2022-05-16 11:17:59
 * @LastEditors: Monve
 * @LastEditTime: 2022-07-15 19:03:07
 * @FilePath: /console-log-date/src/logger/logger.ts
 */
function convert(value: any[]) {
  const str = value.map(val => {
    if (typeof val === 'object') {
      try {
        const obj_type = Object.prototype.toString.call(val)
        if (obj_type === '[object Error]') {
          return `${val.message} ${val.stack}`
        }
        return `${obj_type}${JSON.stringify(val)}`;
      } catch (error) {
        return val
      }
    }
    return val
  }).join(' ')
  return str
}

function withTag(tag: string, data: any[]) {
  return `${new Date().toLocaleString('zh-CN')} [${tag}]: ${convert(data)}\n`
}

const log = console.log
console.log = (...data: any[]) =>
  log(withTag("LOG", data))

const info = console.info
console.info = (...data: any[]) =>
  info(withTag("INFO", data))

const warn = console.warn
console.warn = (...data: any[]) =>
  warn(withTag("WARN", data))

const error = console.error
console.error = (...data: any[]) =>
  error(withTag("ERROR", data))