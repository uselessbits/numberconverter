"use client"
import React from 'react'
import { useState } from 'react'
import { checkIfNumberValid } from '../utils'


export default function Calculator() {

    //Declare the state variables, and the functions to update them via React hooks
    let [first, setFirst] = useState('')//String
    let [second, setSecond] = useState('')//String
    let [base, setBase] = useState(0)//Int
    let [operator, setOperator] = useState('+')//String
    let [result, setResult] = useState('')//String


    function add () {

    //Initialise the variables
    let len_first = first.length;//Int 
    let a, b, len_a, len_b;//Int
    let len_second = second.length;//Int 
    let sum, s; //Strings
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
    // if they do etend the length of the smaller string 
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
         
        // Current value of the sum 
        curr = carry + (a.charCodeAt(i) - '0'.charCodeAt(0)) + (b.charCodeAt(i) - '0'.charCodeAt(0)); 
   
        // Update carry 
        carry = curr / base;
   
        // Find current digit 
        curr = curr % base; 
   
        // Update sum result 
        sum = String.fromCharCode(
            curr + '0'.charCodeAt(0)) + sum; 
    } 
    //If there is a carry left over, add it to the front of the number
    if (carry > 0) 
        sum = String.fromCharCode(
            carry + '0'.charCodeAt(0)) + sum; 
             
    sum = sum.replace(/^0+/, '');
    setResult(sum)
    } 

    function sub() {
        //Check if the first number is greater than the second number

        if(first < second) {
            setResult('First Number must be greater than second number')
            return
        }
        let len_first = first.length;//Int
        let len_second = second.length;//Int
        let diff = Math.abs(len_first - len_second);//Int
        let s = "";//String
        let r = "";//String
        let a = first;//String
        let b = second;//String
        let borrow = 0;//Int
  


        // Condition to check if the strings 
        // have lengths mis-match
        // if they do etend the length of the smaller string 
        for(let i = 1; i <= diff; i++) {
            s += "0";
        }
    
        if (len_first < len_second) {
            a = s + a;
        } else {
            b = s + b;
        }
    
        for(let i = Math.max(len_first, len_second) - 1; i > -1; i--) {
            
            //Calculate the difference between the two numbers
            //and update the borrow if necessary
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
        r = r.replace(/^0+/, '');
        setResult(r);
    }


    
    function mul () {

        //Check if second number is digit
        if(second.length != 1){
            setResult('Second number must be a single digit')
            return
        }
        let carry = 0;//Int
        let r = "";//String

        //Iterate through each digit of the first number and multiply it by the second number
        for(let i = first.length - 1; i >= 0; i--) {
            let temp = parseInt(first[i], 10) * parseInt(second, 10) + carry;
            //add the result(modulo base) to the front of the number
            r = (temp % base).toString(base)+r;
            carry = Math.floor(temp / base);
          
        }
        if (carry != 0) {
            r = carry.toString(base) + r;
        }
        setResult(r);
    }
    function div () {


        if(second.length != 1){
            setResult('Second number must be a single digit')
            return
        }

        let r = "";//String
        let temp = 0;//Int
        let digit = parseInt(second, base);//Int
    
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
            if (checkIfNumberValid(first, base) == false || checkIfNumberValid(second, base) == false) {
                setResult("Numbers don't exist in the given base")
                return
            }
        
            //Determine the type of operation and act accordingly
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
            <input type='number' min='0' value={base} onChange={(e) => setBase(parseInt(e.target.value,10))}></input>

            <select value={operator} onChange={(e)=> setOperator(e.target.value)}>
                <option value='+'>+</option>
                <option value='-'>-</option>
                <option value='*'>* (second number must be digit)</option>
                <option value='/'>/ (second number must be digit)</option>
            </select>
            <button className='button' onClick={handleCalculation}>Submit</button>
            <text>Result:{result}</text>

        </div>
    </div>
  )
}
