import styled from 'styled-components';

export const ItemWrap = styled.div`
  margin: 30px;
`;

export const ProgressBar = styled.div`
  width: 400px;
  height: 20px;
  border-radius: 6px;
  background: repeating-linear-gradient(
    -45deg,
    #2ed573 0,
    #2ed573 10px,
    #7bed9f 10px,
    #7bed9f 20px
  );
  background-size: 56px;
  animation: slider 2s linear infinite;

  @keyframes slider {
    to {
      background-position: 224px;
    }
  }
`;
