import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("The product has been added to cart.")
        }
        console.log(cart)
    }

    useEffect(() =>{
        fetch(`${process.env.REACT_APP_API_URL}products`)
        .then((res) => res.json())
        .then((json) => {
            setProducts(json.data);
        })

    },[])

    useEffect(() =>{
        // localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
