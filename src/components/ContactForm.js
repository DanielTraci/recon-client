import React from 'react'

export default function ContactForm(props) {
    const {onSend} = props
    return (
        <div>
            <div>
                <form onSubmit={onSend}>
                <input name="name" type="text" placeholder="enter name"/>
                <input name="email" type="email" placeholder="enter email"/>
                <textarea name="message" rows="5" cols="30" placeholder="Comment text."></textarea>
                <button>submit</button>
                </form>
            </div>
        </div>
    )
}
