
men = Category.create(name: "Men")
women = Category.create(name: "Women")

Shoe.create(name: "Kaite", brand: "Jimmy Choo",cost: 1095, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dw56893d78/images/original/KAITE120ADO_000074_SIDE.jpg?sw=520&sh=520&sm=fit", category: women)
Shoe.create(name: "Baily 100", brand: "Jimmy Choo" ,cost: 2995, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dwb10e3c50/images/original/BAILY100DYZ_110323_SIDE.jpg?sw=520&sh=520&sm=fit", category: women)
Shoe.create(name: "Biker II", brand: "Jimmy Choo",cost: 995, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dwc71c48f3/images/original/BIKERIISQM_010003_SIDE.jpg?sw=520&sh=520&sm=fit", category: women)
Shoe.create(name: "Hawaii", brand: "Jimmy Choo",cost: 450, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dwf4df012f/images/original/HAWAIIFIER_OO1321_SIDE.jpg?sw=520&sh=520&sm=fit", category: women)
Shoe.create(name: "Love 85", brand: "Jimmy Choo", cost: 2850, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dw12c71627/images/original/LOVE85SJX_111783_SIDE.jpg?sw=520&sh=520&sm=fit", category: women)
Shoe.create(name: "Mavin 85", brand: "Jimmy Choo" ,cost: 1195, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dw6a887fcc/images/original/MAVIN85GGZ_0C7981_SIDE.jpg?sw=520&sh=520&sm=fit", category: women)
# Shoe.create(name: , brand: ,cost: , image: , category: )

Shoe.create(name: "Thame", brand: "Jimmy Choo", cost: 795, image:"https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dw34991d08/images/original/THAMEVMD_000074_SIDE.jpg?sw=520&sh=520&sm=fit", category: men)
Shoe.create(name: "Voyager II/M", brand: "Jimmy Choo", cost: 1595, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dw78e72fd2/images/original/VOYAGERIIMIII_000074_SIDE.jpg?sw=520&sh=520&sm=fit", category: men)
Shoe.create(name: "Grove", brand: "Jimmy Choo", cost: 595, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dwb2bb1046/images/original/GROVEAFI_010003_SIDE.jpg?sw=520&sh=520&sm=fit", category: men)
Shoe.create(name: "Sawyer", brand: "Jimmy Choo", cost: 950, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dw98e94bfb/images/original/SAWYERSVV_026933_SIDE.jpg?sw=520&sh=520&sm=fit", category: men)
Shoe.create(name: "Odin", brand: "Jimmy Choo", cost: 1095, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dw024996d3/images/original/ODINSIV_0C8042_SIDE.jpg?sw=520&sh=520&sm=fit", category: men)
# Shoe.create(name:, brand: "Jimmy Choo", cost:, image:, category: )
# Shoe.create(name:, brand: "Jimmy Choo", cost:, image:, category: )

User.create(username: 'gaida', password: 'pass')