import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../lib/schemas";
import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/axios";
import { useAuthStore } from "../store/authStore";

// export default function LoginForm() {
// const setAuth = useAuthStore((s) => s.setAuth);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormData>({
//     resolver: zodResolver(loginSchema),
//   });

//   const { mutate, isPending } = useMutation({
//     mutationFn: (data: LoginFormData) => api.post("/auth/login", data),
//     onSuccess: ({ data }) => setAuth(data.user, data.token),
//   });

//   return (
//     <form
//       onSubmit={handleSubmit((data) => mutate(data))}
//       className="flex flex-col gap-4 p-8 max-w-md"
//     >
//       <div>
//         <input
//           {...register("email")}
//           placeholder="Email"
//           className="w-full border rounded px-3 py-2"
//         />
//         {errors.email && (
//           <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//         )}
//       </div>

//       <div>
//         <input
//           {...register("password")}
//           type="password"
//           placeholder="Password"
//           className="w-full border rounded px-3 py-2"
//         />
//         {errors.password && (
//           <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
//         )}
//       </div>

//       <button
//         type="submit"
//         disabled={isPending}
//         className="bg-blue-600 text-white rounded py-2"
//       >
//         {isPending ? "Logging in..." : "Login"}
//       </button>
//     </form>
//   );
// }

export default function LoginForm() {
  const setAuth = useAuthStore((s) => s.setAuth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: LoginFormData) => api.post("/auth/login", data),
    onSuccess: ({ data }) => setAuth(data.user, data.token),
  });

  return (
    <div className="bg-background min-h-screen flex items-center justify-center px-margin-mobile">
      <form
        onSubmit={handleSubmit((data) => mutate(data))}
        className="bg-surface-container-lowest rounded-xl p-gutter w-full max-w-md space-y-stack-md"
      >
        <h2 className="text-title-sm text-on-surface">Login</h2>

        <div className="space-y-stack-sm">
          <label className="text-label-caps text-on-surface-variant block">
            EMAIL
          </label>
          <input
            {...register("email")}
            className="w-full border border-outline-variant rounded-lg px-3 py-2 text-body-md text-on-surface bg-surface-container-low"
          />
          {errors.email && (
            <p className="text-body-sm text-error">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-stack-sm">
          <label className="text-label-caps text-on-surface-variant block">
            PASSWORD
          </label>
          <input
            {...register("password")}
            type="password"
            className="w-full border border-outline-variant rounded-lg px-3 py-2 text-body-md text-on-surface bg-surface-container-low"
          />
          {errors.password && (
            <p className="text-body-sm text-error">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-on-primary rounded-lg py-2 text-body-md font-medium"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
