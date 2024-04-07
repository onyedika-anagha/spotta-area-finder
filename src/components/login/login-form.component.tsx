import Button from "components/button/button.component";
import FormInput from "components/form-input/form-input.component";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { emailSignInStart } from "store/user/user.action";

const defaultFormField = {
  email: "",
  password: "",
};

function LoginForm() {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const resetForm = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));

      resetForm();
    } catch (error) {
      // auth/user-not-found

      console.log(error);
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <form
      className="space-y-3"
      onSubmit={handleSubmit}>
      <h5 className="text-xl mb-6 text-center font-medium text-gray-900 dark:text-white">
        Log in
      </h5>
      <div>
        <FormInput
          type="email"
          name="email"
          id="email"
          className="bg-[#F3F7FE] border border-primary-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#232327] dark:placeholder-gray-400 dark:text-white"
          placeholder="E-mail"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <FormInput
          type="password"
          name="password"
          id="password"
          className="bg-[#F3F7FE] border border-primary-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#232327] dark:placeholder-gray-400 dark:text-white"
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full">
        Log In
      </Button>
    </form>
  );
}

export default LoginForm;
