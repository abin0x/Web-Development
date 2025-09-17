document.getElementById('btn-update-title')
        .addEventListener('click',function(){
            const pageTitle=document.getElementById('page-title');
            pageTitle.innerText = 'Title Updated';
        })

document.getElementById('btn-login')
        .addEventListener('click',function(){
            const userLogin=document.getElementById('user-status');
            userLogin.innerText='User Logged In';
        })