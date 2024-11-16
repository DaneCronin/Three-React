import React, {Suspense, useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Fox from '../models/Fox';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';


const Contact = () => {
  const formRef = useRef();

  // Set the form as empty name, email  and message:
  const [form, setForm] = useState({name: '', email: '', message: ''});

  //New State to show/track loading progress of sending message
  const [isLoading, setIsLoading]  = useState(false);

  //Define Animation states with the current animation set to Idle at the start
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  //Import custom Alert Hook
  const { alert, showAlert, hideAlert} = useAlert();


  //handleChange function to handle the changes input into the form
  const handleChange = (e) => {
    // Taking key press event and based off the event calls set form function where it sets across all other form properties and updates to e.target.value
    setForm({...form, [e.target.name] : e.target.value})

   };

  //function to check state if clicked in input field and typing to begin animation of fox to start walking- called once you click on it
  const handleFocus = () => setCurrentAnimation('walk');


  //Function to handle once you click out of the input fields
  const handleBlur = () => setCurrentAnimation('idle');

  //Function to handlde submit of Form and attach a ref to it so we can reference the email. Define new ref above. handleSubmit gets the final key press event
  const handleSubmit = (e) => {
    // e.preventDefault to not use default to reload page, then initiate the loading process with setIsLoading to true.
    e.preventDefault();
    setIsLoading(true);
    // Set the animation to run when form is sent
    setCurrentAnimation('hit');

    //Sending all info from form to our email with emailjs and its an asynchronous operation so need .then
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Dane",
        from_email: form.email,
        to_email: 'danecronin@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ) .then(() => {
      //set loading to false because it is complete, add success message
      setIsLoading(false);

      //create a custom Hook - linked to hooks folder files to set an alert. Allows use of same custom alert hook multiple times across project
      showAlert({ show: true, text: 'Message sent successfully!', type: 'success'})

      //Callback function to stop fox from running and go back to idle after a specified timeout period after 3 seconds.
      setTimeout(() => {
        setCurrentAnimation('idle');
        hideAlert();
         //Clear form after sent
        setForm({name:'', email: '', message: ''})
      }, [3000])
     
      
      //show success message
    }).catch((error) => {
      setIsLoading(false);
      // Set current animation back to idle after form is sent
      setCurrentAnimation('idle');
      console.log(error);
      showAlert({ show: true, text: 'Message did not send!', type: 'danger'})

    })
  };



  return (
 <section className='relative flex lg:flex-row flex-col max-container'>
 {/* Show Alert if Message sent/ not sent - if show alert is true, then render component and pass all of the alert properties ...alert and this alert is a separate component */}
 {alert.show && <Alert {...alert}/>}
  <div className='flex-1 min-w-[50%] flex flex-col'>
    <h1 className='head-text'>Get in Touch</h1>

    <form className='flex w-full flex-col gap-7 mt-14' 
          onSubmit={handleSubmit}>
      <label className='text-black-500 font-semibold'>
        Name
        <input type='text' name='name' required className='input' placeholder='John' value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
      </label>

      <label className='text-black-500 font-semibold'>
       Email
        <input type='email' name='email' required className='input' placeholder='John@gmail.com' value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
      </label>


      <label className='text-black-500 font-semibold'>
      Your Message
        <textarea  name='message' rows={4} required className='textarea' placeholder='Enter your message' value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
      </label>

<button type='submit' className='btn' disabled={isLoading} onFocus={handleFocus} onBlur={handleBlur}>
{/* check if button has been clicked and is loading, else show button "send message" */}
{isLoading ? "Sending..." : "Send Message"}

</button>

    </form>
  </div>

  <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
  <Canvas
    camera={{
      position: [0, 0, 5],
      fov: 75,
      near: 0.1,
      far: 1000
    }}>
      <directionalLight intensity={2.5} position={[0, 0, 1]}/>
      <ambientLight intensity={0.5}/>
      <Suspense fallback = {Loader}>
        <Fox
        // Pass Animation state to Fox object
        currentAnimation={currentAnimation}
          position= {[0.5 , 0.35, 0]}
          rotation = {[12.6, -0.6 ,0]}
          scale = {[0.5, 0.5, 0.5]}
          />
      </Suspense>

  </Canvas>

  </div>
  </section>
  )
}

export default Contact;
