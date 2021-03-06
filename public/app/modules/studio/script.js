
define(function(){
	var script;
	$('#script').on('submit', self.submitScript);

	var writer = {
		function  submitScript(){
			var value = $('#content').val().split('[');
			value.shift();
			script = {
				fragments : value
			};
			$.each(script.fragments, function(index, value){
				if(value != ''){
					value = value.split(']');
					script.fragments[index] = {
						annotation : value[0],
						lines : [],
					};
					value = value[1];
					value = value.split('\n');
					$.each(value, function(index2, value){
						if(value != ''){
							value = value.split('(');
							if(value.length > 1){
								value = value[1].split(')');
								value = {
									action : value[0]
								};
							} else {
								value = value[0].split(':');
								value = {
									chara : value[0],
									dialog : value[1]
								};
							}
							script.fragments[index].lines.push(value);
						}
					});
				}
			});
			script.sid = sessionStorage.sid;
			$.post('/submitScript', script, function(){console.log('ok')});
			return false;
		}
	};
	var self = writer;
	return writer;
});
