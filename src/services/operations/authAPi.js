import toast from "react-hot-toast";
import { endpoints } from "../api";
import { apiconnector } from "../apiconnector";


const {LOGIN_API, SIGNUP_API} = endpoints

export async function signUp({ firstname, lastname, email, password, company, navigate }) {
    const toastId = toast.loading("Loading...");

    try {
        const response = await fetch( SIGNUP_API, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password,
                company 
            })
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Signup failed');
        }

        toast.success("Signup Successful");
        // navigate("/login");

    } catch (error) {
        console.log("SIGNUP API ERROR............", error);
        toast.error(error.message || "Signup Failed");
        // navigate("/signup");
    } finally {
        toast.dismiss(toastId);
    }
}







export const login = async (email, password, navigate) => {
  const toastId = toast.loading("Loading...");

  try {
    const response = await fetch( LOGIN_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ''
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include' 
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    console.log("LOGIN API RESPONSE ", data);
    toast.success("Login Successful");

    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("loggedIn", JSON.stringify("true"));

    navigate("/profile");
  } catch (error) {
    console.log("LOGIN API ERROR............", error);
    toast.error("Login Failed");
  } finally {
    toast.dismiss(toastId);
  }
};
