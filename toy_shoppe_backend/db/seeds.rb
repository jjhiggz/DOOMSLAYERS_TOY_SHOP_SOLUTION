Toy.destroy_all
Sound.destroy_all

squeak = Sound.create({
    name: "Squeak",
    attentionScore: 10
})

crunch = Sound.create({
    name: "Crunch",
    attentionScore: 5
})

silent = Sound.create({
    name: "silent",
    attentionScore: 3
})

blue_monster_toy = Toy.create({
    name: "Monster Toy",
    color: "Blue",
    price: 10.00,
    sound: squeak,
})

chicken_toy = Toy.create({
    name: "Monster Toy",
    color: "Blue",
    price: 9.00,
    sound: crunch,
})

tubular_squaky = Toy.create({
    name: "Totally Tubular",
    color: "Blue",
    price: 4.00,
    sound: squeak,
})