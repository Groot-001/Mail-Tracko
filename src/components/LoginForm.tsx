import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type LoginInput = {
  Email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginInput>();

  const onsubmit: SubmitHandler<LoginInput> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div>
          <input
            placeholder="Email"
            type="email"
            {...register("Email")}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white rounded py-2">
          Submit
        </button>
      </form>
    </>
  );
}
