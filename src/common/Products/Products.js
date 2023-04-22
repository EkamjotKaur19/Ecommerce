import React, {useState, useEffect} from 'react'
import "./Products.css"

const Products = ({darkMode}) => {
    const [data, setData]=useState([]);
    const [filte$, setFilter]=useState(data);
    const [loading, setLoading]=useState(false);
    let componentMounted=true;

    useEffect(()=>{
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filte$);
            }

            return () => {
                componentMounted=false;
            }

        }
        getProducts();
    }, []);

    const filterProduct=(cat)=>{
        const updatedList= data.filter((x)=> x.category===cat);
        setFilter(updatedList);
    }

    const Loading =()=>{
        return (
            <>
                LOADING...
            </>
        )
    }

    const ShowProducts=()=>{
        return (
            <>
            <div className='filter-section'>
                <button type="button" className="btn btn-outline-dark me-2 filter" onClick={()=>setFilter(data)} >All</button>
                <button type="button" className="btn btn-outline-dark me-2 filter" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                <button type="button" className="btn btn-outline-dark me-2 filter" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                <button type="button" className="btn btn-outline-dark me-2 filter" onClick={()=>filterProduct("jewelery")}>Jewellery</button>
                <button type="button" className="btn btn-outline-dark me-2 filter" onClick={()=>filterProduct("electronics")}>Electronics</button>
            </div>

            <div className={darkMode?'flash-dark container box-pdt' : "container box-pdt"}>
            <div className={darkMode?'flash-dark row row-box':"row row-box"}>
                {filte$.map((product)=>{
                    
                return(
                        <div className={darkMode?'flash-dark col-md-4 mb-2 mt-2 mr-4 ml-4 box2-pdt' : 'col-md-4 mb-2 mt-2 mr-4 ml-4 box2-pdt'} key={product.id}>
                            <div className={darkMode?'flash-dark card text-center cardss':"card text-center cardss"}>
                                <img src={product.image} className={darkMode?'flash-dark card-img-top' :'card-img-top'} alt={product.title}  height="250px" />
                                
                            </div>
                            <div className={darkMode?'flash-dark card-body' :"card-body"}>
                                    <h5 className="card-title mb-0 name">
                                        {product.title.substr(0,19)}
                                    </h5>
                                    <p className="card-text lead fw-bold price">
                                        Rs {product.price*100}
                                    </p>
                                        <button className='btn-text'>Buy Now</button>
                                </div>
                        </div>
                )
                })}
            </div>
            </div>
            </>
        )
    }

  return (
    <>
        {loading? <Loading /> : <ShowProducts />}
        
    
            
    </>
  )
}

export default Products
