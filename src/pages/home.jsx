import Section from "../componentes/section"
import './login.css'

export default function Home(){
    return(
        <Section titulo="Quem Somos">
                     
            <div className="imagem">
                <p>A FACIT é uma instituição registrada como faculdade de ensino superior, com CNPJ próprio, e legalizada para atender aos princípios da Legislação vigente, devidamente estruturada, com um corpo docente de alto nível, e que instituição.</p>
                <img src="src\componentes\img\Predio da FACIT.v6.png" alt="fachada" />                 
                 
            </div>
            
            <div className="video">
                <h1>Biblioteca</h1> 
                <p>Empréstimo e devolução das obras em qualquer um dos três campi do IESB. Permite aos alunos fazerem a solicitação das obras localizadas nos outros campi da FACIT, via malote. Veja o video da nossa estrutura: </p>
                <video src="src\componentes\img\videoplayback (1).webm" ></video>   
            </div>   
    
            <div className="contato">
                <form action="call">
                    <h1>Fale Conosco</h1>                   
                    <hr />
                    <label htmlFor="name">Nome Completo
                        <input type="text" required="" size={20} name=""/> </label>
                    <label htmlFor="tel">Telefone
                        <input type="text" required="" size={10} name=""/> </label>
                    <label htmlFor="ES">Email     
                        <input type="text" required="" size={20} name=""/> </label> 
                    <label htmlFor="ES">Mensagem     
                        <input type="text" required="" size={50} name=""/> </label> 
                        <button>Enviar</button>                           
                        <p></p>                 
                </form> 
            </div>  
                    



        </Section>
    )
}

