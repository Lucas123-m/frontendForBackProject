import { useState,useEffect } from "react"

export default function Login(){
    const [dataCookie,setDataCookie] = useState("")
   
    useEffect(()=>{
        const fetchCookie = async()=>{
            await fetch("http://localhost:3000/users/cookie",{
                method: 'GET',
                credentials: 'include'
            }).then(res => {
                if(!res.ok){throw new Error(`HTTP Error in request, status: ${res.status}`)}
                return res.json()
            }).then(
                res => setDataCookie(res["cookie"]["username"])
            ).catch(error => {console.error('Error:', error)
                setDataCookie("N/A")
            });
        }
        fetchCookie()
    },[])
   /*return (
    <>
    <div class="container">
    {if (typeof username !== 'undefined' && username)}
        <div class="form-container">
            <h2>Hola <% username %>! </h2>
            <p>Estas en el panel de administracion</p>
            <button id="close-session">Cerrar sesion</button>
        </div>
    <% } else { %>
        <div class="form-container">
            <form id="login-form">
                <h2>Login</h2>
                <label for="login-username">Username</label>
                <input type="text" name="username" id="login-username" required>
                <label for="login-password">Username</label>
                <input type="text" name="password" id="login-password" required>

                <button type="submit">Login</button>
                <span>&nbsp;</span>
            </form>
        </div>
        <div class="form-container">
            <form id="register-form">
                <h2>Register</h2>
                <label for="register-username">Username</label>
                <input type="text" name="username" id="register-username" required>

                <label for="register-password">Username</label>
                <input type="text" name="password" id="register-password" required>

                <label for="register-confirm-password">Username</label>
                <input type="text" name="confirm-password" id="register-confirm-password" required>
                <button type="submit">Login</button>
                <span>&nbsp;</span>
            </form>
        </div>
        <% } %>
    </div>
    <script>
            console.log("Aca llega al menos")
            const $ = el =>document.querySelector(el)
            const loginForm = $('#login-form')
            const loginSpan = $('#login-form span')

            const registerForm = $('#register-form')
            const registerSpan = $('#register-form span')

            const logoutButton = $('#close-session')

            loginForm?.addEventListener('submit', e=>{
            e.preventDefault()
            const username = $('#login-username')
            const password = $('#login-password')

            fetch('/users/login',{
                method: 'POST',
                headers: {'Content-Type':'Application/json'},
                body: JSON.stringify({username: username.value,password: password.value})
            }).then(res => {
                if (res.ok){
                    loginSpan.innerText = "Session iniciada, entrando..."
                    loginSpan.style.color = "green"
                    setTimeout(()=>{
                        window.location.href = "/users/protected"
                    },2000)
                } else {
                    loginSpan.innerText = "Error al iniciar sesion."
                    loginSpan.style.color = "red"
                }
            })
        })
        registerForm?.addEventListener('submit',e=>{
            e.preventDefault()
            const username = $('#register-username')
            const password = $('#register-password')
            const confirmPassword = $('#register-confirm-password')

            if (password.value != confirmPassword.value){
                alert('Passwords no dot match')
                return
            }

            fetch('/users/register',{
                method: 'POST',
                headers: {'Content-Type':'Application/json'},
                body: JSON.stringify({username: username.value,password: password.value})
            }).then(res => {
                if (res.ok){
                    registerSpan.innerText = "Usuario registrado, entrando..."
                    registerSpan.style.color = "green"
                    setTimeout(()=>{
                        window.location.href = "/users/protected"
                    },2000)
                } else {
                    registerSpan.innerText = "Error al registrar usuario."
                    registerSpan.style.color = "red"
                }
            })
        })
        logoutButton?.addEventListener('click',e => {
            e.preventDefault()
            fetch('/users/logout',{
                method:'POST',
                headers: {'Content-Type':'Application/json'}
            }).then(res => {
                console.log("respuesta:",res)
                setTimeout(()=>{
                        window.location.href = "/"
                },1000)
            })
        })
    </script>
    </>
   )*/ 
  return (<h1>Hola {dataCookie}</h1>)
}