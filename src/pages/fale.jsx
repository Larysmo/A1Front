import Section from "../componentes/section"
import '../pages/fale.css'
export default function fale(){
    
    return(
        <Section titulo="Fale Conosco">
            <div className="contato">
                <form action="call">              
                   
                    <label htmlFor="name">Nome Completo
                        <input type="text" required="" size={20} name=""/> </label>
                    <label htmlFor="tel">Telefone
                        <input type="text" required="" size={10} name=""/> </label>
                    <label htmlFor="ES">Email     
                        <input type="text" required="" size={20} name=""/> </label> 
                    <label htmlFor="ES">Mensagem     
                        <input type="text" required="" size={50} name=""/> </label> 
                </form>
                <button>Enviar</button>                                           

            </div>  
                  

        </Section>
    )
}