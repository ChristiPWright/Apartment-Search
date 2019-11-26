# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

apartment_attributes = [
    {
        user_id: 1,
        address: "3972 Mount Everest Blvd",
        city: "Walnut Creek",
        state: "CA",
        zip: 94596,
        contact_name: "Christi",
        contact_number: 9252866407
    },
    {
        user_id: 1,
        address: "16 Fraser Dr",
        city: "San Diego",
        state: "CA",
        zip: 92111,
        contact_name: "Loren",
        contact_number: 9259358453
    }
    ]
    
    apartment_attributes.each do |attributes| Apartment.create(attributes)
end

unit_attributes = [
    {
        apartment_id: 1,
        bed: 2,
        bath: 1,
        sf: 900,
        pets: "cats only",
        features: "in unit washer/dryer"
    },
    {
        apartment_id: 2,
        bed: 3,
        bath: 2,
        sf: 1500,
        pets: "fish only",
        features: "in unit washer/dryer"
    }
    ]
    
    unit_attributes.each do |attributes| Unit.create(attributes)
end

