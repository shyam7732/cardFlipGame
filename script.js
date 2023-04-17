let path, key, length, output, back, backarr, x, randomOrder1 = [], randomOrder2 = [];
let first, second, img;
let cardsTurn = 0, score = 0;
let btn = document.querySelector("button");
let boxs = document.querySelector(".card");
let timerSpan = document.querySelector(".timer span");
let scoreSpan = document.querySelector(".score span");
let head = document.querySelector(".head");

let result = document.querySelector(".result");
let finalscore = document.querySelector(".result span");

let restart = document.querySelector(".restart");
let restartBtn = document.querySelector(".restart button");

btn.onclick = () => {
    btn.style.display = "none";
    boxs.style.display = "flex";
	head.style.display = "flex";
	backImg();
}


let backs = document.querySelectorAll(".back");
let card = document.querySelectorAll(".flip-card-inner");
card.forEach((current) => {
	current.onclick = (e) =>{
		current.style.transform = "rotateY(180deg)";
		matchImg(e);
	}
})

function backImg(){
	path = {'img/img1.jpg': 1 , 'img/img2.jpg': 2 , 'img/img3.jpg': 3 , 'img/img4.jpg': 4 , 'img/img5.jpg': 5 , 'img/img6.jpg': 6 };
	key = Object.keys(path);
	length = key.length;
	let i = 0;
			while(i < length){
				let random1 = Math.floor( Math.random() * length );
				// console.log(random1);
				if(!randomOrder1.includes(random1)){
					randomOrder1.push(random1);
					i++;
				}
			}
			// console.log(randomOrder1);
	let j = 0;
			while(j < length){
				let random2 = Math.floor( Math.random() * length );
				if(!randomOrder2.includes(random2)){
					randomOrder2.push(random2);
					j++;
				}
			}
	let randomOrderFinal =[...randomOrder1,...randomOrder2];
	console.log(randomOrderFinal); 
	for(let k=0; k<=11; k++){
		img = document.createElement("img");
		img.src = key[randomOrderFinal[k]];
		let shyam = img.src.slice(77,81);
		// console.log(shyam);                
		backs[k].appendChild(img);
		backs[k].classList.add(shyam);
	}
	let timer = 0;
    timerSpan.innerHTML = timer;
    //Timer Interval
    let x = setInterval(() => {
        if (timer === 30) {
            clearInterval(x);
            // alert("Your Score is:- " + score)
            boxs.style.display = "none";
			result.style.display = "block"
			restart.style.display = "block"
        } else {
            timerSpan.innerHTML = ++timer;
        }
    }, 1000);
	finalscore.innerHTML = score;
}


function matchImg(e){
	cardsTurn++;
	if(cardsTurn == 1){
		first = e.target.parentElement.nextElementSibling.className;
		// console.log(first);
	}
	if(cardsTurn == 2){
		second = e.target.parentElement.nextElementSibling.className;
		// console.log(second);
		if( first == second){
			x = first.slice(5);
			console.log(x);
			let hide = document.querySelectorAll("."+x);
			hide.forEach((current) =>{
				setTimeout(() => {
					current.parentElement.remove();
					cardsTurn = 0;
				},1000)
                score++;
                scoreSpan.innerHTML = score;
			})

		}
		else{
			let cardTurned = document.querySelectorAll(".flip-card-inner");
			cardTurned.forEach((current) => {
				setTimeout(()=>{
					current.style.cssText = "transform: rotateY(0deg)";
					cardsTurn = 0;
				},1000)
			})	
		}	
	}
}