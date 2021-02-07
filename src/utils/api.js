/*
 * @Author: your name
 * @Date: 2021-02-03 23:25:18
 * @LastEditTime: 2021-02-05 18:37:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\utils\api.js
 */
/*
 * @Author: your name
 * @Date: 2021-02-03 23:25:18
 * @LastEditTime: 2021-02-03 23:49:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\utils\api.js
 */
 const getArticleList = '/article/list'
 function getArticleById(id){
    return `/article/${id}`
 }
 const getArticleByTag = '/article/tag/{id}'
 const pushArticle = '/article'

export default {
  getArticleList,
  getArticleById,
  getArticleByTag,
  pushArticle
}