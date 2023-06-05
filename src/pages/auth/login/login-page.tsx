import { Box, Text } from "@mantine/core";
import { LoginForm } from "~/features/auth";

export const LoginPage = () => {
  return (
    <Box
      sx={{
        maxWidth: "20rem",
        width: "100%",
      }}
    >
      <Text
        sx={(theme) => ({
          marginBottom: theme.spacing.xs,
          fontWeight: "bold",
          fontSize: theme.fontSizes.xl,
        })}
      >
        Login
      </Text>
      <LoginForm />
    </Box>
  );
};
