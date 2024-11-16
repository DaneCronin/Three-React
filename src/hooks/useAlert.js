import {useState} from 'react'

const useAlert = () => {
    //Initiate alert set show to false to not dispaly at the start
    const [alert, setAlert] = useState({show: false, text:'', type: 'danger'})

//showAlert function is set to set the Alert and modify the properties destructured text and type. 
    const showAlert = ({text, type ='danger'}) => setAlert({show: true,
        text, type
    }) 

    //Function to hide alert
    const hideAlert = () => setAlert({show: false,
        text: '', type: 'danger'
    }) 


    
  return { alert, showAlert, hideAlert };
}

export default useAlert;
