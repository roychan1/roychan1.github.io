import './hero.css'

function Hero() {
    return (
        <div 
            id="Home"
            className="w-full h-screen bg-cover hero flex p-16"
            style={{
                backgroundImage: "url(test-hero-background.jpg"
            }}>
                <div className='my-auto'>
                    <h1 className='text-5xl mb-2'>Roy Chan</h1>
                    <p className=''>Software Engineer</p>
                </div>
        </div>
    )
}

export default Hero;