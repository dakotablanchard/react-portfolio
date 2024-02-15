import { ProjectLeft, ProjectRight } from "../components/Project";

const Portfolio = () => {
    return (
        <div>
            <ProjectLeft
                image="/assets/rooms.png"
                title="Rooms"
                description="
                Rooms is a dynamic and user-friendly application designed for seamless real-time communication. 
                Users can easily create an account, join existing rooms, or create their own private spaces to 
                facilitate live conversations with friends or colleagues. Leveraging the power of WebSocket technology through Socket.io, 
                the app ensures instantaneous and smooth communication. Built on the robust Express framework and utilizing 
                Handlebars for efficient templating, Rooms provides an intuitive platform for users to connect, share, 
                and engage in real-time conversations, making it a versatile and engaging solution for those seeking instant 
                and interactive communication experiences. The application was created by myself and three others, with my focus and main 
                contributions being back end functionallity. This includes tasks such as server routing, authentication, 
                and database communication."
                siteUrl="https://rooms-3226fb27d847.herokuapp.com/login"
                repoUrl="https://github.com/samanthashleyrose/rooms"
            />
            <ProjectRight
                image="/assets/trip-planner.png"
                title="Automated Trip Planner"
                description="
                This automated trip planner is a user-friendly application that simplifies the travel planning process. 
                Whether you're looking for dining, sightseeing, or adventure, this app streamlines the itinerary creation by 
                allowing users to input their preferences and desired locations. The app leverages the power of OpenAI's chat 
                completion API to generate personalized suggestions and ideas, additionally, it integrates the Google Places 
                autocomplete API to enhance the user experience by providing accurate location suggestions. Please note that to access the 
                full potential of this app, 
                users will need to obtain an OpenAI key, ensuring a tailored and efficient trip planning experience. 
                This app was also team build by myself and two others. My contribution for this project was focusing on the front 
                end, utilizing the Materialize CSS framework for a sleek and responsive design."
                siteUrl="https://dakotablanchard.github.io/trip-planner/"
                repoUrl="https://github.com/dakotablanchard/trip-planner"
            />
            <ProjectLeft
                image="/assets/blog.png"
                title="Blog!"
                description="This is the first project.
                It is a simple project that demonstrates the use of HTML, CSS, and JavaScript.
                It is a simple project that demonstrates the use of HTML, CSS, and JavaScript.
                It is a simple project that demonstrates the use of HTML, CSS, and JavaScript.
                It is a simple project that demonstrates the use of HTML, CSS, and JavaScript.
                It is a simple project that demonstrates the use of HTML, CSS, and JavaScript."
                siteUrl="https://www.example.com"
                repoUrl="https://www.github.com"
            />
        </div>
    );
};

export default Portfolio;