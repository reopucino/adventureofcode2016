let t1 = "R2, L3";
let t2 = "R2, R2, R2";
let t3 = "R5, L5, R5, R3";
let question = "R5, L2, L1, R1, R3, R3, L3, R3, R4, L2, R4, L4, R4, R3, L2, L1, L1, R2, R4, R4, L4, R3, L2, R1, L4, R1, R3, L5, L4, L5, R3, L3, L1, L1, R4, R2, R2, L1, L4, R191, R5, L2, R46, R3, L1, R74, L2, R2, R187, R3, R4, R1, L4, L4, L2, R4, L5, R4, R3, L2, L1, R3, R3, R3, R1, R1, L4, R4, R1, R5, R2, R1, R3, L4, L2, L2, R1, L3, R1, R3, L5, L3, R5, R3, R4, L1, R3, R2, R1, R2, L4, L1, L1, R3, L3, R4, L2, L4, L5, L5, L4, R2, R5, L4, R4, L2, R3, L4, L3, L5, R5, L4, L2, R3, R5, R5, L1, L4, R3, L1, R2, L5, L1, R4, L1, R5, R1, L4, L4, L4, R4, R3, L5, R1, L3, R4, R3, L2, L1, R1, R2, R2, R2, L1, L1, L2, L5, L3, L1";

const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;

function checkBlock(sArray){
  let st = sArray;
  let arr = st.split(", ");
  let position = NORTH;
  let n = 0;
  let blokaway = 0;
  let cordinat = {x:0, y:0};
  while(n<arr.length){
    let ca = arr[n];
    let dir = ca.charAt(0);

    if(dir == "R"){
      position ++;
    }
    else{
      position --;
    }

    if(position > 3){
      position = 0;
    }
    else if(position < 0){
      position = 3;
    }

    let l = ca.slice(1);
    let intL = parseInt(l);
    if(position == NORTH){
      cordinat.y += intL;
    }
    else if(position == EAST){
      cordinat.x += intL;
    }
    else if(position == SOUTH){
      cordinat.y -= intL;
    }
    else if(position == WEST){
      cordinat.x -= intL;
    }
    n++;
  }
  console.log(cordinat);
}
