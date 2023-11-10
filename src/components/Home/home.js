
/*import coverimg from "../../assets/coverimg.webp";*/
import sample2 from "../../assets/sample2.png";


const Home = () => {
return (
    <section id="home" className="d-flex justify-content-center">
        <div className="container-fluid">

            <div className="d-flex justify-content-center p-3">
                <h2>Welcome To Our Behavioral Science Laboratory!!!</h2>
            </div>

            <div className="d-flex justify-content-center p-3">
            <img src={sample2} alt="cover" className="cover" width="50%"/>
            </div>

            <div className="d-flex justify-content-center p-3">
                <p>The Behavioral Science Lab at
                    <a href="https://bloomington.iu.edu/index.html" target="_blank" rel="noreferrer" > Indiana University </a> 
                    in the
                    <a href="https://psych.indiana.edu/index.html" target="_blank" rel="noreferrer" > Department of Psychological and Brain Sciences </a> 
                    works at the interface of behavioral economics and cognitive science with a focus on how people make judgments and 
                    decisions and how they can make better judgments and decisions. 
                    Our team, led by 
                    <a href="https://www.timpleskac.com/" target="_blank" rel="noreferrer" > Dr. Tim Pleskac </a> 
                    , is a collaborative group of undergraduate, graduate, post doc, and 
                    community researchers.
                </p>
            </div>
        </div>
    </section>
    )
}
export default Home;