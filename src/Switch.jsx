export default function Switching(e) {
    return(
        <span>
            {
                e.status ? "Turned on" : "Turned off"
            }
        </span>
    )

}