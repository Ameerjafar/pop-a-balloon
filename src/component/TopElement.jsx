import { useState } from "react"

export function TopElement() {
    const [hits, setHits] = useState(0);
    return (
        <div className = 'flex gap-2'>
            <div className = 'w-4/5'>
                <h3 className = 'font-bold'>pop-a-ballon!</h3>
            </div>
            <div className = 'font-bold'>{hits} hits</div>
            <div className = 'w-10 bg-blue-300 rounded-lg text-center'>
                <button className = 'font-bold'>stop</button>
            </div>
        </div>
    )
}