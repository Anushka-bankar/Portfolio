
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

export const Contact = () => {

   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f3f7c22b-261d-4b18-a7c3-681a6f92fe97");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Form submitted successfully");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently avaliable for new opportunities.I will complete my work more dedicatedly.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>anushkabankar289@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />  <p>7558204077</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Pune</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="Your Name">Your Name</label>
          <input type="text" 
          placeholder='Enter your name'
          name='name'/>
          <label htmlFor="Your Email">Your Email</label>
          <input type="email" 
          placeholder='Enter your email'
          name='email'/>
          <label htmlFor="Your Message">Your Message</label>
          <textarea name="message" 
          rows={8}
          placeholder='ENter your message'></textarea>
          <button type='submit' className='contact-submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
