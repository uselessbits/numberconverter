"use client"
import React from 'react'
import { useState } from 'react'


export default function Calculator() {


    let [first, setFirst] = useState('')
    let [second, setSecond] = useState('')
    let [base, setBase] = useState(0)
    let [operator, setOperator] = useState('+')
    let [result, setResult] = useState('')


    function add () {

    
    let len_first = first.length; 
    let a, b, len_a, len_b;
    let len_second = second.length; 
    let sum, s; 
    s = ""; 
    sum = ""; 
    let diff; 
    a=first;
    b=second;
    len_a = a.length; 
    len_b = b.length; 
   

    diff = Math.abs(len_first - len_second); 

    for(let i = 1; i <= diff; i++) 
        s += "0"; 
       
    // Condition to check if the strings 
    // have lengths mis-match 
    if (len_a < len_b) 
        a = s + a; 
    else
        b = s + b; 
   
    let curr, carry = 0; 
       
    // Loop to find the find the sum 
    // of two integers of base B 
    for(let i = Math.max(len_a, len_b) - 1; 
            i > -1; i--) 
    { 
         
        // Current Place value for 
        // the resultant sum 
        curr = carry + (a.charCodeAt(i) - '0'.charCodeAt(0)) + (b.charCodeAt(i) - '0'.charCodeAt(0)); 
   
        // Update carry 
        carry = parseInt(curr / base, 10);
   
        // Find current digit 
        curr = curr % base; 
   
        // Update sum result 
        sum = String.fromCharCode(
            curr + '0'.charCodeAt(0)) + sum; 
    } 
    if (carry > 0) 
        sum = String.fromCharCode(
            carry + '0'.charCodeAt(0)) + sum; 
             
    setResult(sum)
    } 

    function sub() {


        
        let len_first = first.length;
        let len_second = second.length;
        let diff = Math.abs(len_first - len_second);
        let s = "";
        let r = "";
        let a = first;
        let b = second;
        let borrow = 0;
  

        for(let i = 1; i <= diff; i++) {
            s += "0";
        }
    
        if (len_first < len_second) {
            a = s + a;
        } else {
            b = s + b;
        }
    
        for(let i = Math.max(len_first, len_second) - 1; i > -1; i--) {
            let curr = (a.charCodeAt(i) - '0'.charCodeAt(0)) - (b.charCodeAt(i) - '0'.charCodeAt(0)) + borrow;
    
            if (curr < 0) {
                curr += base;
                borrow = -1;
            } else {
                borrow = 0;
            }
    
            r = String.fromCharCode(curr + '0'.charCodeAt(0)) + r;
        }
    
        if (borrow < 0) {
            r = String.fromCharCode(Math.abs(borrow) + '0'.charCodeAt(0)) + r;
        }
    
        setResult(r);
    }


    
    function mul () {


        let carry = 0;
        let r = "";

        for(let i = first.length - 1; i >= 0; i--) {
            let temp = parseInt(first[i], 10) * parseInt(second, 10) + carry;
            r = (temp % base).toString(base)+r;
            carry = Math.floor(temp / base);
          
        }
        if (carry != 0) {
            r = carry.toString(base) + r;
        }
        setResult(r);
    }
    function div () {
        let r = "";
        let temp = 0;
        let digit = parseInt(second, base);
    
        for (let i = 0; i < first.length; i++) {
            temp = temp * base + (first.charCodeAt(i) - '0'.charCodeAt(0));
    
            if (temp < digit) {
                r += "0";
                continue;
            }
    
            let quotient = Math.floor(temp / digit);
            r += quotient.toString();
            temp = temp % digit;
        }
    
        // Remove leading zeros
        r = r.replace(/^0+/, '');
    
        setResult(r);
    }

    function handleCalculation() {
        
        try {
            if (first>=base || second>=base) {
                setResult('Invalid input')
                return
            }
        
            console.log(first, second, base, operator)
            if (operator == '+')
                add()
            if (operator == '-')
                sub()
            if (operator == '*')
                mul()
            if (operator == '/')
                div()

        } catch (error) {
            
        }
       
    }


  return (
    <div >
            
        <div>
            <h1>Calculator</h1>
            <h1>First Number</h1>
            <input type='number' min='0' value={first} onChange={(e) => setFirst(e.target.value)}></input>
            <h1>Second Number</h1>
            <input type='number' min='0' value={second} onChange={(e) => setSecond(e.target.value)}></input>
            <h1 >Base</h1>
            <input type='number' min='0' value={base} onChange={(e) => setBase(e.target.value)}></input>

            <select value={operator} onChange={(e)=> setOperator(e.target.value)}>
                <option value='+'>+</option>
                <option value='-'>-</option>
                <option value='*'>*</option>
                <option value='/'>/</option>
            </select>
            <button className='button' onClick={handleCalculation}>Submit</button>
            <text>Result:{result}</text>

        </div>
    </div>
  )
}
