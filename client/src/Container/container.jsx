import { BrowserRouter, Switch, Route } from "react-router-dom";
import Calculator from "../Calculator/Calculator";

const QuestionsListContainer = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path to="/">
              <Calculator />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default QuestionsListContainer;
