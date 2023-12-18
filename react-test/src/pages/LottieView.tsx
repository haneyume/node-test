import Lottie from 'lottie-react';

import lottie_test from './lottie_test.json';

export const LottieView = () => {
  return <Lottie animationData={lottie_test} style={{ height: 500 }} />;
};
