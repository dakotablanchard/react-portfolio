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
                and interactive communication experiences. The application was created by myself and 3 others, with my focus and main 
                contributions being back end functionallity. This includes tasks such as server routing, authentication, 
                and database communication."
                siteUrl="https://rooms-3226fb27d847.herokuapp.com/login"
                repoUrl="https://github.com/samanthashleyrose/rooms"
            />
            <ProjectRight
                image="/assets/trip-planner.png"
                title="Automated Trip Planner"
                description="This is the first project.
                It is a simple project that demonstrates the use of HTML, CSS, and JavaScript.
                It is a simple project that demonstrates the use of HTML, CSS, and JavaScript.
                It is a simple project that demonstrates the use of HTML, CSS, and JavaScript.
                It is a simple project that demonstrates the use of HTML, CSS, and JavaScript.
                It is a simple project that demonstrates the use of HTML, CSS, and JavaScript."
                siteUrl="https://www.example.com"
                repoUrl="https://www.github.com"
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