
define(function(require){
	var Timestamp = require('model/timestamp');
	var Clip = require('model/clip');
	// var carrousel = require('studio/carrousel');

	function create() {
	}
	function del(){
	}
	function duplicate(dest){
	}
	function join(to){
	}
	function load(ts){	
		var curr = {
			timestamp: new Timestamp(ts)
		};
		self.clips.push(curr);
	}
	function newClip(){
		var clips = this.clips;
		var curr = clips.length;
		clips[curr] = new Clip();
		clips[curr].create;
		console.log(this);
	}
	function preview(){
	}
	function save(){
	}
	function split(point){
	}

	function Scene(){
		this.clips = [];
		this.start;
		this.end;
		this.index;
		this.reference;


		/* Constructor */
	}
	Scene.prototype = {
		create: create,
		del: del,
		duplicate: duplicate,
		join: join,
		load: load,
		newClip: newClip,
		preview: preview,
		save: save,
		split: split,
	};
	var self = Scene;

	return Scene;

})