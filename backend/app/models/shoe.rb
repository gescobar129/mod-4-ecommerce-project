class Shoe < ApplicationRecord
    has_many :joiners
    has_many :carts, through: :joiners
    belongs_to :category
end
