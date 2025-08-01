import React, { useEffect, useState } from "react";
import "../webstyling/DateTime.css";

export default function DateTime () 
{
    /**create Date object */
    const [ dateTime, setDateTime ] = useState(new Date());
    
    useEffect(() => {
        const time = setInterval(() => setDateTime(new Date()), 1000); //interval in every 1 second
        return () => clearInterval(time); //cleanup
        
    }, []);

    const formatDateTime = (date) => {
        return date.toLocaleString('en-GB',{
            weekday: 'short', 
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        });
    }; 

    return (
        <div className="datetime">
            <i class="fa-solid fa-calendar-days"></i> <span>{formatDateTime(dateTime)}</span>
        </div>
    );  
};