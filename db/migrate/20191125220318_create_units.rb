class CreateUnits < ActiveRecord::Migration[5.0]
  def change
    create_table :units do |t|
      t.integer :apartment_id
      t.integer :bed
      t.integer :bath
      t.integer :sf
      t.integer :rent
      t.string :pets
      t.string :features

      t.timestamps
    end
  end
end
