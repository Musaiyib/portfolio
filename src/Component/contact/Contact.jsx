import './Contact.scss'
import {useState} from 'react'

export default function Contact({removeActive}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [textArea, setTextArea] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault()

        if(name.length < 2){
            console.log("Error")
        }

        if(phone.length < 2){
            console.log("phone number must be more than 10")
        }

        

        // console.log(name);
        // console.log(email);
        // console.log(phone);
        // console.log(textArea);
    }
    
    return (
        <div className="contact" id="contact" onClick={removeActive}>
            <div className="contactWrapper">
                <div className="contactLeft">
                    <div className="contactLeftText">
                        <h2>Aknowledgement</h2><br />
                        <p>This message may take up to 24hrs before reply</p>
                    </div>
                </div>
                <div className="contactRight">
                    <form action="" id="form">
                        <h2>Contact Me</h2><br />
                        <input 
                            type="text"
                            className="input"
                            placeholder="Enter your name"
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                            <br /><br />
                        <input
                            type="email"
                            className="input"
                            name="email"
                            value={email}
                            id="email"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your E-mail address"
                        />
                            <br /><br />
                        <input
                            type="text" 
                            minLength="11"
                            maxLength="15"
                            className="input" 
                            name="phone" id="phone" 
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="Enter your phone number" 
                        />
                        <br /><br />
                        <textarea
                            name="textArea"
                            className="input" 
                            id="textArea" 
                            value={textArea}
                            onChange={e => setTextArea(e.target.value)}
                            placeholder="Say something here..."
                            rows="4"
                        >
                        </textarea>
                        <br /><br />
                        <button id="submit-btn" onClick={handleSubmit}>Send Email</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
