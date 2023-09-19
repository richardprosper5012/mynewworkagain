const input = document.querySelector('.email');
const err = document.getElementById('error');
const btn = document.getElementById('btn');

function handleSubmit(event) {
  event.preventDefault();
  const email = input.value.trim();
//   console.log(email);

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!email.length > 0) {
    err.innerHTML = 'Email is required!';
    input.classList.add('error-input');
    err.classList.add('error');
    reset(2000);
  }else if (emailRegex.test(email)) {
    err.textContent = '';
    input.classList.remove('error-input');
    // Redirect to success.html
    window.location.href = 'success.html';
  } else {
    err.innerHTML = 'Enter a valid email';
    input.classList.add('error-input');
    err.classList.add('error');
    reset(8000);
  }
}

// reset function
function reset(time) {
    setTimeout(()=>{
        err.textContent = '';
        input.classList.remove('error-input');
        err.classList.remove('error');
        input.value = '';
  }, time);
}

btn.addEventListener('click', handleSubmit);