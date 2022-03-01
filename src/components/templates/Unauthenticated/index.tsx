import Loading from 'components/Loading';
import Modal from 'components/Modal';
import React from 'react';

import * as S from './styleds';

interface UnauthenticatedProps {
  loading?: boolean;
}

const Unauthenticated: React.FC<UnauthenticatedProps> = ({ loading, children }) => {
  return (
    <S.Wrapper>
      <S.Image />
      <S.CutImage />
      <S.Logo />
      <S.Container>{children}</S.Container>
      {loading && (
        <Modal>
          <Loading />
        </Modal>
      )}
    </S.Wrapper>
  );
};

Unauthenticated.defaultProps = {
  loading: false,
};

export default Unauthenticated;
export * from './styleds';
