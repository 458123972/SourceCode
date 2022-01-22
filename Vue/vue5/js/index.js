/*
 * @Author: your name
 * @Date: 2021-12-23 16:43:39
 * @LastEditTime: 2021-12-28 18:37:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hubulider\vue\vue\vue6\js\index.js
 */
Vue.config.productionTip = false //阻止vue在启动时生成生产提示

const app = new Vue({
    el: '#app',
    data: {
        images: [{
                src: "./images/p2621379901.jpg",
                movie: '拆弹专家2',
                grade: '7.5',
                screen: '2020-12-24(中国大陆) / 2021-02-18(中国香港)',
                duration: '121分钟',
                introduce: '香港某处发生爆炸案，前拆弹专家潘乘风（刘德华 饰）因昏迷于现场，被警方怀疑牵涉其中。苏醒后的潘乘风只能一边逃亡一边查明真相，然而，他的好友董卓文（刘青云 饰）和他的前女友庞玲（倪妮 饰）却给他讲述了两段截然不同的经历。有计划的爆炸案接二连三发生，真相却越来越扑朔迷离……',
            },
            {
                src: "./images/p2622388983.jpg",
                movie: '唐人街探案3',
                grade: '5.3',
                screen: '2021-02-12(中国大陆)',
                duration: '136分钟',
                introduce: '继曼谷、纽约之后，东京再出大案。唐人街神探唐仁（王宝强 饰）、秦风（刘昊然 饰）受侦探野田昊（妻夫木聪 饰）的邀请前往破案。“CRIMASTER世界侦探排行榜”中的侦探们闻讯后也齐聚东京，加入挑战，而排名第一Q的现身，让这个大案更加扑朔迷离，一场亚洲最强神探之间的较量即将爆笑展开……'

            }, {
                src: "./images/p2626260539.jpg",
                movie: '许愿神龙 Wish Dragon ',
                grade: '6.5',
                screen: '2021-01-15(中国大陆)',
                duration: ' 99分钟',
                introduce: '你知道这世上仅存一条粉红色的许愿神龙吗？他能够实现许愿者任何逆天改命的愿望。这样的神力引得不少人在暗中寻找神龙的踪迹，然而普普通通的上海小青年丁思齐误打误撞打开了神龙的封印。千年代沟引发连串爆笑经历，被绑定的一人一龙踏上了一段妙想天开又惊险万分的旅途…',
            }, {
                src: "./images/p2638968571.jpg",
                movie: '名侦探柯南：绯色的子弹 名探偵コナン 緋色の弾丸',
                grade: '5.7',
                screen: '2021-04-17(中国大陆) / 2021-04-16(日本)',
                duration: '110分钟',
                introduce: '故事发生于东京，在全球最大体育盛事WSG即将召开之际，知名企业的高官却接连在赞助商酒会现场遭到绑架，而自新名古屋站至东京的最高时速1000km的真空超导磁悬浮列车也被卷入其中，一场牵动国际目光的重大案件就此展开。            ',
            }, {
                src: "./images/p2651996671.jpg",
                movie: '宝贝老板2 The Boss Baby: Family Business',
                grade: '6.7',
                screen: '2021-07-02(美国/美国网络)',
                duration: '107分钟',
                introduce: '设定在首部多年之后，邓普顿兄弟蒂姆和泰德长大成人，两人关系也逐渐疏远。蒂姆已婚已育，泰德是对冲基金的首席执行官，两人将因为一个有着先进方式和积极进取态度的新任“宝贝老板”重新联系在一起，激发出新的家族企业。蒂姆和有“超级妈妈”之称的妻子卡罗尔及异常聪慧的7岁女儿塔比莎、刚出生超级可爱的婴儿蒂娜住在郊区，塔比莎是一所有威望的教育机构的尖子生，将叔叔泰德视为偶像，想成为他那样的人，但蒂姆担心她太过用功，导致无法过一个正常的童年。当蒂娜作为宝贝集团最高机密特工的真实身份曝光，目的是为了揭开塔比莎学校及其神秘创始人阿姆斯特朗博士背后的黑暗秘密时，邓普顿兄弟将以一种意想不到的方式重聚，两人重新审视家庭的意义，明白什么才是最重要的。',
            }, {
                src: "./images/p2675102928.jpg",
                movie: '毒液2 Venom: Let There Be Carnage',
                grade: '5.0',
                screen: '2021-10-01(美国)',
                duration: '97分钟',
                introduce: '电影讲述了外星共生体“毒液”与宿主埃迪（汤姆·哈迪 饰）这对“最佳拍档”遇上致命反派共生体“卡内奇”（伍迪·哈里森 饰），超级英雄和邪恶反派的宿命之战即将开始。            ',
            }, {
                src: "./images/p2700138245.jpg",
                movie: '天书奇谭',
                grade: '9.2',
                screen: '1983(中国大陆) / 2021-11-05(中国大陆重映)',
                duration: '89分钟 / 100分钟(中国大陆重映)',
                introduce: '天庭有珍奇书籍“天书”，被锁在石龛门里三千年。看守天书的袁公对天书的内容好奇不已，他乘无人之际，偷偷拿出观看。原来，天书上记录了一百〇八条法术，袁公偷偷下凡，把天书上的内容刻在石壁上。但本意造福人类的袁公此举却触犯了天条，遭到了玉帝的惩罚。炼丹炉里的仙丹不慎被三条狐狸偷吃了，她们变成精下凡骗人钱财，还假扮仙姑和官府勾结，欺压百姓，祸害人间。袁公便指引天赋异禀的蛋生——一个从蛋里跳出来的孩子修习天书上的法术，和狐狸精斗智斗勇，为民除害。',
            }, {
                src: "./images/p2711915971.jpg",
                movie: '芬奇 Finch',
                grade: '8.5',
                screen: '2021-11-05(美国)',
                duration: '115分钟',
                introduce: '在世界末日后的地球上，一个为保护造物主的爱犬而生的机器人，学习生活、爱情、友谊以及作为人类意味着什么。',
            }
        ],
        imgtrang: 'translateX(0)',
        translat: 0,
        showindex: 0,
        show: '',
    },
    methods: {
        geteidth() {
            let width = this.$refs.picturewidth.offsetWidth //盒子的宽度
            let picturewidth = this.$refs.picturewidth.querySelector('img').offsetWidth
            let img = this.$refs.picturewidth.querySelectorAll('img')
            let imglen = this.$refs.picturewidth.querySelectorAll('img').length
            let all = {
                width,
                picturewidth,
                imglen,
                img
            }
            return all

        },
        towardsright() {
            let a = this.geteidth()
            let b = a.width - a.picturewidth * a.imglen
            // console.log(b)
            console.log(this.translat)
            if (this.translat > b) {
                this.translat = this.translat - a.picturewidth
                this.imgtrang = 'translateX(' + this.translat + 'px)'
            }
        },
        towardsleft() {
            if (this.translat >= 0) return
            let a = this.geteidth()
            if (this.translat < 0) {
                this.translat = this.translat + a.picturewidth
                this.imgtrang = 'translateX(' + this.translat + 'px)'
            }
        },
        over(a) {
            this.showindex = a
            let img = this.geteidth()
            img.img.forEach((p) => {
                p.style.opacity = 0.5
            });
            img.img[this.showindex].style.opacity = 1
            return this.show = this.images[this.showindex]
        },
        under() {
            if (this.showindex === this.images.length - 1) return
            this.showindex = this.showindex + 1
            this.over(this.showindex)
        },
        setgrade() {
            console.log(this.show.grade)
            if (this.show.grade <= 1) {
                return '6px'
            } else if (this.show.grade <= 2) {
                return '-19px'
            } else if (this.show.grade <= 3) {
                return '-42px'
            } else if (this.show.grade <= 4) {
                return '-66px'
            } else if (this.show.grade <= 5) {
                return '-91px'
            } else if (this.show.grade <= 6) {
                return '-115px'
            } else if (this.show.grade <= 7) {
                return '-139px'
            } else if (this.show.grade <= 8) {
                return '-164px'
            } else if (this.show.grade <= 9) {
                return '-188px'
            } else if (this.show.grade <= 10) {
                return '-212px'
            } else {
                return '-238px'
            }
        }
    },
    mounted() {
        this.over(0)
    },
})