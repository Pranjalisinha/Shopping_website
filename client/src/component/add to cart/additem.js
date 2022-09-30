// add item to cart
export const AddCart = (product) =>{
    return{
        type : 'ADDITEM',
        payload : product
    }
}
// delete item from cart
export const DeleteCart = (product) =>{
    return{
        type : 'DELITEM',
        payload : product
    }
}