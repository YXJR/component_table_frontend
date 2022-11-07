import HttpRequest from '@/util/axios.js'
//import * as Types from './action-type.js'
// export const getTableData = () => HttpRequest.get('/api/tabledata')
export const tableApi = {
  getData: () => HttpRequest.get('/api/tabledata'),
  add: (data) => HttpRequest.get('/api/tabledata', data),
  edit: (data) => HttpRequest.get('/api/tabledata', data),
  del: (data) => HttpRequest.get('/api/tabledata', data),
}
