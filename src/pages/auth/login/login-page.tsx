import { Anchor, Box, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { LoginForm } from "~/features/auth";

export const LoginPage = () => {
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
        Login
      </Title>
      <LoginForm />
      <Text
        sx={(theme) => ({
          marginTop: theme.spacing.xs,
          fontSize: theme.fontSizes.sm,
        })}
      >
        Don't have an account?{" "}
        <Anchor component={Link} to="/register">
          Register
        </Anchor>
      </Text>
    </Box>
  );
};
