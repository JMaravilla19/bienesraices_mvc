const loginForm = (req, res)=>{
     res.render('auth/login', {
        auth: false
    });
}

const registerForm = (req, res)=>{
     res.render('auth/register', {
        
    });
}

export {
    loginForm,
    registerForm
}