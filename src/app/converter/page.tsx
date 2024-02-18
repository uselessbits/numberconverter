"use client"

import { useState } from 'react'
import { checkIfNumberValid } from '../utils'




export default function Page() {


  
  let [number, setNumber] = useState('')
  let [source, setSource] = useState('')
  let [destination, setDestination] = useState('')
  let [result, setResult] = useState('')  


  function division(num: number){
    //Use repeated division to convert the number to the desired base
    let r = "";
    let d = parseInt(destination, 10)

    do{

    r = (num % d).toString(d) + r
    num = Math.floor(num / d)

    }while(num > 0)


    return r
        
  }


  function substitution(num:string){
    //Use substitution to convert the number 
    let r = 0;
    let s = parseInt(source, 10)
    let power = 0;

    for(let i = num.length - 1; i >= 0; i--){
      r += (parseInt(num[i], 10)) * (s ** power)
      power += 1
    }
  
  
    return r.toString()
  }



  function binaryToHex(binary:string) {
    // Pad the binary number with zeros on the left to make its length a multiple of 4
    while (binary.length % 4 !== 0) {
        binary = '0' + binary;
    }

    // Split the binary number into groups of 4 digits
    let groups = binary.match(/.{1,4}/g);

   
    if (groups !== null) {
      // Convert each group to a hexadecimal digit
      let hex = groups.map(group => parseInt(group, 2).toString(16)).join('');

      return hex;
    }

    return '';
  }

function binaryToOctal(binary:string) {
  // Pad the binary number with zeros on the left to make its length a multiple of 3
  while (binary.length % 3 !== 0) {
      binary = '0' + binary;
  }

  // Split the binary number into groups of 3 digits
  let groups = binary.match(/.{1,3}/g);

  
  if (groups !== null) {

    let octal = groups.map(group => parseInt(group, 2).toString(8)).join('');

    return octal;
  }

  return '';
}

function binaryToBase4(binary:string) {
  // Pad the binary number with zeros on the left to make its length a multiple of 2
  while (binary.length % 2 !== 0) {
      binary = '0' + binary;
  }

  // Split the binary number into groups of 2 digits
  let groups = binary.match(/.{1,2}/g);

  if (groups !== null) {
    // Convert each group to a base 4 digit
    let base4 = groups.map(group => parseInt(group, 2).toString(4)).join('');

    return base4;
  }

  return '';
}

function hexToBinary(hex:string) {
  // Convert each hexadecimal digit to a 4-bit binary number(2^4 = 16 values) and concatenate the results
  let binary = hex.split('').map(digit => parseInt(digit, 16).toString(2).padStart(4, '0')).join('');
  return binary;
}
function octalToBinary(octal:string) {
  // Convert each octal digit to a 3-bit binary number(2^3 = 8 values) and concatenate the results
  let binary = octal.split('').map(digit => parseInt(digit, 8).toString(2).padStart(3, '0')).join('');
  return binary;
}
function base4ToBinary(base4:string) {
  // Convert each base 4 digit to a 2-bit binary number(2^2 = 4 values) and concatenate the results
  let binary = base4.split('').map(digit => parseInt(digit, 4).toString(2).padStart(2, '0')).join('');
  return binary;
}

  function handleConversion(){

    //Check if the number is valid in the given base
    if(checkIfNumberValid(number, parseInt(source, 10)) === false){
    setResult('Invalid number in given base')
    return
    }

    //If the source and destination bases are the same, return the number
    if(source === destination){
      setResult(number)
    }
    else if(source === '10'){
      //If the source base is 10, use repeated division to convert the number to the desired base
      setResult(division(parseInt(number, 10)) )
    }
    else if(destination === '10'){
      //If the destination base is 10, use substitution to convert the number to base 10
      setResult(substitution(number))
    }
    else{

      if(source === '2'){
        //If the source base is 2 and the destination base is a power of 2, use rapid conversions
      
        if (destination === '4'){
          setResult(binaryToBase4(number))

        }
        else if (destination === '8'){
          setResult(binaryToOctal(number))
        }
        else if (destination === '16'){
          setResult(binaryToHex(number))
        }

      
      }
      else if(destination === '2'){
        //If the destination base is 2 and the source base is a power of 2, use rapid conversions
        if (source === '4'){

          setResult(base4ToBinary(number))
        }
        else if (source === '8'){
          setResult(octalToBinary(number))
        }
        else if (source === '16'){
          setResult(hexToBinary(number))
        }
      }
      else
      {
      let temp = substitution(number)
      setResult(division(parseInt(temp, 10)))
      }
    }


  }





  return (
    
    <div>
      
      <h1>Converter</h1>
      
      
      <h1>Enter a number</h1>
      <input data-testid="number-input" min='0' value={number} onChange={(e) => setNumber(e.target.value)}></input>
      <h1>From base</h1>
      <input data-testid="source-base-input" type='number' min='0' value={source} onChange={(e) => setSource(e.target.value)}></input>
      
      <h1>To base</h1>
      <input data-testid="destination-base-input" type='number' min='0' value={destination} onChange={(e) => setDestination(e.target.value)}></input>
      <text data-testid="result">Result:{result}</text>
      <button data-testid="submit-button" className='button' onClick={handleConversion}>Submit</button>

       
      </div>

    
    
  )
}
