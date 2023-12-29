import './Card.css'

function Card({webName,username,password,note,removedata,id,editdata}){
   return(
    <>
        <div className='card'>
        <p className='webName'>{webName} </p>
        <p className='note'>{note} </p>
        <p className='username'> Username: {username} </p>
        <p className='password'>Password: {password} </p>
          <span className='remove' onClick={()=>{removedata(id)}}>❌</span>
          <span className='edit' onClick={()=>{editdata(id)}} >📝</span>
        </div>

    </>
   )
}

export default Card;