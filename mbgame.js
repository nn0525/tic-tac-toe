const btnlist = document.querySelectorAll(".btn");
const restartButton = document.getElementById('restartbutton');
console.log(btnlist)
restartButton.disabled=true;
let player = "O"
var textElementdraw = document.getElementById('textdraw');

function resetGame() {
    btnlist.forEach((cell) => {
      cell.textContent = player;
      cell.classList.remove('clicked');
      cell.disabled = false;
    });
  
    var textElementO = document.getElementById('textO');
    var textElementX = document.getElementById('textX');
    textElementO.style.opacity = 0;
    textElementX.style.opacity = 0;
    textElementdraw.style.opacity = 0;
    restartButton.disabled=true;
    c=0;
  }
  

btnlist.forEach((cell)=>{
    
        cell.textContent=player;
    
});
var c = 0;
btnlist.forEach((cell)=>{
    cell.addEventListener('click',function(){
        cell.textContent=player;
        cell.classList.add('clicked');
        cell.disabled = true;
        c=c+1;
        if (player=="X"){
            player="O"
            btnlist.forEach((cell)=>{
                if(cell.disabled!=true){
                    cell.textContent=player;
                }
    
        });
            
        }
        else{
            player="X"
            btnlist.forEach((cell)=>{
    
                if(cell.disabled!=true){
                    cell.textContent=player;
                }
            
        });
            
        }
        var textElementO = document.getElementById('textO');
        var textElementX = document.getElementById('textX');
           //勝利判断
           
            //縦の勝利判断 
                if(btnlist[0].textContent===btnlist[3].textContent&&btnlist[0].textContent===btnlist[6].textContent&&btnlist[0].disabled==true&&btnlist[3].disabled==true&&btnlist[6].disabled==true){
                 
                if(player=="O"){
                    restartButton.disabled=false;
                    textElementX.style.opacity=1;
                    btnlist.forEach((cell)=>{
                        cell.disabled=true;
                });
                }
                if(player=="X"){
                    restartButton.disabled=false;
                    textElementO.style.opacity=1;
                    btnlist.forEach((cell)=>{
                        cell.disabled=true;
                });
                }
             
            } 
            if(btnlist[1].textContent===btnlist[4].textContent&&btnlist[1].textContent===btnlist[7].textContent&&btnlist[1].disabled==true&&btnlist[4].disabled==true&&btnlist[7].disabled==true){
                    
                
                if(player=="O"){
                    restartButton.disabled=false;
                    textElementX.style.opacity=1;
                    btnlist.forEach((cell)=>{
                        cell.disabled=true;
                });
                }
                if(player=="X"){
                    restartButton.disabled=false;
                    textElementO.style.opacity=1;
                    btnlist.forEach((cell)=>{
                        cell.disabled=true;
                });
                }
             
            } 
            if(btnlist[2].textContent===btnlist[5].textContent&&btnlist[2].textContent===btnlist[8].textContent&&btnlist[2].disabled==true&&btnlist[5].disabled==true&&btnlist[8].disabled==true){
                    
                
                if(player=="O"){
                    restartButton.disabled=false;
                    textElementX.style.opacity=1;
                    btnlist.forEach((cell)=>{
                        cell.disabled=true;
                });
                }
                if(player=="X"){
                    restartButton.disabled=false;
                    textElementO.style.opacity=1;
                    btnlist.forEach((cell)=>{
                        cell.disabled=true;
                });
                }
             
            } 

            //横の勝利判断
                if(btnlist[0].textContent===btnlist[1].textContent&&btnlist[0].textContent===btnlist[2].textContent&&btnlist[0].disabled==true&&btnlist[1].disabled==true&&btnlist[2].disabled==true){
                    
                
                    if(player=="O"){
                        restartButton.disabled=false;
                        textElementX.style.opacity=1;
                        btnlist.forEach((cell)=>{
                            cell.disabled=true;
                    });
                    }
                    if(player=="X"){
                        restartButton.disabled=false;
                        textElementO.style.opacity=1;
                        btnlist.forEach((cell)=>{
                            cell.disabled=true;
                    });
                    }
                 
                } 
                if(btnlist[3].textContent===btnlist[4].textContent&&btnlist[3].textContent===btnlist[5].textContent&&btnlist[3].disabled==true&&btnlist[4].disabled==true&&btnlist[5].disabled==true){
                    
                
                    if(player=="O"){
                        restartButton.disabled=false;
                        textElementX.style.opacity=1;
                        btnlist.forEach((cell)=>{
                            cell.disabled=true;
                    });
                    }
                    if(player=="X"){
                        restartButton.disabled=false;
                        textElementO.style.opacity=1;
                        btnlist.forEach((cell)=>{
                            cell.disabled=true;
                    });
                    }
                 
                } 
                if(btnlist[6].textContent===btnlist[7].textContent&&btnlist[6].textContent===btnlist[8].textContent&&btnlist[6].disabled==true&&btnlist[7].disabled==true&&btnlist[8].disabled==true){
                    
                
                    if(player=="O"){
                        restartButton.disabled=false;
                        textElementX.style.opacity=1;
                        btnlist.forEach((cell)=>{
                            cell.disabled=true;
                    });
                    }
                    if(player=="X"){
                        restartButton.disabled=false;
                        textElementO.style.opacity=1;
                        btnlist.forEach((cell)=>{
                            cell.disabled=true;
                    });
                    }
                 
                } 
            //左上から右下への斜めの勝利判断
                if(btnlist[0].textContent===btnlist[4].textContent&&btnlist[0].textContent===btnlist[8].textContent&&btnlist[0].disabled==true&&btnlist[4].disabled==true&&btnlist[8].disabled==true){
                    if(player=="O"){
                        restartButton.disabled=false;
                        textElementX.style.opacity=1;
                        btnlist.forEach((cell)=>{
                            cell.disabled=true;
                    });
                    }
                    if(player=="X"){
                        restartButton.disabled=false;
                        textElementO.style.opacity=1;
                        btnlist.forEach((cell)=>{
                            cell.disabled=true;
                    });
                    }
                } 
            //右上から左下の斜めへの勝利判断
            if(btnlist[2].textContent===btnlist[4].textContent&&btnlist[2].textContent===btnlist[6].textContent&&btnlist[2].disabled==true&&btnlist[4].disabled==true&&btnlist[6].disabled==true)
            {
                if(player=="O"){
                    restartButton.disabled=false;
                    textElementX.style.opacity=1;
                    btnlist.forEach((cell)=>{
                        cell.disabled=true;
                });
                }
                if(player=="X"){
                    restartButton.disabled=false;
                    textElementO.style.opacity=1;
                    btnlist.forEach((cell)=>{
                        cell.disabled=true;   
                });
                }
             }
             //引き分け
                if(c==9&&textElementO.style.opacity!=1&&textElementX.style.opacity!=1){
                    restartButton.disabled=false;
                    textElementdraw.style.opacity=1;
                }
        }
    );
});
