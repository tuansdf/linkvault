import { Anchor, Box, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { RegisterForm } from "~/features/auth";

export const RegisterPage = () => {
  return (
    <Box
      sx={{
        maxWidth: "20rem",
        width: "100%",
      }}
    >
      <Title
        order={2}
        sx={(theme) => ({
          marginBottom: theme.spacing.sm,
        })}
      >
        Register
      </Title>
      <RegisterForm />
      <Text
        sx={(theme) => ({
          marginTop: theme.spacing.xs,
          fontSize: theme.fontSizes.sm,
        })}
      >
        Have an account?{" "}
        <Anchor component={Link} to="/login">
          Login
        </Anchor>
      </Text>
    </Box>
  );
};
