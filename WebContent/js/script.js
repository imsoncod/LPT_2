/*facebook*/
function facebook(){
	window.open('http://www.facebook.com/sharer/sharer.php?u=http://lolpt.site');
}

/*kakao*/
function kakao(){
	 Kakao.init("7c9dd3736a9b7447af27693340fc2398");      // 사용할 앱의 JavaScript 키를 설정
     Kakao.Link.sendDefault({
           objectType:"feed"
         , content : {
               title:"LPT : 롤 포지션 테스트"   // 콘텐츠의 타이틀
             , description:"나에게 맞는 롤 포지션 찾기!"   // 콘텐츠 상세설명
             , imageUrl:"http://lolpt.site/LPT/img/share.png"   // 썸네일 이미지
             , link : {
                   mobileWebUrl:"http://lolpt.site"   // 모바일 카카오톡에서 사용하는 웹 링크 URL
                 , webUrl:"http://lolpt.site" // PC버전 카카오톡에서 사용하는 웹 링크 URL
             }
         }
         , social : {
               likeCount:0      // LIKE 개수
             , commentCount:0    // 댓글 개수
             , sharedCount:0     // 공유 회수
         }
         , buttons : [
             {
                   title:"나도 해볼까?"    // 버튼 제목
                 , link : {
                     mobileWebUrl:"http://lolpt.site"   // 모바일 카카오톡에서 사용하는 웹 링크 URL
                   , webUrl:"http://lolpt.site" // PC버전 카카오톡에서 사용하는 웹 링크 URL
                 }
             }
         ]
     });
}

/*naver*/
function naver(){
	window.open('http://share.naver.com/web/shareView.nhn?url='+encodeURIComponent('http://lolpt.site')+'&title='+encodeURIComponent('롤 포지션 테스트'));
}


/*Ad*/
function Ad(){
	(function(cl,i,c,k,m,o,n){m=cl.location.protocol+c;o=cl.referrer;m+='&mon_rf='+encodeURIComponent(o);
	n='<'+i+' type="text/javascript" src="'+m+'"></'+i+'>';cl.writeln(n);
	})(document,'script','//tab2.clickmon.co.kr/pop/wp_ad_300_up_js.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1070653%7C%5E%7CAdver_M_1046207');
	
	if (/android|webos|iphone|ipad|ipod|blackberry|windows phone/i.test(navigator.userAgent))
	{(function(){document.writeln('<iframe width="320" height="100" allowtransparency="true" src="https://mtab.clickmon.co.kr/pop/wp_m_320_100.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1070653%7C%5E%7CAdver_M_1046207&mon_rf=REFERRER_URL" frameborder="0" scrolling="no"></iframe>');})();}
	else{(function(){document.writeln('<iframe width="728" height="90" allowtransparency="true" src="https://tab2.clickmon.co.kr/pop/wp_ad_728.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1070653%7C%5E%7CAdver_M_1046207&mon_rf=REFERRER_URL" frameborder="0" scrolling="no"></iframe>');})();}
}

function Ad2(){
	(function(cl,i,c,k,m,o,n){m=cl.location.protocol+c;o=cl.referrer;m+='&mon_rf='+encodeURIComponent(o);
	n='<'+i+' type="text/javascript" src="'+m+'"></'+i+'>';cl.writeln(n);
	})(document,'script','//mtab.clickmon.co.kr/pop/wp_m_pop.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1070653%7C%5E%7CAdver_M_1046207&iveiw=no');
	
	(function(cl,i,c,k,m,o,n){m=cl.location.protocol+c;o=cl.referrer;m+='&mon_rf='+encodeURIComponent(o);
	n='<'+i+' type="text/javascript" src="'+m+'"></'+i+'>';cl.writeln(n);
	})(document,'script','//tab2.clickmon.co.kr/pop/wp_ad_300_up_js.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1070653%7C%5E%7CAdver_M_1046207');
	
	if (/android|webos|iphone|ipad|ipod|blackberry|windows phone/i.test(navigator.userAgent))
	{(function(){document.writeln('<iframe width="320" height="100" allowtransparency="true" src="https://mtab.clickmon.co.kr/pop/wp_m_320_100.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1070653%7C%5E%7CAdver_M_1046207&mon_rf=REFERRER_URL" frameborder="0" scrolling="no"></iframe>');})();}
	else{(function(){document.writeln('<iframe width="728" height="90" allowtransparency="true" src="https://tab2.clickmon.co.kr/pop/wp_ad_728.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1070653%7C%5E%7CAdver_M_1046207&mon_rf=REFERRER_URL" frameborder="0" scrolling="no"></iframe>');})();}
}

/*공지 닫기*/
function cancel(){
	document.getElementById("notice_box").style.display = 'none';
}

/*검사시작*/
function start(){
	location.href = "test1.html"
}

/*다음 페이지로 넘어갈지 체크*/
function nextpage() {
	var ans1 = [];
	var go = true; //submit여부를 결정하는 변수
	for(var i = 1; i <= 10; i++) {
		var check = document.getElementsByName('q'+i);
		var temp = false;
		for(var j = 0; j < check.length; j++){
			if(check[j].checked == true){
				temp = true; //문항 응답여부를 결정하는 변수
				ans1.push(check[j].value);
			}
		}
		if(temp == false){ //문항에 응답하지 않았을 경우
			alert(i+'번째 문항에 응답해주세요');
			go = false;
			break;
		}
	}
	if(go==true){
		sessionStorage.setItem('ans1', ans1);
		location.href = "test2.html"
	}
}



/*다음 페이지로 넘어갈지 체크*/
function resultpage() {
	var ans2 = [];
	var go = true; //submit여부를 결정하는 변수
	for(var i = 11; i <= 20; i++) {
		var check = document.getElementsByName('q'+i);
		var temp = false;
		for(var j = 0; j < check.length; j++){
			if(check[j].checked == true){
				temp = true; //문항 응답여부를 결정하는 변수
				ans2.push(check[j].value);
			}
		}
		if(temp == false){ //문항에 응답하지 않았을 경우
			alert(i+'번째 문항에 응답해주세요');
			go = false;
			break;
		}
	}
	if(go==true){
		sessionStorage.setItem('ans2', ans2);
		location.href = "result.html"
	}
}

function calc(){
	var ans1 = sessionStorage.getItem('ans1');
	var ans2 = sessionStorage.getItem('ans2');
	var ans = (ans1+','+ans2).split(',');
	
	var a = 0;
	var b = 0;
	var c = 0;
	var d = 0;
	var e = 0;
	
	for(var i = 0; i < 20; i++){
		switch (ans[i]) {
		case 'a':
			a+=1;
			break;
		case 'b':
			b+=1;
			break;
		case 'c':
			c+=1;
			break;
		case 'd':
			d+=1;
			break;
		default:
			e+=1
			break;
		}
	}
	
	var eng = 'img/top.png';
	var result = '탑';
	var message = '고독을 견딜 준비가 되셨나요?';
	
	var temp = a;
	if(temp >= 7) {
		message = "망나니가 되지 않도록 조심하세요!";
	}
	if(temp >= 10) {
		message = "정글 탓 작작 좀 하세요;";
	}
	
	if(temp < b) {
		temp = b;
		eng = "img/jungle.png";
		result = "정글";
		message = "어디든지 부르면 달려갈 준비가 되셨군요?";
		if(temp >= 7) {
			message = "오브젝트 좀 챙기세요^^";
		}
		if(temp >= 10) {
			message = "롤은 메이플이 아닙니다^^";
		}
	}
	if(temp < c) {
		temp = c;
		eng = "img/mid.png";
		result = "미드";
		message = "야스오는 추천드리지 않습니다";
		if(temp >= 7) {
			message = "블루 안 준다고 던지시면 안 돼요~";
		}
		if(temp >= 10) {
			message = "당신이 세상의 중심이라고 생각하시면 안 됩니다";
		}
	}
	if(temp < d) {
		temp = d;
		eng = "img/ad.png";
		result = "원딜";
		message = "서포터와 호흡을 맞춰 게임을 승리로 이끌어보세요!";
		if(temp >= 7) {
			message = "핑크와드 정도는 서포터한테 양보할 수 있지 않나요?";
		}
		if(temp >= 10) {
			message = "그만 좀 들이대세요";
		}
	}
	if(temp < e) {
		temp = e;
		eng = "img/support.png";
		result = "서포터";
		message = "사랑으로 원딜을 보살펴주세요!";
		if(temp >= 7) {
			message = "당신은 도구임을 잊지 마세요";
		}
		if(temp >= 10) {
			message = "cs 취식은 범죄에 해당합니다";
		}
	}
	
	setPage(a,b,c,d,e,eng,result,message);
}

function setPage(a,b,c,d,e,eng,result,message){
	var html = document.getElementById('result');
	var tag = '';
	
	tag += '<div class = "sns">';
	tag += '<img src = "img/facebook.png" onclick="facebook()"/>';
	tag += '<img src = "img/kakao.png" onclick="kakao()"/>';
	tag += '<img src = "img/naver.png" onclick="naver()"/>';
	tag += '</div><br>';
	tag += '<img src="'+eng+'"><br>';
	tag += '<span id="positon">'+result+'</span> <br><br>';
	tag += '<span id="positon_text">'+message+'</span> <br><br>';
	graph(a, b, c, d, e);
	tag += '<div id="graph"></div><br>';
	tag += '<span id="graph_text">[포지션별 나의 성향]</span> <br>';
	tag += '<button id="btn_mainpage" type = "button" onclick="mainpage()">메인 페이지</button><br><br>';
	tag += '<script>Ad2();</script><br>';
	
	html.innerHTML = tag;
}

/*도메인 넣을것*/
function mainpage() {
	location.href='index.html';
}

/*그래프 스크립트*/
function graph(a, b, c, d, e) {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['LPT', 'Positon'],
        ['미드', c],
        ['원딜', d],
        ['정글', b],
        ['서포터', e],
        ['탑', a]
      ]);
      
    var options = {
    	chartArea:{
    		    left:10,
    		    right:10,
    		    bottom:10,
    		    top:10
    	},
    	legend: 'none',
    	pieSliceText: 'label',
    	pieStartAngle: 100,
    };

      var chart = new google.visualization.PieChart(document.getElementById('graph'));
      chart.draw(data, options);
    }
}