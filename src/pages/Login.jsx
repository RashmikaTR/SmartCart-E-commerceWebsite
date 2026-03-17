function Login() {

  return (

    <div className="flex justify-center items-center h-screen bg-gray-100">

      <div className="bg-white p-8 shadow-lg rounded w-80">

        <h1 className="text-2xl font-bold mb-4">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
        />

        <button className="bg-blue-500 text-white px-4 py-2 w-full rounded">
          Login
        </button>

      </div>

    </div>

  );

}

export default Login;