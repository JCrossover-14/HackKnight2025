import '../../src/App.css' 
import BankAccounts from './BankAccounts';
import BankAccountsList from './BankAccountsList';
import Balances from './Balances';
import Navbar from './Navbar';
import TransactionDistribution from './TransactionDistribution';
import ForecastTable from './ForecastTable';
function Home(){
    return (<div id = "container">
        <Navbar/>
        <div id = "row-container">
            <div className="column">
                <Balances/>
                <ForecastTable/>
            </div>
            <div className="column">
                <TransactionDistribution/>
                
            </div>
            <div className="column"><BankAccountsList/></div>

        </div>
    </div>);
    
        
}

export default Home; 