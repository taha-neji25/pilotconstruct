import daoImage from '../../assets/dao.jpg';
import modulaireImage from '../../assets/modulaire.jpg';
import metalImage from '../../assets/metal.jpg';
import maintenanceImage from '../../assets/maintenance.jpg';
import serieImage from '../../assets/serie.jpg';
import menuiserieImage from '../../assets/menuiserie.jpg';
import paintImage from '../../assets/paint.jpg';

const products = [
  {
    id: 1,
    category: "A",
    name: "Dao",
    title: "products.product1.title",
    description: "products.product1.description",
    tagline: "products.product1.tagline",
    overview: "products.product1.overview",
    features: [
      { feature: "products.product1.features.feature1", benefit: "products.product1.benefits.benefit1" },
      { feature: "products.product1.features.feature2", benefit: "products.product1.benefits.benefit2" },
      { feature: "products.product1.features.feature3", benefit: "products.product1.benefits.benefit3" },
      { feature: "products.product1.features.feature4", benefit: "products.product1.benefits.benefit4" },
      { feature: "products.product1.features.feature5", benefit: "products.product1.benefits.benefit5" },
    ],
    useCases: [
      { useCase: "products.product1.usecases.usecase1" },
      { useCase: "products.product1.usecases.usecase2" },
      { useCase: "products.product1.usecases.usecase3" },
    ],
    faq: [
      { question: "products.product1.faq.questions.question1", answer: "products.product1.faq.answers.answer1" },
    ],
    img: daoImage
  },
  {
    id: 5,
    category: "A",
    name: "Menuiserie metallique",
    title: "products.product5.title",
    description: "products.product5.description",
    tagline: "products.product5.tagline"
    ,
    overview: "products.product5.overview",
    features: [
      { feature: "products.product5.features.feature1", benefit: "products.product5.benefits.benefit1" },
      { feature: "products.product5.features.feature2", benefit: "products.product5.benefits.benefit2" },
      { feature: "products.product5.features.feature3", benefit: "products.product5.benefits.benefit3" },
      { feature: "products.product5.features.feature4", benefit: "products.product5.benefits.benefit4" },
      { feature: "products.product5.features.feature5", benefit: "products.product5.benefits.benefit5" },
    ],
    useCases: [
      { useCase: "products.product5.usecases.usecase1" },
      { useCase: "products.product5.usecases.usecase2" },
      { useCase: "products.product5.usecases.usecase3" },
      { useCase: "products.product5.usecases.usecase4" },
    ],
    faq: [
      { question: "products.product5.faq.questions.question1", answer: "products.product5.faq.answers.answer1" },
      { question: "products.product5.faq.questions.question2", answer: "products.product5.faq.answers.answer2" },
    ],
    img: menuiserieImage,
  },
  {
    id: 2,
    category: "A",
    name: "Construction Modulaire",
    title: "products.product2.title",
    description: "products.product2.description",
    tagline: "products.product2.tagline",
    overview: "products.product2.overview",
    features: [
      { feature: "products.product2.features.feature1", benefit: "products.product2.benefits.benefit1" },
      { feature: "products.product2.features.feature2", benefit: "products.product2.benefits.benefit2" },
      { feature: "products.product2.features.feature3", benefit: "products.product2.benefits.benefit3" },
      { feature: "products.product2.features.feature4", benefit: "products.product2.benefits.benefit4" },
      { feature: "products.product2.features.feature5", benefit: "products.product2.benefits.benefit5" },
    ],
    useCases: [
      { useCase: "products.product2.usecases.usecase1" },
      { useCase: "products.product2.usecases.usecase2" },
      { useCase: "products.product2.usecases.usecase3" },
      { useCase: "products.product2.usecases.usecase4" },
    ],
    faq: [
      { question: "products.product2.faq.questions.question1", answer: "products.product2.faq.answers.answer1" },
      { question: "products.product2.faq.questions.question2", answer: "products.product2.faq.answers.answer2" },
    ],
    img: modulaireImage,
  },
  {
    id: 3,
    category: "A",
    name: "Structure Metallique",
    title: "products.product3.title",
    description: "products.product3.description",
    tagline: "products.product3.tagline",
    overview: "products.product3.overview",
    features: [
      { feature: "products.product3.features.feature1", benefit: "products.product2.benefits.benefit1" },
      { feature: "products.product3.features.feature2", benefit: "products.product2.benefits.benefit2" },
    ],
    useCases: [
      { useCase: "products.product3.usecases.usecase1" },
      { useCase: "products.product3.usecases.usecase2" },
      { useCase: "products.product3.usecases.usecase3" },
      { useCase: "products.product3.usecases.usecase4" },
    ],
    faq: [
      { question: "products.product3.faq.questions.question1", answer: "products.product3.faq.answers.answer1" },
    ],
    img: metalImage,
  },
  {
    id: 4,
    category: "B",
    name: "Maintenance",
    title: "products.product4.title",
    description: "products.product4.description",
    tagline: "products.product4.tagline",
    overview: "products.product4.overview",
    features: [
      { feature: "products.product4.features.feature1", benefit: "products.product4.benefits.benefit1" },
      { feature: "products.product4.features.feature2", benefit: "products.product4.benefits.benefit2" },
      { feature: "products.product4.features.feature3", benefit: "products.product4.benefits.benefit3" },
      { feature: "products.product4.features.feature4", benefit: "products.product4.benefits.benefit4" },
    ],
    useCases: [
      { useCase: "products.product3.usecases.usecase1" },
      { useCase: "products.product3.usecases.usecase2" },
      { useCase: "products.product3.usecases.usecase3" },
      { useCase: "products.product3.usecases.usecase4" },
    ],
    faq: [
      { question: "products.product4.faq.questions.question1", answer: "products.product4.faq.answers.answer1" },
      { question: "products.product4.faq.questions.question2", answer: "products.product4.faq.answers.answer2" },
    ],
    img: maintenanceImage,
  },
  {
    id: 6,
    category: "B",
    name: "Construction fabrication serie",
    title: "products.product6.title",
    description: "products.product6.description",
    tagline: "products.product6.tagline",
    overview: "products.product6.overview",
    features: [
      { feature: "products.product6.features.feature1", benefit: "products.product6.benefits.benefit1" },
      { feature: "products.product6.features.feature2", benefit: "products.product6.benefits.benefit2" },
      { feature: "products.product6.features.feature3", benefit: "products.product6.benefits.benefit3" },
    ],
    useCases: [
      { useCase: "products.product6.usecases.usecase1" },
      { useCase: "products.product6.usecases.usecase2" },
    ],
    faq: [
      { question: "products.product6.faq.questions.question1", answer: "products.product6.faq.answers.answer1" },
    ],
    img: serieImage,
  },
  
  {
    id: 7,
    category: "C",
    name: "Traitement de peinture",
    title: "products.product7.title",
    description: "products.product7.description",
    tagline: "products.product7.tagline",
    overview: "products.product7.overview",
    features: [
      { feature: "products.product7.features.feature1", benefit: "products.product7.benefits.benefit1" },
      { feature: "products.product7.features.feature2", benefit: "products.product7.benefits.benefit2" },
      { feature: "products.product7.features.feature3", benefit: "products.product7.benefits.benefit3" },
      { feature: "products.product7.features.feature4", benefit: "products.product7.benefits.benefit4" },
      { feature: "products.product7.features.feature5", benefit: "products.product7.benefits.benefit5" },
    ],
    useCases: [
      { useCase: "products.product7.usecases.usecase1" },
      { useCase: "products.product7.usecases.usecase2" },
      { useCase: "products.product7.usecases.usecase3" },
    ],
    faq: [
      { question: "products.product7.faq.questions.question1", answer: "products.product7.faq.answers.answer1" },
    ],
    img: paintImage,
  },
];

export default products;