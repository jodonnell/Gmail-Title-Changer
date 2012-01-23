window.setInterval("changeTitle();", 5000);
function changeTitle() {
    var inbox_title = document.title.match(/Inbox \((\d+)\)/);
    if (inbox_title) {
	document.title = 'Gmail - ' + inbox_title[1];
    }
    else if (document.title.match(/Inbox/)){
	document.title = 'Gmail - 0';
    }
}

