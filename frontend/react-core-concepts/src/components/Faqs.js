import React, { useState } from "react";
import "../css/faqs.css";
import arrow from "../assets/icons/arrow-down.png";

function Faqs () {
    const [isOpen, setIsOpen] = useState(false);
    const toggleTrueFalse = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <div onClick={toggleTrueFalse} className={isOpen ? "faqs" : "faqs-closed"}>		
		        <section className="header-faqs">
			        <h4>FAQS</h4>
                    <img src={arrow} alt="arrow" />
		        </section>
		        <div className="faqs-content">			
			        <div className="questions">
				        <div className="question">
					        <div>
						        <h2>¿Protege Champions mi privacidad y mi información?</h2>
						        <p>Somos conscientes de que la seguridad y la privacidad son importantes para ti y, para nosotros, también lo son. Una de nuestras prioridades es ofrecer la mayor seguridad posible, así como garantizar que tu información esté a salvo y que puedas acceder a ella en cualquier momento. Para obtener más información sobre la seguridad online, como lo que puedes hacer para protegeros a ti y a tu familia en Internet, consulta la página de términos y condiciones de Champions.</p>
                            </div> 
                        </div> 
                        <hr></hr>
                        <div className="question">
                            <div>
                                <h2>Eliminación de vídeos y cuentas en Champions</h2>
                                <p>Para evitar que se eliminan los videos y, posiblemente, tu cuenta, te recomendamos asegurarte de tener todos los derechos y permisos necesarios antes de subir un vídeo, revisar y eliminar todos los vídeos en tu cuenta que contengan material con derechos de autor sin la debida autorización y asegurarte de que la dirección de correo electrónico de tu cuenta Champions sea una que revises periódicamente, ya que será donde te enviaremos todos los avisos legales.</p>
                            </div> 
                        </div> 
                        <hr></hr>
                        <div className="question">
                            <div>
                                <h2>Encontré un video que infringe mis derechos de autor en Champions. ¿Qué puedo hacer?</h2>
                                <p>Si eres un titular de derechos de autor y te tropas con un video que infringe tus derechos, porfavor contacta con nosotros a través de nuestro correo electrónico e intentaremos resolverlo cuanto antes.</p>
                            </div> 
                        </div> 
                        <hr></hr>
                        <div className="question">
                            <div>
                                <h2>¿Cómo clasifica Champions el contenido ofensivo, acosador, difamatorio y discriminatorio?</h2>
                                <p>Las directrices indican que no deben incluirse videos ofensivos, que acosen a otras personas o que incluyan lenguaje difamatorio o discriminatorio. Nuestros moderadores eliminarán todos los vídeos que hagan referencia a cualquiera de dichas cuestiones.</p>
                            </div> 
                        </div>
		            </div> 
	        </div> 
        </div>
        </React.Fragment>
    )
}

export { Faqs };