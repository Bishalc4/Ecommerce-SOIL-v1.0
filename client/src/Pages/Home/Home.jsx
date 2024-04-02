import "./Home.scss"

//This component is for the home/landing page
function Home() {
    return(
        <div className="home-container">
            <div className="row">
                <div className="overlay">
                    <div className="temp">
                        <h1>SOIL</h1>
                        <p>
                            At Soil, we’re passionate about offering
                            premium, organic, and fresh food. At Soil,
                            we’re passionate about offering premium,
                            organic, and fresh food.
                        </p>
                        <button className="read-more-btn">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home