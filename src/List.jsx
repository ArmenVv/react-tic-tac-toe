export default function List(inputs){
    return (
        <>
         {Object.values(inputs).map((input)=><li>{input}</li>)} 
        </>
    )

}