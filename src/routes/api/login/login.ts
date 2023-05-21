// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function post(request: any) {
  const { email, password } = request.body;

  // Check if the email and password are valid
  if (email === "user@example.com" && password === "123") {
    return {
      status: 200,
      body: { message: "Login successful" },
    };
  } else {
    return {
      status: 401,
      body: { message: "Invalid email or password" },
    };
  }
}
