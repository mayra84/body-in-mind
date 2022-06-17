import React from 'react'

function ContactForm2() {
    return (
        <div class="container">
            <input type="hidden" name="contact-form" value="name_of_my_form" />
            <form name='contact-form'>
                <div class="row gtr-uniform" style={{}}>
                    <div style={{border: '1px solid grey', borderRadius: '5px', marginBlockEnd: '20px'}} class="col-6 col-12-xsmall"><input style={{padding: '4px', width:'100%'}} type="text" name="name" id="name"
                        placeholder="Name" /></div>
                    <div style={{border: '1px solid grey', borderRadius: '5px', marginBlockEnd: '20px'}} class="col-6 col-12-xsmall"><input style={{padding: '4px', width:'100%'}} type="email" name="email" id="email"
                        placeholder="Email" /></div>
                    <div style={{border: '1px solid grey', borderRadius: '5px', marginBlockEnd: '20px'}} class="col-12"><input style={{padding: '4px', width:'100%'}} type="text" name="subject" id="subject" placeholder="Subject" />
                    </div>
                    <div style={{border: '1px solid grey', borderRadius: '5px', marginBlockEnd: '20px'}} class="col-12"><textarea style={{padding: '4px', width:'100%'}} name="message" id="message" placeholder="Message"
                        rows="6"></textarea></div>
                    <div style={{display: 'flex', justifyContent:'flex-end'}} class="col-12">
                        <ul class="actions">
                            <li style={{ display: 'flex', listStyleType: 'none'}}><input type="submit" class="primary" value="Send Message" style={{cursor: 'pointer',color: 'white', fontWeight: 'bold', backgroundColor: 'teal',borderRadius: '5px', padding: 8}}/></li>
                            {/* <li style={{display: 'flex', listStyleType: 'none'}}><input type="reset" value="Reset Form" style={{fontWeight: '', borderRadius: '5px', padding: 8}}/></li> */}
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm2 