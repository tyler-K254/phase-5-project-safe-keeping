import React, { useState } from 'react';

function Payment(){
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [idOrPassportNumber, setidOrPassportNumber] = useState('')
    const [nationality, setNationality] = useState('');

    const handleFormSubmit = (event) =>{
        event.preventDefault();

        console.log('Full Name:', fullName)
        console.log('Phone Number:', phoneNumber)
        console.log('ID or Passport Number:', idOrPassportNumber);
        console.log('Nationality:', nationality);

        setFullName('')
        setPhoneNumber('')
        setidOrPassportNumber('')
        setNationality('')
    }

    
    return(
        <div className='payment-div'>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>
                    Full name:
                    <input
                    type='text'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    />
                </label>
            </div>
            <div>
                <label>
                Phone Number:
                <input 
                type='tel'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                />
                </label>
            </div>
            <div>
                <label>
                ID or Passport:
                <input 
                type='text'
                value={idOrPassportNumber}
                onChange={(e) => setidOrPassportNumber(e.target.value)}
                required
                />
                </label>
            </div>
            <div>
                <label>
                Nationality:
                <input 
                type='text'
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                required
                />
                </label>
            </div>

            <div className='pay-with-mpesa'>
            Pay with MPESA
            </div>
            <div className='stk-push'>
            An stk push will be sent on your <br /> mobile number Before you proceed, <br />please confirm you have enough money <br /> in your M-Pesa.
            </div>
            <button className='pay-button' type='submit'>Submit and Pay</button>
            
        </form>
        <img className='payment-page-image' src='images/bus-payment-page-image.png' alt='bus-payment-image'/> 
        </div>
         
    )

}

export default Payment