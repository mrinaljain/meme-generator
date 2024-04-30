import React from "react"
import "./signup.css"

export default function Signup() {
   const [formData, setFormData] = React.useState({
      email: "",
      password: "",
      confirmPassword: "",
      subscribe: true
   });
   function handleSubmit(event) {
      event.preventDefault();
      const { email , password, confirmPassword, subscribe} = formData;
      if (password === confirmPassword){
         console.log("Successfully signed up");
         if (subscribe){
            console.log("Thanks for signing up for our newsletter!");
         }
      }else{
         console.log("passwords to not match");
      }
      
      
      
   }
   function handleChange(event) {
      const {value , name , type, checked} = event.target;
      setFormData(function (oldFormData) {
         return {
            ...oldFormData,
            [name]: type === "checkbox" ? checked : value 
         }
      });
      
   }
   console.log(formData);
   return (
      <div className="form-container" >
         <form className="form" onSubmit={handleSubmit}>
            <input
               type="email"
               placeholder="Email address"
               className="form--input"
               name="email"
               onChange={handleChange}
               value={formData.email}
               
            />
            <input type="password"
               placeholder="Password"
               className="form--input"
               name="password"
               value={formData.password}
               onChange={handleChange}
            />
            <input type="password"
               placeholder="Confirm password"
               className="form--input"
               name="confirmPassword"
               value={formData.confirmPassword}
               onChange={handleChange}
            />
            <div className="form--marketing" >
               <input id="okayToEmail"
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
               />
               <label htmlFor="okayToEmail" >I want to join the newsletter</label>
            </div>
            <button className="form--submit"> Sign up </button>
         </form>
      </div>
   )
}