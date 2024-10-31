import { useEffect, useState } from "react"


export default function WelDay(){

    const [currentHour, setCurrentHours] = useState<number>(0)
    const [currentMinutes, setCurrentMinutes] = useState<number>(0);

    //Creo el useEffect para que se rederice cuando se cargue el componente//
    useEffect(()=>{

        const updateTime =()=>{
        const now: Date = new Date();
        const hours: number = now.getHours();
        const minutes: number = now.getMinutes();

        //Formateo la hora para que siempre tenga dos digitos
         // Almacenamos las horas y minutos como números
        setCurrentHours(hours);
        setCurrentMinutes(minutes);

        console.log(currentHour)
        }
        // Actualizar la hora//
        updateTime();
        //Se actualiza la hora cada minuto
        const intervalId = setInterval(updateTime, 60000)

        //Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);

        
    },[])

    return(
        <div>
            <h3>{currentHour > 20 ? 'Buenas noches':'Buenos días' }</h3>
        </div>
    )
}