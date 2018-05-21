//调用全屏函数的方法
$(function(){
    $('#fullpage').fullpage({
    	//设置每一屏的颜色
    	sectionsColor:['#0da5d6','#2AB561','#DE8910','#16BA9D','#0DA5D6'],
//  	loopTop:true,
    	//滚动到某一屏之后调用
    	afterLoad:function(link,index){
    		//current 类加给谁 谁就做动画
    		$('.section').removeClass('current');
    		//动画延迟执行
    		setTimeout(function(){
    		$('.section').eq(index-1).addClass('current');
    		},100);

    	}
    });
});