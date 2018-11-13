export const formatPrice = (price) =>
  price.toLocaleString(
    'en-AU',
    {
      style: 'currency',
      currency: 'AUD'
    }
  );