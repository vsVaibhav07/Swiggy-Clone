import Category from "./componenets/Category"
import Header from "./componenets/Header"
import OnlineDelivery from "./componenets/OnlineDelivery"
import TopRes from "./componenets/TopRes"

import { SearchProvider } from "./contexts/SearchContext"

function App() {
 

  return (
    <> 
    <SearchProvider>
    <Header/>
    <Category/>
    <TopRes/>
    <OnlineDelivery/>
    </SearchProvider>
    </>
  )
}

export default App
