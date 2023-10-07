import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' defaulValue={"John"}/>
        <FormRow type='text' name='lastName' labelText={"Last Name"}defaulValue={"Smith"}/>
        <FormRow type='text' name='location' defaulValue={"earth"}/>
        <FormRow type='email' name='email' defaulValue={"john@gmail.com"}/>
        <FormRow type='password' name='password' defaulValue={"secret123"}/>

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
