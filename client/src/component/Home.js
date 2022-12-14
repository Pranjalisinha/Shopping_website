import React from "react";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <>
        <Navbar/>
            <div className="home">
                <div class="card bg-dark text-white">
                    <img class="card-img" src="background_image.jpg" alt="shopping" />
                    <div class="card-img-overlay">
                        <h5 class="card-title display-3">FESTIVE SALE</h5>
                        <p class="card-text lead fs-2">CHECKOUT FESTIVE COLLECTION</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;