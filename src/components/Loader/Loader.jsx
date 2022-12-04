import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer, Overlay } from './Loader.styled';

const Loader = () => {
  return (
    <Overlay>
      <LoaderContainer>
        <ThreeDots
          height="60"
          width="60"
          radius="9"
          color="#3f51b5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </LoaderContainer>
    </Overlay>
  );
};

export default Loader;
