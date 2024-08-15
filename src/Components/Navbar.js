import React from 'react'
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const amount = useSelector(state=> state.amount)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Redux Application</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>            
                <button className='btn btn-primary mx-2 my-2'>Your balance is: {amount}</button>
            </div>
        </nav>
    )
}

export default Navbar;
