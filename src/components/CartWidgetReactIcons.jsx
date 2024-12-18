import { BsCart4 } from "react-icons/bs";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext, useCart } from "../context/CartContex";

const CartWidgetReactIcons = () => {  
    
    const {cartQuantity} = useCart()
    
    return(
        <div>
            <BsCart4 fontSize={'2rem'}/>
           {cartQuantity() > 0 &&  <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>
    )
}

export default CartWidgetReactIcons 