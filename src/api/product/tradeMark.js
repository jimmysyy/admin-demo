// 获取品牌管理数据
import request from '@/utils/request'

// 获取品牌列表接口
// /admin/product/baseTrademark/{page}/{limit} get
export const reqTradeMarkList = (page, limit) => request({ url: `/admin/product/baseTrademark/${page}/${limit}`, method: 'get' })
