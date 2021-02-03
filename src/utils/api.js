/*
 * @Author: your name
 * @Date: 2021-02-03 23:25:18
 * @LastEditTime: 2021-02-03 23:49:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\utils\api.js
 */
 const getArticleList = '/article/list'
 const getArticleById = '/article/{id}'
 const getArticleByTag = '/article/tag/{id}'
 const pushArticle = '/article'

export default {
  getArticleList,
  getArticleById,
  getArticleByTag,
  pushArticle
}