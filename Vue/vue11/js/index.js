/*
 * @Author: your name
 * @Date: 2022-01-10 16:24:28
 * @LastEditTime: 2022-01-10 16:57:32
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hubulidere:\素材\HTML案例：动态底部导航栏\vue\js\index.js
 */
Vue.config.productionTip = false

new Vue({
    el: '#app',
    data: {
        color: ['#f093fb', '#8ec5fc', '#00f2fe', '#fee140']
    },
    methods: {
        transti(i, event) {
            let li = event.currentTarget
            let a = this.$refs.tasn
            li.parentElement.querySelectorAll('li').forEach((e)=>{
                e.style.color = '#777'
            })
            li.style.color = 'white'
            a.style.cssText = 'transform:scale(1,0.6) translateX('+i*125+'px);'
            setTimeout(()=>{
                a.style.cssText = 'transform:scale(1,1) translateX('+i*125+'px);'+
                'background-color:'+this.color[i]+';'
            },500)
            
        }
    },
})