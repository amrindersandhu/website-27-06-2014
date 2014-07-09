var fetchLatestURL = '/app/latest';
	$(document).ready(function(){
		var selSector = $('#sector option:selected').val();
		var selMonth = $('#month option:selected').val();
		// To fetch sectors and months
		$.ajax({
			  url: fetchLatestURL,
			  type: "POST",
			  dataType: "json",
			  data: "a=sectors&t="+score_type+"&i="+selSector+"&m="+selMonth,
			  cache: false,
			  success: function(json) {
				  var sectorList = json.sector;
				  var monthList =json.month;
				  var sectorMenu = $('#sector');
				  var monthMenu = $('#month');
				  sectorMenu.empty();
				  monthMenu.empty();
 				  $.each(sectorList, function() {
 					 if (this.k == selSector) {
 						sectorMenu.append('<option selected value="'+this.k+'">'+this.t+'</option>');
 					 } else {
 						sectorMenu.append('<option value="'+this.k+'">'+this.t+'</option>');
 					 }
				  });
				  $.each(monthList, function() {
					 if (this.k == selMonth) {
						monthMenu.append('<option selected value="'+this.k+'">'+this.t+'</option>');
 					 } else {
 						monthMenu.append('<option value="'+this.k+'">'+this.t+'</option>');
					 }
				  });
				  $('#month').change(function(e) {
						var selMonth = $(this).find('option:selected').val();
						loadPage(selSector, selMonth);
				  });
				  $('#sector').change(function(e) {
						var selSector = $(this).find('option:selected').val();
						loadPage(selSector, selMonth);
				  });
			  },
			  error: function() {}
	    });
		// To fetch latest likes/followers
		$.ajax({
			  url: fetchLatestURL,
			  type: "POST",
			  dataType: "json",
			  data: "a=likes&t="+score_type+"&i="+selSector,
			  cache: false,
			  success: function(json){
				  $.each(json, function(key, val){
					  $('#likes_'+key).append('<span>' + val.l + '</span>' + ' <i>&middot;</i> ' + '<span>' + val.n + '</span>');
					  //$('#likes_'+key).text(val.l);
					  //$('#newLikes_'+key).text(val.n);
				  });
			  },
			  error: function() {}
	    });
		
		function loadPage(selSector, selMonth) {
			var url = "/unmetric_score/"+score_type_exp+"/"+selMonth.toLowerCase()+"/"+selSector+".php";
			window.location = url;
		}
		$('#geo').change(function(e) {
			var selRegion = $(this).find('option:selected').val();
			if ('worldwide' == selRegion) {
				$('tr[id^="row_"]').css('display','');
			} else {
				$('tr[id^="row_"][id$="_'+selRegion+'"]').css('display','');
				$('tr[id^="row_"]').not('[id$="_'+selRegion+'"]').not('[id$="_worldwide"]').css('display','none');
			}		
		});
		
		// To set active style for the page's social network
		$('#header').find('a[href*="unmetric_scores"]').addClass('active');
		$('#header').find('.nav-score').find('a').removeClass('active');
		$('#likes_hdr').empty();
		if ('FB' == score_type) {
			$('#likes_hdr').append('<span>Total Likes</span> <i>&middot;</i> <span>This Week</span>');
			$('.nav-score-fb').addClass('active');
		} else if ('TWT' == score_type) {
			$('#likes_hdr').append('<span>Total Followers</span> <i>&middot;</i> <span>This Week</span>');
			$('.nav-score-tw').addClass('active');
		} else if ('YT' == score_type) {
			$('#likes_hdr').append('<span>Total Views</span> <i>&middot;</i> <span>This Week</span>');
			$('.nav-score-yt').addClass('active');
		} else if ('PT' == score_type) {
			$('#likes_hdr').append('<span>Total Followers</span> <i>&middot;</i> <span>This Week</span>');
			$('.nav-score-pt').addClass('active');
		} else if ('LIN' == score_type) {
			$('#likes_hdr').append('<span>Total Followers</span> <i>&middot;</i> <span>This Week</span>');
			$('.nav-score-lin').addClass('active');
		} else if ('INS' == score_type) {
			$('#likes_hdr').append('<span>Total Followers</span> <i>&middot;</i> <span>This Week</span>');
			$('.nav-score-ins').addClass('active');
		}
		
	});