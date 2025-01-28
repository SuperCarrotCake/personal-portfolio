import profilePicture from '../assets/images/profilePicture.jpg';

function Hero(){
    return(
        <section className="hero">
            <div className="container flex-center">
                <img 
                    src={profilePicture} 
                    srcSet={`${profilePicture}?w=512 512w`}
                    sizes="512px"
                    alt="Nicols Rojas"
                    className="profile-picture"
                />
                <h1>Nicols Rojas</h1>
            </div>
        </section>
    );
}

export default Hero;