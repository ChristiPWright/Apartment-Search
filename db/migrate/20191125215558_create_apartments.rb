class CreateApartments < ActiveRecord::Migration[5.0]
  def change
    create_table :apartments do |t|
      t.integer :user_id
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :bldg_name
      t.string :bldg_ammenities
      t.integer :rental_range
      t.string :contact_name
      t.integer :contact_number
      t.string :contact_hours

      t.timestamps
    end
  end
end
