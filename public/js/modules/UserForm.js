
function initDialog(){
	$('#newUser').on('submit', submitForm);
}

function submitForm(){
	$.post('/submitUser', $("#newUser").serialize(), function(data){
		$('body').append(data);
		Navigation.login();
	})
	return false;
}