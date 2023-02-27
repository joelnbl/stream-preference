let breakpointSizes = {
  large: '1366px',
  medium: '992px',
  mobile: '580px',
  navHeaderTruncate: '640px',
  tablet: '768px',
}

const breakpoints = {
  large: `@media screen and (max-width: ${breakpointSizes.large})`,
  medium: `@media screen and (max-width: ${breakpointSizes.medium})`,
  mobile: `@media screen and (max-width: ${breakpointSizes.mobile})`,
  navHeaderTruncate: `@media screen and (max-width: ${breakpointSizes.navHeaderTruncate})`,
  sizes: breakpointSizes,
  tablet: `@media screen and  (max-width: ${breakpointSizes.tablet})`,
}

export default breakpoints