 document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const matric = document.getElementById('matric');
    const password = document.getElementById('password');
    const matricError = document.getElementById('matric-error');
    const passwordError = document.getElementById('password-error');
  

    matric.addEventListener('input', () => {
      validateMatric();
    });
  
    password.addEventListener('input', () => {
      validatePassword();
    });
  
    form.addEventListener('submit', function (e) {
      const isMatricValid = validateMatric();
      const isPasswordValid = validatePassword();
  
      if (!isMatricValid || !isPasswordValid) {
        e.preventDefault();
      }
    });
  
    function validateMatric() {
      if (matric.value.trim() === '') {
        matricError.textContent = 'Matric number is required.';
        return false;
      } else {
        matricError.textContent = '';
        return true;
      }
    }
  
    function validatePassword() {
      if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
        return false;
      } else if (password.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters.';
        return false;
      } else {
        passwordError.textContent = '';
        return true;
      }
    }
  });
    