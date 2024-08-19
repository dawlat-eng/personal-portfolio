// var x = document.forms[0].length;
// document.write (x)
// var x = document. forms [0].elements[1] .name;
// document.write (x)


//Example javascript for interactivity 
//smooth scrolling for navigation links

document.querySelectorAll('header nav ul li a[href^="#"]').forEach (anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//form submission handling

document.getElementById('contact-form').addEventListener('submit',function(e) {
    e.preventDefault();

//example:handle form submission(you can replace this with actual form submission logic)
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let message = document.getElementById('message').value;

console.log(`Name: ${name}, Emailo:${email},Message:${message}`);

//reset form fields after submission(optional)
document.getElementById('contact-form').reset();
});