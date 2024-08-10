const showMoreButton = document.getElementById('show-more');
const superheroesContainer = document.getElementById('superheroes');

let visibleSuperheroes = 6; // Initial number of visible superheroes

showMoreButton.addEventListener('click', () => {
	visibleSuperheroes += 6; // Increase visible superheroes by 6
	updateSuperheroes();
});

function updateSuperheroes() {
	const superheroes = superheroesContainer.children;
	for (let i = 0; i < superheroes.length; i++) {
		if (i < visibleSuperheroes) {
			superheroes[i].style.display = 'block';
		} else {
			superheroes[i].style.display = 'none';
		}
	}
}

