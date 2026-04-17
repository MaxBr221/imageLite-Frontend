'use client'

interface PrimeiroComponenteProps{
    mensage?: String;
    mensageDoBotao?: String;

}

export const PrimeiroComponente: React.FC<PrimeiroComponenteProps>  = (props: PrimeiroComponenteProps) => {


    function botao(){
        alert(props.mensageDoBotao);
    }
    return(
        <div>
            {props.mensage}; 

            <button onClick={botao}>Clique aqui</button>
        </div>
    )
}

export const ArrowFunction = () => {
    return(
        <div>        
            <h2 >Olá arrow</h2>
        </div>
    )
}