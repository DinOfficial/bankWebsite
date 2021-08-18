document.getElementById('submit-btn').addEventListener('click', function(){
      // User Email
      const emailField = document.getElementById('user-email');
      const userEmail = emailField.value;

      // User Password
      const passField = document.getElementById('user-password');
      const userPass = passField.value;

      // loging Condition
      if(userEmail == 'hello@bank.com' && userPass == 'hello'){
            window.location.href = 'banking.html';
      }
});



