interface Iprops {
    initQuiz: boolean
}

export function Quiz({initQuiz}:Iprops){
    if(!initQuiz){
        return (
            <h2>Clique em cima do Cronometro para iniciar</h2>
        )
    }

    if(initQuiz){
        return (
            <h2>Frase 2</h2>
        )
    }
}