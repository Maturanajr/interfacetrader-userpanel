import React from 'react'
import './Screen1.css'
import Financial from '../../../../assets/jpg/financial.jpg'

export default function Screen1() {
  return (
    <div className='container'>
        <div className='image'>
            <img src={Financial} alt="" />
        </div>
        <div className='textbox'>
            <div className='textbox-'>
            <h1>
                Você já pensou em receber as operações do seu Trader favorito diretamente em seu computador? <br></br>Executando tudo de forma 100% automática?
            </h1>
            <p>
                Com nosso software de Copy Trade você pode!
            </p>
            </div>
        </div>
    </div>
  )
}
