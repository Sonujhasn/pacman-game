const width=28
const grid=document.querySelector(".grid")
const scoredisplay=document.querySelector("#score")
let squares=[]
let score=0;

//28*28=784
// 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty
const layout= [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]

  //create board

  
  function createboard(){  
      for(let i=0;i<layout.length;i++){
       //create a square
        const sq =document.createElement("div") 
         //put square in grid
        grid.appendChild(sq) 
        //put square in squares array
        squares.push(sq)
         if(layout[i]===0){
            squares[i].classList.add("pac-dot")
         }else if(layout[i]===1){
            squares[i].classList.add("wall")
         }else if(layout[i]===2){
            squares[i].classList.add("ghost-lair")
         } 
         else if(layout[i]===3){
            squares[i].classList.add("power-pallet")
         }

    }
}
createboard()
//up key -38
//left-37
//right-39
//down -40

//starting position of pacman
 let pacmancurrentindex=490
 squares[pacmancurrentindex].classList.add("pacman")

 function control(e){
    squares[pacmancurrentindex].classList.remove("pacman")
    // if(e.keyCode===40){
    //    console.log("pressed-down")
    // }else if(e.keyCode===38){
    //    console.log("pressed up")
    // }else if(e.keyCode===37){
    //    console.log("left")
    // }else if(e.keyCode===39){
    //    console.log("right")
    // }

    switch(e.keyCode){
        case 40:
            console.log("pressed-down")
            if(!squares[pacmancurrentindex+width].classList.contains("ghost-lair")
                &&!squares[pacmancurrentindex+width].classList.contains("wall")
             && pacmancurrentindex+width<width*width){
                pacmancurrentindex+=width
            }
            break
        case 38:
            console.log("pressed-up")
             if(!squares[pacmancurrentindex-width].classList.contains("ghost-lair")
                &&!squares[pacmancurrentindex-width].classList.contains("wall")
                &&pacmancurrentindex-width>=0){
                pacmancurrentindex-=width
             }
            break
        case 37:
            console.log("pressed-left")
              if(!squares[pacmancurrentindex-1].classList.contains("ghost-lair")
                &&!squares[pacmancurrentindex-1].classList.contains("wall")&&
                pacmancurrentindex%width!==0){
                pacmancurrentindex-=1;
              }
              if(pacmancurrentindex===364){
                pacmancurrentindex=391
              }
            break
        case 39:
            console.log("pressed-right")
            if(!squares[pacmancurrentindex+1].classList.contains("ghost-lair")
                &&!squares[pacmancurrentindex+1].classList.contains("wall")
               && pacmancurrentindex%width<width-1){
                pacmancurrentindex+=1;
            }
            if(pacmancurrentindex===391){
                pacmancurrentindex=364
            }
            break;

    }
    squares[pacmancurrentindex].classList.add("pacman")
    pacDotEaten()
    powerpalleteaten()
    checkforwin()
    checkForgameOver()
 }
 document.addEventListener("keyup",control)

function pacDotEaten(){
    if(squares[pacmancurrentindex].classList.contains("pac-dot")){
       squares[pacmancurrentindex].classList.remove("pac-dot")
        score++
        scoredisplay.innerHTML=score
    }
}
function powerpalleteaten(){
    // if square pacman is in contains a power paleet
    if(squares[pacmancurrentindex].classList.contains("power-pallet")){
        squares[pacmancurrentindex].classList.remove("power-pallet")
      //add a score of 10
       score+=10
    //change each of the four ghosts to isScared
       ghosts.forEach(ghost=>ghost.isScared=true)

    //use setTimeout to unscare ghosts after 10 seconds
      setTimeout(unscareGhosts,10000)
    }
   
}
function unscareGhosts(){
    ghosts.forEach(ghost=>ghost.isScared=false)
}

class Ghost{
    constructor(className,startindex,speed){
        this.className=className
        this.startindex=startindex
        this.speed=speed
        this.currentindex=startindex
        this.isScared=false
        this.timerid=NaN
    }
}

const ghosts=[
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]
//draw my ghosts onto my grid
ghosts.forEach(ghost => {
     squares[ghost.currentindex].classList.add(ghost.className)
    squares[ghost.currentindex].classList.add('ghost')
})
//move ghost
ghosts.forEach(ghost=> moveghost(ghost))

function moveghost(ghost){
    console.log("move ghost")
    const directions= [-1, +1, width, -width]
    let direction=directions[Math.floor(Math.random() * directions.length)]
    console.log(direction)
    

    ghost.timerid=setInterval(function(){
        //all our code
           //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
        if(!squares[ghost.currentindex + direction].classList.contains('ghost') &&
        !squares[ghost.currentindex + direction].classList.contains('wall') ) {
            squares[ghost.currentindex].classList.remove(ghost.className)
            squares[ghost.currentindex].classList.remove("ghost","scared-ghost")
            //add direction to currentindex
            ghost.currentindex+=direction
            // ghost add class
            squares[ghost.currentindex].classList.add(ghost.className)
            squares[ghost.currentindex].classList.add("ghost")
        }else direction=directions[Math.floor(Math.random() * directions.length)]
       
        //if the ghosts is currently scared
        if(ghost.isScared){
            squares[ghost.currentindex].classList.add("scared-ghost")
        }

        // if the ghost is current scared and pacman is on it
          if(ghost.isScared && squares[ghost.currentindex].classList.contains("pacman"))
          {
            //remove classnames-ghost.classname ,ghost,scared-ghost
              squares[ghost.currentindex].classList.remove(ghost.className,"ghost","scared-ghost")
           //change ghosts currentindex back to its startindex
             ghost.currentindex=ghost.startindex   
           //add a score of 100
            score+=100 
           //readd classnames of ghost.classname and ghost to the new 
           squares[ghost.currentindex].classList.add(ghost.className,"ghost")
          }
        checkForgameOver()
    },ghost.speed)

}

//check for game over
function checkForgameOver(){
   // if the square pacman is in contains a ghost and the square does not 
   //conatains a scared ghost
   if(squares[pacmancurrentindex].classList.contains("ghost") &&
    !squares[pacmancurrentindex].classList.contains("scared-ghost")
   ){
     ghosts.forEach(ghost=>clearInterval(ghost.timerid))
     document.removeEventListener("keyup",control)
     scoredisplay.innerHTML="you lose"
   }
   //for each ghost - we need to it moving

   //remove eventlistner from our control function

   //tell user the game over

}
//check for win
function checkforwin(){
    if(score===274){
        //stop each ghost
         ghosts.forEach(ghost=>clearInterval(ghost.timerid))
        //remove eventlistner for the control
        document.removeEventListener("keyup",control)
        //tell our user we have win
        scoredisplay.innerHTML="you win"
    }
}
