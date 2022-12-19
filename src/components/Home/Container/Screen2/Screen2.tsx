import React from 'react'
import './Screen2.css'
import Financial from '../../../../assets/jpg/financial2.jpg'

export default function Screen1() {
  return (
    <div className='container'>
        <div className='textbox'>
            <div className='textbox-'>
            <h1>
                Você é um Trader de sucesso e deseja replicar suas entradas para outras pessoas?
            </h1>
            <p>
                Com o Copy Trade é muito fácil! <br></br><br></br>Em poucos passos você será capaz de transmitir seus sinais e ainda multiplicar seus ganhos.
            </p>
            </div>
        </div>
        <div className='image'>
            <img src={Financial} alt="" />
        </div>
    </div>
  )
}
