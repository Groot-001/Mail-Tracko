import { createFileRoute } from "@tanstack/react-router";
import SuccessfulLogin from "../components/SussessfulSignIn";

export const Route = createFileRoute("/SuccessfulLogin")({
  component: SuccessfulLogin,
});
