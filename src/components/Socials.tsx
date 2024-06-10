import { Link, Stack, StackProps, styled } from '@mui/material';
import React from 'react';

const images = require.context('../assets/images/socials/', true);

const SocialLink = styled(Link)({
  display: 'inline-block',
  position: 'relative',
  width: '1.25rem',
  height: '1.25rem'
});

const SocialsLogo = styled('span')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black',
  borderRadius: '50%'
});

const SocialsImage = styled('img')({
  width: '0.75rem'
});

type Props = StackProps & {
  socials?: Record<string, unknown>;
};

const urlMappers: Record<string, (a: string) => string> = {
  twitter: (username: string) => `https://twitter.com/${username}`,
  email: (email: string) => `mailto:${email}`,
  github: (username: string) => `https://github.com/${username}`,
  telegram: (username: string) => `https://t.me/${username}`,
  discord: (url: string) => url
};

const possibleSocials = Object.keys(urlMappers);

export const hasSocials = (obj: Record<string, unknown>) => {
  return Object.keys(obj).some((k) => possibleSocials.includes(k));
};

const Socials: React.FC<Props> = ({ socials, ...props }) => (
  <Stack direction='row' sx={{ mt: 2, mb: 2 }} spacing={1} {...props}>
    {socials &&
      Object.entries(socials)
        .filter(([social]) => possibleSocials.includes(social))
        .filter(([, username]) => !!username)
        .map(
          ([social, username]) =>
            images(`./${social}.svg`) &&
            username &&
            typeof username === 'string' && (
              <SocialLink
                key={`${social}-${username}`}
                href={urlMappers[social]?.(username)}
                rel='noopener'
                target='_blank'
              >
                <SocialsLogo>
                  <SocialsImage src={images(`./${social}.svg`)} />
                </SocialsLogo>
              </SocialLink>
            )
        )}
  </Stack>
);

export default Socials;
