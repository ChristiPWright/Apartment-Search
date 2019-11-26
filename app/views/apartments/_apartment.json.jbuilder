json.extract! apartment, :id, :user_id, :address, :city, :state, :zip, :bldg_name, :bldg_ammenities, :rental_range, :contact_name, :contact_number, :contact_hours, :created_at, :updated_at
json.url apartment_url(apartment, format: :json)
