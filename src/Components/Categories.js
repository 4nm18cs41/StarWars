import {React} from 'react'
import './component.css';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import Data from './Data';

const Category = () =>
{
    
    return(
        <div className="Content">
            {
                Data.map((data)=>
                {
                    return(
                        <Router>
                            <Link style={{textDecoration:'none'}} to={`/${data.Name}`}>
                            <div className="bodyPosition">
                                <img src={data.Src} alt="Icon" loading="lazy" className="categoryImage"></img>
                                <p className="categoryName">{data.Name}</p>
                            </div>
                            </Link>          
                        </Router>
                    )
                })
            }
        </div>
    )
}
export default Category;
