
export default function SwitchingStatus(e){
    return (
        <span>
            {
                e.status ? "Turn off" : "Turn on"

            }
        </span>
    )
}