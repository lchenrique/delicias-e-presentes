const CATEGORIES = [
  { id: "1", label: "Aniversário" },
  { id: "2", label: "Casamento" },
  { id: "3", label: "Noivado" },
  { id: "4", label: "Vinhos & Bebidas" },
  { id: "5", label: "Café & Chá" },
];

const PRICE_RANGES = [
  { value: "0-50", label: "Até R$ 50" },
  { value: "50-100", label: "R$ 50 - R$ 100" },
  { value: "100-200", label: "R$ 100 - R$ 200" },
  { value: "200", label: "Acima de R$ 200" },
];

const SORT_OPTIONS = [
  { value: "price-asc", label: "Preço: Menor para Maior" },
  { value: "price-desc", label: "Preço: Maior para Menor" },
  { value: "created_at-desc", label: "Mais Recentes" },
  { value: "name-asc", label: "Nome: A a Z" },
];