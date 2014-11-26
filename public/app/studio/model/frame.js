/* global define */
'use strict';

define(['util','model/camera','model/layer'], function(util, Camera, Layer){

    var parent;

    function load () {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var active = parent.activeFrame;
        if(active){
            active.uri = canvas.toDataURL();
        }
        canvas.width = canvas.width;
        if(this.uri){
            var img = new Image();
            img.onload = function(){
              ctx.drawImage(img,0,0);
            };
            img.src = this.uri;
        }
        parent.activeFrame = this;
        console.log(fs);
        return true;
    }
    function setParent (clip) {
        parent = clip;
    }

    function FrameClass(index, base){
            this.bound = []; /* frame extension */
            this.camera;
            this.layers = [];
            this.reference;
            this.timestamp;
    }

    FrameClass.prototype = {
        create: function(){
            return this;
        },
        delete: function(){
        },
        duplicate: function(){
        },
        load: load,
        move: function(){
        },
        new: function(){
        },
        parent: parent,
        save: function(){
        },
        setParent: setParent
    };

    return FrameClass;
})