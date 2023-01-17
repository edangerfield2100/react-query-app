import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  // acces information returned from action
  const data: any = useActionData();

  return (
    <div className="bg-gray-200 p-6">
      <h3 className="mt-4 font-bold mb-4">Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label className="block mb-2">
          <span className="mr-2">E-mail</span>
          <input type="email" name="email" required></input>
        </label>
        <label className="block mb-2">
          <span className="mr-2">Message</span>
          <input type="message" name="message" required></input>
        </label>
        <button className="w-32 m-2 btn border-2 border-purple-800 mr-4 text-center hover:bg-purple-800 hover:text-white">
          Submit
        </button>
        {data && data.error && (
          <p className="font-bold text-red-500">{data.error}</p>
        )}
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }: any) => {
  const data = await request.formData();
  const submission = { email: data.get("email"), message: data.get("message") };

  // send post request

  // simulate an error conditionally
  if (submission.message.length < 10) {
    return { error: "Message must be over 10 characters." };
  }

  // redirect user
  return redirect("/");
};
