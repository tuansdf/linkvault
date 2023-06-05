import { Anchor, Box } from "@mantine/core";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <Box>
      Page not found. Go back to{" "}
      <Anchor component={Link} to={"/"}>
        Home
      </Anchor>
    </Box>
  );
};
