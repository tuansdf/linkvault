import { Box } from "@mantine/core";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const AuthLayout = ({ children }: Props) => {
  return (
    <Box
      sx={{
        height: ["100vh", "100dvh"],
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};
