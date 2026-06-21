export default function LoginForm() {
  return (
    <>
      <div>
        <input
          placeholder="Email"
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white rounded py-2">
        Submit
      </button>
    </>
  );
}
