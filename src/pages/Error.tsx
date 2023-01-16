import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div id="error-page" className="mt-8">
      <p className="flex justify-center">
        Oops! Sorry, an unexpected error has occurred.
      </p>
      <p className="flex justify-center">{error.message}</p>
    </div>
  );
}
