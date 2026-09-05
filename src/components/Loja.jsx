// Importa o useState e o useEffect do React
import { useState, useEffect } from "react"


// Cria o componente Loja
// O props recebe as informações que vêm de outro componente
const Loja = (props) => {


    // Cria o estado da nota
    // contadorNota = valor atual da nota
    // setContadorNota = função usada para alterar a nota
    // A nota começa em 0
    const [contadorNota, setContadorNota] = useState(() => {

        // Procura no localStorage se existe uma nota salva
        const notaSalva = localStorage.getItem("notaLoja")


        // Se encontrou uma nota salva
        if (notaSalva !== null) {

            // O localStorage salva tudo como texto
            // Number transforma o texto em número
            return Number(notaSalva)
        }


        // Se não encontrou nenhuma nota salva,
        // a nota começa em 0
        return 0
    })


    // Cria um estado para saber se a nota pode ser editada
    // true = pode editar
    // false = não pode editar
    const [editando, setEditando] = useState(() => {

        // Procura uma nota salva no localStorage
        const notaSalva = localStorage.getItem("notaLoja")


        // Se não existe uma nota salva,
        // significa que podemos editar
        return notaSalva === null
    })


    // useEffect é executado quando contadorNota ou editando mudam
    useEffect(() => {

        // Só salva no localStorage quando a edição estiver finalizada
        if (!editando) {

            // Salva a nota no localStorage
            // "notaLoja" é o nome usado para identificar a nota
            localStorage.setItem("notaLoja", contadorNota)
        }

    // Essas são as dependências do useEffect
    // O efeito será executado quando um desses valores mudar
    }, [contadorNota, editando])


    // Função responsável por salvar a nota
    const salvarNota = () => {

        // Salva a nota atual no localStorage
        localStorage.setItem("notaLoja", contadorNota)

        // Depois de salvar, bloqueia a edição
        setEditando(false)
    }


    // Função responsável por liberar a edição novamente
    const editarNota = () => {

        // Permite alterar a nota novamente
        setEditando(true)
    }


    // Retorna o conteúdo que aparecerá na tela
    return (
        <>

            {/* Div com as informações da loja */}
            <div className="mt-6 max-w-md mx-auto flex flex-col gap-y-1 text-2xl text-center">

                {/* Mostra o nome recebido através do props */}
                <p>Nome: {props.nome}</p>

                {/* Mostra o endereço recebido através do props */}
                <p>Endereço: {props.endereco}</p>

                {/* Mostra a cidade recebida através do props */}
                <p>Cidade: {props.cidade}</p>

                {/* Mostra o telefone recebido através do props */}
                <p>Telefone: {props.telefone}</p>


                {/* Mostra a imagem da loja */}
                <img
                    src={props.imagem}
                    alt={props.titulo || "Imagem da loja"}
                    className="w-170 h-auto mt-6"
                />


                {/* Mostra o título da loja */}
                <p>{props.titulo}</p>


                {/* Mostra a nota atual da loja */}
                <h1 className="text-5xl font-bold text-center my-4">
                    Nota da Loja: {contadorNota}
                </h1>

            </div>


            {/* Div que coloca os dois botões lado a lado e centralizados */}
            <div className="flex flex-row justify-center gap-1.5">


                {/* Botão para aumentar a nota */}
                <button

                    // Quando clicar, verifica se a nota é menor que 10
                    // Se for, aumenta a nota em 1
                    onClick={() =>
                        contadorNota < 10 &&
                        setContadorNota(contadorNota + 1)
                    }

                    // Se editando for false, o botão fica desabilitado
                    disabled={!editando}

                    // Classes do Tailwind CSS
                    // disabled:opacity-50 deixa o botão transparente
                    // quando estiver desabilitado
                    className="p-6 bg-green-200 rounded-2xl border border-green-400 disabled:opacity-50"
                >
                    Aumentar nota
                </button>


                {/* Botão para diminuir a nota */}
                <button

                    // Quando clicar, verifica se a nota é maior que 0
                    // Se for, diminui a nota em 1
                    onClick={() =>
                        contadorNota > 0 &&
                        setContadorNota(contadorNota - 1)
                    }

                    // Desabilita o botão quando não estiver editando
                    disabled={!editando}

                    // Classes do Tailwind CSS
                    className="p-6 bg-red-200 rounded-2xl border border-red-400 disabled:opacity-50"
                >
                    Diminuir nota
                </button>

            </div>


            {/* Div que centraliza o botão de salvar/editar */}
            <div className="flex justify-center mt-4">


                {/* 
                    Operador ternário:
                    
                    Se editando for true:
                    mostra o botão "Salvar nota"
                    
                    Se editando for false:
                    mostra o botão "Editar nota"
                */}
                {editando ? (

                    // Botão que salva a nota
                    <button
                        onClick={salvarNota}
                        className="p-4 bg-blue-200 rounded-2xl border border-blue-400"
                    >
                        Salvar nota
                    </button>

                ) : (

                    // Botão que libera a edição
                    <button
                        onClick={editarNota}
                        className="p-4 bg-yellow-200 rounded-2xl border border-yellow-400"
                    >
                        Editar nota
                    </button>

                )}

            </div>

        </>
    )
}


// Exporta o componente Loja
// Assim podemos utilizar esse componente em outros arquivos
export default Loja