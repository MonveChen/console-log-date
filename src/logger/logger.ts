/*
 * @Author: Monve
 * @Date: 2022-05-16 11:17:59
 * @LastEditors: Monve
 * @LastEditTime: 2022-05-16 15:52:21
 * @FilePath: /console-log-date/src/logger/logger.ts
 */
const log = console.log
console.log = (...data: any[]) =>
  log(new Date().toLocaleString('zh-CN') + ' [LOG]: ' + data.join(' ') + '\n')

const info = console.info
console.info = (...data: any[]) =>
  info(new Date().toLocaleString('zh-CN') + ' [INFO]: ' + data.join(' ') + '\n')

const warn = console.warn
console.warn = (...data: any[]) =>
  warn(new Date().toLocaleString('zh-CN') + ' [WARN]: ' + data.join(' ') + '\n')

const error = console.error
console.error = (...data: any[]) =>
  error(new Date().toLocaleString('zh-CN') + ' [ERROR]: ' + data.join(' ') + '\n')