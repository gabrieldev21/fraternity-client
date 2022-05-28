import React from 'react';
import bannerImage from 'assets/images/banner.png';
import ProfileUser from '.';

export default {
  title: 'ProfileUser',
  component: ProfileUser,
};

export const ButtonPrimary = () => (
  <div
    style={{
      background: 'rgb(41, 45, 56)',
      width: '80vw',
      padding: '40px 129px',
      position: 'relative',
      height: '100vh',
    }}
  >
    <ProfileUser
      banner={`${bannerImage}`}
      photo="https://lh3.googleusercontent.com/0ELpmNzc_gOZ2XpuKg6-euCIT8toaPWhjxgDde5S7s7VOPnk9elEMP6sA8Z5WVVk2k5fRjtOH8gZRmfHlJ9FSHyk0lr1f2l682hm8K8mYaDmUf0xbUcetbS_bHhOR_zld-3SDApBjOS28_mZqs9HuxCxo3I8Oe9RfgSMxwgVjI7Kf9R-aFL5h8RUz-MK8rsQh8R0gY7bupo9RHtZShBFRa5MOfjSRdkUBNHciKbJd5dJzpGPkrDeQNztGjlzhAVbNCPvjCuh4cbYeEVWfqPOPuEwQhBDzTEkw5OEb943zeS_9An3jmJyId3YOS5gfIEVDQYEsxNRHoTYDfEW05w3HP3bN3dePrv9YEzf2Xcw5Qf2SSYm5qqaMLu6_3XMKO9z_1DVTo_SptE1OVvyUI_cI7641QUWQZ36EIKdLOdWC4nSQi0xp1u4JpVcnVreILd6WKnT0NrPP55wbUQOiRX8m6xrVXi2BdYryY9p0mcWs5SvmnH3EZA2eorHpa-8SGCw597k1PEEQUBYugqdqogcFzyQIMcTrnHYhp2oR_-NkBin8LoCal6bz2c6Skz7Z7I23zWqO8DDIZlWveFgWt0dv2YtF0qypi_K6F23mAasrJLPySA8A4H_z1TlgbHD36-QFONydrkJVQ9QRw__Zc4kzn91jNt-_fIUKg6xotazWxjn9hvWKwIOBXfoj4cKQFravvFFeURbvPilnSzo2GTSIA2cSaNZy79yJdoLIWBunuF1V11_tn7o04zm-MLpgLDHzI6MYj41VYc-wPLvdxTb_vZILzKsaRlHJsiiTYz5-RfwLDzQ55KNMHqH8f6PKSSj83uIESwwgGQzRQk6iHjzGNVdlsmIpsYxHOYTRB2dDMypfWjKGdzqluTcXVVpOBxsTmAEqPiO5_ig9Qo=w684-h913-no?authuser=0"
      name="Daniel Pereira"
      title="Desenvolvedor Front End - Especialista"
      state="RJ"
      city="Rio de Janeiro"
      networkNumber={832}
    />
  </div>
);
