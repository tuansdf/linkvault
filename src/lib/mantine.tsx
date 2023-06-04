import { MantineProvider as RMantineProvider } from "@mantine/core";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const MantineProvider = ({ children }: Props) => {
  return (
    <RMantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        fontFamily: "Open Sans Variable, sans-serif",
      }}
    >
      {children}
    </RMantineProvider>
  );
};
