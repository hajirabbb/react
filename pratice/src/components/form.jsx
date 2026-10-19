import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../appwrite";

const Form = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthError("");



    setLoading(true);
    try {
      await account.createEmailPasswordSession(
        formData.email,
        formData.password
      );
      navigate("/dashboard");
    } catch (err) {
      setAuthError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex-1 flex flex-col justify-center px-20 gap-12.5">
      <button
        type="button"
        className="absolute top-6 right-6 px-5.5 py-2.5 bg-black text-white border-none rounded-full cursor-pointer"
      >
        Sign up
      </button>

      <h3 className="top-11 relative text-lg font-bold">
        Welcome Back to GHIPSS Dashboard
      </h3>
      <p className="relative top-10 text-[0.8rem] text-[#888]">
        Sign in to continue
      </p>

      <form onSubmit={handleSubmit} className="block mt-4 mx-0 mb-1.5">
        <div className="relative bottom-12">
          <label className="inline-block mt-4 mx-0 mb-1.5" htmlFor="email">
            Email
          </label>
          <input
            className="w-full py-2.5 pb-3 border-solid rounded-lg bg-[#ddd] border-[#ddd]"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}

          <label className="inline-block mt-4 mx-0 mb-1.5" htmlFor="password">
            Password
          </label>
          <input
            className="w-full py-2.5 pb-3 border-solid rounded-lg bg-[#ddd] border-[#ddd]"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-600">{errors.password}</p>}
        </div>

        <div className="relative bottom-10">
          {authError && <p className="text-red-600">{authError}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-5 p-3 bg-[#111] text-white border-none rounded-lg cursor-pointer"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>

          <div className="m-0 flex items-center gap-70 top-4 relative">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" name="remember" />
              Remember me
            </label>
            <a
              href="#"
              className="underline underline-offset-2 decoration-2 decoration-black"
            >
              Forget password?
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;