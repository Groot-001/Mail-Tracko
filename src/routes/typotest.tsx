import { createFileRoute } from "@tanstack/react-router";
import { TypographyTest } from "../test/TypographyTest";

export const Route = createFileRoute("/typotest")({
  component: TypographyTest,
});
