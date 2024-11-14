import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';



const Contact = () => {
  const formRef = useRef();

  // Set the form as empty name, email  and message:
  const [form, setForm] = useState({name: '', email: '', message: ''});

  //New State to show/track loading progress of sending message
  const [isLoading, setIsLoading]  = useState(false);

  //handleChange function to handle the changes input into the form
  const handleChange = (e) => {
    // Taking key press event and based off the event calls set form function where it sets across all other form properties and updates to e.target.value
    setForm({...form, [e.target.name] : e.target.value})

   };

  //function to check state if clicked in input field and typing to begin animation of fox to start walking- called once you click on it
  const handleFocus = () => {};


  //Function to handle once you click out of the input fields
  const handleBlur = () => {};

  //Function to handlde submit of Form and attach a ref to it so we can reference the email. Define new ref above. handleSubmit gets the final key press event
  const handleSubmit = (e) => {
    // e.preventDefault to not use default to reload page, then initiate the loading process with setIsLoading to true.
    e.preventDefault();
    setIsLoading(true);

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
      //Clear form afte sent
      setForm({name:'', email: '', message: ''})
      //show success message
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);

    })
  };



  return (
 <section className='relative flex lg:flex-row flex-col max-container'>
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
  </section>
  )
}

export default Contact;
