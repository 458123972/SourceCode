/*
 * @Author: your name
 * @Date: 2022-01-07 13:32:09
 * @LastEditTime: 2022-01-07 14:19:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hubulidere:\素材\HTML+CSS+VUE 记事本\vue\js\index.js
 */
new Vue({
    el: '#app',
    data: {
        title: '待办事项清单',
        incident: [{
            text: '事件一',
            show: false
        }, {
            text: '事件二',
            show: false
        }, {
            text: '事件三',
            show: false
        }],
    },
    methods: {
        add() {
            if (this.$refs.inputValue.value === '') return
            this.incident.unshift({
                text: this.$refs.inputValue.value,
                show: false
            })
            this.$refs.inputValue.value = ''
        },
        finish(a) {
            this.$set(this.incident[a], 'show', !this.incident[a].show)
        },
        deleteli(a) {
            if (confirm('确定删除吗？')) {
                this.incident.splice(a, 1)
            }
        },
        selectdel() {
            if (this.statistics === 0) return alert('还没完成什么事呢!')
            if (confirm('确定删除选中的吗?')) {
                this.incident = this.incident.filter((item) => {
                    return item.show !== true
                });
            }
        }
    },
    computed: {
        statistics() {
            let a = 0
            this.incident.forEach(element=>{
                if (element.show) {
                    a = a+1
                }
            })
            return a
        }
    }
})