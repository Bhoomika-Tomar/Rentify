import React from 'react'
import { useAppContext } from '../context/AppContext';
import { toast } from 'react-hot-toast';

const Login = () => {
  const { setShowLogin, axios, setToken, navigate } = useAppContext();
  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios.post(`/api/user/${state}`, { name, email, password });

      if (data.success) {
        navigate('/');
        setToken(data.token);
        localStorage.setItem('token', data.token);
        setShowLogin(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      onClick={() => setShowLogin(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-5 p-8 w-80 sm:w-[380px] rounded-xl shadow-2xl bg-gray-900 border border-gray-700"
      >
        {/* Title */}
        <p className="text-2xl font-semibold text-center text-white">
          <span className="text-purple-400">{state === "login" ? "Welcome Back!" : "Create Account"}</span>
        </p>

        {/* Name (only for Register) */}
        {state === "register" && (
          <div className="w-full">
            <label className="text-gray-300 text-sm">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter your full name"
              className="border border-gray-600 bg-gray-800 text-white rounded-lg w-full p-2 mt-1 outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              required
            />
          </div>
        )}

        {/* Email */}
        <div className="w-full">
          <label className="text-gray-300 text-sm">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email address"
            className="border border-gray-600 bg-gray-800 text-white rounded-lg w-full p-2 mt-1 outline-none focus:ring-2 focus:ring-purple-500"
            type="email"
            required
          />
        </div>

        {/* Password */}
        <div className="w-full">
          <label className="text-gray-300 text-sm">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
            className="border border-gray-600 bg-gray-800 text-white rounded-lg w-full p-2 mt-1 outline-none focus:ring-2 focus:ring-purple-500"
            type="password"
            required
          />
        </div>

        {/* Switch between login/register */}
        {state === "register" ? (
          <p className="text-gray-400 text-sm">
            Already have an account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-purple-400 cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-gray-400 text-sm">
            Don’t have an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-purple-400 cursor-pointer hover:underline"
            >
              Sign up
            </span>
          </p>
        )}

        {/* Submit Button */}
        <button className="bg-purple-500 hover:bg-purple-600 transition-all text-white w-full py-2 rounded-lg font-medium">
          {state === "register" ? "Sign Up" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;

