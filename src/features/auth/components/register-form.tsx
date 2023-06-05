import { AtSymbolIcon, KeyIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextInput } from "@mantine/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(64),
});

type FormValues = z.infer<typeof formSchema>;

const defaultValues: FormValues = {
  email: "",
  password: "",
};

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      sx={{
        width: "100%",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        placeholder="name@example.com"
        type="email"
        label="Email"
        error={errors.email?.message}
        withAsterisk
        icon={
          <Box
            component={AtSymbolIcon}
            sx={(theme) => ({
              width: theme.fontSizes.md,
              height: theme.fontSizes.md,
            })}
          />
        }
        {...register("email")}
      />
      <TextInput
        placeholder="••••••••"
        type="password"
        label="Password"
        error={errors.password?.message}
        withAsterisk
        icon={
          <Box
            component={KeyIcon}
            sx={(theme) => ({
              width: theme.fontSizes.md,
              height: theme.fontSizes.md,
            })}
          />
        }
        sx={(theme) => ({ marginTop: theme.spacing.xs })}
        {...register("password")}
      />
      <Button
        type="submit"
        sx={(theme) => ({ marginTop: theme.spacing.lg, width: "100%" })}
      >
        Register
      </Button>
    </Box>
  );
};
