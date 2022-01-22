/*
 * @Author: your name
 * @Date: 2021-07-11 17:49:41
 * @LastEditTime: 2021-07-11 18:14:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML案列（八）\jquery02\js\jquery02.js
 */

$(function(){
	$('.two').css('display','none')
	var one = $('.one')
	var two = $('.two')
	var img = $('.one img')

	$(one).each(function(i){
		$(this).click(function(){
			if ($(two[i]).css('display') === 'none') {
				$(two[i]).slideDown(400)
				$(img[i]).css({'transform':'rotate(180deg)'})
				$(one).each(function(t){
					if (t !== i) {
						$(two[t]).slideUp(400)
						$(img[t]).css({'transform':'rotate(0deg)'})
					}
				})
			} else {
				$(two[i]).slideUp(400)
				$(img[i]).css({'transform':'rotate(0deg)'})
			}
		})
	})
})