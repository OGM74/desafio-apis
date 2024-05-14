import { useEffect, useState } from "react";
const Lista = ({ busqueda }) => {
    const [feriadosApi, setFeriadosApi] = useState([])
    const URL = "https://www.feriadosapp.com/api/laws.json";
    
    const traerFeriados = async () => {
        try {
            const datos = await fetch(URL)
            const result = await datos.json()
            const feriados = result.data
            setFeriadosApi(feriados);

        } catch (error) {
            console.log("No trae los datos")
        }
    }
    useEffect(() => {
        traerFeriados()
    }, [])
    let feriadosAMostrar = [];
    if (busqueda === "") {
        feriadosAMostrar = feriadosApi
    }
    else {
        feriadosAMostrar = feriadosApi.filter((feriado) =>
            feriado.id.includes(busqueda)
        )

    }
    return (
        <div>
            {
                feriadosAMostrar.map((feriado, id) =>
                (
                    <p key={id}>{`${feriado.id} - ${feriado.content}`}</p>
                )
            )
          }
        
            {feriadosAMostrar.length === 0 ? <p>No se encontaron resultados </p> : ""}
        </div>
    )
}




export default Lista