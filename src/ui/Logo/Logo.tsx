import { LogoProps } from '@/types/layout';
import config from '@/json/configServer.json';
import React from 'react';

const Logo = ({ className }: LogoProps) => (
  <span
    className={`${className} font-semibold lg:font-bold font-cinzel text-gold-primary`}
  >
    {config.serverName}
  </span>
);

export default Logo;
