import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const ContactDetails = () => {
  return (
    <div className="contact-details container mx-auto p-6">
      
      <div className="links text-center mb-6">
        <p className="text-lg mb-2">For inquiries, reach us through the following:</p>
        <div className="   list-none ">
          <li><a href="mailto:Gowrav@.com" className="text-center contact text-blue-600 hover:underline">Email: info@gowrav.com</a></li>
          <li><a href="tel:+91 881222" className="text-center d-flex justify-center text-blue-600 hover:underline">Phone: +91 87123344444</a></li>
        </div>
      </div>

      <div className="social-icons text-center">
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-blue-600 hover:text-blue-800 hover:scale-110 transition-transform duration-300"
              size="2x"
            />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-pink-600 hover:text-pink-800 hover:scale-110 transition-transform duration-300"
              size="2x"
            />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-red-600 hover:text-red-800 hover:scale-110 transition-transform duration-300"
              size="2x"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
