
import { FaAddressBook, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { Fa42Group } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-dark text-light mt-1 pt-0 admin-footer">
            {/* width control */}
            <div className="container">


                {/* About */}
                {/* <div className="col-md-4 mb-4">
            <p className="text-secondary small">
              A personal blog about web development, technology and thoughts.
            </p>
          </div> */}

                {/* Categories */}
                <hr className="border-secondary" />
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pb-3">
                    <span className="text-secondary small">
                        © {new Date().getFullYear()} SprihanBlog. All rights reserved.
                    </span>

                    <div className="d-flex gap-3 mt-2 mt-md-0">
                        <a href="https://www.facebook.com/share/14ecEanpppd/" target="_blank" className="text-secondary social-icon fb" >
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://vercel.com/sudip103020s-projects" target="_blank" className="text-secondary social-icon yt">
                            <FaAddressBook size={24} />
                        </a>
                        <a href="https://github.com/sudip103020/sprihan-blog" target="_blank" className="text-secondary social-icon gh ">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://sprihan-blog-new.vercel.app" target="_blank" className="text-secondary social-icon gh ">
                            <Fa42Group size={24} />
                        </a>

                    </div>
                </div>

            </div>



            {/* Bottom Bar */}

        </footer>
    );
};

export default Footer;
