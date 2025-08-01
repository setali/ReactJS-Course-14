import { useId } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useUser from "@/hooks/useUser";

export default function LoginForm() {
  const { login } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    login(data)
      .catch((error) =>
        setError(error?.response?.data?.error || "There is an error")
      )
      .finally(() => setIsLoading(false));
  };

  const usernameId = useId();
  const passwordId = useId();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor={usernameId}>Username:</label>
          <input
            id={usernameId}
            className="border p-1"
            {...register("username", { required: true })}
            placeholder="Username"
          />
          {errors.username && (
            <span className="text-red-400 text-xs">Username is required</span>
          )}
        </div>
        <div>
          <label htmlFor={passwordId}>Password</label>
          <input
            id={passwordId}
            className="border p-1"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-400 text-xs">Password is required</span>
          )}
        </div>
        <div>
          {error && <div className="text-red-400 text-xs">{error}</div>}
          <button disabled={isLoading} type="submit">
            {isLoading ? "Login ..." : "Login"}
          </button>
        </div>
      </div>
    </form>
  );
}
