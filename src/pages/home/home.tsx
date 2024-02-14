import './home.css';
import chow from '../../assets/chowchow.webp';
import dogs from '../../assets/theomaya.webp';
import Header from '../../components/header/header';

export default function Home(){
    return(
        <>
        <Header/>
        <main>
            <section>
                <div className='intro-div'>
                <img src={chow} alt='desenho de um cachorro chow chow' />
                <h1> BEM VINDO A CHOWLAND!</h1>
                <h2>o paraíso dos chow chows</h2>
                <p> um site dedicado aos meus queridos cachorros</p>
                <a href='#about'><button> SAIBA MAIS</button></a>
                </div>
            </section>
            <section id='about'>
                <img src={dogs} alt='theo e maya, um chow chow ruivo e uma chow chow canela'/>
                <h1> SOBRE A CHOWLAND</h1>
                <p>Olá! Meu nome é Clara, sou dev front-end,
                    criei esse site em homenagem aos meus cachorros
                    da raça chow chow: os queridos Theo e Maya. 
                    Veja mais informações sobre eles e descubra qual tem mais a sua personalidade!
                </p>
            </section>
        </main>
        </>
    );
}