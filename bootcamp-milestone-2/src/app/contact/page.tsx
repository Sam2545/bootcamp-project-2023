"use client"
import React, { useState } from "react";
import style from "./contact.module.css";
import emailjs from "@emailjs/browser";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e:any) => {
        e.preventDefault();

        const serviceID = "service_6ht5plr";
        const templateID = "template_q90sujf";
        const publicKey = "ocbcEoUEGdlvrZiDT";

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Sameer",
            message: message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.log("Error sending email: ", error)
            });
    }

    return (
        <header>
            <h1 className={style.page_title} >Contact Me</h1>
            <div className={style.background}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <label className={style.label} htmlFor="name">Name</label>
                    <input 
                        className={style.input} 
                        type="text" 
                        id="name" 
                        value={name}
                        placeholder="Name" 
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                    <label className={style.label} htmlFor="email" >Email</label>
                    <input className={style.input} type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
                    <textarea className={style.textarea} value={message} placeholder="Type Message"
                     required
                     onChange={(e) => setMessage(e.target.value)}
                     ></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </header>
    );
}