export const places = [
  // RESTAURANTES
  {
    id: 1,
    name: "Outback Steakhouse - Plaza Shopping Itu",
    description:
      "Restaurante australiano famoso por carnes grelhadas e a icônica Bloomin' Onion.",
    city: "Itu",
    state: "São Paulo",
    street: "Av. Dr. Ermelindo Maffei, 1199",
    additional: "Plaza Shopping Itu",
    businessHours: "11:00 - 22:00",
    tipo: "restaurantes",
    image: require("@/assets/images/outback.jpg"),
  },

  {
    id: 3,
    name: "Restaurante Família Menegon",
    description:
      "Comida caseira e ambiente familiar em um dos restaurantes mais tradicionais da cidade.",
    city: "Itu",
    state: "São Paulo",
    street: "R. Convenção, 139",
    additional: "Centro",
    businessHours: "11:00 - 15:00",
    tipo: "restaurantes",
    image: require("@/assets/images/restaurante-familia-menegon.jpg"),
  },

  // CULTURA
  {
    id: 4,
    name: "Museu Republicano de Itu",
    description:
      "Museu histórico que conta o início da República no Brasil. Entrada gratuita.",
    city: "Itu",
    state: "São Paulo",
    street: "R. Barão de Itaim, 140",
    additional: "Centro",
    businessHours: "09:00 - 17:00",
    tipo: "cultura",
    image: require("@/assets/images/museu-republicano.jpg"),
  },
  {
    id: 5,
    name: "Igreja Matriz Nossa Senhora da Candelária",
    description:
      "Principal igreja da cidade com arquitetura barroca e história desde 1780.",
    city: "Itu",
    state: "São Paulo",
    street: "Praça da Matriz, s/n",
    additional: "Centro",
    businessHours: "08:00 - 18:00",
    tipo: "cultura",
    image: require("@/assets/images/roteiro1.jpg"),
  },
  {
    id: 6,
    name: "Espaço Fábrica São Luiz",
    description:
      "Antiga fábrica restaurada com exposições culturais, feiras e eventos.",
    city: "Itu",
    state: "São Paulo",
    street: "R. Paula Souza, 492",
    additional: "Centro",
    businessHours: "10:00 - 18:00",
    tipo: "cultura",
    image: require("@/assets/images/espaco-fabrica-sl.jpg"),
  },

  // NATUREZA
  {
    id: 7,
    name: "Parque do Varvito",
    description:
      "Parque geológico único no Brasil, com trilhas e formações rochosas raras.",
    city: "Itu",
    state: "São Paulo",
    street: "R. Parque do Varvito, s/n",
    additional: "Nossa Sra. Aparecida",
    businessHours: "09:00 - 17:00",
    tipo: "natureza",
    image: require("@/assets/images/varvito.webp"),
  },
  {
    id: 8,
    name: "Parque Ecológico Taboão",
    description:
      "Área verde com trilhas leves, lagos e espaços para piquenique.",
    city: "Itu",
    state: "São Paulo",
    street: "Estrada do Taboão, km 1",
    additional: "",
    businessHours: "07:00 - 17:00",
    tipo: "natureza",
    image: require("@/assets/images/taboao.jpg"),
  },
  {
    id: 9,
    name: "Praça dos Exageros",
    description:
      "Praça temática com objetos gigantes, famosa por fotos e lazer ao ar livre.",
    city: "Itu",
    state: "São Paulo",
    street: "Av. Itu 400 Anos, 111",
    additional: "",
    businessHours: "08:00 - 20:00",
    tipo: "natureza",
    image: require("@/assets/images/exageros.jpg"),
  },

  // LAZER
  {
    id: 10,
    name: "Cidade da Criança",
    description:
      "Parque infantil público com brinquedos, pista de caminhada e lazer em família.",
    city: "Itu",
    state: "São Paulo",
    street: "Av. Itu 400 Anos, 77",
    additional: "Bairro Brasil",
    businessHours: "08:00 - 18:00",
    tipo: "lazer",
    image: require("@/assets/images/cidade-crianca.jpg"),
  },
  {
    id: 11,
    name: "Plaza Shopping Itu",
    description: "Shopping com lojas, cinema, praça de alimentação e eventos.",
    city: "Itu",
    state: "São Paulo",
    street: "Av. Dr. Ermelindo Maffei, 1199",
    additional: "",
    businessHours: "10:00 - 22:00",
    tipo: "lazer",
    image: require("@/assets/images/plaza.jpg"),
  },
  {
    id: 12,
    name: "Kartódromo Arena Itu",
    description:
      "Pista de kart profissional com aluguel de karts e competições.",
    city: "Itu",
    state: "São Paulo",
    street: "Rod. Dep. Archimedes Lammoglia, km 18",
    additional: "",
    businessHours: "14:00 - 22:00",
    tipo: "lazer",
    image: require("@/assets/images/kartodromo.jpg"),
  },

  // TURISMO / CULTURA
  {
    id: 13,
    name: "Igreja do Senhor Bom Jesus",
    description:
      "Igreja histórica do século XVII com belos elementos barrocos e rococós.",
    city: "Itu",
    state: "São Paulo",
    street: "Praça Padre Miguel, s/n",
    additional: "Centro Histórico",
    businessHours: "08:00 - 18:00",
    tipo: "cultura",
    image: require("@/assets/images/bom-jesus-itu.jpg"),
  },
  {
    id: 14,
    name: "Museu da Energia de Itu",
    description:
      "Museu em antiga Casa da Praça sobre história da eletricidade no Brasil.",
    city: "Itu",
    state: "São Paulo",
    street: "Praça Padre Miguel, s/n",
    additional: "Centro",
    businessHours: "Ter a Sex 14:00 - 17:00",
    tipo: "cultura",
    image: require("@/assets/images/museu-energia.jpg"),
  },
  {
    id: 15,
    name: "Espaço Cultural Almeida Jr.",
    description:
      "Casarão do século XIX, residência dos Barões de Itu, com exposições culturais.",
    city: "Itu",
    state: "São Paulo",
    street: "Rua Barão de Itaim, (varia)",
    additional: "Centro Histórico",
    businessHours: "10:00 - 17:00",
    tipo: "cultura",
    image: require("@/assets/images/espaco-almeida-junior.webp"),
  },

  // MONUMENTOS / EXAGEROS
  {
    id: 16,
    name: "Semáforo Gigante",
    description:
      "Ícones da Cidade dos Exageros, no entorno da Praça da Matriz.",
    city: "Itu",
    state: "São Paulo",
    street: "Praça Padre Miguel",
    additional: "Centro",
    businessHours: "Sempre aberto",
    tipo: "natureza",
    image: require("@/assets/images/semaforo.jpg"),
  },
  {
    id: 17,
    name: "Praça da Matriz",
    description:
      "Praça central do casario colonial, com orelhão e semáforo gigantes.",
    city: "Itu",
    state: "São Paulo",
    street: "Praça Padre Miguel, s/n",
    additional: "Centro",
    businessHours: "Sempre aberto",
    tipo: "natureza",
    image: require("@/assets/images/praca-matriz.jpg"),
  },

  // NATUREZA / GEOLÓGICOS

  // PARQUES & LAZER
  {
    id: 20,
    name: "Fazenda do Chocolate",
    description:
      "Complexo rural com chocolate artesanal, passeio a cavalo e minifazenda.",
    city: "Itu",
    state: "São Paulo",
    street: "Estr. Eng. Américo de Campos (varia)",
    additional: "",
    businessHours: "09:00 - 17:00",
    tipo: "lazer",
    image: require("@/assets/images/fazenda-chocolate.webp"),
  },

  {
    id: 22,
    name: "Museu FAMA & Ateliê do Kobra",
    description:
      "Fábrica restaurada com arte contemporânea, exposições e ateliê do artista Kobra.",
    city: "Itu",
    state: "São Paulo",
    street: "Rua Padre Bartolomeu Tadei, 9",
    additional: "Alto",
    businessHours: "Ter a Dom 10:00 - 17:00",
    tipo: "cultura",
    image: require("@/assets/images/museu-fama.jpg"),
  },

  {
    id: 23,
    name: "Cruzeiro Franciscano",
    description:
      "Monumento em arenito e varvito, remanescente do conjunto franciscano do século XVIII.",
    city: "Itu",
    state: "São Paulo",
    street: "Eixo Histórico (próx. Praça da Matriz)",
    additional: "",
    businessHours: "Sempre aberto",
    tipo: "cultura",
    image: require("@/assets/images/cruzeiro-franciscano.webp"),
  },

  {
    id: 999,
    name: "Igreja Nossa Senhora do Carmo",
    description:
      "Igreja com pinturas no forro da capela-mor e da nave feitas pelo Padre Jesuíno do Monte Carmelo.",
    city: "Itu",
    state: "São Paulo",
    street: "Praça da Independência, s/n",
    additional: "Centro",
    businessHours: "08:00 - 18:00",
    tipo: "cultura",
    image: require("@/assets/images/carmo-itu.jpg"),
  },
  {
    id: 1000,
    name: "Praça Dom Pedro I Casa Imperial",
    description:
      "Praça histórica central, ponto de início do roteiro e onde fica a Casa Imperial.",
    city: "Itu",
    state: "São Paulo",
    street: "Praça Dom Pedro I, 14",
    additional: "Centro",
    businessHours: "Sempre aberto",
    tipo: "cultura",
    image: require("@/assets/images/casa-imperial.jpg"), 
  },
  {
    id: 1001,
    name: "Praça Padre Anchieta",
    description:
      "Praça pública tradicional localizada no centro histórico de Itu.",
    city: "Itu",
    state: "São Paulo",
    street: "Praça Padre Anchieta",
    additional: "Centro",
    businessHours: "Sempre aberto",
    tipo: "cultura",
    image: require("@/assets/images/praca-anchieta.jpg"),
  },
  {
    id: 1002,
    name: "Passeio Público Marcos Stenier Neto (Becão)",
    description:
      "Área verde e passeio público na Rua Paula Souza, com espaço para lazer e cultura.",
    city: "Itu",
    state: "São Paulo",
    street: "Rua Paula Souza",
    additional: "Centro",
    businessHours: "Sempre aberto",
    tipo: "lazer",
    image: require("@/assets/images/stenier.jpg"),
  },
  {
    id: 1003,
    name: "Praça da Independência (Carmo)",
    description:
      "Praça histórica onde está localizada a Igreja Nossa Senhora do Carmo.",
    city: "Itu",
    state: "São Paulo",
    street: "Praça da Independência",
    additional: "Centro",
    businessHours: "Sempre aberto",
    tipo: "cultura",
    image: require("@/assets/images/praca-independencia.jpg"),
  },
  {
    id: 1100,
    name: "Estação do Trem Republicano de Itu",
    description:
      "Embarque para o Trem Republicano, com transporte de bicicletas, localizado na Praça Gaspar Ricardo, 70, Padre Bento.",
    city: "Itu",
    state: "São Paulo",
    street: "Praça Gaspar Ricardo, 70",
    additional: "Padre Bento",
    businessHours: "Consultar horários do trem",
    tipo: "turismo",
    image: require("@/assets/images/trem-republicano.jpg"),
  },
];
