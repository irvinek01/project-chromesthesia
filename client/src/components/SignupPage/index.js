import { useState } from "react";
import { useAuth } from "../../util/auth";
import useLoginRedirect from "../../util/useLoginRedirect";
import { Form, Button, Container } from "react-bootstrap";

function SignupPage() {
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  // custom hook redirects to previous page or default page if user is logged in
  useLoginRedirect();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!username) {
      return alert("Must provide a username.");
    }
    if (!email) {
      return alert("Must provide an email address.");
    }
    if (!password || password.length < 8) {
      return alert("Invalid password. Must contain at least 8 characters.");
    }

    await auth.signup({ email, username, password });
  };

  const message = auth.pending
    ? "Creating your account..."
    : auth.error || "Please complete the form and click submit.";

  return (
    <Container>
      <div className="signup">
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="signup-username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              id="signup-username"
              type="text"
              disabled={auth.pending}
              value={username}
              onChange={(e) => setUsername(e.target.value.trim())}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="signup-email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="signup-email"
              type="email"
              disabled={auth.pending}
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="signup-password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="signup-password"
              type="password"
              disabled={auth.pending}
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={auth.pending}>
            {auth.pending ? "⌛" : "Submit"}
          </Button>
          <p>{message}</p>
        </Form>
      </div>
    </Container>
  );
}

export default SignupPage;
