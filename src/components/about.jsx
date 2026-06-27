import './about.css'

function About() {
    return (
        <div id="About" className="w-full h-screen block p-16 pt-25 flex flex-col">
            <div className='mt-6'>
                <h1 className='text-7xl mb-2'>Hi, I am Roy!</h1>
                <p>Currently in Orange County, California</p>
            </div>
            <div className='w-full flex m-auto justify-between flex-wrap gap-20'>
                <div className='flex-1 text-left whitespace-nowrap flex gap-6'>
                    <h1 className='text-3xl mb-8'>Experience</h1>
                    <div>
                        <p>SDE II @New American Funding - 2026</p>
                        <p>Founding Engineer @The Event Community - 2025</p>
                        <p>Software Engineer @Aveva - 2024 - 2026</p>
                        <p>SWE Intern @Knobull - 2022</p>
                        <p>UCI Computer Science - 2019 - 2023</p>
                    </div>
                </div>
                <div className='flex-1 text-left whitespace-nowrap flex gap-6'>
                    <h1 className='text-3xl mb-8'>Technology</h1>
                    <div>
                        <p>React</p>
                        <p>Angular</p>
                        <p>Asp.Net / C# / Blazor</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;