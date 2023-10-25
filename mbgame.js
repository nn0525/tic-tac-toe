const btnlist = document.querySelectorAll(".btn");
const restartButton = document.getElementById('restartbutton');
console.log(btnlist)
restartButton.disabled=true;
let player = "O"
const textElementdraw = document.getElementById('textdraw');
var c = 0;
function resetGame() {
    btnlist.forEach((cell) => {
      cell.textContent = player;
      cell.classList.remove('clicked');
      cell.disabled = false;
    });
  
    const textElementwin = document.getElementById('textW');

    textElementwin.classList.remove('Hopa');
    textElementwin.classList.add('Lopa')
    
    restartButton.disabled=true;
    c=0;
  }

  
  function win(){
    if (player == "X"){ 
    const textElementwin = document.getElementById('textW');
    textElementwin.textContent="Oの勝ち"
    restartButton.disabled=false;
    textElementwin.classList.add('Hopa');
    btnlist.forEach((cell)=>{
        cell.disabled=true;
    });
  }
  else {
    const textElementwin = document.getElementById('textW');
    textElementwin.textContent="Xの勝ち"
    restartButton.disabled=false;
    textElementwin.classList.add('Hopa');
    btnlist.forEach((cell)=>{
        cell.disabled=true;
    });
  }
  
}
btnlist.forEach((cell)=>{
    
        cell.textContent=player;
    
});
btnlist.forEach((cell)=>{
    cell.addEventListener('click',function(){
        cell.textContent=player;
        cell.classList.add('clicked');
        cell.disabled = true;
        c=c+1;
        if (player==="X"){
            player="O"
            btnlist.forEach((cell)=>{
                if(cell.disabled!==true){
                    cell.textContent=player;
                }
    
        });
            
        }
        else{
            player="X"
            btnlist.forEach((cell)=>{
    
                if(cell.disabled!==true){
                    cell.textContent=player;
                }
            
        });
            
        }
        const textElementwin = document.getElementById('textW');
        var line=0;
           //勝利判断
           
            //縦の勝利判断 
                if(btnlist[0].textContent===btnlist[3].textContent&&btnlist[0].textContent===btnlist[6].textContent&&btnlist[0].disabled==true&&btnlist[3].disabled==true&&btnlist[6].disabled==true){
                 
                win();
             
            } 
            if(btnlist[1].textContent===btnlist[4].textContent&&btnlist[1].textContent===btnlist[7].textContent&&btnlist[1].disabled==true&&btnlist[4].disabled==true&&btnlist[7].disabled==true){
                    
                win();
                
             
            } 
            if(btnlist[2].textContent===btnlist[5].textContent&&btnlist[2].textContent===btnlist[8].textContent&&btnlist[2].disabled==true&&btnlist[5].disabled==true&&btnlist[8].disabled==true){
                    
                
                win();
             
            } 

            //横の勝利判断
                if(btnlist[0].textContent===btnlist[1].textContent&&btnlist[0].textContent===btnlist[2].textContent&&btnlist[0].disabled==true&&btnlist[1].disabled==true&&btnlist[2].disabled==true){
                    
                
                    win();
                 
                } 
                if(btnlist[3].textContent===btnlist[4].textContent&&btnlist[3].textContent===btnlist[5].textContent&&btnlist[3].disabled==true&&btnlist[4].disabled==true&&btnlist[5].disabled==true){
                    
                
                    win();
                 
                } 
                if(btnlist[6].textContent===btnlist[7].textContent&&btnlist[6].textContent===btnlist[8].textContent&&btnlist[6].disabled==true&&btnlist[7].disabled==true&&btnlist[8].disabled==true){
                    
                
                    win();
                 
                } 
            //左上から右下への斜めの勝利判断
                if(btnlist[0].textContent===btnlist[4].textContent&&btnlist[0].textContent===btnlist[8].textContent&&btnlist[0].disabled==true&&btnlist[4].disabled==true&&btnlist[8].disabled==true){
                    win();
                } 
            //右上から左下の斜めへの勝利判断
            if(btnlist[2].textContent===btnlist[4].textContent&&btnlist[2].textContent===btnlist[6].textContent&&btnlist[2].disabled==true&&btnlist[4].disabled==true&&btnlist[6].disabled==true)
            {
                win();
             }
             //引き分け
                if(c===9&&textElementwin.style.opacity!==1){
                    restartButton.disabled=false;
                    textElementwin.classList.add('Hopa');
                    textElementwin.textContent="draw!!!"
                }
        }
    );
});
