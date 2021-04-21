import {React} from 'react'
import './categories.css';
import {Link} from 'react-router-dom'
import Data from '../Data';
import Navbar from '../HeaderFooter/NavBar'

const Categories = () =>
{
    
    return(
        <>
        <header>
        <Navbar />
        </header>
        <div className="Content">
            {
                Data.map((data)=>
                {
                    return(
                            <Link style={{textDecoration:'none'}} to={`/${data.Name}`}>
                            <div className="bodyPosition">
                                <img src={data.Src} alt="Icon" loading="lazy" className="categoryImage"></img>
                                <p className="categoryName">{data.Name}</p>
                            </div>
                            </Link>          
                    )
                })
            }
        </div>
    </>
    )
}
export default Categories;
