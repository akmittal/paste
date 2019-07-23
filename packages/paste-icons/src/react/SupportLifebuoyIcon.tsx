/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface SupportLifebuoyIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const SupportLifebuoyIcon: React.FC<SupportLifebuoyIconProps> = ({title, decorative, ...props}) => (
  <IconWrapper {...props}>
    <UID>
      {uid => (
        <svg
          role="img"
          aria-hidden={decorative}
          aria-labelledby={uid}
          height="100%"
          width="100%"
          viewBox="0 0 1024 1024"
        >
          <title id={uid}>{title}</title>
          <path
            fill="currentColor"
            d="M455.111 967.111l-34.133-5.689C238.933 927.289 102.4 785.067 68.267 608.711l-11.378-39.822h290.133l5.689 17.067c17.067 34.133 45.511 62.577 79.645 79.644l22.755 5.689v295.822M130.844 625.778c39.823 130.844 136.534 227.555 267.378 267.378V705.422c-34.133-22.755-62.578-51.2-85.333-85.333H130.844v5.689m438.045 341.333V676.978l17.067-5.689c34.133-17.067 62.577-45.511 79.644-79.645l5.689-17.066h295.822l-5.689 34.133c-34.133 182.045-176.355 318.578-352.711 352.711l-39.822 5.689m56.889-256v187.733c130.844-39.822 227.555-136.533 267.378-267.377H705.422c-17.066 28.444-45.511 56.889-79.644 79.644m341.333-256H676.978l-5.689-17.067c-17.067-34.133-45.511-62.577-79.645-79.644l-22.755-5.689V56.889l34.133 5.689C785.067 96.711 921.6 238.933 955.733 415.289l11.378 39.822m-256-56.889h187.733c-45.511-130.844-142.222-227.555-273.066-267.378v187.734c34.133 17.066 62.578 45.511 85.333 79.644m-358.4 56.889H56.889l5.689-34.133C96.711 238.933 238.933 102.4 415.289 68.267l39.822-11.378v290.133L438.044 358.4c-34.133 17.067-62.577 45.511-79.644 79.644l-5.689 17.067m-221.867-56.889h187.734c17.066-34.133 45.511-62.578 79.644-85.333V130.844c-130.844 39.823-227.555 136.534-267.378 267.378M625.778 1024H398.222V648.533l39.822 17.067c45.512 22.756 102.4 22.756 147.912 0l39.822-17.067V1024m-170.667-56.889h113.778V733.867c-39.822 11.377-73.956 11.377-113.778 0v233.244m170.667-591.644L585.956 358.4c-45.512-22.756-102.4-22.756-147.912 0l-39.822 17.067V0h227.556v375.467M512 284.444c17.067 0 39.822 0 56.889 5.689V56.889H455.111v233.244c17.067-5.689 39.822-5.689 56.889-5.689M375.467 625.778H0V398.222h375.467L358.4 438.044c-11.378 22.756-17.067 51.2-17.067 73.956s5.689 51.2 17.067 73.956l17.067 39.822M56.889 568.889h233.244c-5.689-17.067-5.689-39.822-5.689-56.889s0-39.822 5.689-56.889H56.889v113.778M1024 625.778H648.533l17.067-39.822c11.378-22.756 17.067-45.512 17.067-73.956 0-28.444-5.689-51.2-17.067-73.956l-17.067-39.822H1024v227.556m-290.133-56.889h233.244V455.111H733.867c5.689 17.067 5.689 39.822 5.689 56.889s0 39.822-5.689 56.889"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

SupportLifebuoyIcon.defaultProps = {
  title: 'Support Lifebuoy Icon',
  decorative: true,
};

export {SupportLifebuoyIcon};
