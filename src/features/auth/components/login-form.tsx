import { AtSymbolIcon, KeyIcon } from "@heroicons/react/20/solid";
import { Box, Button, TextInput } from "@mantine/core";

export const LoginForm = () => {
  return (
    <Box
      component="form"
      sx={{
        width: "100%",
      }}
    >
      <TextInput
        placeholder="Email"
        type="email"
        label="Email"
        icon={
          <Box
            component={AtSymbolIcon}
            sx={{ width: "1rem", height: "1rem" }}
          />
        }
      />
      <TextInput
        placeholder="Password"
        type="password"
        label="Password"
        icon={
          <Box component={KeyIcon} sx={{ width: "1rem", height: "1rem" }} />
        }
        sx={(theme) => ({ marginTop: theme.spacing.xs })}
      />
      <Button
        type="submit"
        sx={(theme) => ({ marginTop: theme.spacing.xl, width: "100%" })}
      >
        Login
      </Button>
    </Box>
  );
};
