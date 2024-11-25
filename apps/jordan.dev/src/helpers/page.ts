import { getBaseUrl, getParams } from './url';

import type { TPageOgImage } from '../types';

export const getPageOgImageUrl = ({
  caption,
  title,
  description,
}: TPageOgImage) => ({
  default: encodeURI(
    `${getBaseUrl()}/api/og-page?${getParams({ caption, title, description })}`
  ),
});
