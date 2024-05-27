import React from 'react';
import SwitchLanguage from './SwitchLanguage';
import PageRefresh  from './pageRefresh';
import { TranslationProvider } from './TranslationContext';

const App = () => {
  return(
    <TranslationProvider>
      <div>
       <SwitchLanguage/>
       <PageRefresh/>
     </div>
    </TranslationProvider>
   ) 
}
export default App;
 

