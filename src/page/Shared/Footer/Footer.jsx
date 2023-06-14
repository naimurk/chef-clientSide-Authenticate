

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Blog</a>
                
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                   <h1 className="text-4xl lg:text-5xl text-center text-white">AT Chef</h1>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by At Chef Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;