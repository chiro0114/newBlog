type SecProps = {
    Component: React.FC;
  };
  
  const Sec: React.FC<SecProps> = ({ Component }) => {
    return <Component />;
  };
  
  export default Sec;