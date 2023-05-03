import { useParams } from "react-router-dom"
import Section from "../componentes/section"
import './sobre.css'

export default function Sobre(){
    const {id} = useParams()
    
    return(
        <Section titulo="Sobre">    
            <div className="sobre">                      
            <p>A Faculdade de Ciência em Tecnologia - FACIT tem por objetivo essencial conglobar as atividades de ensino, pesquisa e extensão, de difusão científica, técnica e cultural, em todos os níveis e instrumentos técnico-profissionais ou áreas do conhecimento, bem como proporcionar assistência e cooperação técnica, avocar atitude instrutiva em uma sociedade democrática, prestando de mecanismo impulsor de transformação social. Nesse sentido, suas intenções buscam responder aos anseios e às necessidades da comunidade estudantil.
            </p> 
            <p>A FACIT buscará realizar, por meio das áreas de conhecimento e dos cursos que ministra, os seguintes objetivos:

            <p>I – Promover, de forma articulada, o ensino, a pesquisa e a extensão;</p>
            <p>II – Fomentar o desenvolvimento tecnológico, científico, filosófico, literário e artístico coerente com os princípios que orientam a prática institucional da cidadania, liberdade, democracia, responsabilidade, justiça, ética, respeito à vida e ao meio ambiente, comprometimento social, pluralidade, diversidade, criatividade, integração e acessibilidade;</p>
            <p>III – Formar diplomados nas diferentes áreas de conhecimento, aptos para a inserção em setores profissionais e para a participação no desenvolvimento da sociedade brasileira;</p>
            <p>IV – Estimular a criação cultural e o desenvolvimento do espírito científico, empreendedor e do pensamento reflexivo;</p>
            <p>V – Disseminar o conhecimento cultural, científico e tecnológico, por meio do ensino, de publicações científicas e outras formas de divulgação;</p>
            <p>VI – Promover a integração da Faculdade com a comunidade, contribuindo para a democratização do saber e das oportunidades de ensino;</p>
            <p>VII – Promover intercâmbio com organizações culturais, educacionais e técnicas, públicas e privadas, nacionais e internacionais;</p>
            <p>VIII – Incentivar o trabalho da pesquisa e investigação científica, visando ao desenvolvimento da ciência e da tecnologia e da criação e difusão da cultura, e desse modo desenvolver o entendimento do homem e do meio em que vive;</p>
            <p>IX – Desenvolver competências e habilidades profissionais científicas e tecnológicas gerais e específicas;</p>
            <p>X – Propiciar a compreensão e a avaliação dos impactos sociais, econômicos e ambientais resultantes da produção, gestão e incorporação de novas tecnologias;</p>
            <p>XI – Promover o desenvolvimento de uma cultura de educação continuada como recursos importante para permanência no mundo do trabalho e adaptação frente às mudanças deste universo;</p>
            <p>XII – Promover a extensão, aberta à participação da população, visando à difusão das conquistas e benefícios resultantes da criação cultural e da pesquisa científica e tecnológica geradas na instituição.</p>
            </p>

            </div>
               
            <div className="rede">
                <p></p>
                Copyright&copy; 2023 - by Bruno Vaz, Larrysa Moraes e Saind Medeiros 
            </div>  
            



        </Section>
    )
}