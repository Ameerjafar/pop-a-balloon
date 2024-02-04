import { useSpring, animated } from "react-spring";
export function BalloonComponent() {
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })
    return (
        <animated.div style = {props}>
            <div>
                <h3 className = 'text-center font-bold'>Click a button to score</h3>
                <div className = 'flex justify-center gap-3 p-10 pt-15'>
                    <div className = 'bg-gray-100 h-32 w-52 rounded-lg'>

                    </div>
                    <div className = 'bg-gray-100 h-32 w-52 rounded-lg'>

                    </div>
                    <div className = 'bg-gray-100 h-32 w-52 rounded-lg'>

                    </div>
                </div>
                <div className = 'flex justify-center gap-3'>
                    <div className = 'bg-gray-100 h-32 w-52 rounded-lg'>

                    </div>
                    <div className = 'bg-gray-100 h-32 w-52 rounded-lg'>

                    </div>
                    <div className = 'bg-gray-100 h-32 w-52 rounded-lg'>

                    </div>
                </div>  
            </div>
        </animated.div>
    )
}