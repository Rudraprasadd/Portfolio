import Portfolio from "../portfolio"
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
export default function Page() {

  return (
    <MantineProvider>
      <Portfolio />
    </MantineProvider>
  );
}
