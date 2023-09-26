import { TansactionsForm } from 'components/TransactionForm/TransactionsForm';

const Home = () => {
  return (
    <section className="home_section">
      <div className="transaction_main_wrapper">
        <div className="list_header">
          <div>Date</div>
          <div>Type</div>
          <div>Category</div>
          <div>Comment</div>
          <div>Sum</div>
        </div>
      </div>
    <TansactionsForm />
    </section>
          
  );
};

export default Home;
