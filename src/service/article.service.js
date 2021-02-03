/*
 * @Author: your name
 * @Date: 2021-02-03 22:42:46
 * @LastEditTime: 2021-02-03 23:43:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\service\article.service.js
 */
import axios from 'axios'
function getArticleList(){
  axios.get('/api/article/list')
  .then(
    res=>{
      console.log(res);
    }
  )
}
export default {
  getArticleList
}
