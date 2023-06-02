import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";


const FoodCard = ({item}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCart()
    const {user} = useContext(AuthContext)
    const {name, image, price, recipe,_id} =item
    const handleAddToCart = item => {
        console.log(item)
        if(user && user.email){
            const cartItem = {menuItemId: _id,name,image,price,email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch()
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'added to cart successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
               
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'go to login'
              }).then((result) => {
                if (result.isConfirmed) {
                navigate('/login', {state: {from: location}})
                }
              })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-4 px-4">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;