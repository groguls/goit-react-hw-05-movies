import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="#01b4e4"
      ariaLabel="bars-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClass=""
      visible={true}
    />
  );
};
