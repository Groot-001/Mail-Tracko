import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../lib/schemas";
import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/axios";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: LoginFormData) => api.post("/auth/login", data),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => mutate(data))}
      className="flex flex-col gap-4 p-8 max-w-md"
    >
      <div>
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full border rounded px-3 py-2"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full border rounded px-3 py-2"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white rounded py-2"
      >
        {isPending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
