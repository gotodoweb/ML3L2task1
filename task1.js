let input = document.createElement('input');
input.setAttribute("type", "text");
input.placeholder = 'Введите текст';


const parag = document.createElement('p');

document.body.append(input); 
document.body.append(parag);

input.addEventListener('change', e => {
	e.preventDefault();

	
	const timerId = setTimeout(() => {
		parag.textContent = input.value;
		input.value = '';
	}, 300)

	

});
