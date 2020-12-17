import React from 'react'
import { Form } from 'react-bootstrap'

export default function Contact() {
    return (
        <div>
            <Form>
                <span>
                <b> Email:  </b>
                <input type='email' required/>
                </span>
                <span>
                <b>
                    Message: 
                </b>
                <textarea required/>
                </span>
                <input type='submit' value='send'/>
            </Form>
        </div>
    )
}
