import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = (props) => {
    const navigate = useNavigate();

    const onAddQuote = () => {
        navigate("/quotes");
    };

    return (
        <div>
            <h1>Add a new quote</h1>
            <QuoteForm onAddQuote={onAddQuote} />
        </div>
    );
};

export default NewQuote;
