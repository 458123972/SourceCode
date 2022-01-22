/*
 * @Author: your name
 * @Date: 2021-12-23 00:45:36
 * @LastEditTime: 2021-12-23 18:51:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hubulidere:\素材\【HTML+CSS+VUE】好看的卡片\vue\js\index.js
 */

Vue.config.productionTip = false //阻止vue在启动时生成生产提示

Vue.component('my-text',{
    template:`
    <div class="card">
      <i></i>
      <div class="text">
        <h3>{{message.title}}</h3>
        <hr>
        <p>{{message.text}}</p>
      </div>
      <button>sure</button>
    </div>
    `,
    props:['message']
})

const app = new Vue({
    el:'#app',
    data:{
        outline: [{
            title: 'give the thumbs-up',
            text: 'Please give me a compliment.'
        },
        {
            title: 'repost',
            text: 'If it helps you, please forward it.'
        },
        {
            title: 'collect',
            text: 'You can collect it if you like.'
        }
    ]
    },
})