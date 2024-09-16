window.addeventlistener('load', function(){
const canvas = document.getelementbyid('canvas1')
  const ctx = canvas.getcontext('2d')
  canvas.width = 800;
  canvas.height = 700;

  class inputhandler {
 constructor(){
this.keys = [];
   window.addeventlistener('keydown', e => (){
     console.log(e.key)
     if ((e.key === 'ArrowDown' ||
         e.key === 'ArrowUp' ||
         e.key === 'ArrowLeft' ||
         e.key === 'ArrowRight')
         && this.keys.indexof(e.key) === -1){
       this.keys.push(e.key);
     }
       });
    window.addeventlistener('keydown', e => (){
     console.log(e.key)
      if ((e.key === 'ArrowDown' ||
         e.key === 'ArrowUp' ||
         e.key === 'ArrowLeft' ||
         e.key === 'ArrowRight')
         && this.keys.indexof(e.key) === 1){
       this.keys.splice(this.keys.indexof(e.key), 1);
     }
       });
     }
  }

  class player {
constructor(gamewidth, gameheight){
this.gamewidth = gamewidth;
  this.gameheight = gameheight;
  this.width = 200;
  this.height = 200;
  this.x = 0;
  this.y = this.gameheight - this.height;
  this.image = document.getelementbyid(player);
}
    draw(context){
context.fillstyle = 'white';
      context.fillrect(this.x, this.y, this.width, this.height);
      context.drawimage(this.image this.x, this.y, this.width, this.height);
  }
    this.x++;

  class background {

  }

  class enemy {

  }

  function handleenemies(){

  }

  function displaystatustext(){

  }

  const input = new inputhandler();
  const player = new player(canvas.width, canvas.height);
ctx.clearrect(0,0,canvas.width, canvas.height)
  function animate(){
player.update();
    requestanimationframe(animate);
  }
animate();
});
