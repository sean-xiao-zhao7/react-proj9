import QuoteListComp from "../components/quotes/QuoteList";

const quotes = [
    {
        id: "asdfasdfasfdasdf",
        author: "adfasdfasdfasdf",
        text: "NavLinkasdfasdfasdfasdfasdf",
    },
    {
        id: "asdfasdfasfd123123",
        author: "adfasdfasdfasdf",
        text: "NavLinkasdfasdfasdfasdfasdf",
    },
    {
        id: "asdfasdfasfdasdf123123",
        author: "adfasdfasdfasdf",
        text: "NavLinkasdfasdfasdfasdfasdf",
    },
    {
        id: "asdfasdfasfdasfd12341",
        author: "adfasdfasdfasdf",
        text: "NavLinkasdfasdfasdfasdfasdf",
    },
    {
        id: "asdfasdfasfdasdf9213",
        author: "adfasdfasdfasdf",
        text: "NavLinkasdfasdfasdfasdfasdf",
    },
    {
        id: "asdfasdfasfdads909sad",
        author: "adfasdfasdfasdf",
        text: "NavLinkasdfasdfasdfasdfasdf",
    },
];

const QuoteList = (props) => {
    return (
        <div>
            <h1>List of Quotes</h1>
            <QuoteListComp quotes={quotes} />
        </div>
    );
};

export default QuoteList;
