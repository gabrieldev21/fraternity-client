import React from 'react';
import Lottie from 'react-lottie';

import animationData from 'assets/lotties/loading_lottie.json';

export interface LoadingProps {
  width?: number;
  height?: number;
}

const Loading = ({ width, height }: LoadingProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} height={height} width={width} />;
};

Loading.defaultProps = {
  width: 400,
  height: 400,
};

export default Loading;
