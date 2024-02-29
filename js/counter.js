const counters = document.querySelectorAll('.counter');
const speed = 80; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			if(Math.trunc(count + inc) == 0)
				{
					counter.innerText = target;
					setTimeout(updateCount, 2);
				}
				else{
				counter.innerText = Math.trunc(count + inc);
				// Call function every ms
				setTimeout(updateCount, 2);
				}
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});