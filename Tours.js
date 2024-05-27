import React from 'react';
import Card from './Card';
import { useTranslations, } from './TranslationContext';

const Tours = ({tours, removeTour}) => {
  const { translations,language } = useTranslations();

return(
    <div className="container">
        <div>
          <h1 className="title">{translations.plan_with_friends[language]}</h1>
        </div>
        <div className="cards">
            {
                tours.map((tour) =>{
                   return <Card key={tour.id} {...tour} removeTour={removeTour}/>
                } )
            }
        </div>
    </div>
  )
}
export default Tours;