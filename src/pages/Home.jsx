import Header from '../components/Header';
import '../css/header.css';
import '../css/App.css';

const Home = () => {
    return (
        <div>
            <section className="skills">
                <div id='front-end'>
                    <h2>Front-End Design</h2>
                    <p>Stunning visuals and
                        great design are things
                        that catch a customers
                        eyes.</p>
                </div>
                <div id='back-end'>
                    <h2>Back-End Functionality</h2>
                    <p>Fast response time and quick
                        results are key for getting
                        your website to behave correctly</p>
                </div>
                <div id='results'>
                    <h2>Quality Results</h2>
                    <p>Always on time and will
                        put your requests on the top
                        of my to-do list</p>
                </div>
            </section>
            <section className="recent-work-home">
                <h1>Recent Work</h1>
                <div className='work-container'>
                    <div>
                        <a href="https://rooms-3226fb27d847.herokuapp.com/login">
                            <img className='imgs-home' src="/assets/rooms.png" alt="rooms" />
                        </a>
                    </div>
                    <div>
                        <a href="https://dakotablanchard.github.io/trip-planner/">
                            <img className='imgs-home' src="/assets/trip-planner.png" alt="trip-planner" />
                        </a>
                    </div>
                    <div>
                        <a href="https://blogs2699-da34bb89b786.herokuapp.com/home">
                            <img className='imgs-home' src="/assets/blog.png" alt="blog" />
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;