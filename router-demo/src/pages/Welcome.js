import { Route } from "react-router";

const Welcome = () => {
  return (
    <section>
      <h1>The welcome page!</h1>
      <Route path="/welcome/new-user">
        <h2>New user</h2>
      </Route>
    </section>
  );
};

export default Welcome;
