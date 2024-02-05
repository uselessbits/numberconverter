'use client'
import React from 'react'
import { useState } from 'react'

export default function Calculator() {


    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [base, setBase] = useState('')
    const [operator, setOperator] = useState('')


    function add () {

    }
    function sub () {

    }
    function mul () {

    }
    function div () {

    }

    function handleCalculation() {
        let result
        try {
            
            if (operator == '0')
                result = add()
            if (operator == '1')
                result = sub()
            if (operator == '2')
                result = mul()
            if (operator == '3')
                result = div()

        } catch (error) {
            
        }
       
    }


  return (
    <div >
            
        <div>
            <h1>Calculator</h1>
            <h1>First Number</h1>
            <input value={first} onChange={(e) => setFirst(e.target.value)}></input>
            <h1>Second Number</h1>
            <input value={second} onChange={(e) => setSecond(e.target.value)}></input>
            <h1 >Base</h1>
            <input value={base} onChange={(e) => setBase(e.target.value)}></input>

            <select value={operator} onChange={(e)=> setOperator(e.target.value)}>
                <option value='0'>+</option>
                <option value='1'>-</option>
                <option value='2'>*</option>
                <option value='3'>/</option>
            </select>
            <button onClick={handleCalculation}>Submit</button>

        </div>
    </div>
  )
}
