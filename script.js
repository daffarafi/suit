let p;
const batu = document.querySelector('.container .select .rock');
const gunting = document.querySelector('.container .select .scissor');
const kertas = document.querySelector('.container .select .paper');
const pImage = document.querySelector('.container .player .phand');
const pilihan = document.querySelector('.container .select');
const cImage = document.querySelector('.container .computer .chand');
const pHasil = document.querySelector('.container .player .presult');
const cHasil = document.querySelector('.container .computer .cresult');
const pScore = parseInt(
	document.querySelector('.container .score .blue').innerHTML
);
const cScore = parseInt(
	document.querySelector('.container .score .red').innerHTML
);

const open = function () {
	const rolling = ['scissor', 'rock', 'paper'];
	let i = 0;
	let a = setInterval(() => {
		cImage.innerHTML =
			'<img src="' + rolling[i++] + '.png" class="image" alt=""></img>';
		if (i == 3) {
			return (i = 0);
		}
	}, 1500);
	pilihan.addEventListener('click', function () {
		clearInterval(a);
	});
};

open();
pilihan.style.display = 'none';
setTimeout(function () {
	pilihan.style.display = 'flex';
}, 500);

let roll = function () {
	let rolling = ['scissor', 'rock', 'paper'];
	let a = new Date().getTime();
	let i = 0;
	setInterval(function () {
		if (new Date().getTime() > a + 1000) {
			clearInterval(roll);
			return;
		}
		cImage.innerHTML =
			'<img src="' + rolling[i++] + '.png" class="image" alt=""></img>';
		if (i == 3) {
			i = 0;
		}
	}, 70);
};

batu.addEventListener('mouseenter', function () {
	pImage.innerHTML = '<img src="rock.png" class="image" alt="">';
});
kertas.addEventListener('mouseenter', function () {
	pImage.innerHTML = '<img src="paper.png" class="image" alt="">';
});
gunting.addEventListener('mouseenter', function () {
	pImage.innerHTML = '<img src="scissor.png" class="image" alt="">';
});

let rules = pilihan.addEventListener('click', function (e) {
	p = e.target.getAttribute('alt');
	pImage.innerHTML = '<img src="' + p + '.png" class="image" alt="">';

	let com = Math.floor(Math.random() * 3 + 1);

	if (com == 1) {
		com = 'scissor';
	} else if (com == 2) {
		com = 'rock';
	} else {
		com = 'paper';
	}

	roll();

	setTimeout(function () {
		cImage.innerHTML = '<img src="' + com + '.png" class="image" alt="">';
	}, 1010);

	pilihan.style.display = 'none';

	setTimeout(function () {
		if (p == com) {
			pHasil.innerHTML = 'TIE';
			cHasil.innerHTML = 'TIE';
			pilihan.style.display = 'flex';
		} else if (p == 'scissor') {
			if (com == 'rock') {
				pHasil.innerHTML = 'LOSE';
				cHasil.innerHTML = 'WON';
				cScore += 1;
				document.querySelector('.container .score .red').innerHTML =
					cScore;
				pilihan.style.display = 'flex';
			} else {
				pHasil.innerHTML = 'WON';
				cHasil.innerHTML = 'LOSE';
				pScore += 1;
				document.querySelector('.container .score .blue').innerHTML =
					pScore;
				pilihan.style.display = 'flex';
			}
		} else if (p == 'rock') {
			if (com == 'paper') {
				pHasil.innerHTML = 'LOSE';
				cHasil.innerHTML = 'WON';
				cScore += 1;
				document.querySelector('.container .score .red').innerHTML =
					cScore;
				pilihan.style.display = 'flex';
			} else {
				pHasil.innerHTML = 'WON';
				cHasil.innerHTML = 'LOSE';
				pScore += 1;
				document.querySelector('.container .score .blue').innerHTML =
					pScore;
				pilihan.style.display = 'flex';
			}
		} else if (p == 'paper') {
			if (com == 'scissor') {
				pHasil.innerHTML = 'LOSE';
				cHasil.innerHTML = 'WON';
				cScore += 1;
				document.querySelector('.container .score .red').innerHTML =
					cScore;
				pilihan.style.display = 'flex';
			} else {
				pHasil.innerHTML = 'WON';
				cHasil.innerHTML = 'LOSE';
				pScore += 1;
				document.querySelector('.container .score .blue').innerHTML =
					pScore;
				pilihan.style.display = 'flex';
			}
		}
	}, 1010);
	pilihan.addEventListener('mouseleave', function () {
		pImage.innerHTML = '<img src="' + p + '.png" class="image" alt="">';
	});
});
