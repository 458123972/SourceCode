/*
 * @Author: your name
 * @Date: 2022-01-11 17:03:33
 * @LastEditTime: 2022-01-11 17:22:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hubulidere:\素材\HTML案例：伸缩侧边栏\vue\js\index.js
 */
Vue.config.productionTip = false

new Vue({
    el: '#app',
    data: {
        font: [{
                css: 'icon-shouye',
                text: 'home'
            }, {
                css: 'icon-wenjianjiai',
                text: 'file'
            }, {
                css: 'icon-wode',
                text: 'individual'
            }, {
                css: 'icon-tongzhi',
                text: 'information'
            },
            {
                css: 'icon-fenxiang-copy',
                text: 'share'
            }, {
                css: 'icon-tupiantubiao',
                text: 'picture'
            }, {
                css: 'icon-tubiao-',
                text: 'welfare'
            },
            {
                css: 'icon-tubiao',
                text: 'function'
            }, {
                css: 'icon-shezhi',
                text: 'set-up'
            }
        ],
        expandwidth: false
    },
    methods: {
        expand(){
            this.expandwidth =!this.expandwidth
            let expand = this.$refs.expand
            if (this.expandwidth) {
                expand.style.width = '300px'
                expand.querySelectorAll('li').forEach(element=>{
                    element.style.width = '300px'
                })
            }else {
                expand.style.width = '100px'
                expand.querySelectorAll('li').forEach(element=>{
                    element.style.width = '100px'
                })
            }
        }
    },
})