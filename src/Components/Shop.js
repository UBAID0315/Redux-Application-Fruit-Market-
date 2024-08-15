import React from 'react'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import { useDispatch } from 'react-redux'

export const Shop = () => {
    const dispatch = useDispatch();  
    const actions = bindActionCreators(actionCreators,dispatch)
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6eluXzxsKXp3MLH4OhirwCrPm2Ivc4hxGQ&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Orange</h5>
                        <p className="card-text">Get a burst of sunshine in every bite with our fresh, juicy oranges—picked at the peak of ripeness for a naturally sweet and tangy flavor!</p>
                        <button className='btn btn-primary mx-4' onClick={()=>{actions.withdrawMoney(100)}}>-</button>
                        1
                        <button className='btn btn-primary mx-4' onClick={()=>{actions.depositMoney(100)}}>+</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGf7scTI1fwqlwr8ybL6vvQv7MxaZaYe52jA&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Strawberry</h5>
                        <p className="card-text">Indulge in the sweetness of summer with our vibrant, juicy strawberries—perfectly ripe and bursting with natural flavor!</p>
                        <button className='btn btn-primary mx-4'>-</button>
                        1
                        <button className='btn btn-primary mx-4'>+</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDLMlIIsJEmaHMA0cpAaOcjbliIyjkfjhg6g&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Apple</h5>
                        <p className="card-text">Crisp, juicy, and full of flavor—our apples are the perfect snack to keep you refreshed and energized all day long!</p>
                        <button className='btn btn-primary mx-4'>-</button>
                        1
                        <button className='btn btn-primary mx-4'>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
