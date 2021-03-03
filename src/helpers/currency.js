import 'intl';
import 'intl/locale-data/jsonp/pt';

export function formatCurrency(value) {
  const currencyValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return currencyValue;
}
