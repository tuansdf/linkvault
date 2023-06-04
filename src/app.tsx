import "@fontsource-variable/open-sans";
import { MantineProvider } from "~/lib/mantine";
import { QueryProvider } from "~/lib/react-query";
import { RouterProvider } from "~/lib/react-router";

const App = () => {
  return (
    <QueryProvider>
      <MantineProvider>
        <RouterProvider />
      </MantineProvider>
    </QueryProvider>
  );
};

export default App;
