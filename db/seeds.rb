# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# user = User.create!({email:"hi@gmail.com", password: "1233589"})
user = User.where(email:"christi@yahoo.com").first_or_create do |user| 
    user.update ({password:"12345678"})
end

apartment_attributes = [
    {
        address: "3972 Mount Everest Blvd",
        city: "Walnut Creek",
        state: "CA",
        zip: "94596",
        contact_name: "Christi",
        contact_number: "925-286-6407"
    },
    {
        address: "16 Fraser Dr",
        city: "San Diego",
        state: "CA",
        zip: "92111",
        contact_name: "Loren",
        contact_number: "925-935-8453"
    }
    ]
    
apartment_attributes.each do |attributes| 
    user.apartments.where(address:attributes[:address]).first_or_create do |apartment|
        apartment.update(attributes)
    end
end

unit_attributes = [
    {
        bed: 2,
        bath: 1,
        sf: 900,
        pets: "cats only",
        features: "in unit washer/dryer"
    },
    {
        unit_name: "301",
        bed: 3,
        bath: 2,
        sf: 1500,
        pets: "fish only",
        features: "in unit washer/dryer"
    }
    ]
    
# first_apartment = apartment_attributes.first   - doesn't work b/c we need to pull from the database 
apartment = user.apartments.first

unit_attributes.each do |attributes| 
    apartment.units.where(unit_name:attributes[:unit_name]).first_or_create do |unit|
        unit.update(attributes)
    end
end

