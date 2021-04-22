import {React,useState,useEffect} from 'react'
import axios from 'axios'
import './fetchCharacterData.css'
import Button from '../Button/Button'
import CharacterList from '../characterList/characterList'

const FetchCharacterData = ({getCollectedData,id})=>
{
    const [collectedData , setCollectedData]=useState([])
    const [nextUrl ,setNexturl]=useState()
    const [previousUrl , setPreviousUrl]=useState()
    const [loading , setLoading]=useState(true)

    useEffect(()=>{
        getCurrentUrl();
    },[])

    const getCurrentUrl=()=>
    {
        const url=`https://swapi.dev/api/${id}/`
        FetchData(url)
    }

    const FetchData = async(url)=>
    {
        setLoading(true)
            await axios.get(url).then(res=>{
            setLoading(false)
            setCollectedData(res.Data.results)
            setNexturl(res.Data.next)
            setPreviousUrl(res.Data.previous)
            console.log(id)
            console.log(res.data)
        })
    }
    const onPrevious = ()=>
    {
        FetchData(previousUrl)

    }
    const onNext = ()=>
    {
        FetchData(nextUrl)
    }
    if(loading)
    (
        <h2 className="loading">Loading Please Wait....</h2>
    )
    return (
        <>     
        <CharacterList id={id} data={collectedData}/>
        <div className='button-state' >
            {previousUrl?<Button previous={previousUrl} clicked={onPrevious} text='PREVIOUS'/>:null} 
            {nextUrl?<Button previous={previousUrl} clicked={onNext} text='NEXT'/>:null}
        </div>   
        </>
    );
}
export default FetchCharacterData