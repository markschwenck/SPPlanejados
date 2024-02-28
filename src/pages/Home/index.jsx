import styles from '../Home/Home.module.css'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'


function Home() {
    return (
        <>
            <Header/>
            
            <container className= {styles.container}>
            <main>
                
                
                    <h1>Você sonha, a gente projeta, realiza e instala! </h1>
                
                 
            </main>
                
            <div>

                <span>
                    <h2>Organização</h2>
                        <p>
                        A principal vantagem dos móveis planejados é a organização que ele confere ao ambiente, tornando possível dispor todos os objetos de forma racional e prática.
                        Um bom exemplo disso é a cozinha: nesse ambiente, os móveis planejados são mais famosos e funcionais, pois contribuem para o armazenamento dos utensílios como panela e eletrodomésticos, além de alimentos, entre outros.
                        </p>
                </span>

                <span>
                    <h2>Acabamento</h2>
                        <p>
                        Por ser feito sob medida para cada cliente e para cada situação, o móvel planejado apresenta um melhor acabamento. 
                        Além disso, há a possibilidade de personalizar o móvel de acordo com a situação e o perfil do cliente, dando a ele um caráter único.
                        De forma geral, móveis prontos são produzidos em escala industrial, utilizando materiais de padrão industrial e, portanto, qualidade menor.
                        </p>
                </span>

                <span>
                    <h2>Custo-benefício</h2>
                        <p>
                        O custo-benefício é uma relação entre preço e qualidade do produto, de forma geral. 
                        Muitas pessoas têm receio de comprar móveis planejados pelo preço ser, geralmente, mais alto quando comparado ao de móveis comprados prontos. 
                        Entretanto, para se chegar a essa conclusão, não se analisa todas as variáveis que incidem sobre a decisão, como a qualidade dos móveis e a durabilidade, que favorecem os móveis planejados.
                        </p>
                </span>
                
            </div>
                
            </container>

            <Footer/>
        </>
    )
}

export default Home