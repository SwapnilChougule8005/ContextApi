import React,{useState} from "react";
import data from "./data";
import Tours from "./Tours";
import { useTranslations } from "./TranslationContext";

const TextTranslation = () => {

  const [tours, setTours] = useState(data);

const {language, translations} = useTranslations();

  const removeTour = (id) => {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className='Refresh'>
          <h2>{translations.No_Tours_left[language]}</h2>
          <button className='btn-white' onClick={() => setTours(data)}
          >{translations.refresh[language]}</button>
      </div>
    )
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour }/>
    </div>
  )
  
}
  export default TextTranslation;