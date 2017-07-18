// 彩票开奖配置
exports.cp=[
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{                                                                                                           //
		title:'16彩票重庆时时彩',                                                                               //
		source:'16彩票',                                                                                 		//
		name:'cqssc',                                                                                           //
		enable:true,                                                                                           //
		timer:'cqssc',                                                                                          //
		option:{                                                                                                //
			host:"127.0.0.2",                                                                                   //
			timeout:50000,                                                                                      //
			path: '/cqssc/cqssc_16cp.php',                                                                      //重
			headers:{                                                                                           //庆
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //时
			}                                                                                                   //时
		},                                                                                                      //彩
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:1,                                                                                 //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------16彩票重庆时时彩解析数据不正确');                                                //
			}                                                                                                   //
		}                                                                                                       //
	},	                                                                                                        //
                                                                                                                //
	{                                                                                                           //
		title:'360彩票重庆时时彩',                                                                              //
		source:'360彩票',                                                                                		//
		name:'cqssc',                                                                                           //
		enable:true,                                                                                           //
		timer:'cqssc1',                                                                                          //
		option:{                                                                                                //
			host:"caipiao.360.cn",                                                                                   //
			timeout:50000,                                                                                      //重
			path: '/cqssc/cqssc_360.php',                                                                       //庆
			headers:{                                                                                           //时
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //时
			}                                                                                                   //彩
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:1,                                                                                 //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------360彩票重庆时时彩解析数据不正确');                                               //
			}                                                                                                   //
		}                                                                                                       //
	},	                                                                                                        //
	                                                                                                            //
	{                                                                                                           //
		title:'百度重庆时时彩',                                                                                 //重
		source:'百度乐彩',                                                                                 		//庆
		name:'cqssc',                                                                                           //时
		enable:true,                                                                                           //时
		timer:'cqssc2',                                                                                          //彩
		option:{                                                                                                //
			host:"www.lecai.com",                                                                                   //
			timeout:50000,                                                                                      //
			path: '/cqssc/cqssc_cle.php',                                                                       //
			headers:{                                                                                           //
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:1,                                                                                 //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //重
				throw('--------百度重庆时时彩解析数据不正确');                                                  //庆
			}                                                                                                   //时
		}                                                                                                       //时
    },                                                                                                          //彩
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{                                                                                                           //
		title:'新疆时时彩',                                                                           	    	//
		source:'新疆福彩网',                                                                                 	//
		name:'xjssc',                                                                                           //
		enable:true,                                                                                           //
		timer:'xjssc',                                                                                          //
		option:{                                                                                                //
			host:"www.xjflcp.com",                                                                                   //
			timeout:50000,                                                                                      //新
			path: '/xjssc/xjssc.php',                                                                       	//疆
			headers:{                                                                                           //时
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //时
			}                                                                                                   //彩
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:12,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------新疆福利彩票解析数据不正确');                                                    //
			}                                                                                                   //
		}                                                                                                       //新
	},	                                                                                                        //疆
                                                                                                                //时
	{                                                                                                           //时
		title:'新疆时时彩',                                                                              		//彩
		source:'新疆福彩网2',                                                                                	//
		name:'xjssc',                                                                                           //
		enable:true,                                                                                           //
		timer:'xjssc',                                                                                          //
		option:{                                                                                                //
			host:"127.0.0.2",                                                                                   //
			timeout:50000,                                                                                      //
			path: '/xjssc/xjssc_list_0.php',                                                                    //
			headers:{                                                                                           //
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:12,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //新
				}					                                                                            //疆
			}catch(err){                                                                                        //时
				throw('--------新疆福利彩票解析数据不正确');                                                  	//时
			}                                                                                                   //彩
		}                                                                                                       //
	},                                                                                         					//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{                                                                                                           //
		title:'天津时时彩',                                                                           	    	//
		source:'天津福利彩票网',                                                                                //
		name:'tjssc',                                                                                           //
		enable:true,                                                                                           //
		timer:'tjssc',                                                                                          //
		option:{                                                                                                //
			host:"www.tjflcpw.com",                                                                                   //天
			timeout:50000,                                                                                      //津
			path: '/tjssc/tjssc.php',                                                                 		    //时
			headers:{                                                                                           //时
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //彩
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:60,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //天
				}					                                                                            //津
			}catch(err){                                                                                        //时
				throw('--------天津时时彩解析数据不正确');                                                      //时
			}                                                                                                   //彩
		}                                                                                                       //
	},	                                                                                                        //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{                                                                                                           //
		title:'北京pk10',                                                                           	    	//
		source:'百度',                                                                                 			//
		name:'bjpk10',                                                                                          //
		enable:true,                                                                                           //
		timer:'bjpk10',                                                                                         //
		option:{                                                                                                //
			host:"www.lecai.com",                                                                                   //
			timeout:50000,                                                                                      //北
			path: '/pk10/pk10_baidu.php',                                                                       //京
			headers:{                                                                                           //PK
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //拾
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:20,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------重庆时时彩解析数据不正确');                                                      //
			}                                                                                                   //北
		}                                                                                                       //京
	},	                                                                                                        //PK
                                                                                                                //拾
	{                                                                                                           //
		title:'北京pk10',                                                                              			//
		source:'北京福彩网',                                                                                	//
		name:'bjpk10',                                                                                          //
		enable:true,                                                                                           //
		timer:'bjpk10',                                                                                         //
		option:{                                                                                                //
			host:"www.bwlc.net",                                                                                   //
			timeout:50000,                                                                                      //
			path: '/pk10/pk10_bjfucai.php',                                                                     //
			headers:{                                                                                           //
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:20,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //北
					};                                                                                          //京
				}					                                                                            //PK
			}catch(err){                                                                                        //拾
				throw('--------北京福彩网pk10解析数据不正确');                                                  //
			}                                                                                                   //
		}                                                                                                       //
	},                                                                                         					//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/*
	{                                                                                                           //
		title:'百度2广东11选5',                                                                                 //
		source:'百度1广东11x5',                                                                                 //
		name:'gd11',                                                                                            //
		enable:true,                                                                                           //
		timer:'gd11',                                                                                           //
		option:{                                                                                                //
			host:"127.0.0.2",                                                                                   //
			timeout:50000,                                                                                      //
			path: '/gd11/gd115_baidu.php',                                                                      //广
			headers:{                                                                                           //东
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //11
			}                                                                                                   //选
		},                                                                                                      //5
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:6,                                                                                 //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------广东11x5解析数据不正确');                                                        //
			}                                                                                                   //
		}                                                                                                       //
	},	 */                                                                                                       //
                                                                                                                //
	{                                                                                                           //
		title:'爱彩乐广东11选5',                                                                                //
		source:'广东11x5爱彩乐',                                                                                //
		name:'gd11',                                                                                            //
		enable:true,                                                                                           //
		timer:'gd11',                                                                                           //
		option:{                                                                                                //
			host:"www.icaile.com",                                                                                   //
			timeout:50000,                                                                                      //广
			path: '/gd11/gd115_icaile.php',                                                                     //东
			headers:{                                                                                           //11
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //选
			}                                                                                                   //5
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:6,                                                                                 //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------广东11x5解析数据不正确');                                                        //
			}                                                                                                   //
		}                                                                                                       //
	},	                                                                                                        //
	                                                                                                            //
	{                                                                                                           //
		title:'彩88广东11选5',                                                                                  //广
		source:'广东11选5彩88',                                                                                 //东
		name:'gd11',                                                                                            //11
		enable:true,                                                                                           //选
		timer:'gd11',                                                                                           //5
		option:{                                                                                                //
			host:"m.cai88.com",                                                                                   //
			timeout:50000,                                                                                      //
			path: '/gd11/gd115_cai88.php',                                                                      //
			headers:{                                                                                           //
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:6,                                                                                 //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //广
				throw('--------彩88广东11选5解析数据不正确');                                                   //东
			}                                                                                                   //11
		}                                                                                                       //选
    },                                                                                                          //5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{                                                                                                           //
		title:'360彩票山东11选5',                                                                               //
		source:'360彩票',                                                                                	    //
		name:'sd11',                                                                                            //
		enable:true,                                                                                           //
		timer:'sd11',                                                                                           //
		option:{                                                                                                //
			host:"caipiao.360.cn",                                                                                   //
			timeout:50000,                                                                                      //
			path: '/sd11/sd115_360.php',                                                                        //山
			headers:{                                                                                           //东
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //11
			}                                                                                                   //选
		},                                                                                                      //5
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:7,                                                                                 //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------360彩票山东11选5解析数据不正确');                                                //
			}                                                                                                   //
		}                                                                                                       //
	},	                                                                                                        //
                                                                                                                //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{                                                                                                           //
		title:'360彩票江苏快3',                                                                           		//
		source:'360彩票',                                                                                 		//
		name:'jsk3',                                                                                            //
		enable:true,                                                                                           //
		timer:'jsk3',                                                                                           //
		option:{                                                                                                //
			host:"caipiao.360.cn",                                                                                   //
			timeout:50000,                                                                                      //江
			path: '/jsk3/jsk3_360.php',                                                                      	//苏
			headers:{                                                                                           //快
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //3
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:79,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //
				throw('--------360彩票江苏快3解析数据不正确');                                                  //
			}                                                                                                   //
		}                                                                                                       //江
	},	                                                                                                        //苏
                                                                                                                //快
	{                                                                                                           //3
		title:'163江苏快3',                                                                              		//
		source:'网易163',                                                                                		//
		name:'jsk3',                                                                                            //
		enable:true,                                                                                           //
		timer:'jsk3',                                                                                           //
		option:{                                                                                                //
			host:"caipiao.163.com",                                                                                   //
			timeout:50000,                                                                                      //
			path: '/jsk3/jsk3_163.php',                                                                         //
			headers:{                                                                                           //
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:79,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //
					};                                                                                          //
				}					                                                                            //
			}catch(err){                                                                                        //江
				throw('--------163江苏快3解析数据不正确');                                                  	//苏
			}                                                                                                   //快
		}                                                                                                       //3
	},                                                                                         					//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	{                                                                                                           //
		title:'快乐8',                                                                           				//
		source:'北京福利彩票',                                                                                  //
		name:'bjkl8',                                                                                           //
		enable:true,                                                                                           //
		timer:'bjkl8',                                                                                          //
		option:{                                                                                                //北
			host:"www.bwlc.net",                                                                                   //京
			timeout:50000,                                                                                      //快
			path: '/kl8/kl8.php',                                                                      			//乐
			headers:{                                                                                           //8
				"User-Agent": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0) "                             //
			}                                                                                                   //
		},                                                                                                      //
		parse:function(str){                                                                                    //
			try{                                                                                                //
				str=str.substr(0,200);	                                                                        //
				var reg=/<row expect="([\d\-]+?)" opencode="([\d\,]+?)" opentime="([\d\:\- ]+?)"/;              //
				var m;                                                                                          //
				if(m=str.match(reg)){                                                                           //
					return {                                                                                    //
						type:78,                                                                                //
						time:m[3],                                                                              //
						number:m[1],                                                                            //
						data:m[2]                                                                               //北
					};                                                                                          //京
				}					                                                                            //快
			}catch(err){                                                                                        //乐
				throw('--------官网快乐8解析数据不正确');                                                	    //8
			}                                                                                                   //
		}                                                                                                       //
	}                                                                                                       //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      	//
                                                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
];                                                                                                              

// 出错时等待 15                                                                                                
exports.errorSleepTime=15;                                                                                      

// 重启时间间隔，以小时为单位，0为不重启
//exports.restartTime=0.4;
exports.restartTime=0;

exports.submit={

	host:'www.fhcp.com',
	path:'/index.php/dataSource/kj'
}

exports.dbinfo={
	host:'127.0.0.1',
	user:'root',
	password:'root',
	database:'sscdc'

}

global.log=function(log){
	var date=new Date();
	console.log('['+date.toDateString() +' '+ date.toLocaleTimeString()+'] '+log)
}


function reparseFrom9800(bet, type) {
	str = bet.str;

	exports.errorSleepTime=500;  

	reg = new RegExp("<TD bgColor=#f6f6f6 align=\"center\"" + bet.actionNo + "<\/TD>[\s\S].*?<TD align=middle>(.*?)<\/TD>[\s\S].*?<TD align=middle>[\s\S].*?<font color=\"#FF0000\"><b>(\d+) (\d+) (\d+) (\d+) (\d+) (\d+)<\/b><\/font>[\s\S].*?\+ <b><font color=\"#009933\">(\d+)<\/font><\/b>", ""); //

	match = str.match(reg);
	var myDate = new Date();
	var year = myDate.getFullYear(); //年
	var month = myDate.getMonth() + 1; //月
	var day = myDate.getDate(); //日
	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;
	var mytime = match[1] + " " + myDate.toLocaleTimeString();
	try {
		var data = {
			type: type,
			time: mytime,
			number: bet.actionNo
		}

		data.data = match[2] + "," + match[3] + "," + match[4] + "," + match[5] + "," + match[6] + "," + match[7] + "," + match[7];

		//console.log(data);
		return data;
	} catch (err) {
		throw ('解析数据失败');
	}

}

function getFrom9800(str, type) {

	str = str.substr(str.indexOf('bai12'), 560);
	exports.errorSleepTime=500;  

	var reg = /<TD bgColor=#f6f6f6 align="center">(\d+)<\/TD>[\s\S].*?<TD align=middle>(.*?)<\/TD>[\s\S].*?<TD align=middle>[\s\S].*?<font color="#FF0000"><b>(\d+) (\d+) (\d+) (\d+) (\d+) (\d+)<\/b><\/font>[\s\S].*?\+ <b><font color="#009933">(\d+)<\/font><\/b>/,
		match = str.match(reg);

	var myDate = new Date();
	var year = myDate.getFullYear(); //年
	var month = myDate.getMonth() + 1; //月
	var day = myDate.getDate(); //日
	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;
	var mytime = match[2] + " " + myDate.toLocaleTimeString();
	try {
		var data = {
			type: type,
			time: mytime,
			number: match[1]
		}

		data.data = match[3] + "," + match[4] + "," + match[5] + "," + match[6] + "," + match[7] + "," + match[8] + "," + match[9];

		//console.log(data);
		return data;
	} catch (err) {
		throw ('解析数据失败');
	}

}