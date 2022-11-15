let inpNeeds = document.querySelectorAll('.myBlue input')
let allInps = document.querySelectorAll('form input')
let form = document.forms.reg

let pattern = {
    name: /^[A-Za-z]/i,
    age: /[^a-z]/g, 
    email:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^[A-Za-z]/i,
    phone: /^998[012345789][0-9]{8}$/g,
    aboutYou:/^[A-Za-z]/i , 
    css:/^[A-Za-z]/i ,
    html:/^[A-Za-z]/i ,
    favouriteCar:/^[A-Za-z]/i ,

}


function validate(regex, field) {
    if(regex.test(field.value)) {
        field.parentElement.classList.remove('invalid')
        field.parentElement.classList.add('valid')
    } else {
        field.parentElement.classList.remove('valid')
        field.parentElement.classList.add('invalid')
    }
}

allInps.forEach(inp => {
    inp.onkeyup = () => {

        validate(pattern[inp.name], inp)
    }
})


form.onsubmit = (event) => {
    event.preventDefault()
    let countErrs = 0

    inpNeeds.forEach(inp => {
        if(inp.value.length < 1 || inp.parentElement.classList.contains('invalid')) {
            inp.parentElement.classList.add('invalid')
            countErrs++
        } else {
            inp.parentElement.classList.remove('invalid')
        }
    });


    if(countErrs > 0) {
        console.log('Error')
    } else {
        submit(form)
    }
}


function submit(formElement) {
    let user = {}

    let fm = new FormData(formElement)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}


window.addEventListener("DOMContentLoaded",() => {
	const btn = document.querySelector("button");
	var doneTimeout = null,
		resetTimeout = null;

	if (btn) {
		btn.addEventListener("click",function() {
			const runClass = "btn--running";
			const doneClass = "btn--done";
			// `.btn--running .btn__progress-fill` `stroke-dashoffset` duration in ms
			const submitDuration = 2000;
			const resetDuration = 1500;

			// fake the submission
			this.disabled = true;
			this.classList.add(runClass);

			clearTimeout(doneTimeout);
			clearTimeout(resetTimeout);

			doneTimeout = setTimeout(() => {
				this.classList.remove(runClass);
				this.classList.add(doneClass);
				
				// reset the button
				resetTimeout = setTimeout(() => {
					this.disabled = false;
					this.classList.remove(doneClass);
				}, resetDuration);

			}, 600 + submitDuration);
		});
	}
});

