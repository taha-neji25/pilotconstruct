const productsData = [
    {
      id: 1,
      name: "Dao",
      title: "Dessin assisté par ordinateur (DAO)",
      category: "A",
      description: "Conception assistée par ordinateur et dessin assisté par ordinateur",
      img: "https://via.placeholder.com/150",
      tagline: "Precision-built solutions for your industrial needs.",
      overview:
        "DAO (Design and Drafting) is a suite of powerful software tools like Tekla, SolidWorks, and AutoCAD designed for creating precise, detailed 2D and 3D models for engineering, construction, and manufacturing projects. These tools help streamline design workflows, improve accuracy, and enhance collaboration across teams.",
      features: [
        { feature: "Quick turnaround times", benefit: "Meet tight deadlines without sacrificing quality." },
        { feature: "2D and 3D Design Capabilities", benefit: "Enables detailed drafting and complex 3D modeling for precise and professional designs." },
        { feature: "Parametric Modeling (SolidWorks)", benefit: "Easily create and update designs by adjusting parameters, saving time on iterative changes." },
        { feature: "Structural Modeling and Analysis (Tekla)", benefit: "Streamlines the design and fabrication of structural components, ensuring designs meet safety and performance standards." },
        { feature: "DWG Compatibility (AutoCAD)", benefit: "Seamlessly share and collaborate on designs with other professionals using industry-standard file formats." },
      ],
      useCases: [
        {useCase:"Structural Engineering (Tekla): Create detailed 3D models for structural steel, concrete, and timber components used in buildings, bridges, and industrial structures."},
        {useCase:"Mechanical Design (SolidWorks): Design intricate mechanical parts and assemblies for machinery, robotics, automotive components, and consumer products."},
        {useCase:"Architectural Drafting (AutoCAD): Produce high-quality 2D blueprints and 3D architectural visualizations for residential, commercial, and industrial buildings."},
    ],
      faq: [
        { question: "How long does it take to complete a project?", answer: "Most projects are completed within 2-4 weeks, depending on complexity." },
      ],
     },
    {
      id: 2,
      name: "Construction Modulaire",
      title: "Construction Modulaire",
      category: "A",
      description: "Construction de bâtiments préfabriqués",
      img: "https://via.placeholder.com/150",
      tagline: "High-precision parts for every industry.",
      overview:
        "Our modular construction services streamline the building process, reducing waste and delivering structures in record time.",
      features: [
        { feature: "Rapid prototyping", benefit: "Get your designs into production quickly and efficiently." },
        { feature: "Cost-effective process", benefit: "Lower labor costs and reduced material waste make modular construction a more affordable solution compared to traditional methods." },
        { feature: "Off-site construction", benefit: " Reduces disruption at the site, ensuring faster project delivery while maintaining safety and cleanliness." },
        { feature: "Scalable solutions", benefit: "Easily add or modify modules to accommodate changing needs, providing long-term flexibility." },
        { feature: "Weather-resistant construction", benefit: "Ensures durability and minimizes delays caused by adverse weather conditions during the building process." },
      ],
      useCases:[
        {useCase:"Office Buildings: Modular construction is ideal for creating temporary or permanent office spaces quickly and efficiently. Companies can scale their office size as their workforce grows."},
        {useCase:"Schools and Classrooms: Modular classrooms offer a fast solution to accommodate growing student populations or temporary learning spaces during renovations."},
        {useCase:"Retail Spaces: Create modular pop-up shops, kiosks, or standalone retail units for flexible and cost-effective business solutions."},
        {useCase:"Event Structures: Use modular units for event spaces, exhibition booths, or temporary pavilions, offering a high-quality and reusable solution."},
    ],
      pricing: "Custom quotes based on design complexity. Contact us for details!",
      faq: [
        { question: "Are modular buildings customizable?", answer: "Yes, we tailor designs to fit your needs." },
        { question: "What materials do you work with?", answer: "We handle metals, plastics, composites, and more." },
      ],
     },
     {
       id: 3,
       name: "Structure Metallique",
       title: "Structure métallique",
       category: "A",
       description: "Fabrication de structures métalliques",
       tagline: "Keeping your operations running smoothly.",
       overview:
         "Our industrial maintenance services ensure your equipment stays operational, minimizing downtime and maximizing efficiency.",
       features: [
         { feature: "Proactive maintenance programs", benefit: "Avoid unexpected breakdowns and costly repairs." },
         { feature: "24/7 emergency support", benefit: "Get help when you need it most." },
       ],
       useCases:[
         {useCase:"Office Buildings: Modular construction is ideal for creating temporary or permanent office spaces quickly and efficiently. Companies can scale their office size as their workforce grows."},
         {useCase:"Schools and Classrooms: Modular classrooms offer a fast solution to accommodate growing student populations or temporary learning spaces during renovations."},
         {useCase:"Retail Spaces: Create modular pop-up shops, kiosks, or standalone retail units for flexible and cost-effective business solutions."},
         {useCase:"Event Structures: Use modular units for event spaces, exhibition booths, or temporary pavilions, offering a high-quality and reusable solution."},
     ],
       faq: [
         { question: "Do you offer onsite support?", answer: "Yes, our technicians can visit your facility." },
       ],
       img: "https://via.placeholder.com/150",    },
    {
      id: 4,
      name: "Maintenance",
      title: "Maintenance",
      category: "B",
      description: "Maintenance de bâtiments et structures",
      tagline: "Ensuring longevity and safety for your buildings and structures.",
      overview:
        "Our Maintenance de bâtiments et structures service provides proactive and reactive solutions to preserve the integrity, functionality, and safety of your infrastructure. Designed for industrial, commercial, and residential properties, our maintenance programs minimize downtime, reduce costs, and extend the lifespan of your assets.",
      features: [
        { feature: "Proactive Maintenance Programs", benefit: "Prevent unexpected breakdowns and costly repairs by addressing potential issues before they escalate." },
        { feature: "On-site Inspections", benefit: "Identify structural weaknesses and safety hazards with detailed assessments tailored to your specific property needs." },
        { feature: "Emergency Repair Services", benefit: "24/7 support ensures critical issues are resolved quickly, minimizing disruption to your operations." },
        { feature: "Structural Reinforcement and Upgrades", benefit: "Enhance the durability and performance of your building to meet modern safety and efficiency standards." },
      ],
      useCases:[
        {useCase:"Industrial Facilities: Regular maintenance ensures manufacturing plants, warehouses, and utilities run smoothly without interruptions."},
        {useCase:"Commercial Buildings: Preserve the appearance and functionality of office complexes, retail spaces, and hospitality venues with reliable upkeep."},
        {useCase:"Educational Institutions: Keep schools, universities, and training centers in top condition for students and staff."},
        {useCase:"Utility Infrastructure: Maintain critical systems like water tanks to ensure continuous operation and compliance with regulations."},
    ],
      faq: [
        { question: "How often should buildings undergo maintenance checks?", answer: "It depends on the building's use and condition. Generally, annual inspections are recommended for residential and commercial properties, while industrial facilities may require more frequent checks." },
        { question: "What industries do you serve with your maintenance services?", answer: "We serve a wide range of industries, including manufacturing, education, hospitality, retail, healthcare, and more." },
      ],
      img: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Menuiserie metallique",
      title: "Menuiserie métallique et ferronnerie",
      category: "A",
      description: "Fabrication de portes, fenêtres, grilles, portails, etc.",
      tagline: "Crafting durable and aesthetic metalworks tailored to your needs.",
      overview:
        "Our Menuiserie Métallique et Ferronnerie service specializes in designing, manufacturing, and installing custom metalworks, including doors, windows, grilles, railings, gates, and decorative elements. Combining durability, functionality, and aesthetic appeal, we deliver metal solutions that enhance both residential and commercial spaces.",
      features: [
        { feature: "Custom Metal Fabrication", benefit: "Get tailored designs that fit your exact specifications for both functional and decorative purposes." },
        { feature: "High-Quality Materials", benefit: "Enjoy long-lasting, corrosion-resistant metalworks that can withstand harsh weather conditions." },
        { feature: "Modern and Traditional Designs", benefit: "Choose from a variety of styles to suit your architectural preferences, whether classic or contemporary." },
        { feature: "Precision Craftsmanship", benefit: "Ensure flawless finishes and exact measurements for seamless integration with your property." },
        { feature: "Wide Range of Products", benefit: "Access a comprehensive selection of metalworks, including fences, stair railings, and decorative panels." },
      ],
      useCases:[
        {useCase:"Residential Spaces: Install custom gates, doors, and window grilles to enhance security and elevate the aesthetic of homes."},
        {useCase:"Commercial Properties: Provide durable and stylish railings, staircases, and entryways for offices, hotels, and retail stores."},
        {useCase:"Public Infrastructure: Create strong and visually appealing fencing, handrails, and partitions for public spaces like parks and government buildings."},
        {useCase:"Decorative Applications: Add artistic metalwork to gardens, patios, or interiors to give spaces a unique, sophisticated look."},
    ],
      faq: [
        { question: "Can you replicate existing designs for renovations?", answer: " Yes, we can recreate or restore metalworks to match existing designs for renovations or historical restorations." },
        { question: "Do you offer both standard and custom designs?", answer: "  Absolutely. We provide a catalog of standard designs and also offer fully customized solutions based on your specifications." },
      ],
      img: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Construction fabrication serie",
      title: "Construction fabrication série",
      category: "B",
      description: "Construction et fabrication en série",
      tagline: "High-volume manufacturing with precision and efficiency.",
      overview:
        "Our Construction Fabrication Série service offers scalable and efficient solutions for producing standardized components and structures in large quantities. With a focus on quality, we meet the demands of industries requiring repeatable, consistent, and cost-effective fabrication processes.",
      features: [
        { feature: "High-Volume Production", benefit: "Manufacture large quantities of components quickly to meet tight deadlines and large-scale project requirements." },
        { feature: "Cost-Effective Solutions", benefit: "Benefit from economies of scale to reduce overall production costs without sacrificing quality." },
        { feature: "Material Versatility", benefit: "Work with a wide range of materials, including steel, aluminum, and composite materials, for diverse applications." },
      ],
      useCases:[
        {useCase:"Industrial Manufacturing: Mass-produce parts and components for machinery, tools, and equipment with consistent quality."},
        {useCase:"Construction Projects: Create prefabricated building components like beams, panels, and frames for large-scale developments."},
    ],
      faq: [
        { question: "Can I request customizations for large-scale orders?", answer: "Absolutely. While we specialize in standardized production, we can adapt designs to meet specific project requirements." },
      ],
      img: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Decoupage Netoiyage",
      title: "Décapage et nettoyage",
      category: "C",
      description: "Décapage et nettoyage de surfaces",
      tagline: "Keeping your operations running smoothly.",
      overview:
        "Our industrial maintenance services ensure your equipment stays operational, minimizing downtime and maximizing efficiency.",
      features: [
        { feature: "Proactive maintenance programs", benefit: "Avoid unexpected breakdowns and costly repairs." },
        { feature: "24/7 emergency support", benefit: "Get help when you need it most." },
      ],
      useCases:[
        {useCase:"Office Buildings: Modular construction is ideal for creating temporary or permanent office spaces quickly and efficiently. Companies can scale their office size as their workforce grows."},
        {useCase:"Schools and Classrooms: Modular classrooms offer a fast solution to accommodate growing student populations or temporary learning spaces during renovations."},
        {useCase:"Retail Spaces: Create modular pop-up shops, kiosks, or standalone retail units for flexible and cost-effective business solutions."},
        {useCase:"Event Structures: Use modular units for event spaces, exhibition booths, or temporary pavilions, offering a high-quality and reusable solution."},
    ],
      faq: [
        { question: "Do you offer onsite support?", answer: "Yes, our technicians can visit your facility." },
      ],
      img: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Traitement chimique",
      title: "Traitement chimique",
      category: "C",
      description: "Traitement chimique de surfaces",
      tagline: "Enhancing surface durability and performance through advanced chemical treatments.",
      overview:
        "Our Traitement Chimique service offers professional chemical treatments designed to improve the strength, durability, and aesthetic of surfaces. From corrosion resistance to enhanced paint adhesion, we provide tailored solutions to meet your industrial, commercial, and architectural needs.",
      features: [
        { feature: "Anti-Corrosion Treatment", benefit: "Protect metal surfaces from rust and corrosion, extending the lifespan of your materials." },
        { feature: "Improved Paint Adhesion", benefit: "Ensure paints and coatings bond effectively to surfaces for long-lasting results." },
      ],
      useCases: "MIndustrial Machinery: Protect machine parts from wear and tear with anti-corrosion and surface-hardening treatments.",
      
      pricing: "Maintenance plans starting at $2,000/year. Custom pricing available.",
      faq: [
        { question: "Do you offer onsite support?", answer: "Yes, our technicians can visit your facility." },
      ],
      img: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Traitement de peinture",
      title: "Traitement de peinture",
      category: "C",
      description: "Traitement de peinture de surfaces",
      tagline: "Keeping your operations running smoothly.",
      overview:
        "Our industrial maintenance services ensure your equipment stays operational, minimizing downtime and maximizing efficiency.",
      features: [
        { feature: "Proactive maintenance programs", benefit: "Avoid unexpected breakdowns and costly repairs." },
        { feature: "24/7 emergency support", benefit: "Get help when you need it most." },
      ],
      useCases:[
        {useCase:"Office Buildings: Modular construction is ideal for creating temporary or permanent office spaces quickly and efficiently. Companies can scale their office size as their workforce grows."},
        {useCase:"Schools and Classrooms: Modular classrooms offer a fast solution to accommodate growing student populations or temporary learning spaces during renovations."},
        {useCase:"Retail Spaces: Create modular pop-up shops, kiosks, or standalone retail units for flexible and cost-effective business solutions."},
        {useCase:"Event Structures: Use modular units for event spaces, exhibition booths, or temporary pavilions, offering a high-quality and reusable solution."},
    ],
      faq: [
        { question: "Do you offer onsite support?", answer: "Yes, our technicians can visit your facility." },
      ],
      img: "https://via.placeholder.com/150",    },
    ];
      export default productsData;