"use client"

import { useState } from 'react'
import { checkIfNumberValid } from '../utils'




export default function Page() {


  
  let [number, setNumber] = useState('')
  let [source, setSource] = useState('')
  let [destination, setDestination] = useState('')
  let [result, setResult] = useState('')  


  function division(num){
    
    let r = "";
    let d = parseInt(destination, 10)

    do{

    
    r = (num % d).toString(d) + r
    num = Math.floor(num / d)

    }while(num > 0)


    return r
        
  }


  function substitution(num){
    let r = 0;
    let s = parseInt(source, 10)
    let power = 0;

    for(let i = num.length - 1; i >= 0; i--){
      r += (parseInt(num[i], 10)) * (s ** power)
      power += 1
    }
  
  
    return r.toString()
  }



  function binaryToHex(binary) {
    // Pad the binary number with zeros on the left to make its length a multiple of 4
    while (binary.length % 4 !== 0) {
        binary = '0' + binary;
    }

    // Split the binary number into groups of 4 digits
    let groups = binary.match(/.{1,4}/g);

    // Convert each group to a hexadecimal digit
    let hex = groups.map(group => parseInt(group, 2).toString(16)).join('');

    return hex;
}

function binaryToOctal(binary) {
  // Pad the binary number with zeros on the left to make its length a multiple of 3
  while (binary.length % 3 !== 0) {
      binary = '0' + binary;
  }

  // Split the binary number into groups of 3 digits
  let groups = binary.match(/.{1,3}/g);

  // Convert each group to an octal digit
  let octal = groups.map(group => parseInt(group, 2).toString(8)).join('');

  return octal;
}

function binaryToBase4(binary) {
  // Pad the binary number with zeros on the left to make its length a multiple of 2
  while (binary.length % 2 !== 0) {
      binary = '0' + binary;
  }

  // Split the binary number into groups of 2 digits
  let groups = binary.match(/.{1,2}/g);

  // Convert each group to a base 4 digit
  let base4 = groups.map(group => parseInt(group, 2).toString(4)).join('');

  return base4;
}

function hexToBinary(hex) {
  console.log(hex)
  let binary = hex.split('').map(digit => parseInt(digit, 16).toString(2).padStart(4, '0')).join('');
  return binary;
}
function octalToBinary(octal) {
  let binary = octal.split('').map(digit => parseInt(digit, 8).toString(2).padStart(3, '0')).join('');
  return binary;
}
function base4ToBinary(base4) {
  let binary = base4.split('').map(digit => parseInt(digit, 4).toString(2).padStart(2, '0')).join('');
  return binary;
}

  function handleConversion(){

    if(checkIfNumberValid(number, parseInt(source, 10)) === false){
    setResult('Invalid number in given base')
    return
    }

    if(source === destination){
      setResult(number)
    }
    else if(source === '10'){
      setResult(division(parseInt(number, 10)) )
    }
    else if(destination === '10'){
      setResult(substitution(number))
    }
    else{

      if(source === '2'){
      
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
      <input min='0' value={number} onChange={(e) => setNumber(e.target.value)}></input>
      <h1>From base</h1>
      <input type='number' min='0' value={source} onChange={(e) => setSource(e.target.value)}></input>
      
      <h1>To base</h1>
      <input type='number' min='0' value={destination} onChange={(e) => setDestination(e.target.value)}></input>
      <text>Result:{result}</text>
      <button className='button' onClick={handleConversion}>Submit</button>

       
      </div>

    
    
  )
}
