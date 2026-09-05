import { useState, useEffect } from "react"

const Loja = (props) => {

    const [contadorNota, setContadorNota] = useState(() => {
        const notaSalva = localStorage.getItem("notaLoja")

        if (notaSalva !== null) {
            return Number(notaSalva)
        }

        return 0
    })

    const [editando, setEditando] = useState(() => {
        const notaSalva = localStorage.getItem("notaLoja")

        return notaSalva === null
    })


    useEffect(() => {

        if (!editando) {
            localStorage.setItem("notaLoja", contadorNota)
        }

    }, [contadorNota, editando])


    const salvarNota = () => {

        localStorage.setItem("notaLoja", contadorNota)

        setEditando(false)

    }


    const editarNota = () => {

        setEditando(true)

    }


    return (
        <>

            <div className="mt-6 max-w-md mx-auto flex flex-col gap-y-1 text-2xl text-center">

                <p>Nome: {props.nome}</p>

                <p>Endereço: {props.endereco}</p>

                <p>Cidade: {props.cidade}</p>

                <p>Telefone: {props.telefone}</p>

                <img
                    src={props.imagem}
                    alt={props.titulo || "Imagem da loja"}
                    className="w-170 h-auto mt-6"
                />

                <p>{props.titulo}</p>

                <h1 className="text-5xl font-bold text-center my-4">
                    Nota da Loja: {contadorNota}
                </h1>

            </div>


            <div className="flex flex-row justify-center gap-1.5">

                <button
                    onClick={() =>
                        contadorNota < 10 &&
                        setContadorNota(contadorNota + 1)
                    }
                    disabled={!editando}
                    className="p-6 bg-green-200 rounded-2xl border border-green-400 disabled:opacity-50"
                >
                    Aumentar nota
                </button>


                <button
                    onClick={() =>
                        contadorNota > 0 &&
                        setContadorNota(contadorNota - 1)
                    }
                    disabled={!editando}
                    className="p-6 bg-red-200 rounded-2xl border border-red-400 disabled:opacity-50"
                >
                    Diminuir nota
                </button>

            </div>


            <div className="flex justify-center mt-4">

                {editando ? (

                    <button
                        onClick={salvarNota}
                        className="p-4 bg-blue-200 rounded-2xl border border-blue-400"
                    >
                        Salvar nota
                    </button>

                ) : (

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

export default Loja