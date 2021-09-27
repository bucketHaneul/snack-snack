import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  width: 30rem;
  height: 5rem;
  border-radius: 0.4rem;
  background-color: #333;
  color: #fff;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  z-index: 100;
  position: absolute;
  bottom: 1.6rem;
  left: 50%;
  transform: translateX(-50%);

  ${({ styles }) => styles && styles};

  @keyframes fade {
    0% {
      opacity: 0;
      bottom: 0;
    }
    25% {
      opacity: 1;
      bottom: 1.6rem;
    }
    50% {
      opacity: 1;
      bottom: 1.6rem;
    }
    100% {
      opacity: 0;
      bottom: 0;
    }
  }
  @-webkit-keyframes fade {
    0% {
      opacity: 0;
      bottom: 0;
    }
    25% {
      opacity: 1;
      bottom: 1.6rem;
    }
    50% {
      opacity: 1;
      bottom: 1.6rem;
    }
    100% {
      opacity: 0;
      bottom: 0;
    }
  }

  animation: fade 3s;
  -webkit-animation: fade 3s;
`;

export { Container };
