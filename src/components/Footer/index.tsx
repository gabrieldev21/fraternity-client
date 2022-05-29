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
        <S.Itens>Sobre</S.Itens>
        <S.Itens>Carreiras</S.Itens>
        <S.Itens>Adversidades</S.Itens>
        <S.Itens>Pequenos negócios</S.Itens>
      </S.Navigations>
      <S.SecondNavigations>
        <S.Itens>Marketing</S.Itens>
        <S.Itens>Soluções de Vendas</S.Itens>
        <S.Itens>Segurança</S.Itens>
      </S.SecondNavigations>
      <S.SecondNavigations>
        <S.Itens>Comunidade</S.Itens>
        <S.Itens>Termos de Privacidade </S.Itens>
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
