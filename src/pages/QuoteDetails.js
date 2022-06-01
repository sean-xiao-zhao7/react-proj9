import { Outlet, useParams } from "react-router-dom";

const QuoteDetails = (props) => {
    const id = useParams().id;

    return (
        <div>
            <h1>Quote #{id}</h1>

            <Outlet />
        </div>
    );
};

export default QuoteDetails;
