import { Box } from '@chakra-ui/react';

type MainContentProps = {
  children: React.ReactNode;
};

const MainContents: React.FC<MainContentProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default MainContents;
