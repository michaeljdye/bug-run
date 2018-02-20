"use strict";!function(){var e={},n=[];function t(t){if(e[t])return e[t];var i=new Image;i.onload=function(){e[t]=i,a()&&n.forEach(function(e){e()})},e[t]=!1,i.src=t}function a(){var n=!0;for(var t in e)e.hasOwnProperty(t)&&!e[t]&&(n=!1);return n}window.Resources={load:function(e){e instanceof Array?e.forEach(function(e){t(e)}):t(e)},get:function(n){return e[n]},onReady:function(e){n.push(e)},isReady:a}}();var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}$("#myModal").modal("show");var Enemy=function(){function e(n,t){_classCallCheck(this,e),this.x=n,this.y=t,this.speed=Math.floor(5*Math.random()+10),this.sprite="images/enemy-bug.png"}return _createClass(e,[{key:"update",value:function(e){this.speed}},{key:"render",value:function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)}},{key:"checkCollisions",value:function(){this.x>player.x-65&&this.x<player.x+80&&this.y>=player.y-70&&this.y<player.y+65&&player.resetPlayer()}},{key:"reset",value:function(){this.x>515&&(this.x=-200)}},{key:"moveEnemy",value:function(e){var n=setInterval(function(){!0===player.winGame&&clearInterval(n),e.checkCollisions(),e.update(),e.reset(),e.x+=e.speed},75)}}]),e}(),Player=function(){function e(){_classCallCheck(this,e),this.x=200,this.y=380,this.speed=30,this.sprite,this.winGame=!1}return _createClass(e,[{key:"update",value:function(e){this.speed}},{key:"render",value:function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)}},{key:"resetPlayer",value:function(){this.x=200,this.y=420}},{key:"win",value:function(){var e=this;this.winGame=!0;var n=document.querySelector(".win-text");n.innerHTML="You Win!!!",star.y=-200,setTimeout(function(){e.resetPlayer(),startEnemies(),n.innerHTML="",star.y=-5,e.winGame=!1},3e3)}},{key:"handleInput",value:function(e){if(!0!==player.winGame)switch(this.x>star.x-70&&this.x<star.x+60&&this.y>=star.y-50&&this.y<star.y+50&&this.win(),this.update(),e){case"up":this.y>-5&&(this.y-=this.speed);break;case"down":this.y<canvas.height-175&&(this.y+=this.speed);break;case"right":this.x<canvas.width-100&&(this.x+=this.speed);break;case"left":this.x>-10&&(this.x-=this.speed)}}}]),e}(),Star=function(){function e(){_classCallCheck(this,e),this.x=205,this.y=-5,this.sprite="images/star.png"}return _createClass(e,[{key:"render",value:function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)}}]),e}(),selectGirl=document.querySelector("#girl"),selectBoy=document.querySelector("#boy"),setPlayerGirl=function(){player.sprite="images/char-cat-girl.png",$("#myModal").modal("hide"),Engine(window)},setPlayerBoy=function(){player.sprite="images/char-boy.png",$("#myModal").modal("hide"),Engine(window)};selectGirl.addEventListener("click",setPlayerGirl),selectBoy.addEventListener("click",setPlayerBoy);var player=new Player,star=new Star,enemy1=new Enemy(-10,60),enemy2=new Enemy(-10,140),enemy3=new Enemy(-10,220),enemy4=new Enemy(-500,60),enemy5=new Enemy(-500,140),enemy6=new Enemy(-500,220),allEnemies=[enemy1,enemy2,enemy3,enemy4,enemy5,enemy6],startEnemies=function(){var e=!0,n=!1,t=void 0;try{for(var a,i=allEnemies[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){var s=a.value;s.moveEnemy(s)}}catch(e){n=!0,t=e}finally{try{!e&&i.return&&i.return()}finally{if(n)throw t}}};startEnemies(),document.addEventListener("keyup",function(e){player.handleInput({37:"left",38:"up",39:"right",40:"down"}[e.keyCode])});var Engine=function(e){var n,t=e.document,a=e.window,i=t.createElement("canvas"),s=i.getContext("2d");function r(){var e,t=Date.now();e=(t-n)/1e3,allEnemies.forEach(function(n){n.update(e)}),player.update(),function(){var e,n,t=["images/water-block.png","images/stone-block.png","images/stone-block.png","images/stone-block.png","images/grass-block.png","images/grass-block.png"];for(s.clearRect(0,0,i.width,i.height),e=0;e<6;e++)for(n=0;n<5;n++)s.drawImage(Resources.get(t[e]),101*n,83*e);allEnemies.forEach(function(e){e.render()}),player.render(),star.render()}(),n=t,a.requestAnimationFrame(r)}i.width=505,i.height=606,t.body.appendChild(i),Resources.load(["images/stone-block.png","images/water-block.png","images/grass-block.png","images/enemy-bug.png","images/char-boy.png","images/char-cat-girl.png","images/star.png"]),Resources.onReady(function(){n=Date.now(),r()}),e.ctx=s,e.canvas=i};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy5qcyIsImFwcC5qcyIsImVuZ2luZS5qcyJdLCJuYW1lcyI6WyJyZXNvdXJjZUNhY2hlIiwicmVhZHlDYWxsYmFja3MiLCJfbG9hZCIsInVybCIsImltZyIsIkltYWdlIiwib25sb2FkIiwiaXNSZWFkeSIsImZvckVhY2giLCJmdW5jIiwic3JjIiwicmVhZHkiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJ3aW5kb3ciLCJSZXNvdXJjZXMiLCJsb2FkIiwidXJsT3JBcnIiLCJBcnJheSIsImdldCIsIm9uUmVhZHkiLCJwdXNoIiwiJCIsIm1vZGFsIiwiRW5lbXkiLCJ4IiwieSIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJzcGVlZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNwcml0ZSIsImR0IiwiY3R4IiwiZHJhd0ltYWdlIiwicGxheWVyIiwicmVzZXRQbGF5ZXIiLCJjaGFyIiwiZW5lbXlJbnRlcnZhbCIsInNldEludGVydmFsIiwid2luR2FtZSIsImNsZWFySW50ZXJ2YWwiLCJjaGVja0NvbGxpc2lvbnMiLCJ1cGRhdGUiLCJyZXNldCIsIlBsYXllciIsIl90aGlzIiwid2luTWVzc2FnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInN0YXIiLCJzZXRUaW1lb3V0Iiwic3RhcnRFbmVtaWVzIiwia2V5Y29kZSIsIndpbiIsImNhbnZhcyIsImhlaWdodCIsIndpZHRoIiwiU3RhciIsInNlbGVjdEdpcmwiLCJzZWxlY3RCb3kiLCJzZXRQbGF5ZXJHaXJsIiwiRW5naW5lIiwic2V0UGxheWVyQm95IiwiYWRkRXZlbnRMaXN0ZW5lciIsImVuZW15MSIsImVuZW15MiIsImVuZW15MyIsImVuZW15NCIsImVuZW15NSIsImVuZW15NiIsImFsbEVuZW1pZXMiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uIiwiX2RpZEl0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3JFcnJvciIsInVuZGVmaW5lZCIsIl9zdGVwIiwiX2l0ZXJhdG9yIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuZXh0IiwiZG9uZSIsInZhbHVlIiwibW92ZUVuZW15IiwiZXJyIiwicmV0dXJuIiwiZSIsImhhbmRsZUlucHV0IiwiMzciLCIzOCIsIjM5IiwiNDAiLCJrZXlDb2RlIiwiZ2xvYmFsIiwibGFzdFRpbWUiLCJkb2MiLCJjcmVhdGVFbGVtZW50IiwiZ2V0Q29udGV4dCIsIm1haW4iLCJub3ciLCJEYXRlIiwiZW5lbXkiLCJyb3ciLCJjb2wiLCJyb3dJbWFnZXMiLCJjbGVhclJlY3QiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiJjQU1BLFdBQ0UsSUFBSUEsS0FFQUMsS0EyQkosU0FBU0MsRUFBTUMsR0FDYixHQUFHSCxFQUFjRyxHQUtmLE9BQU9ILEVBQWNHLEdBS3JCLElBQUlDLEVBQU0sSUFBSUMsTUFDZEQsRUFBSUUsT0FBUyxXQUtYTixFQUFjRyxHQUFPQyxFQUtsQkcsS0FDRE4sRUFBZU8sUUFBUSxTQUFTQyxHQUFRQSxPQVE1Q1QsRUFBY0csSUFBTyxFQUNyQkMsRUFBSU0sSUFBTVAsRUFlZCxTQUFTSSxJQUNQLElBQUlJLEdBQVEsRUFDWixJQUFJLElBQUlDLEtBQUtaLEVBQ1JBLEVBQWNhLGVBQWVELEtBQzNCWixFQUFjWSxLQUNqQkQsR0FBUSxHQUdaLE9BQU9BLEVBYVRHLE9BQU9DLFdBQ0xDLEtBMUZGLFNBQWNDLEdBQ1RBLGFBQW9CQyxNQUtyQkQsRUFBU1QsUUFBUSxTQUFTTCxHQUN4QkQsRUFBTUMsS0FPUkQsRUFBTWUsSUE2RVJFLElBOUJGLFNBQWFoQixHQUNYLE9BQU9ILEVBQWNHLElBOEJyQmlCLFFBVkYsU0FBaUJYLEdBQ2ZSLEVBQWVvQixLQUFLWixJQVVwQkYsUUFBU0EsR0F0R2IsbVhDTEFlLEVBQUUsWUFBWUMsTUFBTSxZQUdkQyxpQkFDSixTQUFBQSxFQUFZQyxFQUFHQyxHQUFHQyxnQkFBQUMsS0FBQUosR0FDaEJJLEtBQUtILEVBQUlB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R0FDQSx5QkFDQSx5QkFDQSx5QkFDQSx5QkFDQSx5QkFDQSwwQkFhSixJQU5BeEUsRUFBSXlFLFVBQVUsRUFBRSxFQUFFbEQsRUFBT0UsTUFBTUYsRUFBT0MsUUFNakM4QyxFQUFNLEVBQUdBLEVBWEYsRUFXaUJBLElBQzNCLElBQUtDLEVBQU0sRUFBR0EsRUFYSixFQVdtQkEsSUFRM0J2RSxFQUFJQyxVQUFVckIsVUFBVUksSUFBSXdGLEVBQVVGLElBQWEsSUFBTkMsRUFBaUIsR0FBTkQsR0FlNUQvQixXQUFXbEUsUUFBUSxTQUFTZ0csR0FDMUJBLEVBQU1LLFdBR1J4RSxPQUFPd0UsU0FDUHhELEtBQUt3RCxTQTVHTEEsR0FLQVosRUFBV0ssRUFLWDdDLEVBQUlxRCxzQkFBc0JULEdBL0I1QjNDLEVBQU9FLE1BQVEsSUFDZkYsRUFBT0MsT0FBUyxJQUNoQnVDLEVBQUlhLEtBQUtDLFlBQVl0RCxHQTZJckIzQyxVQUFVQyxNQUNSLHlCQUNBLHlCQUNBLHlCQUNBLHVCQUNBLHNCQUNBLDJCQUNBLG9CQUVGRCxVQUFVSyxRQWxIVixXQUVFNkUsRUFBV00sS0FBS0QsTUFDaEJELE1BcUhGTCxFQUFPN0QsSUFBTUEsRUFDYjZELEVBQU90QyxPQUFTQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSZXNvdXJjZXMuanNcbiAqIFRoaXMgaXMgc2ltcGx5IGFuIGltYWdlIGxvYWRpbmcgdXRpbGl0eS4gSXQgZWFzZXMgdGhlIHByb2Nlc3Mgb2YgbG9hZGluZ1xuICogaW1hZ2UgZmlsZXMgc28gdGhhdCB0aGV5IGNhbiBiZSB1c2VkIHdpdGhpbiB5b3VyIGdhbWUuIEl0IGFsc28gaW5jbHVkZXNcbiAqIGEgc2ltcGxlIFwiY2FjaGluZ1wiIGxheWVyIHNvIGl0IHdpbGwgcmV1c2UgY2FjaGVkIGltYWdlcyBpZiB5b3UgYXR0ZW1wdFxuICogdG8gbG9hZCB0aGUgc2FtZSBpbWFnZSBtdWx0aXBsZSB0aW1lcy5cbiAqL1xuKGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb3VyY2VDYWNoZSA9IHt9O1xuICB2YXIgbG9hZGluZyA9IFtdO1xuICB2YXIgcmVhZHlDYWxsYmFja3MgPSBbXTtcblxuICAvKiBUaGlzIGlzIHRoZSBwdWJsaWNseSBhY2Nlc3NpYmxlIGltYWdlIGxvYWRpbmcgZnVuY3Rpb24uIEl0IGFjY2VwdHNcbiAgICAqIGFuIGFycmF5IG9mIHN0cmluZ3MgcG9pbnRpbmcgdG8gaW1hZ2UgZmlsZXMgb3IgYSBzdHJpbmcgZm9yIGEgc2luZ2xlXG4gICAgKiBpbWFnZS4gSXQgd2lsbCB0aGVuIGNhbGwgb3VyIHByaXZhdGUgaW1hZ2UgbG9hZGluZyBmdW5jdGlvbiBhY2NvcmRpbmdseS5cbiAgICAqL1xuICBmdW5jdGlvbiBsb2FkKHVybE9yQXJyKSB7XG4gICAgaWYodXJsT3JBcnIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgLyogSWYgdGhlIGRldmVsb3BlciBwYXNzZWQgaW4gYW4gYXJyYXkgb2YgaW1hZ2VzXG4gICAgICAgICogbG9vcCB0aHJvdWdoIGVhY2ggdmFsdWUgYW5kIGNhbGwgb3VyIGltYWdlXG4gICAgICAgICogbG9hZGVyIG9uIHRoYXQgaW1hZ2UgZmlsZVxuICAgICAgICAqL1xuICAgICAgdXJsT3JBcnIuZm9yRWFjaChmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgX2xvYWQodXJsKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiBUaGUgZGV2ZWxvcGVyIGRpZCBub3QgcGFzcyBhbiBhcnJheSB0byB0aGlzIGZ1bmN0aW9uLFxuICAgICAgICAqIGFzc3VtZSB0aGUgdmFsdWUgaXMgYSBzdHJpbmcgYW5kIGNhbGwgb3VyIGltYWdlIGxvYWRlclxuICAgICAgICAqIGRpcmVjdGx5LlxuICAgICAgICAqL1xuICAgICAgX2xvYWQodXJsT3JBcnIpO1xuICAgIH1cbiAgfVxuXG4gIC8qIFRoaXMgaXMgb3VyIHByaXZhdGUgaW1hZ2UgbG9hZGVyIGZ1bmN0aW9uLCBpdCBpc1xuICAgICogY2FsbGVkIGJ5IHRoZSBwdWJsaWMgaW1hZ2UgbG9hZGVyIGZ1bmN0aW9uLlxuICAgICovXG4gIGZ1bmN0aW9uIF9sb2FkKHVybCkge1xuICAgIGlmKHJlc291cmNlQ2FjaGVbdXJsXSkge1xuICAgICAgLyogSWYgdGhpcyBVUkwgaGFzIGJlZW4gcHJldmlvdXNseSBsb2FkZWQgaXQgd2lsbCBleGlzdCB3aXRoaW5cbiAgICAgICAgKiBvdXIgcmVzb3VyY2VDYWNoZSBhcnJheS4gSnVzdCByZXR1cm4gdGhhdCBpbWFnZSByYXRoZXJcbiAgICAgICAgKiByZS1sb2FkaW5nIHRoZSBpbWFnZS5cbiAgICAgICAgKi9cbiAgICAgIHJldHVybiByZXNvdXJjZUNhY2hlW3VybF07XG4gICAgfSBlbHNlIHtcbiAgICAvKiBUaGlzIFVSTCBoYXMgbm90IGJlZW4gcHJldmlvdXNseSBsb2FkZWQgYW5kIGlzIG5vdCBwcmVzZW50XG4gICAgICAqIHdpdGhpbiBvdXIgY2FjaGU7IHdlJ2xsIG5lZWQgdG8gbG9hZCB0aGlzIGltYWdlLlxuICAgICAgKi9cbiAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLyogT25jZSBvdXIgaW1hZ2UgaGFzIHByb3Blcmx5IGxvYWRlZCwgYWRkIGl0IHRvIG91ciBjYWNoZVxuICAgICAgICAgICogc28gdGhhdCB3ZSBjYW4gc2ltcGx5IHJldHVybiB0aGlzIGltYWdlIGlmIHRoZSBkZXZlbG9wZXJcbiAgICAgICAgICAqIGF0dGVtcHRzIHRvIGxvYWQgdGhpcyBmaWxlIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgKi9cbiAgICAgICAgcmVzb3VyY2VDYWNoZVt1cmxdID0gaW1nO1xuXG4gICAgICAgIC8qIE9uY2UgdGhlIGltYWdlIGlzIGFjdHVhbGx5IGxvYWRlZCBhbmQgcHJvcGVybHkgY2FjaGVkLFxuICAgICAgICAgICogY2FsbCBhbGwgb2YgdGhlIG9uUmVhZHkoKSBjYWxsYmFja3Mgd2UgaGF2ZSBkZWZpbmVkLlxuICAgICAgICAgICovXG4gICAgICAgIGlmKGlzUmVhZHkoKSkge1xuICAgICAgICAgIHJlYWR5Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oZnVuYykgeyBmdW5jKCk7IH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvKiBTZXQgdGhlIGluaXRpYWwgY2FjaGUgdmFsdWUgdG8gZmFsc2UsIHRoaXMgd2lsbCBjaGFuZ2Ugd2hlblxuICAgICAgICAqIHRoZSBpbWFnZSdzIG9ubG9hZCBldmVudCBoYW5kbGVyIGlzIGNhbGxlZC4gRmluYWxseSwgcG9pbnRcbiAgICAgICAgKiB0aGUgaW1hZ2UncyBzcmMgYXR0cmlidXRlIHRvIHRoZSBwYXNzZWQgaW4gVVJMLlxuICAgICAgICAqL1xuICAgICAgcmVzb3VyY2VDYWNoZVt1cmxdID0gZmFsc2U7XG4gICAgICBpbWcuc3JjID0gdXJsO1xuICAgIH1cbn1cblxuICAvKiBUaGlzIGlzIHVzZWQgYnkgZGV2ZWxvcGVycyB0byBncmFiIHJlZmVyZW5jZXMgdG8gaW1hZ2VzIHRoZXkga25vd1xuICAgICogaGF2ZSBiZWVuIHByZXZpb3VzbHkgbG9hZGVkLiBJZiBhbiBpbWFnZSBpcyBjYWNoZWQsIHRoaXMgZnVuY3Rpb25zXG4gICAgKiB0aGUgc2FtZSBhcyBjYWxsaW5nIGxvYWQoKSBvbiB0aGF0IFVSTC5cbiAgICAqL1xuICBmdW5jdGlvbiBnZXQodXJsKSB7XG4gICAgcmV0dXJuIHJlc291cmNlQ2FjaGVbdXJsXTtcbiAgfVxuXG4gIC8qIFRoaXMgZnVuY3Rpb24gZGV0ZXJtaW5lcyBpZiBhbGwgb2YgdGhlIGltYWdlcyB0aGF0IGhhdmUgYmVlbiByZXF1ZXN0ZWRcbiAgICAqIGZvciBsb2FkaW5nIGhhdmUgaW4gZmFjdCBiZWVuIHByb3Blcmx5IGxvYWRlZC5cbiAgICAqL1xuICBmdW5jdGlvbiBpc1JlYWR5KCkge1xuICAgIHZhciByZWFkeSA9IHRydWU7XG4gICAgZm9yKHZhciBrIGluIHJlc291cmNlQ2FjaGUpIHtcbiAgICAgIGlmKHJlc291cmNlQ2FjaGUuaGFzT3duUHJvcGVydHkoaykgJiZcbiAgICAgICAgICAhcmVzb3VyY2VDYWNoZVtrXSkge1xuICAgICAgICByZWFkeSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVhZHk7XG4gIH1cblxuICAvKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYWRkIGEgZnVuY3Rpb24gdG8gdGhlIGNhbGxiYWNrIHN0YWNrIHRoYXQgaXMgY2FsbGVkXG4gICAgKiB3aGVuIGFsbCByZXF1ZXN0ZWQgaW1hZ2VzIGFyZSBwcm9wZXJseSBsb2FkZWQuXG4gICAgKi9cbiAgZnVuY3Rpb24gb25SZWFkeShmdW5jKSB7XG4gICAgcmVhZHlDYWxsYmFja3MucHVzaChmdW5jKTtcbiAgfVxuXG4gIC8qIFRoaXMgb2JqZWN0IGRlZmluZXMgdGhlIHB1YmxpY2x5IGFjY2Vzc2libGUgZnVuY3Rpb25zIGF2YWlsYWJsZSB0b1xuICAgICogZGV2ZWxvcGVycyBieSBjcmVhdGluZyBhIGdsb2JhbCBSZXNvdXJjZXMgb2JqZWN0LlxuICAgICovXG4gIHdpbmRvdy5SZXNvdXJjZXMgPSB7XG4gICAgbG9hZDogbG9hZCxcbiAgICBnZXQ6IGdldCxcbiAgICBvblJlYWR5OiBvblJlYWR5LFxuICAgIGlzUmVhZHk6IGlzUmVhZHlcbiAgfTtcbn0pKCk7XG4iLCIvLyBPcGVuIGNoYXJhY3RlciBzZWxlY3QgbW9kYWwgb24gbG9hZFxuJCgnI215TW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuXG4vLyBFbmVtaWVzIG91ciBwbGF5ZXIgbXVzdCBhdm9pZFxuY2xhc3MgRW5lbXkge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuc3BlZWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTUgLSAxMCkgKyAxMCk7IC8vIEdpdmUgZWFjaCBlbmVteSBhIHJhbmRvbSBzcGVlZFxuICAgIHRoaXMuc3ByaXRlID0gJ2ltYWdlcy9lbmVteS1idWcucG5nJztcbiAgfVxuXG4gIC8vIE11bHRpcGx5IGFueSBtb3ZlbWVudCBieSB0aGUgZHQgcGFyYW1ldGVyIHRvIGVuc3VyZSB0aGUgZ2FtZSBydW5zIGF0IHRoZSBzYW1lIHNwZWVkIGZvclxuICAvLyBhbGwgY29tcHV0ZXJzLlxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLnNwZWVkICogZHQ7XG4gIH1cblxuICAvLyBEcmF3IGVuZW15IG9uIHRoZSBzY3JlZW5cbiAgcmVuZGVyKCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoUmVzb3VyY2VzLmdldCh0aGlzLnNwcml0ZSksIHRoaXMueCwgdGhpcy55KTtcbiAgfVxuXG4gIC8vIENoZWNrIGZvciBlbmVteSBwbGF5ZXIgY29sbGlzaW9ucyBhbmQgcmVzdGFydCBwbGF5ZXIgb24gY29sbGlzaW9uXG4gIGNoZWNrQ29sbGlzaW9ucygpIHtcbiAgICBpZiAodGhpcy54ID4gKHBsYXllci54IC0gNjUpICYmIHRoaXMueCA8IHBsYXllci54ICsgODAgJiYgdGhpcy55ID49IChwbGF5ZXIueSAtIDcwKSAmJiB0aGlzLnkgPCBwbGF5ZXIueSArIDY1KSB7XG4gICAgICBwbGF5ZXIucmVzZXRQbGF5ZXIoKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiBlbmVteSBvZmYgc2NyZWVuIHJlc2V0IHBvc2l0aW9uXG4gIHJlc2V0KCkge1xuICAgIGlmICh0aGlzLnggPiA1MTUpIHtcbiAgICAgIHRoaXMueCA9IC0yMDA7fVxuICB9XG5cbiAgLy8gTW92ZSBlbmVteSBhY3Jvc3Mgc2NyZWVuXG4gIG1vdmVFbmVteShjaGFyKSB7XG4gICAgY29uc3QgZW5lbXlJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIC8vIFN0b3AgZW5lbWllcyBvbiBnYW1lIHdpblxuICAgICAgaWYgKHBsYXllci53aW5HYW1lID09PSB0cnVlKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZW5lbXlJbnRlcnZhbCk7XG4gICAgICB9XG4gICAgICBjaGFyLmNoZWNrQ29sbGlzaW9ucygpO1xuICAgICAgY2hhci51cGRhdGUoKTtcbiAgICAgIC8vIFJlc2V0IGVuZW15IGlmIGl0IHJlYWNoZXMgZW5kIG9mIHNjcmVlblxuICAgICAgY2hhci5yZXNldCgpO1xuICAgICAgY2hhci54ICs9IGNoYXIuc3BlZWQ7XG4gICAgfSwgNzUpfVxufSAvLyBFbmQgb2YgRW5lbXkgY2xhc3NcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy54ID0gMjAwO1xuICAgIHRoaXMueSA9IDM4MDtcbiAgICB0aGlzLnNwZWVkID0gMzA7XG4gICAgdGhpcy5zcHJpdGU7XG4gICAgdGhpcy53aW5HYW1lID0gZmFsc2U7XG4gIH1cblxuICAvLyBNdWx0aXBseSBhbnkgbW92ZW1lbnQgYnkgdGhlIGR0IHBhcmFtZXRlciB0byBlbnN1cmUgdGhlIGdhbWUgcnVucyBhdCB0aGUgc2FtZSBzcGVlZCBmb3JcbiAgLy8gYWxsIGNvbXB1dGVycy5cbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy5zcGVlZCAqIGR0O1xuICB9XG5cbiAgLy8gTG9hZCBwbGF5ZXIgb24gc2NyZWVuXG4gIHJlbmRlcigpIHtcbiAgICBjdHguZHJhd0ltYWdlKFJlc291cmNlcy5nZXQodGhpcy5zcHJpdGUpLCB0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICAvLyBSZXNldCBwbGF5ZXIgdG8gc3RhcnQgcG9zaXRpb25cbiAgcmVzZXRQbGF5ZXIoKSB7XG4gICAgdGhpcy54ID0gMjAwO1xuICAgIHRoaXMueSA9IDQyMDtcbiAgfVxuXG4gIC8vIEhhbmRsZSBnYW1lIHdpblxuICB3aW4oKSB7XG4gICAgdGhpcy53aW5HYW1lID0gdHJ1ZTtcbiAgICBjb25zdCB3aW5NZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbi10ZXh0Jyk7IC8vIERpc3BsYXkgd2luIG1lc3NhZ2VcbiAgICB3aW5NZXNzYWdlLmlubmVySFRNTCA9ICdZb3UgV2luISEhJztcbiAgICAvLyBNb3ZlIHN0YXIgb2ZmIHNjcmVlblxuICAgIHN0YXIueSA9IC0yMDA7XG5cbiAgICAvLyBSZXNlbnQgZ2FtZSBhZnRlciAzIHNlY29uZHNcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc2V0UGxheWVyKCk7XG4gICAgICAgIHN0YXJ0RW5lbWllcygpO1xuICAgICAgICB3aW5NZXNzYWdlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzdGFyLnkgPSAtNTtcbiAgICAgICAgdGhpcy53aW5HYW1lID0gZmFsc2U7XG4gICAgICB9LCAzMDAwKTtcbiAgfVxuXG4gIC8vIEVuYWJsZSBwbGF5ZXIgbW92ZW1lbnQgb24ga2V5cHJlc3NcbiAgaGFuZGxlSW5wdXQoa2V5Y29kZSkge1xuICAgIC8vIFN0b3AgcGxheWVyIGlmIGdhbWUgaGFzIGJlZW4gd29uXG4gICAgaWYgKHBsYXllci53aW5HYW1lID09PSB0cnVlKSByZXR1cm47XG5cbiAgICAvLyBSdW4gd2luIG1ldGhvZCBpZiBwbGF5ZXIgcmVhY2hlcyBzdGFyXG4gICAgaWYgKHRoaXMueCA+IChzdGFyLnggLSA3MCkgJiYgdGhpcy54IDwgc3Rhci54ICsgNjAgJiYgdGhpcy55ID49IChzdGFyLnkgLSA1MCkgJiYgdGhpcy55IDwgc3Rhci55ICsgNTApIHtcbiAgICAgIHRoaXMud2luKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAvLyBDaGVjayBrZXljb2RlLiBNb3ZlIHBsYXllciB0aGUgY29ycmVjdCBkaXJlY3Rpb24uIFN0b3AgbW92ZW1lbnQgaWYgcGxheWVyIHJlYWNoZXMgZWRnZSBvZiBzY3JlZW4uXG4gICAgc3dpdGNoIChrZXljb2RlKSB7XG4gICAgY2FzZSAndXAnOlxuICAgICAgaWYgKHRoaXMueSA+IC01KSB7XG4gICAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkO31cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgaWYgKHRoaXMueSA8IGNhbnZhcy5oZWlnaHQgLSAxNzUpIHtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQ7fVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgaWYgKHRoaXMueCA8IGNhbnZhcy53aWR0aCAtIDEwMCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZDsgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICBpZiAodGhpcy54ID4gLTEwKSB7XG4gICAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkO31cbiAgICB9XG4gIH1cbn0gLy8gRW5kIG9mIFBsYXllciBjbGFzc1xuXG5jbGFzcyBTdGFyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy54ID0gMjA1O1xuICAgIHRoaXMueSA9IC01O1xuICAgIHRoaXMuc3ByaXRlID0gJ2ltYWdlcy9zdGFyLnBuZyc7XG4gIH1cblxuICAvLyBMb2FkIHN0YXIgb24gc2NyZWVuXG4gIHJlbmRlcigpIHtcbiAgICBjdHguZHJhd0ltYWdlKFJlc291cmNlcy5nZXQodGhpcy5zcHJpdGUpLCB0aGlzLngsIHRoaXMueSk7XG4gIH1cbn0gLy8gRW5kIG9mIFN0YXIgY2xhc3NcblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGxpc3RlbiBmb3IgcGxheWVyIHNlbGVjdGlvbi4gU3RhcnQgZ2FtZSBvbmNlIHBsYXllciBzZWxlY3RlZC5cbmNvbnN0IHNlbGVjdEdpcmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2lybCcpO1xuY29uc3Qgc2VsZWN0Qm95ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JveScpO1xuXG5jb25zdCBzZXRQbGF5ZXJHaXJsID0gKCkgPT4ge1xuICBwbGF5ZXIuc3ByaXRlID0gJ2ltYWdlcy9jaGFyLWNhdC1naXJsLnBuZyc7XG4gICQoJyNteU1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgRW5naW5lKHdpbmRvdyk7XG59XG5cbmNvbnN0IHNldFBsYXllckJveSA9ICgpID0+IHtcbiAgcGxheWVyLnNwcml0ZSA9ICdpbWFnZXMvY2hhci1ib3kucG5nJztcbiAgJCgnI215TW9kYWwnKS5tb2RhbCgnaGlkZScpO1xuICBFbmdpbmUod2luZG93KTtcbn1cblxuc2VsZWN0R2lybC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldFBsYXllckdpcmwpO1xuc2VsZWN0Qm95LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0UGxheWVyQm95KTtcblxuLy8gaW5zdGFudGlhdGUgYWxsIGVuZW15LCBwbGF5ZXIsIGFuZCBzdGFyIG9iamVjdHMsIGFuZCBwbGFjZSBhbGwgZW5lbWllcyBpbiBhcnJheSBjYWxsZWQgYWxsRW5lbWllc1xuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuY29uc3Qgc3RhciA9IG5ldyBTdGFyKCk7XG5jb25zdCBlbmVteTEgPSBuZXcgRW5lbXkoLTEwLCA2MCk7XG5jb25zdCBlbmVteTIgPSBuZXcgRW5lbXkoLTEwLCAxNDApO1xuY29uc3QgZW5lbXkzID0gbmV3IEVuZW15KC0xMCwgMjIwKTtcbmNvbnN0IGVuZW15NCA9IG5ldyBFbmVteSgtNTAwLCA2MCk7XG5jb25zdCBlbmVteTUgPSBuZXcgRW5lbXkoLTUwMCwgMTQwKTtcbmNvbnN0IGVuZW15NiA9IG5ldyBFbmVteSgtNTAwLCAyMjApO1xuY29uc3QgYWxsRW5lbWllcyA9IFtlbmVteTEsIGVuZW15MiwgZW5lbXkzLCBlbmVteTQsIGVuZW15NSwgZW5lbXk2XTtcblxuLy8gTW92ZSBlbmVtaWVzIGF0IHZhcnlpbmcgc3BlZWQgYWNjcm9zcyBzY3JlZW5cbmNvbnN0IHN0YXJ0RW5lbWllcyA9ICgpID0+IHtcbiAgZm9yIChsZXQgY2hhciBvZiBhbGxFbmVtaWVzKSB7XG4gICAgY2hhci5tb3ZlRW5lbXkoY2hhcik7XG4gIH1cbn07XG5zdGFydEVuZW1pZXMoKTtcblxuLy8gTGlzdGVuIGZvciBrZXkgcHJlc3NlcyBhbmQgc2VuZCB0aGUga2V5cyB0byBQbGF5ZXIuaGFuZGxlSW5wdXQoKSBtZXRob2RcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG4gIHZhciBhbGxvd2VkS2V5cyA9IHtcbiAgICAzNzogJ2xlZnQnLFxuICAgIDM4OiAndXAnLFxuICAgIDM5OiAncmlnaHQnLFxuICAgIDQwOiAnZG93bidcbiAgfTtcblxuICBwbGF5ZXIuaGFuZGxlSW5wdXQoYWxsb3dlZEtleXNbZS5rZXlDb2RlXSk7XG59KTtcbiIsIi8qIEVuZ2luZS5qc1xuICogVGhpcyBmaWxlIHByb3ZpZGVzIHRoZSBnYW1lIGxvb3AgZnVuY3Rpb25hbGl0eSAodXBkYXRlIGVudGl0aWVzIGFuZCByZW5kZXIpLFxuICogZHJhd3MgdGhlIGluaXRpYWwgZ2FtZSBib2FyZCBvbiB0aGUgc2NyZWVuLCBhbmQgdGhlbiBjYWxscyB0aGUgdXBkYXRlIGFuZFxuICogcmVuZGVyIG1ldGhvZHMgb24geW91ciBwbGF5ZXIgYW5kIGVuZW15IG9iamVjdHMgKGRlZmluZWQgaW4geW91ciBhcHAuanMpLlxuICpcbiAqIEEgZ2FtZSBlbmdpbmUgd29ya3MgYnkgZHJhd2luZyB0aGUgZW50aXJlIGdhbWUgc2NyZWVuIG92ZXIgYW5kIG92ZXIsIGtpbmQgb2ZcbiAqIGxpa2UgYSBmbGlwYm9vayB5b3UgbWF5IGhhdmUgY3JlYXRlZCBhcyBhIGtpZC4gV2hlbiB5b3VyIHBsYXllciBtb3ZlcyBhY3Jvc3NcbiAqIHRoZSBzY3JlZW4sIGl0IG1heSBsb29rIGxpa2UganVzdCB0aGF0IGltYWdlL2NoYXJhY3RlciBpcyBtb3Zpbmcgb3IgYmVpbmdcbiAqIGRyYXduIGJ1dCB0aGF0IGlzIG5vdCB0aGUgY2FzZS4gV2hhdCdzIHJlYWxseSBoYXBwZW5pbmcgaXMgdGhlIGVudGlyZSBcInNjZW5lXCJcbiAqIGlzIGJlaW5nIGRyYXduIG92ZXIgYW5kIG92ZXIsIHByZXNlbnRpbmcgdGhlIGlsbHVzaW9uIG9mIGFuaW1hdGlvbi5cbiAqXG4gKiBUaGlzIGVuZ2luZSBtYWtlcyB0aGUgY2FudmFzJyBjb250ZXh0IChjdHgpIG9iamVjdCBnbG9iYWxseSBhdmFpbGFibGUgdG8gbWFrZVxuICogd3JpdGluZyBhcHAuanMgYSBsaXR0bGUgc2ltcGxlciB0byB3b3JrIHdpdGguXG4gKi9cblxudmFyIEVuZ2luZSA9IChmdW5jdGlvbihnbG9iYWwpIHtcbiAgLyogUHJlZGVmaW5lIHRoZSB2YXJpYWJsZXMgd2UnbGwgYmUgdXNpbmcgd2l0aGluIHRoaXMgc2NvcGUsXG4gICAgICogY3JlYXRlIHRoZSBjYW52YXMgZWxlbWVudCwgZ3JhYiB0aGUgMkQgY29udGV4dCBmb3IgdGhhdCBjYW52YXNcbiAgICAgKiBzZXQgdGhlIGNhbnZhcyBlbGVtZW50cyBoZWlnaHQvd2lkdGggYW5kIGFkZCBpdCB0byB0aGUgRE9NLlxuICAgICAqL1xuICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50LFxuICAgIHdpbiA9IGdsb2JhbC53aW5kb3csXG4gICAgY2FudmFzID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLFxuICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLFxuICAgIGxhc3RUaW1lO1xuXG4gIGNhbnZhcy53aWR0aCA9IDUwNTtcbiAgY2FudmFzLmhlaWdodCA9IDYwNjtcbiAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuICAvKiBUaGlzIGZ1bmN0aW9uIHNlcnZlcyBhcyB0aGUga2lja29mZiBwb2ludCBmb3IgdGhlIGdhbWUgbG9vcCBpdHNlbGZcbiAgICAqIGFuZCBoYW5kbGVzIHByb3Blcmx5IGNhbGxpbmcgdGhlIHVwZGF0ZSBhbmQgcmVuZGVyIG1ldGhvZHMuXG4gICAgKi9cbiAgZnVuY3Rpb24gbWFpbigpIHtcbiAgICAvKiBHZXQgb3VyIHRpbWUgZGVsdGEgaW5mb3JtYXRpb24gd2hpY2ggaXMgcmVxdWlyZWQgaWYgeW91ciBnYW1lXG4gICAgICAqIHJlcXVpcmVzIHNtb290aCBhbmltYXRpb24uIEJlY2F1c2UgZXZlcnlvbmUncyBjb21wdXRlciBwcm9jZXNzZXNcbiAgICAgICogaW5zdHJ1Y3Rpb25zIGF0IGRpZmZlcmVudCBzcGVlZHMgd2UgbmVlZCBhIGNvbnN0YW50IHZhbHVlIHRoYXRcbiAgICAgICogd291bGQgYmUgdGhlIHNhbWUgZm9yIGV2ZXJ5b25lIChyZWdhcmRsZXNzIG9mIGhvdyBmYXN0IHRoZWlyXG4gICAgICAqIGNvbXB1dGVyIGlzKSAtIGh1cnJheSB0aW1lIVxuICAgICAgICAgKi9cbiAgICB2YXIgbm93ID0gRGF0ZS5ub3coKSxcbiAgICAgIGR0ID0gKG5vdyAtIGxhc3RUaW1lKSAvIDEwMDAuMDtcblxuICAgIC8qIENhbGwgb3VyIHVwZGF0ZS9yZW5kZXIgZnVuY3Rpb25zLCBwYXNzIGFsb25nIHRoZSB0aW1lIGRlbHRhIHRvXG4gICAgICAqIG91ciB1cGRhdGUgZnVuY3Rpb24gc2luY2UgaXQgbWF5IGJlIHVzZWQgZm9yIHNtb290aCBhbmltYXRpb24uXG4gICAgICAqL1xuICAgIHVwZGF0ZShkdCk7XG4gICAgcmVuZGVyKCk7XG5cbiAgICAvKiBTZXQgb3VyIGxhc3RUaW1lIHZhcmlhYmxlIHdoaWNoIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSB0aW1lIGRlbHRhXG4gICAgICAqIGZvciB0aGUgbmV4dCB0aW1lIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLlxuICAgICAgKi9cbiAgICBsYXN0VGltZSA9IG5vdztcblxuICAgIC8qIFVzZSB0aGUgYnJvd3NlcidzIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmdW5jdGlvbiB0byBjYWxsIHRoaXNcbiAgICAgICogZnVuY3Rpb24gYWdhaW4gYXMgc29vbiBhcyB0aGUgYnJvd3NlciBpcyBhYmxlIHRvIGRyYXcgYW5vdGhlciBmcmFtZS5cbiAgICAgICovXG4gICAgd2luLnJlcXVlc3RBbmltYXRpb25GcmFtZShtYWluKTtcbiAgfVxuXG4gIC8qIFRoaXMgZnVuY3Rpb24gZG9lcyBzb21lIGluaXRpYWwgc2V0dXAgdGhhdCBzaG91bGQgb25seSBvY2N1ciBvbmNlLFxuICAgICogcGFydGljdWxhcmx5IHNldHRpbmcgdGhlIGxhc3RUaW1lIHZhcmlhYmxlIHRoYXQgaXMgcmVxdWlyZWQgZm9yIHRoZVxuICAgICogZ2FtZSBsb29wLlxuICAgICovXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgcmVzZXQoKTtcbiAgICBsYXN0VGltZSA9IERhdGUubm93KCk7XG4gICAgbWFpbigpO1xufVxuXG4gIC8qIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IG1haW4gKG91ciBnYW1lIGxvb3ApIGFuZCBpdHNlbGYgY2FsbHMgYWxsXG4gICAgKiBvZiB0aGUgZnVuY3Rpb25zIHdoaWNoIG1heSBuZWVkIHRvIHVwZGF0ZSBlbnRpdHkncyBkYXRhLiBCYXNlZCBvbiBob3dcbiAgICAqIHlvdSBpbXBsZW1lbnQgeW91ciBjb2xsaXNpb24gZGV0ZWN0aW9uICh3aGVuIHR3byBlbnRpdGllcyBvY2N1cHkgdGhlXG4gICAgKiBzYW1lIHNwYWNlLCBmb3IgaW5zdGFuY2Ugd2hlbiB5b3VyIGNoYXJhY3RlciBzaG91bGQgZGllKSwgeW91IG1heSBmaW5kXG4gICAgKiB0aGUgbmVlZCB0byBhZGQgYW4gYWRkaXRpb25hbCBmdW5jdGlvbiBjYWxsIGhlcmUuIEZvciBub3csIHdlJ3ZlIGxlZnRcbiAgICAqIGl0IGNvbW1lbnRlZCBvdXQgLSB5b3UgbWF5IG9yIG1heSBub3Qgd2FudCB0byBpbXBsZW1lbnQgdGhpc1xuICAgICogZnVuY3Rpb25hbGl0eSB0aGlzIHdheSAoeW91IGNvdWxkIGp1c3QgaW1wbGVtZW50IGNvbGxpc2lvbiBkZXRlY3Rpb25cbiAgICAqIG9uIHRoZSBlbnRpdGllcyB0aGVtc2VsdmVzIHdpdGhpbiB5b3VyIGFwcC5qcyBmaWxlKS5cbiAgICAqL1xuICBmdW5jdGlvbiB1cGRhdGUoZHQsIGVuZW15KSB7XG4gICAgdXBkYXRlRW50aXRpZXMoZHQpO1xuICB9XG5cbiAgLyogVGhpcyBpcyBjYWxsZWQgYnkgdGhlIHVwZGF0ZSBmdW5jdGlvbiBhbmQgbG9vcHMgdGhyb3VnaCBhbGwgb2YgdGhlXG4gICAgKiBvYmplY3RzIHdpdGhpbiB5b3VyIGFsbEVuZW1pZXMgYXJyYXkgYXMgZGVmaW5lZCBpbiBhcHAuanMgYW5kIGNhbGxzXG4gICAgKiB0aGVpciB1cGRhdGUoKSBtZXRob2RzLiBJdCB3aWxsIHRoZW4gY2FsbCB0aGUgdXBkYXRlIGZ1bmN0aW9uIGZvciB5b3VyXG4gICAgKiBwbGF5ZXIgb2JqZWN0LiBUaGVzZSB1cGRhdGUgbWV0aG9kcyBzaG91bGQgZm9jdXMgcHVyZWx5IG9uIHVwZGF0aW5nXG4gICAgKiB0aGUgZGF0YS9wcm9wZXJ0aWVzIHJlbGF0ZWQgdG8gdGhlIG9iamVjdC4gRG8geW91ciBkcmF3aW5nIGluIHlvdXJcbiAgICAqIHJlbmRlciBtZXRob2RzLlxuICAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZUVudGl0aWVzKGR0KSB7XG4gICAgYWxsRW5lbWllcy5mb3JFYWNoKGZ1bmN0aW9uKGVuZW15KSB7XG4gICAgICBlbmVteS51cGRhdGUoZHQpO1xuICAgIH0pO1xuICAgIHBsYXllci51cGRhdGUoKTtcbiAgfVxuXG4gIC8qIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGx5IGRyYXdzIHRoZSBcImdhbWUgbGV2ZWxcIiwgaXQgd2lsbCB0aGVuIGNhbGxcbiAgICAqIHRoZSByZW5kZXJFbnRpdGllcyBmdW5jdGlvbi4gUmVtZW1iZXIsIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGV2ZXJ5XG4gICAgKiBnYW1lIHRpY2sgKG9yIGxvb3Agb2YgdGhlIGdhbWUgZW5naW5lKSBiZWNhdXNlIHRoYXQncyBob3cgZ2FtZXMgd29yayAtXG4gICAgKiB0aGV5IGFyZSBmbGlwYm9va3MgY3JlYXRpbmcgdGhlIGlsbHVzaW9uIG9mIGFuaW1hdGlvbiBidXQgaW4gcmVhbGl0eVxuICAgICogdGhleSBhcmUganVzdCBkcmF3aW5nIHRoZSBlbnRpcmUgc2NyZWVuIG92ZXIgYW5kIG92ZXIuXG4gICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIC8qIFRoaXMgYXJyYXkgaG9sZHMgdGhlIHJlbGF0aXZlIFVSTCB0byB0aGUgaW1hZ2UgdXNlZFxuICAgICAgKiBmb3IgdGhhdCBwYXJ0aWN1bGFyIHJvdyBvZiB0aGUgZ2FtZSBsZXZlbC5cbiAgICAgICovXG4gICAgdmFyIHJvd0ltYWdlcyA9IFtcbiAgICAgICAgJ2ltYWdlcy93YXRlci1ibG9jay5wbmcnLCAgIC8vIFRvcCByb3cgaXMgd2F0ZXJcbiAgICAgICAgJ2ltYWdlcy9zdG9uZS1ibG9jay5wbmcnLCAgIC8vIFJvdyAxIG9mIDMgb2Ygc3RvbmVcbiAgICAgICAgJ2ltYWdlcy9zdG9uZS1ibG9jay5wbmcnLCAgIC8vIFJvdyAyIG9mIDMgb2Ygc3RvbmVcbiAgICAgICAgJ2ltYWdlcy9zdG9uZS1ibG9jay5wbmcnLCAgIC8vIFJvdyAzIG9mIDMgb2Ygc3RvbmVcbiAgICAgICAgJ2ltYWdlcy9ncmFzcy1ibG9jay5wbmcnLCAgIC8vIFJvdyAxIG9mIDIgb2YgZ3Jhc3NcbiAgICAgICAgJ2ltYWdlcy9ncmFzcy1ibG9jay5wbmcnICAgIC8vIFJvdyAyIG9mIDIgb2YgZ3Jhc3NcbiAgICAgIF0sXG4gICAgICBudW1Sb3dzID0gNixcbiAgICAgIG51bUNvbHMgPSA1LFxuICAgICAgcm93LCBjb2w7XG5cbiAgICAvLyBCZWZvcmUgZHJhd2luZywgY2xlYXIgZXhpc3RpbmcgY2FudmFzXG4gICAgY3R4LmNsZWFyUmVjdCgwLDAsY2FudmFzLndpZHRoLGNhbnZhcy5oZWlnaHQpXG5cbiAgICAvKiBMb29wIHRocm91Z2ggdGhlIG51bWJlciBvZiByb3dzIGFuZCBjb2x1bW5zIHdlJ3ZlIGRlZmluZWQgYWJvdmVcbiAgICAgICogYW5kLCB1c2luZyB0aGUgcm93SW1hZ2VzIGFycmF5LCBkcmF3IHRoZSBjb3JyZWN0IGltYWdlIGZvciB0aGF0XG4gICAgICAqIHBvcnRpb24gb2YgdGhlIFwiZ3JpZFwiXG4gICAgICAqL1xuICAgIGZvciAocm93ID0gMDsgcm93IDwgbnVtUm93czsgcm93KyspIHtcbiAgICAgIGZvciAoY29sID0gMDsgY29sIDwgbnVtQ29sczsgY29sKyspIHtcbiAgICAgICAgLyogVGhlIGRyYXdJbWFnZSBmdW5jdGlvbiBvZiB0aGUgY2FudmFzJyBjb250ZXh0IGVsZW1lbnRcbiAgICAgICAgICAqIHJlcXVpcmVzIDMgcGFyYW1ldGVyczogdGhlIGltYWdlIHRvIGRyYXcsIHRoZSB4IGNvb3JkaW5hdGVcbiAgICAgICAgICAqIHRvIHN0YXJ0IGRyYXdpbmcgYW5kIHRoZSB5IGNvb3JkaW5hdGUgdG8gc3RhcnQgZHJhd2luZy5cbiAgICAgICAgICAqIFdlJ3JlIHVzaW5nIG91ciBSZXNvdXJjZXMgaGVscGVycyB0byByZWZlciB0byBvdXIgaW1hZ2VzXG4gICAgICAgICAgKiBzbyB0aGF0IHdlIGdldCB0aGUgYmVuZWZpdHMgb2YgY2FjaGluZyB0aGVzZSBpbWFnZXMsIHNpbmNlXG4gICAgICAgICAgKiB3ZSdyZSB1c2luZyB0aGVtIG92ZXIgYW5kIG92ZXIuXG4gICAgICAgICAgKi9cbiAgICAgICAgY3R4LmRyYXdJbWFnZShSZXNvdXJjZXMuZ2V0KHJvd0ltYWdlc1tyb3ddKSwgY29sICogMTAxLCByb3cgKiA4Myk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyRW50aXRpZXMoKTtcbiAgfVxuXG4gIC8qIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGJ5IHRoZSByZW5kZXIgZnVuY3Rpb24gYW5kIGlzIGNhbGxlZCBvbiBlYWNoIGdhbWVcbiAgICAqIHRpY2suIEl0cyBwdXJwb3NlIGlzIHRvIHRoZW4gY2FsbCB0aGUgcmVuZGVyIGZ1bmN0aW9ucyB5b3UgaGF2ZSBkZWZpbmVkXG4gICAgKiBvbiB5b3VyIGVuZW15IGFuZCBwbGF5ZXIgZW50aXRpZXMgd2l0aGluIGFwcC5qc1xuICAgICovXG4gIGZ1bmN0aW9uIHJlbmRlckVudGl0aWVzKCkge1xuICAgIC8qIExvb3AgdGhyb3VnaCBhbGwgb2YgdGhlIG9iamVjdHMgd2l0aGluIHRoZSBhbGxFbmVtaWVzIGFycmF5IGFuZCBjYWxsXG4gICAgICAqIHRoZSByZW5kZXIgZnVuY3Rpb24geW91IGhhdmUgZGVmaW5lZC5cbiAgICAgICovXG4gICAgYWxsRW5lbWllcy5mb3JFYWNoKGZ1bmN0aW9uKGVuZW15KSB7XG4gICAgICBlbmVteS5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIHBsYXllci5yZW5kZXIoKTtcbiAgICBzdGFyLnJlbmRlcigpO1xuICB9XG5cbiAgLyogVGhpcyBmdW5jdGlvbiBkb2VzIG5vdGhpbmcgYnV0IGl0IGNvdWxkIGhhdmUgYmVlbiBhIGdvb2QgcGxhY2UgdG9cbiAgICAqIGhhbmRsZSBnYW1lIHJlc2V0IHN0YXRlcyAtIG1heWJlIGEgbmV3IGdhbWUgbWVudSBvciBhIGdhbWUgb3ZlciBzY3JlZW5cbiAgICAqIHRob3NlIHNvcnRzIG9mIHRoaW5ncy4gSXQncyBvbmx5IGNhbGxlZCBvbmNlIGJ5IHRoZSBpbml0KCkgbWV0aG9kLlxuICAgICovXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICB9XG5cbiAgLyogR28gYWhlYWQgYW5kIGxvYWQgYWxsIG9mIHRoZSBpbWFnZXMgd2Uga25vdyB3ZSdyZSBnb2luZyB0byBuZWVkIHRvXG4gICAgKiBkcmF3IG91ciBnYW1lIGxldmVsLiBUaGVuIHNldCBpbml0IGFzIHRoZSBjYWxsYmFjayBtZXRob2QsIHNvIHRoYXQgd2hlblxuICAgICogYWxsIG9mIHRoZXNlIGltYWdlcyBhcmUgcHJvcGVybHkgbG9hZGVkIG91ciBnYW1lIHdpbGwgc3RhcnQuXG4gICAgKi9cbiAgUmVzb3VyY2VzLmxvYWQoW1xuICAgICdpbWFnZXMvc3RvbmUtYmxvY2sucG5nJyxcbiAgICAnaW1hZ2VzL3dhdGVyLWJsb2NrLnBuZycsXG4gICAgJ2ltYWdlcy9ncmFzcy1ibG9jay5wbmcnLFxuICAgICdpbWFnZXMvZW5lbXktYnVnLnBuZycsXG4gICAgJ2ltYWdlcy9jaGFyLWJveS5wbmcnLFxuICAgICdpbWFnZXMvY2hhci1jYXQtZ2lybC5wbmcnLFxuICAgICdpbWFnZXMvc3Rhci5wbmcnXG4gIF0pO1xuICBSZXNvdXJjZXMub25SZWFkeShpbml0KTtcblxuICAvKiBBc3NpZ24gdGhlIGNhbnZhcycgY29udGV4dCBvYmplY3QgdG8gdGhlIGdsb2JhbCB2YXJpYWJsZSAodGhlIHdpbmRvd1xuICAgICogb2JqZWN0IHdoZW4gcnVuIGluIGEgYnJvd3Nlcikgc28gdGhhdCBkZXZlbG9wZXJzIGNhbiB1c2UgaXQgbW9yZSBlYXNpbHlcbiAgICAqIGZyb20gd2l0aGluIHRoZWlyIGFwcC5qcyBmaWxlcy5cbiAgICAqL1xuICBnbG9iYWwuY3R4ID0gY3R4O1xuICBnbG9iYWwuY2FudmFzID0gY2FudmFzO1xufSk7XG4iXX0=
