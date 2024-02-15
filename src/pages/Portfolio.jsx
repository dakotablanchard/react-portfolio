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
                description="
                Welcome to Blog!, where expressing your thoughts and engaging with a community of like-minded individuals 
                is made effortlessly accessible. Built on a foundation of robust technologies including Node.js, Express.js, and 
                Express-Handlebars, this platform empowers users to create a personalized account, craft and publish blog posts, 
                and seamlessly manage their content with easy editing and deletion options. The integration of Bootstrap ensures 
                a visually appealing and responsive design, while Express-Session ensures a secure and user-friendly authentication 
                process. Leveraging the power of MySQL and Sequelize for database management, along with Bcrypt for enhanced security, 
                Blog! offers a dynamic space for sharing ideas and fostering discussions through user-friendly functionalities 
                and a welcoming environment. This application was a solo project, entierly developed and crafted by myself."
                siteUrl="https://blogs2699-da34bb89b786.herokuapp.com/home"
                repoUrl="https://github.com/dakotablanchard/blog-site"
            />
        </div>
    );
};

export default Portfolio;