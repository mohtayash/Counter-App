import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value );
    const dispatch = useDispatch();

  return (
    
    <div className="bg-orange-500 flex justify-center items-center flex-col gap-5" >
    <div className='font-medium text-2xl'>Increment & Decrement</div>
      <button 
      onClick={() => dispatch(increment())} className='border-2  text-center  border-white '
      >
        Increment
      </button>
      <br/>
      <br/>

      <div className='text-xl'>{count}</div>

      <br/>
      <br/>

      <button
      onClick={() => dispatch(decrement())} className='border-2  text-center  border-white'
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter
