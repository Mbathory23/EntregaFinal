
const CartWidget = ({counter}) => {
    //console.log(props)
    return(
        <div className="cartWidgetContainer">
            <img src='./carrito.png' alt='cart' className="cartIcon"/>
            <p className="cartCounter">{counter}</p> 
        </div>
    )
}

export default CartWidget   