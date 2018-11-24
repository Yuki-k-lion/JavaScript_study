myPlayer.currentTime();



var myOptions = {
		"nativeControlsForTouch": false,
					controls: false,
				autoplay: false,
		width: "100%",
		height: "600",
		language: "ja",
		poster: "/img/transparent.png",
		logo: { enabled: false }
}

var myPlayer;

myPlayer = amp("azuremediaplayer", myOptions ,
		function() {
						this.addEventListener("play", function() {
								$("#btnStop").show();
				$("#btnStart").hide();
				$("#btnreStart").addClass('btn-green');
				$("#btn15sBack").addClass('btn-green');
				$("#btnfullscreen").addClass('btn-green');
				$("#btnresolutionselection-low").prop("disabled", false);
				$("#btnresolutionselection-middle").prop("disabled", false);
				$("#btnresolutionselection-high").prop("disabled", false);
				$("#btnresolutionselection-auto").prop("disabled", false);
				setTimeout(postLog(),100);
			})

			this.addEventListener("timeupdate", function() {
				var lengthOfSource = myPlayer.duration();
				$("#playTime").text(toHms(lengthOfSource - myPlayer.currentTime())  + "/" + toHms(lengthOfSource));
				$(".download_bitrate").empty().replaceWith($(".download_bitrate").text(Math.round(myPlayer.currentDownloadBitrate() / 1024 / 1024 * 100) / 100));
			})

			this.addEventListener("pause", function() {
								$("#btnStop").hide();
				$("#btnStart").show();
				$("#btnreStart").removeClass('btn-green');
				$("#btn15sBack").removeClass('btn-green');
				$("#btnfullscreen").removeClass('btn-green');
				$("#btnresolutionselection-low").prop("disabled", true);
				$("#btnresolutionselection-middle").prop("disabled", true);
				$("#btnresolutionselection-high").prop("disabled", true);
				$("#btnresolutionselection-auto").prop("disabled", true);
				postLog();
				setTimeout(postLog(),2000); 			})
			this.addEventListener("ended", function() {
								$("#btnCompletion").prop("disabled", false);
				setTimeout(postLog(),100);
			})
		}
);

$(function(){
		var paused_beacon = function() {
				if(myPlayer.paused()) {	postLog(); }

				var rand_play = 60000 +Math.round(Math.random() * 1680000);

				setTimeout(function () { paused_beacon() }, rand_play);
	}
	paused_beacon();

	var play_beacon = function() {
				if(!myPlayer.paused()) { postLog(); }

				var rand_play = 5000 +Math.round(Math.random() * 20000);

				setTimeout(function () { play_beacon() }, rand_play);
	}
	play_beacon();

		$(window).on("beforeunload", function() {
		postLog();
	});

});

var beacon_status = 1;
var beacon_pre_send_time = jQuery.now();

function postLog(){
	var between_post = jQuery.now() - beacon_pre_send_time;
		if((beacon_status == 1) && between_post >= 1000) {

		beacon_pre_send_time = jQuery.now();
		var isPaused = myPlayer.paused();
		var postStatus = '';

				if (isPaused) {
			postStatus = 'paused';
		} else {
			postStatus = 'playing';
		}

				$.ajax({
			url: '/douga/insertVideoViewLogAjax/33/' + postStatus,
			type: 'POST',
			data: {
				'open_datetime': $('input[name="data[Videos_View][open_datetime]"]').val(),
				'status': postStatus,
				'seekCurrentTime': myPlayer.currentTime()
			},
			success: function (j_response) {
								var response = $.parseJSON(j_response);
				if (response.status == 0) {
					beacon_status = 0;
										var alert_message = '別画面で動画が開かれたか、セッションが切れました。\n再生・閲覧報告状況がサーバーに送られなくなりますので、\n画面を更新するか、再度開き直してください。';
					window.alert(alert_message);
					$('#btnCompletion').before('<p class="v_b_container"><strong id="video_log_alert" class="text_alert">'+alert_message+'</strong></p>');
				}

			}
		});
	}
}


$("#btnStop").click(function(){
	myPlayer.pause();
	setTimeout(postLog(),100);
});

$("#btnStart").click(function(){
	myPlayer.play();
	setTimeout(postLog(),100);
});
$(".btnClose").click(function(){
	postLog();	window.close();
});

$("#btnreStart").click(function(){
	setTimeout(postLog(),100);
	myPlayer.currentTime(0);
});

$("#btn15sBack").click(function(){
	setTimeout(postLog(),100);
	var timenow = myPlayer.currentTime();
	myPlayer.currentTime(timenow - 15);
});

$("#btnfullscreen").click(function(){
	setTimeout(postLog(),100);
	myPlayer.enterFullscreen();
});

$("#btnresolutionselection-low").click(function(){
	setTimeout(postLog(),100);
	var stream = myPlayer.currentVideoStreamList().streams ? myPlayer.currentVideoStreamList().streams[0] : undefined;
	stream.selectTrackByIndex(0);
});

$("#btnresolutionselection-middle").click(function(){
	setTimeout(postLog(),100);
	var stream = myPlayer.currentVideoStreamList().streams ? myPlayer.currentVideoStreamList().streams[0] : undefined;
	stream.selectTrackByIndex(4);
});

$("#btnresolutionselection-high").click(function(){
	setTimeout(postLog(),100);
	var stream = myPlayer.currentVideoStreamList().streams ? myPlayer.currentVideoStreamList().streams[0] : undefined;
	stream.selectTrackByIndex(7);
});

$("#btnresolutionselection-auto").click(function(){
	setTimeout(postLog(),100);
	var stream = myPlayer.currentVideoStreamList().streams ? myPlayer.currentVideoStreamList().streams[0] : undefined;
	stream.selectTrackByIndex(-1);
});

//一時また確定前にボタンを非活性（ダブルクリック防止のため）
$('form').submit(function() {
	$('#btnCompletion').prop('disabled', true);
});

var ua = navigator.userAgent;
		myPlayer.src([
	    	      {
	    	         "src": "//mitemopaidamp001.streaming.mediaservices.windows.net/c4ec0fad-4d57-456f-b622-de8cba8281bb/mitemo-studio131.ism/manifest",
	    	         "protectionInfo": [
	    	               {
	    	                 "type": "AES",
	    	                 "authenticationToken": "Bearer=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cm46bWljcm9zb2Z0OmF6dXJlOm1lZGlhc2VydmljZXM6Y29udGVudGtleWlkZW50aWZpZXIiOiJjNjM3MWI3ZC00YmIzLTRlMzYtOTNlYi04YWE1ZTc0NDUzOTkiLCJpc3MiOiJodHRwczpcL1wvc3RzLmNvbnRvc28uY29tIiwiYXVkIjoidXJuOmNvbnRvc28iLCJleHAiOjE1NDMwNzYwODAsIm5iZiI6MTU0MzAzMjU4MH0.wQn4VgpAmrPv9nqSEItQ53r9rdHcbKkaRByQYxZIR6s"
	    	                }
	    	                      ]
	    	       }
	    	]);
	function toHms(t) {
	var hms = "";
	var h = t / 3600 | 0;
	var m = t % 3600 / 60 | 0;
	var s = Math.ceil(t % 60);
	if (h != 0) {
		hms = h + "時間" + padZero(m) + "分" + padZero(s) + "秒";
	} else if (m != 0) {
		hms = m + "分" + padZero(s) + "秒";
	} else {
		hms = s + "秒";
	}

	return hms;

	function padZero(v) {
		if (v < 10) {
			return "0" + v;
		} else {
			return v;
		}
	}
}
