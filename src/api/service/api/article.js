import BaseService from '../base'
export default class IndexService extends BaseService {
  constructor () {
    super('/api/article')
  }

  /**
   * 上传文章
   * @param {*} data
   */
  createArticle (data) {
    return super.post('createArticle', data)
  }

  /**
   * 获取文章列表
   * @param {*} data
   */
  getArticle (data) {
    return super.get('getArticle', data)
  }
}
