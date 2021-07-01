import React from 'react'
import ContactForm from './ContactForm'

export default function ContactPage(props) {
    const {onSend} = props
    return (
        <div>
            <h1>As soon as we see your message, we will put our black hoodies on and we will get back to you</h1>
            <div>
                <ContactForm onSend={onSend}/>
            </div>
        </div>
    )
}
