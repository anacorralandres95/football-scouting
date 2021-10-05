import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Faqs } from "../components/Faqs.js";
import "../css/payment.css";
import "../css/credit-card.css";


function Payment () {

    const [ cardHolder1, setCardHolder1 ] = useState();
    const [ cardHolder2, setCardHolder2 ] = useState();
    const [ cardHolder3, setCardHolder3 ] = useState();
    const [ cardHolder4, setCardHolder4 ] = useState();
    const [ titular, setTitular ] = useState();
    const [ caducidad1, setCaducidad1 ] = useState();
    const [ caducidad2, setCaducidad2 ] = useState();
    const [ ccv, setCcv ] = useState();


    return (
        <React.Fragment>
            <Header />
            <Faqs />

            <section className="target-payment">
                <h1>PAGO INSCRIPCIÓN · 10€ AL MES</h1>

                <section className="payment">

                <div className="checkout">
                    <div className="credit-card-box">
                        <div className="flip">
                            <div className="front">
                                <div className="chip"></div>
                                    <div className="logo-cc">
                                    <svg version="1.1" id="visa" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

                                            <path d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
                                                    c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01
                                                    c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z
                                                    M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228
                                                    c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77
                                                    c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092
                                                    l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77
                                                    C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304
                                                    C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161
                                                    c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066
                                                    h-3.888L19.153,16.8z" />
                                    </svg>
                                    </div>
                                    <div className="number">{cardHolder1}</div>
                                            <div className="number2">{cardHolder2}</div>
                                            <div className="number3">{cardHolder3}</div>
                                            <div className="number4">{cardHolder4}</div>
                                        <div className="card-holder">
                                            <label>Card holder</label>
                                            <div>{titular}</div>
                                        
                                        </div>
                                        <div className="card-expiration-date">
                                            <label>Expires</label>
                                            <div className="ccv1">{caducidad1}</div>
                                            <div>{caducidad2}</div>


                                        </div>
                                    </div>
                                    <div className="back">
                                        <div clasclassNames="strip"></div>
                                            <div className="logo-cc">
                                                <svg version="1.1" id="visa" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink">
                                                    <path d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
                                                            c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01
                                                            c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z
                                                            M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228
                                                            c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77
                                                            c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092
                                                            l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77
                                                            C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304
                                                            C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161
                                                            c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066
                                                            h-3.888L19.153,16.8z"/>
                                                </svg>
        
                                            </div>
                                            <div className="ccv">
                                                <label>CCV</label>
                                                <div>{ccv}</div>
                                            </div>
                                    </div>
                        </div>
                    </div>
                    <form className="form" autocomplete="off" novalidate>
                        <fieldset className="number-card">
                            <label for="card-number">NÚMERO DE TARJETA</label>
                            <input type="num" id="card-number" className="input-cart-number" maxlength="4" onChange={e => setCardHolder1(e.target.value)} />
                            <input type="num" id="card-number-1" className="input-cart-number" maxlength="4" onChange={e => setCardHolder2(e.target.value)} />
                            <input type="num" id="card-number-2" className="input-cart-number" maxlength="4" onChange={e => setCardHolder3(e.target.value)} />
                            <input type="num" id="card-number-3" className="input-cart-number" maxlength="4" onChange={e => setCardHolder4(e.target.value)} />
                        </fieldset>
                        <fieldset>
                            <label for="card-holder">TITULAR</label>
                            <input type="text" id="card-holder" onChange={e => setTitular(e.target.value)} />
                        </fieldset>
                        <fieldset className="fieldset-expiration">
                            <label for="card-expiration-month">FECHA DE CADUCIDAD</label>
                             <div className="select">
                                <select id="card-expiration-month" onChange={e => setCaducidad1(e.target.value)}>
                                    <option>--</option>
                                    <option>01/</option>
                                    <option>02/</option>
                                    <option>03/</option>
                                    <option>04/</option>
                                    <option>05/</option>
                                    <option>06/</option>
                                    <option>07/</option>
                                    <option>08/</option>
                                    <option>09/</option>
                                    <option>10/</option>
                                    <option>11/</option>
                                    <option>12/</option>
                                </select>
                            </div>
                            <div className="select">
                                <select id="card-expiration-year" onChange={e => setCaducidad2(e.target.value)}>
                                    <option>--</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                </select>
                            </div>
                        </fieldset>
                        <fieldset className="fieldset-ccv">
                            <label for="card-ccv">CCV</label>
                            <input type="text" id="card-ccv" maxlength="3" onChange={e => setCcv(e.target.value)} />
                        </fieldset>
                    </form>
                </div>
             </section>

                <fieldset className="container">
                   <label className="switch" for="checkbox">
                   <input type="checkbox" id="checkbox" />
                   <div className="slider round"></div>
                   </label>
                   <label for="terms">Estoy de acuerdo con todos los términos y condiciones</label>
                </fieldset>

                <section className="enter">
                    <button id="button-enter-login">
                        <Link to="/dashboard">ENVIAR</Link>
                    </button>
                </section>

        </section>

        <Footer />

        </React.Fragment>
    )
}

export { Payment };