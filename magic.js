var streak = function(){
	if(typeof(CCDATA.page)!='undefined'&&typeof(CCDATA.page.user)!='undefined'&&typeof(CCDATA.page.user._id)!='undefined'){
		$.ajax({
			url:"http://www.codecademy.com/api/v1/users/"+CCDATA.page.user._id,
			type:"GET",
			dataType:"json",
			beforeSend: function(xhr){
				xhr.setRequestHeader("X-CSRF-Token",csrf_token);
				xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
				xhr.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.0");
			},
		}).done(function(e){
			$(".user-stats.light-text").prepend('<div class="user-points-bar-container"><div class="points-labels">Current day streak<span class="best">Best <strong class="best-count">'+e.streak_hash.max_count+'</strong></span></div><strong class="best-count"><div class="points-bar"><span class="points-bar-fill" style="width: '+(e.streak_hash.count/e.streak_hash.max_count)*100+'%;"><span class="count-container count-right"><span class="points-today-count">'+e.streak_hash.count+'</span></span></span></div></strong></div>')
		});
	}
}

var script = document.createElement("script");
script.textContent = "(" + streak.toString() + "())";
document.documentElement.appendChild(script);
