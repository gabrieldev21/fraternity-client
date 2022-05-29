import React from 'react';
import QuestionIcon from 'assets/svgs/question.svg';
import ConfigIcon from 'assets/svgs/config.svg';

import * as S from './styleds';

function Footer() {
  return (
    <S.Container>
      <S.LogoFraternity>
        <S.Logo />
        Fraternity
      </S.LogoFraternity>
      <S.Navigations>
        <S.NavItem>Navegações</S.NavItem>
        <S.Items>Sobre</S.Items>
        <S.Items>Carreiras</S.Items>
        <S.Items>Adversidades</S.Items>
        <S.Items>Pequenos negócios</S.Items>
      </S.Navigations>
      <S.SecondNavigations>
        <S.Items>Marketing</S.Items>
        <S.Items>Soluções de Vendas</S.Items>
        <S.Items>Segurança</S.Items>
      </S.SecondNavigations>
      <S.SecondNavigations>
        <S.Items>Comunidade</S.Items>
        <S.Items>Termos de Privacidade </S.Items>
      </S.SecondNavigations>
      <S.FastAcess>
        Acesso Rápido
        <S.QuestionButton>
          DÚVIDAS? <img src={QuestionIcon} alt="QuestionImage" />
        </S.QuestionButton>
        <S.ConfigButton>
          CONFIGURAÇÕES <img src={ConfigIcon} alt="ConfigImage" />
        </S.ConfigButton>
      </S.FastAcess>
      <S.Language>
        Idioma
        <S.SelectLanguage value="">
          <option>PORTUGUÊS</option>
        </S.SelectLanguage>
      </S.Language>
    </S.Container>
  );
}

export default Footer;
