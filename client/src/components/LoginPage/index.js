import "./index.css";
import { useState } from "react";
import { useAuth } from "../../util/auth";
import useLoginRedirect from "../../util/useLoginRedirect";
import { Form, Button, Container } from "react-bootstrap";

function LoginPage() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // custom hook redirects to previous page or default page if user is logged in
  useLoginRedirect();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!password || password.length < 8) {
      return alert("Invalid password. Must contain at least 8 characters.");
    }
    if (!email) {
      return alert("Must provide an email address.");
    }
    await auth.login({ email, password });
  };

  const message = auth.pending
    ? "Processing request..."
    : auth.error || "Please complete the form and click submit.";

  return (
    <Container className="Login">
      
      <div>
        <h1>Log-In</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              disabled={auth.pending}
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
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

 


export default LoginPage;

