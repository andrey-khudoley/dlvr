function break_lessons() {
	var lestext = $('.lesson-list .title');
	if (lestext.length > 0) {
		for (let i = 0; i < lestext.length; i++) {
			var zh = lestext[i].innerHTML;	
			zh = zh.split('- ');
			if (zh.length == 1) {
				lestext[i].innerHTML = '<span class="t-one">'+zh[0]+'</span>';
			} else {
				lestext[i].innerHTML = '<span class="t-one">'+zh[0]+'</span><span class="t-second">'+zh[1]+'</span>';
			}
		}
	}
}

function break_modules() {	
	var lestext = $('.stream-table .stream-title');
	if (lestext.length > 0) {
		for (let i = 0; i < lestext.length; i++) {
			var zh = lestext[i].innerHTML;	
			zh = zh.split('. ');
			if (zh.length == 1) {
				lestext[i].innerHTML = '<span class="t-one">'+zh[0]+'</span>';
			} else {
				lestext[i].innerHTML = '<span class="t-one">'+zh[0]+'. </span><span class="t-second">'+zh[1]+'</span>';
			}
		}
	}
}

function move_title() {
	$('.stream-table tr a').each((i,e)=>{ 
	  $(e).find('.stream-title').append($(e).find('div'));
	});
}

function add_image_tr() {
$('.stream-table tr').each((i,e)=>{ 
    getTrainingImg($(e).attr('data-training-id'), $(e).find('.stream-title').text(), (img)=>{
      if(img) {
        $(e).find('.stream-title')
        .before('<div class="stream-img"></div>')
        .parent().find('.stream-img').append('<img src="'+img+'">');
      }
    }); 
  });
}

function getTrainingImg(id, title, callback) {
  $.getJSON('/c/sa/search', {searchStr: title}, (j)=> {
    if(j.success === true && typeof j.data.blocks !== "undefined") {
      $.each(j.data.blocks, (i, bl)=> {
        if(typeof bl.id !== "undefined" && bl.id.indexOf(id) > -1) {
          callback(bl.logo.image);
          return false;
        }
      });
    } else callback(false);
  });
}