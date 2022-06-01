import { Routes, Route, Navigate } from "react-router-dom";
import QuoteList from "./pages/QuoteList";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";
import Header from "./components/layout/Header";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/quotes" replace />}
                    exact
                />
                <Route path="/quotes" element={<QuoteList />} />
                <Route path="/quote/new" element={<NewQuote />} exact />
                <Route path="/quote/:id" element={<QuoteDetails />}>
                    <Route path="comments" element={<Comments />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
