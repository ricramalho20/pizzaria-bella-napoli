export const pizzas = [
  { id: 1, nome: 'Margherita Clássica', descricao: 'Molho de tomate San Marzano, mozzarella fior di latte, manjericão fresco e azeite extra virgem.', preco: 42.90, img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700&h=460&fit=crop&auto=format', categoria: 'classicas', destaque: true, tamanhos: { P: 42.90, M: 52.90, G: 62.90 } },
  { id: 2, nome: 'Quatro Queijos', descricao: 'Mozzarella, parmesão, gorgonzola e catupiry cremoso sobre molho branco aromático.', preco: 48.90, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&h=460&fit=crop&auto=format', categoria: 'classicas', destaque: true, tamanhos: { P: 48.90, M: 58.90, G: 68.90 } },
  { id: 3, nome: 'Calabresa Artesanal', descricao: 'Calabresa defumada artesanal, cebola roxa caramelizada, azeitonas pretas e orégano.', preco: 44.90, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&h=460&fit=crop&auto=format', categoria: 'classicas', destaque: false, tamanhos: { P: 44.90, M: 54.90, G: 64.90 } },
  { id: 4, nome: 'Frango com Catupiry', descricao: 'Frango desfiado temperado, catupiry original, milho verde e cheddar gratinado.', preco: 46.90, img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=700&h=460&fit=crop&auto=format', categoria: 'especiais', destaque: true, tamanhos: { P: 46.90, M: 56.90, G: 66.90 } },
  { id: 5, nome: 'Napolitana', descricao: 'Tomate fresco fatiado, mozzarella, parmesão, alho e abundante manjericão fresco.', preco: 45.90, img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=700&h=460&fit=crop&auto=format', categoria: 'especiais', destaque: false, tamanhos: { P: 45.90, M: 55.90, G: 65.90 } },
  { id: 6, nome: 'Portuguesa', descricao: 'Presunto, ovos, cebola, pimentão, azeitonas e orégano em harmonia perfeita.', preco: 47.90, img: 'https://images.unsplash.com/photo-1548369937-47519962c11a?w=700&h=460&fit=crop&auto=format', categoria: 'especiais', destaque: false, tamanhos: { P: 47.90, M: 57.90, G: 67.90 } },
  { id: 7, nome: 'Brigadeiro', descricao: 'Chocolate belga ao leite, granulado crocante e leite condensado sobre massa doce.', preco: 39.90, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&h=460&fit=crop&auto=format', categoria: 'doces', destaque: false, tamanhos: { P: 39.90, M: 49.90, G: 59.90 } },
  { id: 8, nome: 'Romeu e Julieta', descricao: 'Mozzarella cremosa com goiabada cascão, um clássico brasileiro irresistível.', preco: 38.90, img: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=700&h=460&fit=crop&auto=format', categoria: 'doces', destaque: false, tamanhos: { P: 38.90, M: 48.90, G: 58.90 } },
]

export const categorias = [
  { id: 'todas', label: 'Todas' },
  { id: 'classicas', label: 'Clássicas' },
  { id: 'especiais', label: 'Especiais' },
  { id: 'doces', label: 'Doces' },
]

export const depoimentos = [
  { id: 1, nome: 'Carla Mendonça', av: 'CM', cor: '#C0392B', pizza: 'Margherita Clássica', texto: 'Melhor pizza que já comi na vida!! A margherita é simplesmente perfeita, a massa é fininha e crocante do jeito que eu gosto. Já pedi umas 10x esse mês kkkk', estrelas: 5, data: 'há 2 dias', ok: true },
  { id: 2, nome: 'Rafael Souza', av: 'RS', cor: '#2980B9', pizza: 'Frango com Catupiry', texto: 'Entrega super rapida, chegou em 25 min aqui no meu bairro. A pizza do frango com catupiry veio quentinha e muito bem embalada. Nota 10!', estrelas: 5, data: 'há 3 dias', ok: true },
  { id: 3, nome: 'Ana Paula', av: 'AP', cor: '#8E44AD', pizza: 'Quatro Queijos', texto: 'Amooo a quatro queijos daqui! O gorgonzola não é forte demais, fica equilibrado com os outros queijos. Minha família toda virou fã 😍', estrelas: 5, data: 'há 5 dias', ok: true },
  { id: 4, nome: 'Marcos Oliveira', av: 'MO', cor: '#27AE60', pizza: 'Calabresa Artesanal', texto: 'Pedi a calabresa e foi incrivel. Mas na proxima vou pedir sem azeitona pq não curto muito. De resto perfeito, a cebola caramelizada faz toda diferença!', estrelas: 4, data: 'há 1 semana', ok: true },
  { id: 5, nome: 'Juliana Ferreira', av: 'JF', cor: '#E67E22', pizza: 'Brigadeiro', texto: 'A pizza de brigadeiro é uma experiencia unica!! Parece loucura mas funciona muito. Trouxe pra festa de aniversário da minha filha e todo mundo amou 🎉', estrelas: 5, data: 'há 1 semana', ok: true },
  { id: 6, nome: 'Pedro Almeida', av: 'PA', cor: '#16A085', pizza: 'Portuguesa', texto: 'Já testei várias pizzarias aqui na região e a Bella Napoli é disparado a melhor. A portuguesa veio com bastante recheio, não foi uma pizza "econômica" como algumas por aí.', estrelas: 5, data: 'há 2 semanas', ok: false },
]

export const mockPedidos = [
  { id: '#001', cliente: 'Carla Mendonça', itens: ['Margherita G x1'], total: 62.90, tipo: 'Entrega', status: 'Entregue', hora: '19:30' },
  { id: '#002', cliente: 'Rafael Souza', itens: ['Frango Catupiry M x2'], total: 113.80, tipo: 'Entrega', status: 'Em preparo', hora: '20:05' },
  { id: '#003', cliente: 'Ana Paula', itens: ['Quatro Queijos G x1', 'Brigadeiro P x1'], total: 108.80, tipo: 'Retirada', status: 'Aguardando', hora: '20:15' },
  { id: '#004', cliente: 'Marcos Oliveira', itens: ['Calabresa M x1'], total: 54.90, tipo: 'Entrega', status: 'A caminho', hora: '20:22' },
  { id: '#005', cliente: 'Juliana Ferreira', itens: ['Brigadeiro G x2'], total: 119.80, tipo: 'Retirada', status: 'Entregue', hora: '18:50' },
]
