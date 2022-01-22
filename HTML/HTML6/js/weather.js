/*
 * @Author: your name
 * @Date: 2021-07-09 23:19:07
 * @LastEditTime: 2021-07-10 13:09:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML案列（七）\js\weather.js
 */

const app = new Vue({
   el:'#app',
   data:{
	   city:'',
	   weatherList:[]
   },
   methods:{
	   searchWeather:function(){
		   var than = this;
		   axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
		   .then(
			   function (response) {
				 if (response.data.desc === "OK") {
					than.weatherList = response.data.data.forecast 
				 } else {
					 alert('查无此城市!')
				 }  
			   }
		   )
	   },
	   changCity:function (city) {
		   this.city = city;
		   this.searchWeather();
	   }
   }
})