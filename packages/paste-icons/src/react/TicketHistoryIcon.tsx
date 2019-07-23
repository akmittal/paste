/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface TicketHistoryIconProps extends IconWrapperProps {
  title?: string;
  decorative?: boolean;
}

const TicketHistoryIcon: React.FC<TicketHistoryIconProps> = ({title, decorative, ...props}) => (
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
            d="M455.333 455.111H313.111v-28.444c0-17.067-11.378-28.445-28.444-28.445-17.067 0-28.445 11.378-28.445 28.445v28.444H114V0h142.222v28.444c0 17.067 11.378 28.445 28.445 28.445 17.066 0 28.444-11.378 28.444-28.445V0h142.222v455.111m-91.022-56.889h34.133V56.889h-34.133c-11.378 34.133-39.822 56.889-79.644 56.889-39.823 0-68.267-22.756-79.645-56.889h-34.133v341.333h34.133c11.378-34.133 39.822-56.889 79.645-56.889 39.822 0 68.266 22.756 79.644 56.889m546.133 56.889H768.222v-28.444c0-17.067-11.378-28.445-28.444-28.445-17.067 0-28.445 11.378-28.445 28.445v28.444H569.111V0h142.222v28.444c0 17.067 11.378 28.445 28.445 28.445 17.066 0 28.444-11.378 28.444-28.445V0h142.222v455.111m-91.022-56.889h34.134V56.889h-34.134c-11.378 34.133-45.511 56.889-79.644 56.889-34.134 0-68.267-22.756-79.645-56.889H626v341.333h34.133c11.378-34.133 45.511-56.889 79.645-56.889 34.133 0 68.266 22.756 79.644 56.889M455.333 1024H313.111v-28.444c0-17.067-11.378-28.445-28.444-28.445-17.067 0-28.445 11.378-28.445 28.445V1024H114V568.889h142.222v28.444c0 17.067 11.378 28.445 28.445 28.445 17.066 0 28.444-11.378 28.444-28.445v-28.444h142.222V1024m-91.022-56.889h34.133V625.778h-34.133c-11.378 34.133-45.511 56.889-79.644 56.889-34.134 0-68.267-22.756-79.645-56.889h-34.133v341.333h34.133c11.378-34.133 45.511-56.889 79.645-56.889 34.133 0 68.266 22.756 79.644 56.889M910.444 1024H768.222v-28.444c0-17.067-11.378-28.445-28.444-28.445-17.067 0-28.445 11.378-28.445 28.445V1024H569.111V568.889h142.222v28.444c0 17.067 11.378 28.445 28.445 28.445 17.066 0 28.444-11.378 28.444-28.445v-28.444h142.222V1024m-91.022-56.889h34.134V625.778h-34.134c-11.378 34.133-45.511 56.889-79.644 56.889-34.134 0-68.267-22.756-79.645-56.889H626v341.333h34.133c11.378-34.133 45.511-56.889 79.645-56.889 34.133 0 68.266 22.756 79.644 56.889"
          />
        </svg>
      )}
    </UID>
  </IconWrapper>
);

TicketHistoryIcon.defaultProps = {
  title: 'Ticket History Icon',
  decorative: true,
};

export {TicketHistoryIcon};
