import { Anchor, AppShell, Header, Navbar, TextInput } from "@mantine/core";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type Props = PropsWithChildren;

export const HomeLayout = ({ children }: Props) => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          {/* Navbar content */}
        </Navbar>
      }
      header={
        <Header
          height={60}
          p="xs"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: "bolder",
          }}
        >
          <Anchor component={Link} to="/">
            LinkVault
          </Anchor>
          <TextInput placeholder="Search" type="search" />
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
