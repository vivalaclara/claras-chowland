import { Link } from "react-router-dom";
import { PawPrint } from "@phosphor-icons/react";
import './header.css'

export default function Header(){
    return(
        <>
        <header className="header">
            <div className="logo">
                <Link id='logolink' to="/"> <PawPrint size={32} weight="fill" /> CHOWLAND</Link>
            </div>

            <div className="navs">
                <Link to="/"> FAÇA O QUIZ</Link>
            </div>

        </header>
        </>
    );
}