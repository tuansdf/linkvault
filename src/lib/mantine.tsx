import { MantineProvider as RMantineProvider } from "@mantine/core";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren;
const MantineProvider = ({ children }: Props) => {
  return (
    <RMantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </RMantineProvider>
  );
};

export default MantineProvider;
