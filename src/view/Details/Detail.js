import { useEffect, useState } from 'react';
import './Detail.css'
import Card from '../../component/Card/Card';


function Detail(){
    const [data,setData]=useState([])
    const [webName,setWebName]=useState('')
    const[username,setUsename]=useState('')
    const [password,setPassword]=useState('')
    const [note,setNote]=useState('')
    const [edit,setEdit]=useState(false)
    const [id,setId]=useState(0)
    const [filtedata,setFilterdata]=useState([])
    const [search,setSearch]=useState('')
   
    useEffect(()=>{
       const getData=JSON.parse(localStorage.getItem('detail'))
       if(getData && getData.length>0)
       {
        setData(getData)
       }
    },[])
    
    useEffect(()=>{
       const filterdetails=data.filter((obj)=>{
         const query=search.toLowerCase()
         
         return(obj.webName.toLowerCase().includes(query))
       })
       setFilterdata(filterdetails)
    },[data,search])

    const clearInputFileds=()=>{
      setWebName('')
      setUsename('')
      setPassword('')
      setNote('')
    }

   const findIndexById=(taskId)=>{
      let index;
      data.forEach((obj,i)=>{
         if(obj.id===taskId)
         {
            index=i
         }
      })
      return index
   }

    const saveTOLocalStorage=(data)=>{
        localStorage.setItem("detail",JSON.stringify(data))
    }
    const requideFields=()=>{
         if(!webName)
         {
            alert('Enter Web Name')
            return false
         }

         if(!username)
         {
            alert('Enter Web Name')
            return false
         }

         if(!password)
         {
            alert('Enter Web Name')
            return false
         }

         return true
    }

 const adddata=()=>{
   if(requideFields()===false)
   {
      return
   }

    const userId=Math.floor(Math.random() *1000)
    const obj={
        id:userId,
        webName:webName,
        username :username ,
        password:password,
        note:note,
    }
    
    const tempArr=[...data,obj]
    setData(tempArr)
    saveTOLocalStorage(tempArr)
    clearInputFileds()

 }


 const editdata=(id)=>{
   setEdit(true)
      let task;
      setId(id)
     const index= findIndexById(id)
      task=data[index]
    
     setWebName(task.webName)
     setUsename(task.username)
     setPassword(task.password)
     setNote(task.note)

 }

 const updatedata=()=>{
   let index
     index= findIndexById(id)
    
      const tempArr=data
      tempArr[index]={
          id:id,
          webName:webName,
          username:username,
          password:password,
          note:note
      }


      setData([...tempArr])
      saveTOLocalStorage(tempArr)

      setId(-1)
      clearInputFileds()

      setEdit(false)

 }
  
 const removedata=(id)=>{
     let index;
      index= findIndexById(id)

     const tempArr = data
     tempArr.splice(index,1)
    setData([...tempArr])
    saveTOLocalStorage(tempArr)

 }


    return(
        <>
           <div className='contanier'>
            <div className='sub-contanier'>
             {edit ? <h3 className='detail-heading'> Update Detail</h3> : <h3 className='detail-heading'> Add Detail</h3>}
                  <form className='details-form'>
                     <input
                      type='text'
                      value={webName}
                      onChange={(e)=>{setWebName(e.target.value)}}
                      className='input-box'
                      
                      placeholder='Enter Website Name'
                     />
                     <input
                      type='text'
                      value={username}
                      onChange={(e)=>{setUsename(e.target.value)}}
                      className='input-box'
                      placeholder='Enter Username'
                     />
                     <input
                      type='text'
                      value={password}
                      onChange={(e)=>{setPassword(e.target.value)}}
                      className='input-box'
                      placeholder='Enter Password'
                     />
                     <input
                      type='text'
                      value={note}
                      onChange={(e)=>{setNote(e.target.value)}}
                      className='input-box'
                      placeholder='Enter Some Note'
                     />
                    {
                        edit?
                        <button className='btn-login' onClick={updatedata} type='button'>
                          update Detail
                        </button>:
                        
                     <button className='btn-login' onClick={adddata} type='button'>
                     Add Details
                     </button>
                    }
                    
                  </form>
            </div>
            <div className='sub-contanier'>
               <h3 className='detail-heading'>Show Data</h3>
               <div >
                  <input
                  placeholder='Search'
                  value={search}
                  onChange={(e)=>{
                     setSearch(e.target.value)
                  }} 
                  className='input-box'
                  />
                {

                    filtedata.map((obj,index)=>{
                       const {webName,username,password,note,id}=obj
                       return <Card 
                       key={index}
                       id={id}
                       webName={webName} 
                       password={password} 
                       username={username} 
                       note={note}
                       removedata={removedata}
                       editdata={editdata}
                       />
                    })
                }
               </div>
            </div>

           </div>
        </>
    )

}

export default Detail;