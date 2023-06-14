import { PDFDownloadLink } from "@react-pdf/renderer";
import BlogPdf from "../../component/BlogPdf/BlogPdf";
import { FaDownload } from 'react-icons/fa';


const Blog = () => {
    return (
        <div className="py-24">
            <div className="lg:w-1/2 mx-auto w-full">
                <h1 className="text-5xl text-white text-center pb-14 font-bold"> Questions & Answer</h1>
                <div>
                   
                    <div tabIndex={0} className="collapse my-4 collapse-plus border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            Tell us the differences between uncontrolled and controlled components.?
                        </div>
                        <div className="collapse-content">
                            <p>Uncontrolled components: In uncontrolled components, the form data is managed by the DOM itself, rather than by React. The state of the form elements is directly accessed through references to the DOM elements, such as ref in React. This approach is useful for simple forms where you don't need to perform validation or track changes in real-time.
                                Controlled components: In controlled components, the form data is managed by React state. The state variables are used to control the values of the form elements, and React handles the updates and synchronization of the form data. Controlled components are preferred when you need more control over form validation, handling form submissions, or performing dynamic interactions based on user input.</p>


                        </div>
                    </div>

                    
                    <div tabIndex={0} className="collapse my-4 collapse-plus border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            How to validate React props using PropTypes
                        </div>
                        <div className="collapse-content">
                            <p>PropTypes is a package that provides runtime type-checking for React props. To validate React props using PropTypes, you need to follow these steps:
                                Install the prop-types package: npm install prop-types
                                Import PropTypes in your component: import PropTypes from 'prop-types',
                                PropTypes offers a variety of validators for different types, such as string, number, array, object, func, and more. You can also specify if a prop is required using .isRequired.
                            </p>

                        </div>
                    </div>


                    
                    <div tabIndex={0} className="collapse my-4 collapse-plus border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            Tell us the difference between nodejs and express js.
                        </div>
                        <div className="collapse-content">
                            <p>Node.js: Node.js is a runtime environment that allows you to execute JavaScript code on the server-side. It provides a runtime for executing JavaScript outside of a web browser, enabling you to build server-side applications. Node.js uses an event-driven, non-blocking I/O model, which makes it efficient and suitable for building scalable network applications.

                                Express.js: Express.js is a web application framework built on top of Node.js. It provides a set of features and abstractions to make building web applications easier and more organized. Express.js helps with tasks like routing, handling HTTP requests and responses, managing middleware, and more. It provides a simple and intuitive API for building web servers and RESTful APIs.</p>
                        </div>
                    </div>
                    
                    <div tabIndex={0} className="collapse my-4 collapse-plus border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            What is a custom hook, and why will you create a custom hook?  plz give answer with short way
                        </div>
                        <div className="collapse-content">
                            <p>Custom hook: A custom hook is a JavaScript function that starts with the use prefix and utilizes the built-in React hooks or other custom hooks. Custom hooks allow you to reuse stateful logic between components, making it easier to share functionality across your application.

                                Purpose of custom hooks: You would create a custom hook to encapsulate and share common logic or stateful behavior between multiple components. Custom hooks help in avoiding code duplication, improving reusability, and keeping your codebase clean and maintainable. They enable you to abstract away complex logic into reusable functions that can be easily consumed by different components.</p>
                        </div>
                    </div>
                </div>
                <PDFDownloadLink document={<BlogPdf></BlogPdf>} fileName="blog.pdf" className="btn btn-primary"> <FaDownload></FaDownload> Download  </PDFDownloadLink>
            </div>
        </div>
    );
};

export default Blog;