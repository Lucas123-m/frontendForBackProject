import { useState,useEffect } from "react"
import './login.css'
export default function Login(){
    const [dataCookie,setDataCookie] = useState("")
    const BASE_URL_API = "http://localhost:3000"
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
                setDataCookie("")
            });
        }
        fetchCookie()
    },[])

    const $ = el =>document.querySelector(el)
    const login = async(event)=>{
        event.preventDefault()
        const loginSpan = $('#login-form span')
        const username = $('#login-username')
        const password = $('#login-password')
        console.log("Se activa login event")
        fetch(`${BASE_URL_API}/users/login`,{
            method: 'POST',
            headers: {'Content-Type':'Application/json'},
            body: JSON.stringify({username: username.value,password: password.value}),
            credentials: 'include'
        }).then(res => {
            if (res.ok){
                loginSpan.innerText = "Session iniciada, entrando..."
                loginSpan.style.color = "green"
                setTimeout(()=>{
                    window.location.href = "/main"
                },2000)
            } else {
                loginSpan.innerText = "Error al iniciar sesion."
                loginSpan.style.color = "red"
            }
        })
    }

    const register = async(event)=>{
        event.preventDefault()
        const registerSpan = $('#register-form span')
        const username = $('#register-username')
        const password = $('#register-password')
        const confirmPassword = $('#register-confirm-password')

        if (password.value != confirmPassword.value){
            alert('Passwords no dot match')
            return
        }

        fetch(`${BASE_URL_API}/users/register`,{
            method: 'POST',
            headers: {'Content-Type':'Application/json'},
            body: JSON.stringify({username: username.value,password: password.value}),
            credentials: 'include', 
        }).then(res => {
            if (res.ok){
                registerSpan.innerText = "Usuario registrado, favor de logear."
                registerSpan.style.color = "green"
                setTimeout(()=>{
                    registerSpan.innerText=""
                },3000)
                username.value = ""
                password.value=""
                confirmPassword.value=""
            } else {
                registerSpan.innerText = "Error al registrar usuario."
                registerSpan.style.color = "red"
            }
        })
    }

    const logout = async(event)=>{
        event.preventDefault()
        fetch(`${BASE_URL_API}/users/logout`,{
            method:'POST',
            headers: {'Content-Type':'Application/json'},
            credentials: 'include', 
        }).then(res => {
            console.log("respuesta:",res)
            setTimeout(()=>{
                    window.location.href = "/"
            },1000)
        })
    }

    return (
    <>
        <div className="login">
        {dataCookie ? ( 
            <div className="form-container">
                <form onSubmit={logout}>
                    <h2>Hola {dataCookie} </h2>
                    <p>Estas en el panel de administracion</p>
                    <button type="submit">Cerrar sesion</button>
                </form>
            </div>
        ) : (
            <>
            <div className="form-container">
                <form onSubmit={login} id="login-form">
                    <h2>Login</h2>
                    <label htmlFor="login-username">Username</label>
                    <input type="text" name="username" id="login-username" required />
                    <label htmlFor="login-password">Password</label>
                    <input type="text" name="password" id="login-password" required />

                    <button type="submit">Login</button>
                    <span>&nbsp;</span>
                </form>
            </div>
            <div className="form-container">
                <form onSubmit={register} id="register-form">
                    <h2>Register</h2>
                    <label htmlFor="register-username">Username</label>
                    <input type="text" name="username" id="register-username" required />

                    <label htmlFor="register-password">Password</label>
                    <input type="text" name="password" id="register-password" required />

                    <label htmlFor="register-confirm-password">Confirm Password</label>
                    <input type="text" name="confirm-password" id="register-confirm-password" required />
                    <button type="submit">Login</button>
                    <span>&nbsp;</span>
                </form>
            </div>
            </>
        )}
        </div>
    </>
    )
}