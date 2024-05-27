import{useState} from 'react';
import { useTranslations } from './TranslationContext';

const Card = ({id, image, info, prise, name, removeTour}) => {
    const [readMore, setReadMore] = useState(false);
    const description = readMore ? info : `${ info.substring(0,200)}....`;

    const {language, translations} = useTranslations();
  const readMoreHandler = () => {
           setReadMore(!readMore);
    }
 
    return (
        <div className="card">
            <img src={image} className="image" alt={name}/>
 
         <div className="tour-info">
            <div className="tour-details">
               <h4 className="tour-prise">${prise}</h4>  
               <h4 className="tour-name">{name}</h4>      
            </div>

            <div className="description  ">
                {description}
                <span className="read-more" 
                onClick={readMoreHandler}>
               
                    {readMore ? translations.show_less[language] : translations.read_more[language]}
                </span>
            </div>
        </div>  

            <div className="btn-red" onClick={() => removeTour(id)}>
                <button>{translations.not_interested[language]}</button>
            </div>
        </div>
    )
}

export default Card;