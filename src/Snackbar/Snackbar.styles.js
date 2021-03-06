import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 300px;
  height: 50px;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  z-index: 100;
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  animation: fade 3s;
  -webkit-animation: fade 3s;
  animation-fill-mode: forwards;

  ${({ styles }) => styles && styles};

  @keyframes fade {
    0% {
      opacity: 0;
      bottom: 0;
    }
    25% {
      opacity: 1;
      bottom: 16px;
    }
    50% {
      opacity: 1;
      bottom: 16px;
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
      bottom: 16px;
    }
    50% {
      opacity: 1;
      bottom: 16px;
    }
    100% {
      opacity: 0;
      bottom: 0;
    }
  }
`;

export { Container };
